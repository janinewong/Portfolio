function init() {
 window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      mobileShrinkOn = 10,
      mq = window.matchMedia( "(max-width: 65em)" );

    if (mq.matches) {

    } 

    else {
      if(distanceY > shrinkOn) {
        $('nav img').addClass('small-logo');
        $('nav img').removeClass('logo');
        $('.small-logo').css({'padding-bottom':'1em'});

        $('.logo-title').css({'display':'none'});
      }

      if(distanceY < shrinkOn) {
        $('nav img').addClass('logo');
        $('nav img').removeClass('small-logo');
        $('.logo').css({'padding-bottom':'1.5em'});

        $('.logo-title').css({'display':'block'});
      }
    }
  });
}

window.onload = init();