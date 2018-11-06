$(function () {
   var options =
       {
           srcNode: 'img',             // grid items (class, node)
           margin: '15px',             // margin in pixel, default: 0px
           width: '240px',             // grid item width in pixel, default: 220px
           max_width: '',              // dynamic gird item width if specified, (pixel)
           resizable: true,            // re-layout if window resize
           transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
       };
   $('.grid').gridify(options);
});  

$('.allsliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
});