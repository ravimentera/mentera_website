import { HeroAnimations } from "./HeroAnimations";
import { HeroCTAButton } from "./HeroCTAButton";

export const NewHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-visible sm:overflow-hidden mb-0">
      <div className="max-w-8xl h-full relative z-10 w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-24 pb-0 sm:pb-20 py-20 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center p-0 sm:p-6 max-w-screen h-full ">
          {/* Left Column — server-rendered for instant LCP */}
          <div className="max-w-full lg:max-w-120 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl -mb-1 md:mb-1 leading-tight sm:leading-normal font-bold text-zinc-950">
              <span className="bg-gradient-to-r from-purple-500 to-purple bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                AI Assistant
              </span>{" "}
              for Private Medical Practices
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-[1.3] text-zinc-950 mt-4 sm:mt-5 md:mt-6 mb-6 sm:mb-7 md:mb-8">
              Give your employee an{" "}
              <span className="font-bold">AI Assistant</span> that puts your
              company&apos;s knowledge to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start justify-center sm:justify-start">
              <HeroCTAButton />
            </div>
          </div>

          {/* Right Column — client-rendered animations */}
          <HeroAnimations />
        </div>
      </div>
    </section>
  );
};
