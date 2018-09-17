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

    var diary_text = document.post.diary-text.value; //調べて書いてみましたが理解できていません、出力できません


    $('.write-modal').hide();
  });


  //グラフ
  var data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    [50, 23, 40, 80, 10], //今は仮の数字（入力画面で入力した数字にしたい）
  ]
};
var options = {
  fullWidth: true,
  height: 250
};
new Chartist.Line('#chart', data, options);

});
