$(function(){
	$('.click').click(function(){
		swal("Không tìm thấy sách", "...chúc bạn may mắn lần sau!");
	})
	$('.carousel').carousel({
  interval: 2000
})
	$('.sc_emailer_input2').click(function(){
		swal("Đăng kí thành công")
	})
 
});

$('#book-hover').hover(function(){
	$('.hover-img').addClass('test')
});
$('#book-hover').mouseleave(function(){
	$('.hover-img').removeClass('test')
})
