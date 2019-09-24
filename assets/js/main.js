const HEADER_HEIGHT = document.querySelector('#top-header-real').clientHeight;
window.needTypingEffect = [
                            'typing-pages-header__1',
                            'typing-pages-header__2',
                            'typing-pages-header__3',
                            'typing-pages-header__4'
                          ];

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
    rs_smothScroll($(this).attr("href"));
    $('#header__togele_mobile_active').removeClass('menu_state_open');
    $('#top-header-real').removeClass('header_mobile_active');
    return false;
  });
}

function rs_smothScroll(_href){
  console.log();
  var addHeight = _href == '#features' ? 54 : 0;
  $("html, body").animate({
    scrollTop: $(_href)
                .offset()
                .top - document.querySelector('#top-header-real').clientHeight+addHeight+4+"px"
  });
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
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

function mainScreenScroll(){
  $('#home').bind('mousewheel', function(e) {
      e.preventDefault();
      if ($('.header_mobile_active').length != 0) return;
      if(e.originalEvent.wheelDelta / 120 < 0) {
        $('#header-nav-menu > li:nth-child(2) > a').click();
      } else {
        $('#header-nav-menu > li:nth-child(1) > a').click();
      }
  });

  $('#top-header-real').bind('mousewheel', function(e) {
        e.preventDefault();
  });
}

function initBurgerMenuToggler(){
  $('#header__togele_mobile_active').on('click', function() {
    if ($(document).width() > 1000) return;
    $('#header__togele_mobile_active').toggleClass('menu_state_open');
    $('#top-header-real').toggleClass('header_mobile_active');
    if ($('.header_mobile_active').length != 0) {
      // document.querySelector('#top-header-real .center-wrap').style.display = 'flex !important';
      // $('#home .center-wrap').first()..css('display', 'flex !important');
    }
  });
  $('#top-header-real').on('click', function(){
    $('#header__togele_mobile_active').click();
  });
}

function typingTextEffect(){
  window.needTypingEffect.forEach((itemId,key)=>{
    if (isScrolledIntoView('#'+itemId)) $('#'+itemId).addClass('text-typing');
  });
}

document.addEventListener('DOMContentLoaded', function(){
  $(window).scroll(function(e) {
    headerFixed();
    typingTextEffect();
    activeHeaderLink();
  });
  initSmothScroll();
  typingTextEffect();
  mainScreenScroll();
  headerFixed();
  initBurgerMenuToggler();
});

initNotrealHeaderHeight();