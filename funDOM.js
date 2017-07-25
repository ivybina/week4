$(document).ready(function() {
         $("button#hello").click(function() {
         $("ul#user").prepend("Hello!");
         $("ul#user").children("li").first().click(function() {
        alert('hi');
      });
         $("ul#webpage").prepend("Why hello there!");
          // $('li').click(function() {
          // alert('hi');
          //
          // $('li').css('background-color', 'green');
           $("ul#webpage").children("li").first().click(function() {
           alert('hi');
         });
       });
        $("button#goodbye").click(function() {
          // $("ul").prepend("<li>Goodbye!</li>");
          $("ul#user").prepend("<li>Goodbye!</li>");
          $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
       });

        $("button#stop").click(function() {
          // $("ul").prepend("<li>Stop copying me!</li>");
          $("ul#user").prepend("<li>Stop copying me!</li>");
          $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
        });

      });
