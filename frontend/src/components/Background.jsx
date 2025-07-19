import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Background() {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 400 },
          color: { value: "#d6b2ff" },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.4,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 2,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outMode: "out",
          },
          shadow: {
            enable: true,
            color: "#c084fc",
            blur: 8,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 60, // ⬅️ smaller = less dramatic push
              duration: 0.3, // ⬅️ shorter = particles settle faster
              speed: 0.5, // ⬅️ slower push speed
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
