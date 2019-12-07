$(function(){

    $('table').wrap('<div class="table_w"></div>');

    $('.menu_top ul li a').each(function(){
        if ($(this).parent().find('ul').length) {
            $(this).append('<b class="arrow"></b>');
        }
    });

    $('.lang .title').on('click', function(){
        $(this).next().slideToggle();
    });

    var slider = document.getElementById('slider_hoding');
    noUiSlider.create(slider, {
        start: [100],
        connect: [true, false],
        tooltips: true,
        step: 1,
        range: {
            min: [0],
            max: [1000]
        }
    });

    var slider2 = document.getElementById('slider_period');
    noUiSlider.create(slider2, {
        start: [100],
        connect: [true, false],
        tooltips: true,
        step: 1,
        range: {
            min: [0],
            max: [1000]
        }
    });
    
    var $html = $(document.documentElement),
        menuBtn = $('.burger'),
        menuWrapper = $('.mobile_menu'),
        menuClose = $('.closeMenu'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
        }
    });

    $('.videoPlay').on('click', function(){
        $(this).toggleClass('play');
    });

    var playButton = document.getElementById("play_button");
    var video = document.getElementById("video");
    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
      if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "Pause";
      } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "Play";
      }
    });

    $('.accor_menu li a').each(function(){
        if ($(this).parent().find('ul').length) {
            $(this).append('<span class="arrow"></span>');
        }
    });
        
    $('.accor_menu li').find('a .arrow').on('click', function(event){
        $(this).parents('li:first').siblings().removeClass('hasSubmenu');
        $(this).parents('li:first').toggleClass('hasSubmenu');
        return false;
    });

    $('.mobile_menu ul li a').each(function(){
        if ($(this).parent().find('ul').length) {
            $(this).append('<span class="arrow"></span>');
        }
    });
        
    $('.mobile_menu ul li').find('a .arrow').on('click', function(event){
        $(this).parents('li:first').siblings().removeClass('hasSubmenu');
        $(this).parents('li:first').toggleClass('hasSubmenu');
        return false;
    });
});
