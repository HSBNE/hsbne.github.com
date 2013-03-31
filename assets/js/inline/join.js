$(document).ready(function () {
  $('form.join').h5Validate({
    errorClass: '',
    validClass: ''
  });
  $('form.join').bind('formValidated', function (e, data) {
    $(data.elements).each(function (index, el) {
      $(el.element).closest('fieldset').toggleClass('error', !el.valid);
      $(el.element).closest('fieldset').toggleClass('success', el.valid);
    });
  });
});

