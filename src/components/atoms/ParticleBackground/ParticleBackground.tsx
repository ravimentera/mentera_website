import dynamic from "next/dynamic";

const CustomParticleBackground = dynamic(
  () =>
    import("@/components/atoms/CustomParticleBackground/CustomParticleBackground").then(
      (mod) => ({ default: mod.CustomParticleBackground })
    ),
  { ssr: false }
);

export const ParticleBackground = () => {
  return <CustomParticleBackground />;
};