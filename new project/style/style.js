$(document).ready(function(){
    $(".bnn-tablink").click(function(){
        $(".bnn-tablink").removeClass("link-active")
        $(this).addClass("link-active")

        var id=$(this).data("id")
        $(".bnw-img").addClass("dn")
        $(".all-img-"+id).removeClass("dn")
    })
})

