$(document).ready(function(){
 $("#introduction").children()[0].remove();
 
 $("#introduction").children().appendTo($("#new_intro"));
 
 $("#introduction").remove()
 
 $("#challenges").appendTo($("#new_refs"));
 
 $("#challenges").find("p").wrapAll("<div class='chal_text' />")
});