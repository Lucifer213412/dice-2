      var num1=Math.floor(Math.random() * 6) + 1;//1-6
      var num2=Math.floor(Math.random()*6) + 1;
     
      var randomDice = "images/dice" + num1 + ".png";

      var imageSource="images/"+randomDice;

      var image1=document.querySelectorAll("img")[0];

      image1.setAttribute("src", randomDice);

      var randomDice = "images/dice" + num2 + ".png";

      var imageSource="images/"+randomDice;

      var image1=document.querySelectorAll("img")[1];

      image1.setAttribute("src", randomDice);

      var result1=document.querySelector("h1");

      if(num1>num2){
         document.querySelector("h1").innerHTML="player 1 wins";
      }
      else if(num2>num1){
         document.querySelector("h1").innerText="player 2 wins";
      }
      else{
         document.querySelector("h1").innerText="draw";
      }
    