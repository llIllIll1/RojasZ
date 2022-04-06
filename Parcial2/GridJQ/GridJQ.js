$(document).ready(function()
{
    $('#idcontenedor').click(function(e){
       console.log(e); 
       $(e.target).toggleClass('cajaEvent');
    });
});