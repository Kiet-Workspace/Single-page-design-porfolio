$(document).ready(function(){
    $('.my-carousel').slick({
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 1,
        arrows: false,  
        autoplay: true,
        autoplaySpeed: 2000, 
        mobileFirst: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              // centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              // centerPadding: '40px',
              slidesToShow: 1,
              swipe: true,
            }
          }
        ]
      });
  });

  $(".btn-arrow-prev").click( () => {
    $(".my-carousel").slick("slickPrev");
  });
  $(".btn-arrow-next").click( () => {
    $(".my-carousel").slick("slickNext");
  });
  