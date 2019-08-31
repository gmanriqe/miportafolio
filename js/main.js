function onReady(){
  // typed
  var typed = new Typed("#typed", {
    // strings: ["bienvenido a mi Portafolio", "mi nombre es Jesús Alexander.", "soy desarrollador Web."],
    strings: ["Coder.", "Frontend Jr.", "Ing. Informático."],
    startDelay: 1000,
    typeSpeed: 100,
    backDelay: 900,
    loop: true
  });

  //smoth scroll
  var scroll = new SmoothScroll('a[href*="#"]');

  // scroll menu
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    var containerHeader = $("#header").outerHeight();

    if (scroll > containerHeader - 80) {
      $("#menuResponsive").addClass("menu__scroll");
    } else {
      $("#menuResponsive").removeClass("menu__scroll");
    }
  });

  // scroll menu
  $("#menuResponsive").on("click", function() {
    var image = $("#menuResponsive").prev();
    if ($("#menuLeft").hasClass("menu__left--show")) {
      image.css("opacity", "0");
      console.log(image);
    } else {
      image.css("opacity", "1");
    }
  });

  // scroll menu
  $("#menuResponsive").on("click", function() {
    $("#menuLeft").toggleClass("menu__left--show");
    $(this)
      .children()
      .first()
      .toggle();
    $(this)
      .children()
      .first()
      .next()
      .toggle();
  });

  // acordeon
  $(".acordeon-header").click(function() {
    $(".acordeon-body").hide();
    $(".acordeon-header").removeClass("active");
    $(this)
      .toggleClass("active")
      .next()
      .slideToggle();
  });

  //owl carousel
  $(window).on("load resize", function() {
    if ($(window).width() <= 769) {
      $("#experience-carousel > div").removeClass("col-md-4 col-sm-6");
      // $("#experience-carousel")
      //   .children()
      //   .addClass("margin__slider");
      $("#experience-carousel").addClass("owl-carousel");
      $("#experience-carousel").owlCarousel({
        stagePadding: 20,
        loop: false,
        responsiveClass: true,
        margin: 15,
        // autoWidth:true,
        responsive: {
          0: {
            items: 1
          }
        }
      });
    } else {
      var containerOwl = $("#experience-carousel");
      containerOwl.owlCarousel();
      containerOwl.owlCarousel("destroy");
      containerOwl.removeClass("owl-carousel");
      // containerOwl.children().removeClass("margin__slider");
      containerOwl.children().addClass("col-md-4 col-sm-6");
    }
  });

  // loading
  $(window).on("load", function() {
    debugger;
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader")
      .delay(450)
      .fadeOut("slow"); // will fade out the white DIV that covers the website.
  });

  // popup
  $("#popup").on("click", function() {
    $("#popUpContent").css("display", "flex");
  });

  $("#close").on("click", function() {
    // debugger;
    $(this)
      .parents(".popup__hackatrix")
      .css("display", "none");
  });
}

$(document).ready(onReady);
