"use client";

import { HubSpotFormDialog } from "@/components/molecules/HubSpotFormDialog/HubSpotFormDialog";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { C1Component, ThemeProvider } from "@thesysai/genui-sdk";

import { TERA_DEMO_SYSTEM_PROMPT } from "@/data/system-prompt";

interface Message {
  role: "user" | "assistant";
  content: string;
  c1Response?: string;
  source?: "thesys" | "legacy";
}

const quickActions = [
  "Create treatment plan",
  "Summarize medical records",
  "Pre / post visit instructions",
];

const MAX_FREE_MESSAGES = 5;
const STORAGE_KEY = "mentera_chat_messages";
const TOKEN_STORAGE_KEY = "mentera_token_count";

// Custom theme matching website design system
const customTheme = {
  colors: {
    primary: "#4F39F6",        // brand-purple
    secondary: "#6EF1BB",      // secondary green
    accent: "#BD05DD",         // accent purple
    text: "#1D1D1D",           // text-primary
    background: "#FFFFFF",     // white
    muted: "#F6F4FD",          // brand-purple-light
    border: "#E5E7EB",         // gray-200

    // Extended color scales for charts and visualizations
    // Using brand-aligned colors instead of defaults
    purple: ["#F6F4FD", "#E9D5FF", "#D1AAFF", "#B97FFF", "#A155FF", "#8F03A0", "#7A0288", "#650270", "#500158", "#3B0140"],
    blue: ["#EBF5FF", "#DBEAFE", "#BFDBFE", "#93C5FD", "#60A5FA", "#4F9BED", "#2563EB", "#1D4ED8", "#1E40AF", "#200F8A"],
    green: ["#D1FAE5", "#A7F3D0", "#6EE7B7", "#6EF1BB", "#34D399", "#10B981", "#059669", "#047857", "#065F46", "#064E3B"],
    pink: ["#FCE7F3", "#FBCFE8", "#F9A8D4", "#F472B6", "#EC4899", "#DB2777", "#BE185D", "#9D174D", "#831843", "#500724"],
    teal: ["#CCFBF1", "#99F6E4", "#5EEAD4", "#2DD4BF", "#14B8A6", "#0D9488", "#0F766E", "#115E59", "#134E4A", "#042F2E"],

    // Chart color palette using brand colors
    chart: {
      primary: "#4F39F6",      // brand-purple
      secondary: "#6EF1BB",    // secondary green
      tertiary: "#4F9BED",     // brand-blue
      quaternary: "#BD05DD",   // accent purple
      quinary: "#24EDFF",      // cyan
      senary: "#F9A8D4",       // pink
    },
  },
  fonts: {
    body: "var(--font-satoshi), sans-serif",
    heading: "var(--font-poppins), sans-serif",
    monospace: "monospace",
  },
  fontSizes: [
    "0.875rem",  // 14px
    "1rem",      // 16px
    "1.125rem",  // 18px
    "1.25rem",   // 20px
    "1.5rem",    // 24px
    "2rem",      // 32px
    "2.5rem",    // 40px
    "3rem",      // 48px
  ],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.6,
    heading: 1.2,
  },
  radii: {
    none: "0",
    sm: "0.25rem",
    default: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },
};

export const AIChatSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => {
    // Initialize from localStorage for logged-out users
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error("Failed to parse stored messages:", e);
        }
      }
    }
    return [];
  });
  const [isStreaming, setIsStreaming] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [tokenCount, setTokenCount] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(TOKEN_STORAGE_KEY);
      return stored ? parseFloat(stored) : 0;
    }
    return 0;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(TOKEN_STORAGE_KEY, tokenCount.toString());
    }
  }, [tokenCount]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  const scrollToBottom = (force = false) => {
    if ((force || shouldAutoScroll) && scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      const maxScrollTop = scrollHeight - clientHeight;

      scrollContainerRef.current.scrollTo({
        top: maxScrollTop,
        behavior: force ? "auto" : "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Persist messages to localStorage for logged-out users
  useEffect(() => {
    if (!isLoggedIn && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages, isLoggedIn]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      // If user is within 100px of the bottom, enable auto-scroll
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldAutoScroll(isNearBottom);
    }
  };

  // Auto-focus input when chat expands
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      // Small delay to allow expansion animation to complete
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const handleQuickAction = async (action: string) => {
    setInputValue(action);
    setIsExpanded(true);
    // Wait for expansion animation, then send
    setTimeout(() => {
      sendMessage(action);
    }, 300);
  };

  const isLimitReached =
    !isLoggedIn &&
    messages.filter((m) => m.role === "user").length >= MAX_FREE_MESSAGES;

  const sendMessage = async (messageText?: string) => {
    if (isLimitReached) return;
    const textToSend = messageText || inputValue;
    if (!textToSend.trim() || isStreaming) return;

    // Add user message
    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsStreaming(true);
    setShouldAutoScroll(true);
    setTimeout(() => scrollToBottom(true), 50);

    // Token limit check for TheSys
    if (tokenCount < 1000) {
      setTokenCount((prev) => prev + 50);
      try {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "", source: "thesys" }
        ]);

        // Sanitize messages to only include supported fields
        const validMessages = messages.map(({ role, content }) => ({ role, content }));
        const validUserMessage = { role: "user" as const, content: userMessage.content };

        const payload = {
          messages: [
            { role: "system", content: TERA_DEMO_SYSTEM_PROMPT },
            ...validMessages,
            validUserMessage
          ],
          stream: true,
          model: "c1-exp/openai/gpt-4.1/v-20250617"
        };

        const response = await fetch("https://api.thesys.dev/v1/embed/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_THESYS_API_KEY}`,
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("TheSys API Error Details:", errorText);
          throw new Error(`TheSys API error: ${response.status} ${errorText}`);
        }
        if (!response.body) throw new Error("No response body");

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedResponse = "";
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          // Keep the last line in buffer as it might be incomplete
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine) continue;

            if (trimmedLine.startsWith("data: ")) {
              const data = trimmedLine.slice(6);
              if (data === "[DONE]") continue;
              try {
                const json = JSON.parse(data);
                const content = json.choices?.[0]?.delta?.content || "";
                accumulatedResponse += content;

                setMessages((prev) => {
                  const newMessages = [...prev];
                  const lastMsg = newMessages[newMessages.length - 1];
                  if (lastMsg.role === "assistant") {
                    lastMsg.c1Response = accumulatedResponse;
                    lastMsg.content = accumulatedResponse;
                  }
                  return newMessages;
                });
              } catch (e) {
                // ignore partial json or errors
              }
            }
          }
        }

      } catch (error) {
        console.error("TheSys Error", error);
        // Fallback or error handling? For now just log.
      } finally {
        setIsStreaming(false);
      }
      return;
    }

    // Legacy Streaming API Fallback
    try {
      const response = await fetch("/api/chat/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      // Create assistant message placeholder
      setMessages((prev) => [...prev, { role: "assistant", content: "", source: "legacy" }]);

      let accumulatedContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const buffer = decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.slice(6).trim();
            if (dataStr === '{"type":"done"}') continue;

            try {
              const data = JSON.parse(dataStr);
              if (data.type === "content" && data.content) {
                accumulatedContent += data.content;

                // Update the last message (assistant's response)
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    role: "assistant",
                    content: accumulatedContent,
                    source: "legacy"
                  };
                  return newMessages;
                });
              }
            } catch (e) {
              console.error("Error parsing SSE data:", e);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error streaming response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (!isExpanded) {
      setIsExpanded(true);
      // Wait for expansion animation, then send
      setTimeout(() => {
        sendMessage();
      }, 300);
    } else {
      sendMessage();
    }
  };

  const handleStartNewChat = () => {
    setMessages([]);
    setInputValue("");
    setIsExpanded(false);
    // Clear localStorage when starting new chat
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <>
      <section className="relative w-full py-16 sm:py-20 md:py-12 ">
        <div className="max-w-9xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
          {/* Header content omitted for brevity or keep as is */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-medium text-zinc-950 mb-6">
              See how Mentera turns prompts into actions
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto">
              Try real examples and explore how AI fits into your daily work.
            </p>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            layout
            className="relative max-w-4xl mx-auto"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                // Collapsed State
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  {/* Search Input */}
                  <form onSubmit={handleSubmit}>
                    <div className="relative">
                      <textarea
                        ref={inputRef as any}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e as any);
                          }
                        }}
                        placeholder={
                          isLimitReached
                            ? "Usage limit reached. Please log in to continue."
                            : "Ask any question..."
                        }
                        disabled={isLimitReached}
                        className="w-full px-6 py-5 pr-16 min-h-[140px] text-base sm:text-lg rounded-2xl focus:outline-none transition-colors bg-white shadow-lg resize-none gradient-border-input disabled:opacity-70 disabled:cursor-not-allowed"
                      ></textarea>
                      <button
                        type="submit"
                        disabled={isLimitReached || !inputValue.trim()}
                        className="absolute right-4 bottom-4 w-10 h-10 flex items-center justify-center rounded-full hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <img
                          src="/logos/send-button-blue.svg"
                          alt="Microsoft Teams"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    </div>
                  </form>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action)}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-zinc-700 hover:border-brand-purple hover:text-brand-purple transition-all shadow-sm hover:shadow-md"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // Expanded State
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="border-4 border-gray-200 rounded-3xl bg-white shadow-2xl overflow-hidden"
                >
                  {/* Messages Area */}
                  <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="overflow-y-auto p-6 space-y-4 bg-white md:h-[calc(100vh-21rem)] h-[calc(100vh-18rem)]"
                  >

                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                          }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-5 py-3 ${message.role === "user"
                            ? "bg-brand-purple text-white"
                            : "bg-white text-zinc-900"
                            }`}
                        >
                          {message.role === "assistant" ? (
                            message.source === "thesys" && message.c1Response && message.c1Response.trim().length > 10 ? (
                              <ThemeProvider theme={customTheme}>
                                <C1Component
                                  c1Response={message.c1Response}
                                  isStreaming={isStreaming && index === messages.length - 1}
                                />
                              </ThemeProvider>
                            ) : message.content ? (
                              <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-headings:mb-2 prose-ul:list-disc prose-ul:ml-4">
                                <ReactMarkdown>{message.content}</ReactMarkdown>
                              </div>
                            ) : null
                          ) : (
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                              {message.content}
                            </p>
                          )}
                        </div>

                      </div>
                    ))}

                    {isStreaming && (
                      <div className="flex justify-start">
                        <div className="bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-brand-purple-light rounded-full animate-bounce" />
                            <div
                              className="w-2 h-2 bg-brand-purple-light rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            />
                            <div
                              className="w-2 h-2 bg-brand-purple-light rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Usage Limit Notice */}
                  {isLimitReached && (
                    <div className="mx-6 mb-4 p-6 bg-usage-limit-gradient rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex flex-col gap-0.5 text-center sm:text-left">
                        <h4 className="text-zinc-950 font-bold text-lg leading-tight text-zinc-950">
                          Free usage limit reached
                        </h4>
                      </div>
                      <div className="flex items-center gap-8">
                        <button
                          onClick={() => setIsDemoDialogOpen(true)}
                          className="px-10 py-3.5 bg-brand-purple-button text-white rounded-full font-bold hover:opacity-90 transition-all shadow-md"
                        >
                          Book a demo
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Input Area */}
                  <div className="px-6 py-4 bg-white ">
                    <form onSubmit={handleSubmit} className="relative">
                      <textarea
                        ref={inputRef as any}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e as any);
                          }
                        }}
                        placeholder={
                          isLimitReached
                            ? "Usage limit reached. Please log in to continue."
                            : "Ask anything..."
                        }
                        disabled={isLimitReached}
                        className="w-full px-5 py-3 pr-14 min-h-[100px] text-base rounded-xl focus:outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed shadow-inner resize-none gradient-border-input"
                      ></textarea>
                      <button
                        type="submit"
                        disabled={
                          isStreaming || !inputValue.trim() || isLimitReached
                        }
                        className="absolute right-4 bottom-4 w-10 h-10 flex items-center justify-center rounded-full hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <img
                          src="/logos/send-button-blue.svg"
                          alt="Microsoft Teams"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    </form>
                    {/* Quick Actions */}
                    <div className="flex flex-wrap gap-3 justify-center pt-2">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickAction(action)}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-zinc-700 hover:border-brand-purple hover:text-brand-purple transition-all shadow-sm hover:shadow-md"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-4 md:flex-row flex-col text-center">
                      <button
                        onClick={handleStartNewChat}
                        className="text-sm text-zinc-600 transition-colors underline font-bold"
                      >
                        Start New Chat
                      </button>
                      <p className="text-sm text-black">
                        Clears the current conversation and lets you begin a new
                        secure draft.
                      </p>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <HubSpotFormDialog
        isOpen={isDemoDialogOpen}
        onClose={() => setIsDemoDialogOpen(false)}
      />
    </>
  );
};
