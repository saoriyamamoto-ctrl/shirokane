$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
        $("nav.globalMenuSp.active").fadeIn();
      } else {
          $('.globalMenuSp').removeClass('active');
         $("nav.globalMenuSp.active").fadeOut();
      }
  });
});
