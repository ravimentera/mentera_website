"use client";

import { ShinyGradientText } from "@/components/atoms/ShinyGradientText/ShinyGradientText";
import { EmailCaptureInput } from "@/components/molecules/EmailCaptureInput/EmailCaptureInput";
import { FloatingCard } from "@/components/molecules/FloatingCard/FloatingCard";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import UpsellOpportunities from "@/assets/icons/Upsell Opportunities.svg";
import StaffManagement from "@/assets/icons/Staff Management.svg";
import SocialMediaManagement from "@/assets/icons/Social Media Management.svg";
import QuickResponse from "@/assets/icons/Quick Respon.svg";
import PromotionalStrat from "@/assets/icons/Promotional Strategies.svg";
import PreCharting from "@/assets/icons/Pre-charting.svg";
import PostPatientCare from "@/assets/icons/Post patient care check in and follow up.svg";
import PayrollManagement from "@/assets/icons/Payroll Management.svg";
import NewPatientScheduling from "@/assets/icons/New Patient Scheduling.svg";
import LeadManagement from "@/assets/icons/Lead Management.svg";
import KpiReporting from "@/assets/icons/KPIs and Reporting.svg";
import AdminTask from "@/assets/icons/Administrative Tasks.svg";
import Image from "next/image";

const PlaceholderSocialIcons = () => (
  <div className="flex space-x-2 mt-1 bg-gray-200">
    <img src="/social/facebook.png" alt="facebook icon" />
    <img src="/social/instagram.png" alt="instagram icon" />
    <img src="/social/linkedin.png" alt="linkedin icon" />
    <img src="/social/twitter.png" alt="twitter icon" />
    <img src="/social/youtube.png" alt="youtube icon" />
  </div>
);
// End Placeholder Icons

// Card Data
const cardData = [
  // {
  //   id: "payroll",
  //   icon: <Image src={PayrollManagement} alt="Payroll management icon" />,
  //   title: "Payroll Management",
  //   positionClasses: "top-[10%] left-[10%] w-48",
  //   initialTop: "15%",
  //   initialLeft: "5%",
  //   animationDelay: 0.1,
  //   yOffset: -6,
  // },
  {
    id: "scheduling",
    icon: <Image src={NewPatientScheduling} alt="New Schedulin icon" />,
    title: "New Patient Scheduling",
    positionClasses: "absolute top-[12%] left-[20%] xs:top-[10%] xs:left-[1%] w-52 bg-white/90",
    initialTop: "10%",
    initialLeft: "30%",
    animationDelay: 0.5,
    yOffset: 8,
  },
  {
    id: "promo",
    icon: <Image src={PromotionalStrat} alt="Promotional Strategies icon" />,
    title: "Promotional Strategies",
    subtitle: "Offers and Gift Cards",
    positionClasses: "top-[30%] left-[5%] w-60 bg-white/80 hidden md:flex",
    initialTop: "30%",
    initialLeft: "8%",
    animationDelay: 0.3,
    yOffset: -5,
    children: (
      <div className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded inline-block mt-1">
        Get Up to 25% Discount{" "}
        <span className="font-bold text-blue-600 ml-1">GET25FIRST</span>
      </div>
    ),
  },
  {
    id: "inquiries",
    icon: <Image src={QuickResponse} alt="Quick Response icon" />,
    title: "Quick Respond to <br></br> Patient Inquiries",
    subtitle: "Live Chat, On Call",
    positionClasses: "top-[48%] left-[12%] xs:top-[52%] xs:left-[2%] w-64 pr-8 bg-white/80",
    initialTop: "50%",
    initialLeft: "10%",
    animationDelay: 0.7,
    yOffset: 7,
  },
  {
    id: "lead",
    icon: <Image src={LeadManagement} alt="Lead management icon" />,
    title: "Lead Management",
    positionClasses: "top-[65%] left-[0%] w-60 bg-white/70 hidden md:flex",
    initialTop: "75%",
    initialLeft: "3%",
    animationDelay: 0.2,
    yOffset: -6,
  },
  // {
  //   id: "payment",
  //   icon: <Image src={PayrollManagement} alt="Payroll management icon" />,
  //   title: "Payment Collection",
  //   positionClasses: "top-[50%] left-[5%] w-48",
  //   // bottom-[10%] => initialTop = 90%
  //   initialTop: "90%",
  //   initialLeft: "5%",
  //   animationDelay: 0.6,
  //   yOffset: 5,
  // },
  {
    id: "staff",
    icon: <Image src={PayrollManagement} alt="Payroll management icon" />,
    title: "Staff Management",
    positionClasses: "top-[72%] left-[20%] xs:top-[80%] xs:left-[5%] w-60 bg-white/70",
    initialTop: "80%",
    initialLeft: "25%",
    animationDelay: 0.4,
    yOffset: -8,
  },
  //  Right Side Cards
  {
    id: "kpi",
    icon: <Image src={KpiReporting} alt="Payroll management icon" />,
    title: "KPIs and Reporting",
    positionClasses: "top-[12%] right-[20%] w-48 bg-white/90 hidden md:flex",
    // For right-[20%], we compute left as 80%
    initialTop: "12%",
    initialLeft: "80%",
    animationDelay: 0.2,
    yOffset: 7,
  },
  {
    id: "upsell",
    icon: <Image src={UpsellOpportunities} alt="Payroll management icon" />,
    title: "Upsell Opportunities",
    positionClasses: "top-[25%] right-[8%] xs:top-[22%] xs:right[0%] w-52 bg-white/90",
    initialTop: "25%",
    initialLeft: "95%",
    animationDelay: 0.6,
    yOffset: -5,
  },
  {
    id: "social",
    icon: <Image src={SocialMediaManagement} alt="Payroll management icon" />,
    title: "Social Media <br></br> Management",
    subtitle: "Marketing Campaigns",
    positionClasses: "top-[38%] right-[5%] w-40 bg-white/90 hidden md:flex",
    initialTop: "42%",
    initialLeft: "92%",
    animationDelay: 0.1,
    yOffset: 6,
    children: (
      <div className="bg-gray-200 px-4 py-2 rounded-md">
        <p className="text-xs font-medium text-gray-600 mt-1">
          Multi Channel Management
        </p>
        <PlaceholderSocialIcons />
      </div>
    ),
  },
  // {
  //   id: "precharting",
  //   icon: <Image src={PreCharting} alt="Payroll management icon" />,
  //   title: "Pre-charting",
  //   positionClasses: "top-[66%] right-[0%] w-40 bg-white/90",
  //   // bottom-[35%] => initialTop = 65%
  //   initialTop: "65%",
  //   initialLeft: "97%",
  //   animationDelay: 0.8,
  //   yOffset: -7,
  // },
  {
    id: "admin",
    icon: <Image src={AdminTask} alt="Payroll management icon" />,
    title: "Administrative Tasks",
    subtitle: "Manage, Assign, Track",
    positionClasses: "top-[68%] right-[20%] xs:right-[0%] w-56 bg-neutral-50/60",
    // bottom-[20%] => initialTop = 80%
    initialTop: "80%",
    // right-[15%] => initialLeft = 85%
    initialLeft: "85%",
    animationDelay: 0.3,
    yOffset: 8,
  },
  {
    id: "postcare",
    icon: <Image src={PostPatientCare} alt="Payroll management icon" />,
    title: "Post patient care check in and follow up",
    positionClasses: "top-[80%] right-[-1%] w-64 bg-neutral-50/20 hidden md:flex",
    // bottom-[5%] => initialTop = 95%
    initialTop: "95%",
    // right-[10%] => initialLeft = 90%
    initialLeft: "90%",
    animationDelay: 0.5,
    yOffset: -6,
  },
];
// End Card Data

export const HeroSection = () => {
  // State for controlling animation via scroll:
  // animateState can be "floating" or "collapsed"
  const [animateState, setAnimateState] = useState("floating");
  const scrollThreshold = 50; // Pixels to scroll before collapsing

  // Existing mouse tracking (for background effects)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
  };

  // Update animateState based on window scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setAnimateState("collapsed");
      } else {
        setAnimateState("floating");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check in case the page loads already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]); // Dependency array includes threshold

  // Existing mousemove event for background effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Default floating animation: subtle up-and-down motion (cards retain their CSS positioning)
  const cardAnimation = (delay = 0, yOffset = 5) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: [0, yOffset, 0],
      transition: {
        delay,
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        opacity: { duration: 0.5, delay },
      },
    },
    whileHover: { scale: 1.03, transition: { duration: 0.2 } },
  });

  // Collapse animation: cards move to the circular target (duration 0.8 sec)
  const collapsedAnimation = (delay = 0) => ({
    animate: {
      top: "90%",
      left: "50%",
      x: "-50%",
      y: "220%",
      scale: 0.8,
      opacity: 0,
      transition: { delay, duration: 0.8, ease: "easeInOut" },
    },
  });

  return (
    <section
      className="relative w-full min-h-[110vh] sm:min-h-[120vh] md:min-h-screen bg-transparent pt-24 sm:pt-0"
    >
      {/* Render Floating Cards */}
      {cardData.map((card) => {
        // Choose animation props based on animateState.
        const animationProps =
          animateState === "collapsed"
            ? collapsedAnimation(card.animationDelay)
            : cardAnimation(card.animationDelay, card.yOffset);

        return (
          <FloatingCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            className={`${card.positionClasses}`}
            animationProps={animationProps}
          >
            {card.children}
          </FloatingCard>
        );
      })}

      {/* Hero Content - z-10 ensures it's above the cards */}
      <div className="relative flex flex-col justify-center items-center max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 h-full pt-16 pb-12 sm:pt-32 md:pt-48 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] flex flex-col justify-center items-center"
        >
          <h1 className="heading-h1 text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center flex flex-col gap-11">
            <ShinyGradientText className="inline-block sm:block">
              Patient care that goes
            </ShinyGradientText>
            <ShinyGradientText className="inline-block sm:block">
              beyond the chair.
            </ShinyGradientText>
          </h1>
          <p className="text-body-1 text-text-secondaryprimary text-center">
            Be among the first med spas to experience the future of hyper{" "}
            <br></br>
            personalized patient care.
          </p>
          <div className="space-y-3 sm:space-y-4 w-full px-2 py-4 sm:px-0 flex flex-col items-center justify-center">
            <EmailCaptureInput
              onSubmit={handleEmailSubmit}
              buttonText="Join Beta"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
