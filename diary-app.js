$(function(){

  //設定画面表示
  $('#setup-modal-show').click(function(){
    $('.setup-modal').show();
  });
  //設定画面非表示
  $('.setup-modal-close').click(function(){
    $('.setup-modal').hide();
  });
  //設定画面表示
  $('#write-modal-show').click(function(){
    $('.write-modal').show();
  });
  //設定画面非表示
  $('.write-modal-close').click(function(){

    var diary_text = document.post.diary-text.value;


    $('.write-modal').hide();
  });



});
