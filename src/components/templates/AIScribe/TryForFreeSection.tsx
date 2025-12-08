"use client";

import { Button } from "@/components/atoms/Button/Button";
import { HubSpotFormDialog } from "@/components/molecules/HubSpotFormDialog/HubSpotFormDialog";
import { fadeInUp, transitions } from "@/lib/animations";
import { motion } from "framer-motion";
import { useState } from "react";

export const TryForFreeSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative w-full pb-6 sm:p-12">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={transitions.default}
          className="relative overflow-hidden rounded-[2rem] bg-primary p-6 py-24 md:p-16 lg:p-20 text-center"
        >
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-white mb-6">
              Try Mentera's AI scribe for free
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              We know once you try Mentera, you won't want to work without it.
              So give it a go!
            </p>
            <Button
              variant="purple"
              size="md"
              showArrow
              className="rounded-full"
              onClick={() => setIsDialogOpen(true)}
            >
              Get a Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* HubSpot Form Dialog */}
      <HubSpotFormDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  );
};
