function init() {
 window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      mobileShrinkOn = 10,
      mq = window.matchMedia( "(max-width: 65em)" );

    if (mq.matches) {
      if(distanceY > mobileShrinkOn) {
        $('nav img').addClass('small-logo');
        $('nav img').removeClass('logo');

        $('.logo-title').css({'display':'none'});
      }
      
       if(distanceY < mobileShrinkOn) {
        $('nav img').addClass('logo');
        $('nav img').removeClass('small-logo');

        $('.logo-title').css({'display':'block'});
      }
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