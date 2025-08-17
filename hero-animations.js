document.addEventListener("DOMContentLoaded", () => {
  // Animar el título (entrada)
  anime({
    targets: ".hero h1",
    opacity: [0, 1],
    translateY: [50, 0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 300
  });

  // Animar subtítulo
  anime({
    targets: ".hero-subtitle",
    opacity: [0, 1],
    translateY: [30, 0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 600
  });

  // Animar "One Page"
  anime({
    targets: ".hero-subtitle .highlight",
    scale: [
      { value: 1.2, duration: 500, easing: "easeOutElastic(1, .8)" },
      { value: 1, duration: 500, easing: "easeOutElastic(1, .8)" }
    ],
    color: [
      { value: "#c2b8ff", duration: 800, easing: "easeInOutSine" },
      { value: "#f4c6d9", duration: 800, easing: "easeInOutSine" },
      { value: "#c2b8ff", duration: 800, easing: "easeInOutSine" }
    ],
    delay: 1500,
    loop: false 
  });

  // Botón con rebote
  anime({
    targets: ".cta-button",
    opacity: [0, 1],
    scale: [0.8, 1],
    easing: "spring(1, 80, 10, 0)", 
    delay: 900
  });

  // Imagen hero flotante
  anime({
    targets: ".hero-image img",
    scale: [0.9, 1],
    rotate: ["-2deg", "0deg"],
    opacity: [0, 1],
    easing: "easeOutElastic(1, .6)",
    duration: 1500,
    delay: 500
  });

  // Burbujas flotantes en loop
  anime({
    targets: ".floating-shape",
    translateY: [
      { value: -20, duration: 2000 },
      { value: 0, duration: 2000 }
    ],
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine"
  });

  // ⭐ Estrella en loop
  anime({
    targets: ".hero-title i",
    rotate: {
      value: 360,
      duration: 4000,
      easing: "linear"
    },
    loop: true
  });
  
});