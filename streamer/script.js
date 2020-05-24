$(document).on('click', '.remove', function() {
  $(this).parent().slideUp();
});

$(document).on('click', '.completed', function() {
   $(this).parent().toggleClass("done" );
});

$( "ul" ).sortable();

$(".add").click(function(){
				  $(".new-task").slideToggle();
  $("#todo-text").focus();
});

// Pressing enter
$(document).keypress(function(e) {
    var str = $( "#todo-text" ).val();
  
    if(e.which == 13 && str != "" && str != null ) {
       $( "<li class='row'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='completed' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
       $( "#todo-text" ).val("");
       $( "#todo-text" ).focus();
    }
});

// Press the + sign
$(".add-new").click(function(){
  var str = $( "#todo-text" ).val();
  
     if( str != "" && str != null) {
	       $( "<li class='row'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='completed' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
       $( "#todo-text" ).val("");
       $( "#todo-text" ).focus();
     }
});