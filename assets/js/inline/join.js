$(document).ready(function () {
  var $form = $('form.join');
  var $thanks = $('.thanks');
  var $iframe = $('#iframe_joinform');

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


//     // setup some local variables
//     var $form = $(this);
//     // let's select and cache all the fields
//     var $inputs = $form.find("input, select, button, textarea");
//     // serialize the data in the form
//     var serializedData = $form.serialize();

//    // let's disable the inputs for the duration of the ajax request
//     // Note: we disable elements AFTER the form data has been serialized.
//     // Disabled form elements will not be serialized.
//     $inputs.prop("disabled", true);


// // fire off the request to /form.php
//     request = $.ajax({
//         url: "http://porthack.hsbne.org:81/seltzer/make_new_user_return_unique_username.php",
//         type: "post",
//         crossDomain: true,
//         timeout: 2000,
//         data: serializedData
//     });

// // callback handler that will be called on success
//     request.done(function (response, textStatus, jqXHR){
//         // log a message to the console
//         alert("Hooray, it worked!");
//     });

//     // callback handler that will be called on failure
//     request.fail(function (jqXHR, textStatus, errorThrown){
//         // log the error to the console
//         alert(
//             "The following error occured: "+
//             textStatus, errorThrown
//         );
//     });


//     // callback handler that will be called regardless
//     // if the request failed or succeeded
//     request.always(function () {
//         // reenable the inputs
//         $inputs.prop("disabled", false);
//     });
    
    
   });
});


