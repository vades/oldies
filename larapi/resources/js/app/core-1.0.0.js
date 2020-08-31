/* Core js scripts - version 1.0.0
-------------------------------------------------- */

/**
 * Smooth scroll
 */
(function ($) {
  //$('a[href*=\\#]').on('click', function(event){
  $('.page-link').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  });

})(jQuery);

/**
 * Add scroll class to body element
 */

(function ($) {
  var headerOffset = $('#header').offset();
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > headerOffset.top) {
      $('body').addClass('scroll-top');
    } else {
      $('body').removeClass('scroll-top');
    }

  });

})(jQuery);

/**
 * Toggle header nav
 */
(function ($) {
  $('.toggle-nav').on('click', function (e) {
    $(this).attr('aria-expanded', function (_, attr) {
      return attr == 'true' ? false : true;
    });
    $('#header').toggleClass('show-nav');
    //$('#navHeader').slideToggle('slow');
    $('#headerNav').animate({
      width: 'toggle'
    }, 600);
    e.preventDefault();
  });

})(jQuery);



/**
 * Close header nav
 */
(function ($) {
  $('#headerNav_____ ul').on('click', function (e) {
    if (window.matchMedia('(max-width: 768px)').matches) {
      $('#header').removeClass('show-nav');
      $('#headerNav').animate({
        width: 'toggle'
      }, 600);
      $('.toggle-nav').attr('aria-expanded', true);
    }

  });

})(jQuery);

/**
 * Toggle submenu
 */
(function ($) {
  // $('.wrap-sub-menu').hide();
  $('.parent > a').on('click', function (e) {
    e.preventDefault();
    var parent = $(this).parent();
    var siblings = parent.parent().find('.parent');
    //parent.siblings('.parent .wrap-sub-menu').slideUp();
    parent.siblings('.parent').attr('aria-expanded', false).children('.wrap-sub-menu').slideUp(); //slideUp();
    /* console.log(parent.index());
    $(siblings).each(function(k) {
     if(k != parent.index()){
      $(this).attr('aria-expanded', false).find('.wrap-sub-menu').hide();
     }
      
      
    });
    console.log(siblings) */

    parent.attr('aria-expanded', function (_, attr) {
      return attr == 'true' ? false : true;
    });
    $(this).siblings('.wrap-sub-menu').slideToggle('slow');
    //$(this).siblings('.sub-menu').wrap('<div class="wrap-sub-menu"></div>').slideToggle('slow');

  });

})(jQuery);
/**
 * Close submenu on click
 */
(function ($) {
  $('.parent .wrap-sub-menu').on('click', function (e) {
    $(this).parent().attr('aria-expanded', false);
    $(this).slideToggle('slow');
    //$('#header').removeClass('show-nav');
    $('.show-nav #navHeader').animate({
      width: 'toggle'
    }, 350);
    $('#header').removeClass('show-nav');
  });


})(jQuery);

/**
 * Toggle search bar
 */
(function ($) {
  $('.toggle-search-bar').on('click', function (e) {
    // Hide collapsed submenu
    $('#navHeader').find('.parent').attr('aria-expanded', false).find('.wrap-sub-menu').slideUp();
    // Toggle search bar
    $('#searchBar').slideToggle('slow');
    e.preventDefault();
  });

})(jQuery);



/**
 * Toggle accordion
 */
(function ($) {
  $('.dropdown-wrap .toggle').on('click', function (e) {
    //$('.accordion').attr('hidden',true);
    var target = $(this).children('.tooltip');

    $(this).attr('aria-expanded', function (_, attr) {
      return attr == 'true' ? false : true;
    });
    var parent = $(this).parent().closest('.dropdown-wrap').children('.dropdown');
    $(this).parent().closest('.dropdown-wrap').children('.dropdown').attr('hidden', function (_, attr) {
      return !attr
    });
    //$(this).next().attr('hidden', function(_, attr){ return !attr});
    /*  $('html').on('click',function() {
       target.attr('hidden', function(_, attr){ return !attr});
       }); */
    e.preventDefault();
    e.stopPropagation();
  });

})(jQuery);
/**
 * Toggle dropdown
 */
(function ($) {
  $('.accordion-toggle > button').on('click', function (e) {
    //$('.accordion').attr('hidden',true);

    $(this).attr('aria-expanded', function (_, attr) {
      return attr == 'true' ? false : true;
    });
    $(this).parent().next().attr('hidden', function (_, attr) {
      return !attr
    });
    e.preventDefault();
  });

})(jQuery);

/**
 * Toggle tabs
 */
(function ($) {
  $('[role="tab"]').on('click', function (e) {
    var tabId = $(this).attr('href');
    var tabs = $('[role="tab"]');
    var tabPanels = $('[role="tabpanel"]');
    // Set all tabs to aria-selected="false" 
    $(tabs).removeAttr('aria-selected');
    // Adding  hidden attr to all tab panels
    $(tabPanels).attr('hidden', true);
    // Set current tab to aria-selected="true"
    $(this).attr('aria-selected', true);
    // Removing hidden attr from current tab panel
    $(tabId).removeAttr('hidden').focus();
    e.preventDefault();
  });

})(jQuery);

/**
 * Toggle modal
 */
(function ($) {
  $('[data-toggle-modal]').on('click', function (e) {
    var target = '#' + $(this).attr('data-toggle-modal');
    $(target).attr('hidden', function (_, attr) {
      return !attr
    });
    e.preventDefault();
  });

})(jQuery);

/**
 * Toggle tooltip
 */
(function ($) {
  $('.tooltip-wrap').on('click', function (e) {
    var target = $(this).children('.tooltip');
    target.css('display') == 'none' ? target.show() : target.hide();
    $('html').on('click', function () {
      target.hide();
    });
    e.preventDefault();
    e.stopPropagation();
  });


})(jQuery);

/**
 * Toggle more info
 */
(function ($) {
  $('.toggle-more').on('click', function (e) {
    $(this).attr('aria-expanded', function (_, attr) {
      return attr == 'true' ? false : true;
    });
    /* $(this).parent().next().attr('hidden', function (_, attr) {
      return !attr
    }); */
    // $('.more-target').slideUp();
    $(this).siblings('.more-target').slideToggle('slow');
    e.preventDefault();
  });

})(jQuery);

/**
 * Flip card
 */
(function ($) {
  $('.flip').on('click', function (e) {
    $(this).find('.flipcard').toggleClass('flipped');
    /*  $(this).find('.card').addClass('flipped').mouseleave(function(){
         $(this).removeClass('flipped');
     }); */
    return true;
  });
})(jQuery);

/**
 * Slideshow
 */
(function ($) {
  $(".slideshow > *:gt(0)").hide();

  setInterval(function () {
    $('.slideshow > *:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.slideshow');
  }, 3000);
})(jQuery);