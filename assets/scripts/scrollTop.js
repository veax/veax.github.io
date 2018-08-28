window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          document.getElementById("back_to_top").style.display = "block";
      } else {
          document.getElementById("back_to_top").style.display = "none";
      }
  }

  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
        },15);
  }