 // slider 
 $(".slides > div:gt(0)").hide();
 setInterval(function() {
     $('.slides > div:first')
         .fadeOut(500).next()
         .fadeIn(500)
         .end()
         .appendTo('.slides');
 }, 5000);