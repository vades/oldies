!function(t){t(".toggler").on("click",function(e){var n=t(this),i="#"+n.attr("aria-controls"),s=t(this).attr("aria-expanded"),o=t(i).attr("hidden");t(i).toggleClass("is-on"),o&&t(this).removeAttr("hidden"),s&&s.length&&t(this).attr("aria-expanded",function(t,e){return"true"!=e}),e.preventDefault()}),t("body").click(function(e){t(e.target).closest(".is-on").removeClass("is-on")})}(jQuery),function(t){function e(t,e){return'<section class="notify-host"><article id="notify" class="notify '+e+'"><div>'+t+'</div><span class="close">&times;</span></article></section>'}var n={errorClass:"validate-error",successClass:"validate-success",errorsWrapper:'<div class="validate-errors"></div>',errorTemplate:"<span></span>"};t("#contact_form").parsley(n);t("#contact_form").submit(function(n){n.preventDefault();var i=t(this),s=i.attr("action");t.ajax({type:"POST",url:s,data:i.serialize(),beforeSend:function(){t("#button_submit").append('<i class="fas fa-spinner fa-spin"></i>'),t("#button_submit span").hide()},complete:function(){t(".fa-spin").hide(),t("#button_submit span").show()},success:function(){t("body").append(e("Thank you for contacting me. You are very important to me, all information received will always remain confidential.","is-success")),t(i)[0].reset(),setTimeout(function(){t("#notify").hide()},7e3),console.log("Submission was successful.")},error:function(n){t("body").append(e("Sorry but your email was unable to send.","is-danger inverse")),setTimeout(function(){t("#notify").hide()},7e3),console.log(n)}})}),t(document).on("click","#notify",function(e){t(this).hide(),e.preventDefault()}),t(document).on("click",function(e){0===t(e.target).closest("#notify").length&&t("#notify").hide()})}(jQuery);
