import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { loadSlim } from "tsparticles-slim";

function MaskParticles({ imgUrl = "/images/Shivam.svg" }) {
  const particleOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        blink: false,
        color: "#ffffff",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: 1,
      },
      number: {
        limit: 0,
        value: 200,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
        value: {
          min: 0.05,
          max: 0.4,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.75)",
        lineWidth: 1,
      },
      enable: true,
      move: {
        radius: 10,
      },
      inline: {
        arrangement: "equidistant",
      },
      scale: 1,
      type: "inline",
      url: imgUrl,
    },
  };
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
    await loadSlim(engine);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticlesd"
      loaded={particlesLoaded}
      options={particleOptions}
      init={particlesInit}
    />
  );
}

export default MaskParticles;
