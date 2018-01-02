/**
 * Created by SoftSuave-50 on 7/3/2017.
 */

$(document).ready(function () {
  $('.booking-stepper fieldset:not(:nth-of-type(1))').hide();
  $('.dialog-wrapper').hide();

  $('.open-modal').click(function () {
    $('.mdl-layout__drawer,.mdl-layout__obfuscator').removeClass("is-visible");
    $('.mdl-layout__drawer').attr("aria-hidden", "true");
    $('.dialog-wrapper').fadeIn(300).slideDialogUp();
  });

  $('.dialog-wrapper').click(function (e) {
    if($(e.target).hasClass('dialog-wrapper'))
      $('.dialog-main').animate({'margin-top': '10%'}, 200).fadeOutDialog();
  });


  $.fn.slideDialogUp = function () {
    $('.dialog-main').animate({'margin-top': '5%'}, 200);
  }
  $.fn.fadeOutDialog = function () {
    $('.dialog-wrapper').fadeOut(300);
  }

  $('.md-select').on('click', function () {
    $(this).toggleClass('active')
  })

  $('.md-select ul li').on('click', function () {
    var v = $(this).text();
    $('.md-select ul li').not($(this)).removeClass('active');
    $(this).addClass('active');
    $('.md-select label button').text(v)
  })
  $('.detail-more').click(function () {
    $('.detailed-bill-row').addClass('expanded');
    $('.detail-more').hide();
    $('.detail-less').show();
  })
  $('.detail-less').click(function () {
    $('.detailed-bill-row').removeClass('expanded');
    $('.detail-less').hide();
    $('.detail-more').show();
  })

  $('.filter-badge').click(function(){
    $('.filter-tag-section').toggleClass('expanded');
  })

  //check nober of tags in filter tag
  refreshFilterChip();
  //delete chip
  $(document).on('click','.mdl-chip__action',function(){
    $(this).parents('.filter-tags').remove();
    refreshFilterChip();
  })

  $('.account-group').click(function(e){

  })

  $(document).click(function(e){
      $('.md-profile-menu').removeClass("open");
  })
});


function refreshFilterChip(){
  var tagNo = $('.filter-tag-section').find('.filter-tags').length;
  if(tagNo > 0){
    $('.empty-msg').hide();
  }else{
    $('.empty-msg').show();
  }
}
function clearAllFilter(){
  $('.filter-tags').remove();
  refreshFilterChip();
}
function swapLocation() {

  var pLoc = $('#pick-loc').val();
  var dLoc = $('#drop-loc').val();

  if (pLoc != "" || dLoc != "") {
    var temp = pLoc;
    pLoc = dLoc;
    dLoc = temp;
    $('#pick-loc').val(pLoc);
    $('#drop-loc').val(dLoc);
  }

}

function goToNext(obj) {
  $(obj).parents("fieldset").hide().next().fadeIn(500);
  $('.stepper p.active').removeClass().next().addClass('active');
  $('.stepper a.active').removeClass().next().addClass('active');
}

function goToPrev(obj) {
  $(obj).parents("fieldset").hide().prev().fadeIn(500);
  $('.stepper p.active').removeClass().prev().addClass('active');
  $('.stepper a.active').removeClass().prev().addClass('active');
}

function openPaymentModal() {
  $('.payment-gateway').fadeIn(300).slideDialogUp();
}


function getCreditCardType(accountNumber) {

  //start without knowing the credit card type
  var result = "unknown";

  //first check for MasterCard
  if (/^5[1-5]*/.test(accountNumber)) {
    result = "mastercard";
  }

  //then check for Visa
  else if (/^4*/.test(accountNumber)) {
    result = "visa";
  }

  //then check for AmEx
  else if (/^3[47]/.test(accountNumber)) {
    result = "amex";
  }

  switch (result) {

    case "mastercard" :
      $('.b3-card-icon-image-container').removeClass("hidden");
      $('.b3-card-icon-image-container:not(:nth-of-type(2))').addClass("hidden");
      break;
    case "visa" :
      $('.b3-card-icon-image-container').removeClass("hidden");
      $('.b3-card-icon-image-container:not(:nth-of-type(1))').addClass("hidden");
      break;
    case "amex" :
      $('.b3-card-icon-image-container').removeClass("hidden");
      $('.b3-card-icon-image-container:not(:nth-of-type(3))').addClass("hidden");
      break;

    default:
      $('.b3-card-icon-image-container').removeClass("hidden");
  }
}


function processStrength(){
 // alert(123);
  $('#result').html(checkStrength($('#password').val()));
}

function checkStrength(password) {
  //initial strength
  var strength = 0

  //if the password length is less than 6, return message.
  if (password.length < 6) {
    $('#result,#result-icon').removeClass();
    $('#result,#result-icon').addClass('short');
    $('#result-icon').addClass('material-icons');
    $('#result-icon').text('info');
    return 'Poor'
  }

  //length is ok, lets continue.

  //if length is 8 characters or more, increase strength value
  if (password.length > 7) strength += 1

  //if password contains both lower and uppercase characters, increase strength value
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1

  //if it has numbers and characters, increase strength value
  if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1

  //if it has one special character, increase strength value
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

  //if it has two special characters, increase strength value
  if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

  //now we have calculated strength value, we can return messages

  //if value is less than 2
  if (strength < 2) {
    $('#result,#result-icon').removeClass()
    $('#result,#result-icon').addClass('weak');
    $('#result-icon').addClass('material-icons');
    $('#result-icon').text('info');
    return 'Weak'
  }
  else if (strength == 2) {
    $('#result,#result-icon').removeClass()
    $('#result,#result-icon').addClass('good');
    $('#result-icon').addClass('material-icons');
    $('#result-icon').text('check_circle');
    return 'Good'
  }
  else {
    $('#result,#result-icon').removeClass()
    $('#result,#result-icon').addClass('strong');
    $('#result-icon').addClass('material-icons');
    $('#result-icon').text('check_circle');
    return 'Excellent'
  }
}

function openToolTip(obj){
  var topPos = $(obj).offset().top;
  var rightPos = $(obj).width();
  $('.tooltip-outer').css({'left':rightPos + "px",'top':topPos+"px"});
  $('.tooltip-outer').fadeIn(200);
}
function closeTooltip(){

}

function openPopupDrop(id,evt){
  evt.stopPropagation();
  $('.md-profile-menu').removeClass("open");
  $('#'+id).addClass("open");
}

function generateNotificationToast(message){
    window['counter'] = 0;
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var showToastButton = document.querySelector('#demo-show-toast');

      var data = {message: message};
      snackbarContainer.MaterialSnackbar.showSnackbar(data);

}