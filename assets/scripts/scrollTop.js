window.onscroll = function() {scrollFunction()};

    // arrow button is visible below 150px vertically
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
            window.scrollBy( 0, scrollStep );   // scroll vertically in negative dir (to the top)
        }
        else clearInterval(scrollInterval);     // stop setInterval scrolling
        },15);
  }