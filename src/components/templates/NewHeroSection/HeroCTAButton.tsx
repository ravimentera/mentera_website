"use client";

import { Button } from "@/components/atoms/Button/Button";
import Link from "next/link";

export const HeroCTAButton = () => {
  return (
    <Link href="/demo">
      <Button
        variant="purple"
        size="md"
        showArrow
        className="rounded-full font-bold"
        onClick={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "cta_click",
            cta_text: "Get a Demo",
            cta_location: "hero",
          });
        }}
      >
        Get a Demo
      </Button>
    </Link>
  );
};
