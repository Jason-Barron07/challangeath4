// $(document).ready(function () {
//     $(".arrow").on("click", function () {
//       var currentImg = $(".slidein img.active");
//       var nextImg = currentImg.next();
//       if (nextImg.length === 0) {
//         nextImg = $(".slidein img:first");
//       }
//       currentImg.removeClass("active").css("z-index", -10);
//       nextImg.addClass("active").css("z-index", 10);
//     });
//     $(".prev").on("click", function () {
//       var currentImg = $(".slidein img.active");
//       var prevImg = currentImg.prev();
//       if (prevImg.length === 0) {
//         prevImg = $(".slidein img:last");
//       }
//       currentImg.removeClass("active").css("z-index", -10);
//       prevImg.addClass("active").css("z-index", 10);
//     });
//     $(".next").on("click", function () {
//       var currentSVG = $(".sirc .activeSVG");
//       var nextSVG = currentSVG.next();
//       if (nextSVG.length === 0) {
//         nextSVG = $(".sirc img:first");
//       }
//       currentSVG.removeClass("activeSVG");
//       nextSVG.addClass("activeSVG");
//     });
//   });

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
