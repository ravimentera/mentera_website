"use client";

import { useEffect, useRef } from "react";

interface HubSpotFormProps {
  region?: string;
  portalId?: string;
  formId?: string;
  className?: string;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export const HubSpotForm: React.FC<HubSpotFormProps> = ({
  region = "na2",
  portalId = "244277082",
  formId = "d5d0eebd-bacf-4ab5-b1b9-8211b19435d5",
  className = "",
}) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoadedRef.current) return;

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    script.defer = true;
    script.charset = "utf-8";
    script.type = "text/javascript";

    script.onload = () => {
      if (window.hbspt && formContainerRef.current) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: `#hubspot-form-${formId}`,
        });
      }
    };

    document.body.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      // Cleanup: remove script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [region, portalId, formId]);

  return (
    <div
      ref={formContainerRef}
      id={`hubspot-form-${formId}`}
      className={className}
    />
  );
};
