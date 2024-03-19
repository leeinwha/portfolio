$(document).ready(function() {       
  $('.cate_menu .index_list li').click(function(e){
      e.preventDefault();
      var cate_id = $(this).data('cate');
      $('.cate_menu .index_list li').removeClass('active');
      $(this).addClass('active');
      $('.category_wrap').removeClass('on');
      $('#'+cate_id).addClass('on'); 
  });      
});