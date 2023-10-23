// Question type
$(document).ready(function(){ 
    $('#div1').show();
    $('.right-q li').on('click', function(){
        var target = $(this).data('target');
        $('.toggle-div').not('#' + target).hide();  
        $('#' + target).toggle(); 
    });
  });