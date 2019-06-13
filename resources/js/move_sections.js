$(document).ready(function(){
 $("#introduction").children()[0].remove();
 
 $("#introduction").children().appendTo($("#new_intro"));
 
 
 $("#references").appendTo($("#new_refs"))
});