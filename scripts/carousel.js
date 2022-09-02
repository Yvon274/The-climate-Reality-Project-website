const SLIDES2 = $(".slides2 > .slide2");
const DOTS2 = $(".dots > .dot");

$("#next-button2").click(function() {
  // TODO: hide cookie banner
  nextSlide2();
});
$("#previous-button2").click(function() {
  // TODO: hide cookie banner
  prevSlide2();
});
$("#dot21").click(function() {
  // TODO: hide cookie banner
  showSlide2(1)
});
$("#dot22").click(function() {
  // TODO: hide cookie banner
  showSlide2(2)
});
$("#dot23").click(function() {
  // TODO: hide cookie banner
  showSlide2(3)
});
$("#dot24").click(function() {
  // TODO: hide cookie banner
  showSlide2(4)
});
$("#dot25").click(function() {
  // TODO: hide cookie banner
  showSlide2(5)
});
$("#dot26").click(function() {
  // TODO: hide cookie banner
  showSlide2(6)
});
$("#dot27").click(function() {
  // TODO: hide cookie banner
  showSlide2(7)
});
$("#dot28").click(function() {
  // TODO: hide cookie banner
  showSlide2(8)
});
$("#dot29").click(function() {
  // TODO: hide cookie banner
  showSlide2(9)
});
$("#dot30").click(function() {
  // TODO: hide cookie banner
  showSlide2(10)
});




function nextSlide2() {
  let nextNum = SLIDES2.index($(".slide2:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES2.length) {
    nextNum = 1;
  }
  showSlide2(nextNum);
}

function prevSlide2() {
  let prevNum = SLIDES2.index($(".slide2:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES2.length;
  }
  showSlide2(prevNum);
}

function showSlide2(num) {
  let index = num - 1;
  let currentSlide = SLIDES2.eq(index);
  let currentDot = DOTS2.eq(index);

  /* TODO: snippets to hide SLIDES and then show currentSlide */
  SLIDES2.addClass("hidden");
  currentSlide.removeClass("hidden");
}
const SLIDES = $(".slides > .slide");
const DOTS = $(".dots > .dot");


$("#next-button1").click(function() {
  // TODO: hide cookie banner
  nextSlide();
});
$("#previous-button1").click(function() {
  // TODO: hide cookie banner
  prevSlide();
});
$("#dot1").click(function() {
  // TODO: hide cookie banner
  showSlide(1)
});
$("#dot2").click(function() {
  // TODO: hide cookie banner
  showSlide(2)
});
$("#dot3").click(function() {
  // TODO: hide cookie banner
  showSlide(3)
});
$("#dot4").click(function() {
  // TODO: hide cookie banner
  showSlide(4)
});
$("#dot5").click(function() {
  // TODO: hide cookie banner
  showSlide(5)
});
$("#dot6").click(function() {
  // TODO: hide cookie banner
  showSlide(6)
});
$("#dot7").click(function() {
  // TODO: hide cookie banner
  showSlide(7)
});
$("#dot8").click(function() {
  // TODO: hide cookie banner
  showSlide(8)
});
$("#dot9").click(function() {
  // TODO: hide cookie banner
  showSlide(9)
});
$("#dot10").click(function() {
  // TODO: hide cookie banner
  showSlide(10)
});





function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentDot = DOTS.eq(index);

  /* TODO: snippets to hide SLIDES and then show currentSlide */
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
}
