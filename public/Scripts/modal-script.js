/**
 * Created by SoftSuave-50 on 8/28/2017.
 */

function openModalPopup(modalId){
//alert(modalId);
  $('#'+modalId).fadeIn(300).slideDialogUp();
}

function closeDrawer(){
$('.mdl-layout__drawer').removeClass('is-visible');
  $('.mdl-layout__obfuscator').removeClass('is-visible');
}
