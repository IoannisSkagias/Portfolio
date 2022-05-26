$(window).mousemove(function(e) { 
  
    $('.cursor').css({
      left: e.pageX,
       top: e.pageY
    })
    
  })
  
  $('h1')
  .on('mouseenter', function() {
    $('.cursor').addClass('focus')
  })
  .on('mouseleave', function() {  
    $('.cursor').removeClass('focus')
  })