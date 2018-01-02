/**
 * Created by SoftSuave-50 on 7/6/2017.
 */
$(document).ready(function(){

});
function validateForm() {
  var isFormValid = true,isEmailValid=true,isPhoneValid=true;
  $('.required').each(function () {
      //isFormValid = checkEmptyinput(this);
    if ($(this).val() === "") {
      showError($(this),true);
      isFormValid = false;
    }
    if ($(this).hasClass("email") && $(this).val() != "") {
      isFormValid = validateEmail(this);
    }
    if ($(this).hasClass("phone") && $(this).val() != "") {
      isFormValid = validatePhone(this);
    }
  });
  return isFormValid;
}

function validateEmail(obj) {
  var x = $(obj).val();
  var pattern = /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/;
  if (x.match(pattern)) {
    showError($(obj),false);
    return true;
  } else {
    showError($(obj),true);
    return false;
  }
}


function validatePhone(phone) {
  //var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if ((/^\d{10,}$/).test(phone.value.replace(/[\s()+\-\.]|ext/gi, ''))) {
    showError($(obj),true);
    return true;
  } else {
    showError($(obj),false);
    return false;
  }
}

function showError(obj,val){
  if(val){
    $(obj).css({'border-bottom':'2px solid #BD4548'});
    $(obj).parent().siblings('span').show();
    $(obj).siblings('label').css('color','#BD4548');
  }else{
    $(obj).css({'border-bottom':'2px solid #448aff'});
    $(obj).parent().siblings('span').hide();
    $(obj).siblings('label').css('color','#448aff');
  }
}


function validateDate(target,type,maxLength){

  var myLength = target.value.length;
  if (myLength >= maxLength) {
      if(type == "day" && target.value > 31){
          target.value = 31;
      }else if(type == "month" && target.value > 12){
        target.value = 12;
      }else {

      }

    var next = target.parentNode.nextElementSibling.firstElementChild;
    console.log(next);
      if (next.tagName.toLowerCase() == "input") {

        next.focus();
      }
    }
}

function checkMonth(){
  var month = $('#m_input').val();
  var day = $('#d_input').val();
  if(month == 2 && day > 28)
   $('#d_input').val(28);


}