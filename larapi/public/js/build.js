/* Toggle class is-on on given target
-------------------------------------------------- */

(function ($) {

    $('.toggler').on('click', function (e) {
        var selector = $(this);

        var target = '#' + selector.attr('aria-controls');
        var hasAriaExpanded = $(this).attr('aria-expanded');
        var targetHasHidden = $(target).attr('hidden');
        // Set active clas
        $(target).toggleClass('is-on');
        // Set hidden true/false on target
        if (targetHasHidden) {
            $(this).removeAttr('hidden');
        }

        // Has aria-expanded attribute - main expand/collapse button
        if (hasAriaExpanded && hasAriaExpanded.length) {
            $(this).attr('aria-expanded', function (_, attr) {
                return attr == 'true' ? false : true;
            });
        }

        e.preventDefault();
    });

    $('body').click(function (e) {
        $(e.target).closest('.is-on').removeClass('is-on');
    });
})(jQuery);

/* Contact form script version 1.0.0
-------------------------------------------------- */

(function ($) {
  /**
   * Form validation
   */
  var options = {
    errorClass: 'validate-error',
    successClass: 'validate-success',
    errorsWrapper: '<div class="validate-errors"></div>',
    errorTemplate: '<span></span>'
    
  }
  var validate = $('#contact_form').parsley(options);

  /**
   * Form subnit
   */
  $("#contact_form").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form

    var form = $(this);
    var url = form.attr('action');
    // Get the button that was clicked  
    var buttonSubmit = '#button_submit';

    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements

      // shows the loader element before sending.
      beforeSend: function () {
        $(buttonSubmit).append(notifySpinner());
        $(buttonSubmit + ' span').hide();
      },
      // hides the loader after completion of request, whether success or fail             
      complete: function () {
       $('.fa-spin').hide();
       $(buttonSubmit + ' span').show();
      },

      success: function () {
        $('body').append(notifyTemplate('Thank you for contacting me. You are very important to me, all information received will always remain confidential.', 'is-success'));
        $(form)[0].reset();
        setTimeout(function () {
          $('#notify').hide();
        }, 7000);
        console.log('Submission was successful.');
      },
      error: function (error) {
      $('body').append(notifyTemplate('Sorry but your email was unable to send.', 'is-danger inverse'));
        setTimeout(function () {
          $('#notify').hide();
        }, 7000);
        console.log(error);
      },
    });

  });
  /**
   * notify template
   */
  function notifyTemplate(text, type) {
    return '<section class="notify-host">'+
    '<article id="notify" class="notify ' + type + '">'+
    '<div>'  + text + '</div>'+
    '<span class="close">&times;</span>'+
    '</article></section>';
  }

   /**
   * notify spinner
   */
  function notifySpinner() {
    return '<i class="fas fa-spinner fa-spin"></i>';
  }

  /**
   * hide notification
   */
  $(document).on('click', '#notify', function (e) {
    $(this).hide();
    e.preventDefault();
  });

  $(document).on('click', function (e) {
    if ($(e.target).closest("#notify").length === 0) {
      $("#notify").hide();
    }
  });


})(jQuery);