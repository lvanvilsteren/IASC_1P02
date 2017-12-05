window.confirm("Make sure you look at the Prince Edward Island Page before the Peru one!")

function one() {
    var elements = document.getElementsByClassName("column");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
      }
    }

function four() {
    var elements = document.getElementsByClassName("column");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "25%";
    }
  }
  /* Found at this website :https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top*/
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
