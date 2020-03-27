
$(document).ready(function(){
    $('.burger').click(function() {
      $('.nav-bank').toggleClass('navgroup');
      $('.burger .line1').toggleClass('toggleline1');
      $('.burger .line2').toggleClass('toggleline2');
      $('.burger .line3').toggleClass('toggleline3');
      $('body').addClass('bodylength');
    });

    // $('body').click(function() {
    //   $('.nav-bank').removeClass('navgroup');
    // });

     $('.nav-bank li a').click(function() {
      $('.nav-bank').removeClass('navgroup');
      $('.burger .line1').removeClass('toggleline1');
      $('.burger .line2').removeClass('toggleline2');
      $('.burger .line3').removeClass('toggleline3');
      $('body').removeClass('bodylength');
    });

     $('body a').click(function() {
      $('.nav-bank').removeClass('navgroup');
      $('.burger .line1').removeClass('toggleline1');
      $('.burger .line2').removeClass('toggleline2');
      $('.burger .line3').removeClass('toggleline3');
      $('body').removeClass('bodylength');
    });

  });