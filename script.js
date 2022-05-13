$(".response").hide();
$(".yes2").hide();
$(".no2").hide();
$(".yes3").hide();
$(".no3").hide();
$(".dialouge2").hide();

$(".yes").click(function(){
$("button").hide();
$(".dialouge").fadeOut();
$(".toptext").fadeOut();
$(".mainimg").fadeOut();
$(".response").delay("slow").fadeIn();
$(".response").delay(2000).queue(function() { 
$(".response").text("Thank You For Waiting!");
$(".response").dequeue(); 
$(".dialouge").fadeIn().html("<h3>Use a Critical Attack?</h3>");
$(".toptext").show().html("<h2>Oh no! A wild pokemon has apeared!</h2>");
$(".mainimg").fadeIn();
$(".img1").attr("src","https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png");
$(".response").fadeOut();
$(".yes").hide();
$(".yes2").show();
$(".no").hide();
$(".no2").show();
  });    
});

$(".no").click(function(){
$(".img1").attr("src","https://storage.googleapis.com/gamebyte/2019/06/Pikachu-1.jpg");
$(".toptext").html("<h2>Goodbye Trainer!</h2>");
$(".dialouge").html("<h3>Good Luck On Your Next Adventure :( </h3>");
$("button").hide();
setTimeout(function(){
        location.reload();
        }, 5000);
    
});

$(".yes2").click(function(){
$(".toptext").html("<h2>CRITICAL!</h2>");
$(".dialouge").hide();
$(".dialouge").text("You've Defeated Your First Pokemon!");
$(".dialouge").delay("slow").fadeIn();
$(".img1").attr("src","https://media.forgecdn.net/avatars/67/361/636163095202189901.png");
$(".dialouge2").text("Thats It For The Demo. Good Luck On Your Future Adventures<3");
$(".dialouge2").delay("slow").fadeIn();
$("button").hide();
    $(".img1").hover(function(){
  $(".img1").attr("src","https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/767?cb=20140520015336");
    });
    setTimeout(function(){
        location.reload();
        }, 5000);
});

$(".no2").click(function(){
$("button").hide();
$(".dialouge").hide();
$(".dialouge").text("Weak Attack :(");
$(".dialouge").delay("slow").fadeIn();
$(".dialouge2").text("Weedle Counters With a Critical Move!");
$(".dialouge2").delay("slow").fadeIn();
    setTimeout(function(){
$(".dialouge").hide();
$(".dialouge2").text("You Aren't Fit To Be A Trainer");
$(".toptext").text("Good Luck Next Time");
$("button").hide();

}, 2000);
    
 setTimeout(function(){
        location.reload();
        }, 5000);
    
});