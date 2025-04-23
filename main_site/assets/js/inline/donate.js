$(document).ready(function () {
  var $form = $('form.donate');
  var $thanks = $('.thanks');
  var $iframe = $('#iframe_donateform');

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

  var formsubmitted = false;

  $iframe.load(function (e) {
    if (formsubmitted) {
      $form.fadeOut(500, function () {
        $thanks.fadeIn(500);
      });
    }
  });

  $form.submit(function (e) {
    formsubmitted = true;
  });
});


