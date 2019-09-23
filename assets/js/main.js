document.addEventListener('DOMContentLoaded', function(){
  
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#top-header-real').addClass('top-header__fixed');
    } else {
      $('#top-header-real').removeClass('top-header__fixed');
    }
  });

});