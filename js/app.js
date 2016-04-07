$(function () {
  /*burger menu hide*/
  $(".b-menu").on("click", function () {

    $(".navbar").toggleClass("hide");
  });

  /*team slider*/
  var left = $(".left");
  var right = $(".right");
  var photo = $(".photo");
  var slider = $(".team-slider");
  var window = $(".window");
  var photoWidth = photo.width();
  console.log(slider.position().left);

  slider.css({
    width: "3000px",
  });
  var offset = 0;
 var newSlider = slider.clone(true);
 newSlider.css({
   display: "inline-block",
   position: "relative",
 })
 //zawsze musisz klonowac 2 razy wiecej niz wyswietlasz
  
  /*right.on("click", function () {
    console.log(offset)
    if (offset === 800) {
      window.append(newSlider);
    } else {
      offset += photoWidth;
      slider.css({
        "left": -offset + 'px'
      });
    }
  });


  left.on("click", function () {
    if (offset === 0) {
      offset = 800;
      slider.css({
        "left": '-800px'
      });
    } else {
      offset -= photoWidth;
      slider.css({
        "left": -offset + 'px'
      });
    }
  });*/
 
//wracajacy slider
right.on("click", function () {
    if (offset === 800) {
      offset = 0;
      slider.css({
        "left": 0
      });
    } else {
      offset += photoWidth;
      slider.css({
        "left": -offset + 'px'
      });
    }
  });


  left.on("click", function () {
    if (offset === 0) {
      offset = 800;
      slider.css({
        "left": '-800px'
      });
    } else {
      offset -= photoWidth;
      slider.css({
        "left": -offset + 'px'
      });
    }
  });




//filtered portfolio
  
  var allBtn = $(".photo-sections ul li:first-child");
  var webBtn =  $(".photo-sections ul li:nth-child(2)");
  var appsBtn =  $(".photo-sections ul li:nth-child(3)");
  var iconsBtn =   $(".photo-sections ul li:last-child");
  
  webBtn.on("click", function() {
    $(".all").css("display", "none");
    $(".web").css("display", "inline-block");
  });
  appsBtn.on("click", function() {
    $(".all").css("display", "none");
    $(".apps").css("display", "inline-block");
  });
  iconsBtn.on("click", function() {
    $(".all").css("display", "none");
    $(".icons").css("display", "inline-block");
  });
  allBtn.on("click", function() {
    $(".all").css("display", "inline-block");
  })
  
  
  




});