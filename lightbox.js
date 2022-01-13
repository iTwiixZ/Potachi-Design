 

 

 $(document).ready(function() {
   var modal = $('#myModal')
   var span = $(".close")  
   var modalImg = $("#img01")
   var captionText = $("#caption")
  
   var img = $('.myImg')
  
  img.click(function(){
       modal.css('display', 'block')
       modalImg.attr('src', this.src)
       captionText.html(this.alt)
   });
  
   span.click(function() {
     modal.css('display', 'none')
     });
 });
 
 $(document).ready(function() {
    var modal = $('#myModal')
    var span = $(".close")  
    var modalImg = $("#img02")
    var captionText = $("#caption")
   
    var img = $('.myImg')
   
   img.click(function(){
        modal.css('display', 'block')
        modalImg.attr('src', this.src)
        captionText.html(this.alt)
    });
   
    span.click(function() {
      modal.css('display', 'none')
      });
  });
  $(document).ready(function() {
    var modal = $('#myModal')
    var span = $(".close")  
    var modalImg = $("#img03")
    var captionText = $("#caption")
   
    var img = $('.myImg')
   
   img.click(function(){
        modal.css('display', 'block')
        modalImg.attr('src', this.src)
        captionText.html(this.alt)
    });
   
    span.click(function() {
      modal.css('display', 'none')
      });
  });
  
