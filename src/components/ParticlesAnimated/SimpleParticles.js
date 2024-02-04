import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function SimpleParticles({ options }) {
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#00D9FF",
        distance: 150,
        enable: true,
        opacity: 1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 10,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: ["image"],
        image: [
          {
            src: "/images/react.svg",
            height: 50,
            width: 50,
          },
          {
            src: "/images/html.svg",
            height: 30,
            width: 30,
          },
          {
            src: "/images/css.svg",
            height: 25,
            width: 25,
          },
          {
            src: "/images/javascript.svg",
            height: 50,
            width: 50,
          },
          {
            src: "/images/visual-studio-code.svg",
            height: 50,
            width: 50,
          },
          {
            src: "/images/nextjs.svg",
            height: 60,
            width: 100,
          },
          {
            src: "/images/azure.svg",
            height: 60,
            width: 60,
          },
        ],
      },
      size: {
        value: { min: 1, max: 30 },
        random: false,
        anim: {
          enable: false,
          speed: 4,
          size_min: 10,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size

    await loadSlim(engine);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options || particlesOptions}
    />
  );
}

export default SimpleParticles;
