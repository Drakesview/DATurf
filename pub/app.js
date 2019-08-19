$(document).ready(function() {

  $("a").on('click',function(e) {
    if (this.hash !== "") {
      e.preventDefault()
      var hash = this.hash
    $('html,body').animate({
      scrollTop: $(hash).offset().top
    },800,function() {
      window.location.hash = hash
      });
    }
    });

    window.onscroll = function() {
      scrollFunction()
    }

    const scrollFunction = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollbutton").style.display = "block";
      } else {
        document.getElementById('scrollbutton').style.display = "none";
      }
    }
  });

