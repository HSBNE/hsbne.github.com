$(document).ready(function () {
  var $form = $('form.join');
  var $thanks = $('.thanks');
  var $failed = $('.failed');
  // Make the h5validate script work nicely with bootstrap
  $form.h5Validate({
    errorClass: '',
    validClass: ''
  });
  $form.bind('formValidated', function (e, data) {
    $(data.elements).each(function (index, el) {
      $(el.element).closest('.control-group').toggleClass('error', !el.valid);
      $(el.element).closest('.control-group').toggleClass('success', el.valid);
    });
  });
  $form.find('input,textarea,select').bind('validated', function (e, data) {
    $(data.element).closest('.control-group').toggleClass('error', !data.valid);
    $(data.element).closest('.control-group').toggleClass('success', data.valid);
  });
  // prepare Options Object 
  var options = { 
    success: function() { 
      $form.fadeOut(500);
      $thanks.fadeIn(500);
    },
    error: function() { 
    // fade in error 
      $failed.fadeIn(500);
    }
  }; 
  // bind form and provide a simple callback function 
  $form.ajaxForm(options);
 
});


