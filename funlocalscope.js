// function sampleFunction() {
//        var globalString = "This is a global variable";
//        alert(globalString);
//        globalString = "This is a global variable update!!";
//        alert(globalString);
//      }
//
//      alert(globalString);
$(document).ready(function() {
          var whatToSay="hello";
        $("div#click-one").click(function(event) {
          var whatToSay = "Hello!";
          alert(whatToSay);
        });

        $("div#click-two").click(function(event) {
          alert(whatToSay);
        });
      });
