
$('.click').click(function(){
	swal("not found!", "...try again!");
});
$('.carousel').carousel({
	interval: 2000
});
$('.btn-outline-success').click(function(){
	swal("Đăng kí thành công")
});


$('#book-hover').hover(function(){
	$('.hover-img').addClass('test')
});
$('#book-hover').mouseleave(function(){
	$('.hover-img').removeClass('test')
});



