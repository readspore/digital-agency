const HEADER_HEIGHT = document.querySelector('#top-header-real').clientHeight;

function initNotrealHeaderHeight(){
  document.querySelector('#not-real-header')
    .style.height = HEADER_HEIGHT+'px';
}

function headerFixed(){
  if($(this).scrollTop() != 0) {
    $('#top-header-real').addClass('top-header__fixed');
  } else {
    $('#top-header-real').removeClass('top-header__fixed');
  }
}

function initSmothScroll(){
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top-HEADER_HEIGHT+1+"px"});
    return false;
  });
}

function activeHeaderLink(){
  var position = $(document).scrollTop(); 
  var lastCoinsedence;
  $('[data-page]').each(function(i, elem) {
    if($(this).position().top <= (position + HEADER_HEIGHT))
      lastCoinsedence = $(elem).attr('data-page');
  });
  $('#top-header-real a').each((i, elem)=>{
    if( $(elem).attr('href').substr(1) == lastCoinsedence){
      $('#header-nav-menu .top-header__link-active').removeClass('top-header__link-active');
      $('#header-nav-menu a[href="#'+lastCoinsedence+'"]').addClass('top-header__link-active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function(){
  $(window).scroll(function() {
    headerFixed();
    activeHeaderLink();
  });
  initSmothScroll();
});

initNotrealHeaderHeight();