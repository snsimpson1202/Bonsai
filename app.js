var main = function() {
  $("#top-text").keyup(function(){
var toAdd = $("#top-text").val();
  $(".top-caption").text(toAdd);
  });
  $("#bottom-text").keyup(function(){
var toAdd = $("#bottom-text").val();
  $(".bottom-caption").text(toAdd);
  });
  $("#image-url").keyup(function(){
var meme = $(this).val();
  $(".thumbnail img").attr("src", meme);
  });
};
 
$(document).ready(main);
