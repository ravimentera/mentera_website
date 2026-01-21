"use client";

import { Button } from "@/components/atoms/Button/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { HubSpotFormDialog } from "@/components/molecules/HubSpotFormDialog/HubSpotFormDialog";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickActions = [
  "Create treatment plan",
  "Summarize medical records",
  "Pre / post visit instructions",
];

export const AIChatSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  const scrollToBottom = (force = false) => {
    if (force || shouldAutoScroll) {
      messagesEndRef.current?.scrollIntoView({
        behavior: force ? "auto" : "smooth",
        block: "end",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      // If user is within 100px of the bottom, enable auto-scroll
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShouldAutoScroll(isNearBottom);
    }
  };

  const handleQuickAction = async (action: string) => {
    setInputValue(action);
    setIsExpanded(true);
    // Wait for expansion animation, then send
    setTimeout(() => {
      sendMessage(action);
    }, 300);
  };

  const isLimitReached = !isLoggedIn && messages.filter((m) => m.role === "user").length >= 2;

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

    try {
      const response = await fetch(
        "http://34.204.48.222:3010/api/chat/stream",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: textToSend,
            conversationHistory: messages,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      // Create assistant message placeholder
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

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
    if (!isExpanded) {
      setIsExpanded(true);
      return;
    }
    sendMessage();
  };

  const handleStartNewChat = () => {
    setMessages([]);
    setInputValue("");
    setIsExpanded(false);
  };

  return (
    <>
      <section className="relative w-full py-16 sm:py-20 md:py-24 ">
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
                        onFocus={() => setIsExpanded(true)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e as any);
                          }
                        }}
                        placeholder={isLimitReached ? "Usage limit reached. Please log in to continue." : "Ask any question..."}
                        disabled={isLimitReached}
                        className="w-full px-6 py-5 pr-16 min-h-[140px] text-base sm:text-lg rounded-2xl focus:outline-none transition-colors bg-white shadow-lg resize-none gradient-border-input disabled:opacity-70 disabled:cursor-not-allowed"
                      ></textarea>
                      <button
                        type="submit"
                        disabled={isLimitReached || !inputValue.trim()}
                        className="absolute right-4 bottom-4 w-10 h-10 flex items-center justify-center rounded-full hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <img
                          src="/logos/IconButtonSkyBlueArrow.svg"
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
                    className="h-[400px] overflow-y-auto p-6 space-y-4 bg-white"
                  >
                    {messages.length === 0 ? (
                      <div className="h-full flex items-center justify-center">
                        <p className="text-gray-400 text-center">
                          Start a conversation by typing a message or selecting a
                          quick action
                        </p>
                      </div>
                    ) : (
                      messages.map((message, index) => (
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
                              <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-headings:mb-2 prose-ul:list-disc prose-ul:ml-4">
                                <ReactMarkdown>{message.content}</ReactMarkdown>
                              </div>
                            ) : (
                              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                {message.content}
                              </p>
                            )}
                          </div>
                        </div>
                      ))
                    )}
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
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Usage Limit Notice */}
                  {!isLoggedIn &&
                    messages.filter((m) => m.role === "user").length >= 2 && (
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
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e as any);
                          }
                        }}
                        placeholder={isLimitReached ? "Usage limit reached. Please log in to continue." : "Ask anything..."}
                        disabled={isStreaming || isLimitReached}
                        className="w-full px-5 py-3 pr-14 min-h-[100px] text-base rounded-xl focus:outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed shadow-inner resize-none gradient-border-input"
                      ></textarea>
                      <button
                        type="submit"
                        disabled={isStreaming || !inputValue.trim() || isLimitReached}
                        className="absolute right-4 bottom-4 w-10 h-10 flex items-center justify-center rounded-full hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <img
                          src="/logos/IconButtonSkyBlueArrow.svg"
                          alt="Microsoft Teams"
                          className="w-full h-full object-contain"
                        />

                      </button>
                    </form>

                    {/* Expanded Quick Actions */}
                    {/* <div className="flex flex-wrap gap-2 mt-4 justify-start">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action)}
                        className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-zinc-600 hover:border-purple-400 hover:text-purple-600 transition-all shadow-sm"
                      >
                        {action}
                      </button>
                    ))}
                  </div> */}

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
