
//faire disparaitre le bakground black

function fadeOut() {
  $(".remove").fadeToggle(500, "swing", function () {
    this.remove();
  });
}

var delay = 6000; //3 seconds
setTimeout(fadeOut, delay);
