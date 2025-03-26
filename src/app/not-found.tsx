"use client";

import { Button } from "@/components/atoms/Button/Button";
import { GradientText } from "@/components/atoms/GradientText";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-[-300px] right-[-300px] w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[-300px] left-[-300px] w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-md text-center px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            <h1 className="text-8xl font-lexend font-bold mb-2">
              <GradientText
                gradientFrom="from-purple-600"
                gradientTo="to-teal-500"
                className="font-bold"
              >
                404
              </GradientText>
            </h1>
          </motion.div>

          <h2 className="text-3xl font-lexend font-medium text-[#111827] mb-4">
            Page Not Found
          </h2>

          <p className="text-[#4B5563] font-outfit text-lg mb-8">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>

          <Link href="/" className="inline-block">
            <Button className="px-10 text-lg" showArrow={true}>
              Return Home
            </Button>
          </Link>

          <div className="pt-12">
            <img
              src="/flogo.svg"
              alt="Mentera Logo"
              className="h-8 mx-auto opacity-70"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
