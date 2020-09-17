//Jquery exercise project
//
//Check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    //span -> parent(li)
    $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
  }
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
})
