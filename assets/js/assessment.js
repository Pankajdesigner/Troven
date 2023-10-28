// Question type
$(document).ready(function(){ 
    $('#div1').show();
    $('.right-q li').on('click', function(){
        var target = $(this).data('target');
        // Hide all divs with class 'toggle-div'
        $('.toggle-div').hide();  
        // Show the div associated with the clicked li
        $('#' + target).show(); 
    });
});


// active toggle
$(document).ready(function(){
    $(".right-q li").click(function() {    
      $('.right-q li').removeClass("active");  
      $(this).addClass("active"); 
    });
  }); 
  