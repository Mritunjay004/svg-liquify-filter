const controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({}).addTo(controller);

new ScrollMagic.Scene({
  duration: 800,
})
  .setTween("#liquid", {
    attr: {
      scale: 500,
    },
  })
  .addTo(controller);

new ScrollMagic.Scene({
  duration: 300,
})
  .setTween(["#main-img", "#header"], {
    css: {
      opacity: 0,
    },
  })
  .addTo(controller);
