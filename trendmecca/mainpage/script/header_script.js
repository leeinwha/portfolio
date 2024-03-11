$(function(){
  $('.btn_menu').click(function(){
    $('.btn_menu').toggleClass('on');
    $('.sub_category').toggleClass('on');
    $('.cover').toggleClass('on');
  });

  $('.cover').click(function(){
    $('.btn_menu').removeClass('on');
    $('.sub_category').removeClass('on');
    $('.cover').removeClass('on');        
  });

  $('.sub_category_inner > .index_list > li').mouseenter(function(e){
    e.preventDefault();
    let cate_id = $(this).data('cate');
    $('.list').removeClass('on');
    $('#'+cate_id).addClass('on');
    $('.sub_category_inner > .index_list > li').removeClass('active');
    $(this).addClass('active');
  });
  
  

  var gbcat = $('.category_menu').offset().top;  
  $(window).scroll(function(){
    if ( $( document ).scrollTop() > gbcat ) {
      $( '#header' ).addClass( 'fixed' );
    }
    else {
      $( '#header' ).removeClass( 'fixed' );
    }
  });
  
  $(window).resize(function() {
    if($(window).width() < 1025) {
      $(window).scroll(function(){
        if ( $( document ).scrollTop() > $('#header') ) {
          $( '#header' ).addClass( 'fixed' );
        }
      });
    } 
  });  
});



