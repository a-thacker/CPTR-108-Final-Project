const character = document.getElementById("character");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

function jump() 
{
    character.classList.add("jump-animation");
    setTimeout(() => {
    character.classList.remove("jump-animation");
    }, 500);
}

document.addEventListener("keypress", () => {
    jump();
});

setInterval(() => {
    score.innerText++;
    const characterTop = parseInt(window.getComputedStyle(character)
    .getPropertyValue("top"));
    const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue("left"));

    if (rockLeft < 0)
    {
        rock.style.display = "none";
    }
    else
    {
        rock.style.display = "";
    }

    if (rockLeft < 50 && rockLeft > 0 && characterTop > 150)
    {
        alert("You got a score of: "+parseInt(score.innerText -1)+"\nPlay again?");
        window.location.href = "First Page.html";
    }
}, 50);


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function runPeriodically() {
  const randomNum = myArray[Math.floor(Math.random() * myArray.length)];

  if(randomNum >= 1 && randomNum <= 4) {
    document.getElementById('rock').style.backgroundImage = "url('https://opengameart.org/sites/default/files/Rock%20Pile.png')"; 
    document.getElementById('rock').style.width = "50px";
    document.getElementById('rock').style.height = "50px";
    document.getElementById('rock').style.top = "175px";
    

    } else if(randomNum >= 5 && randomNum <= 8) {
        
        document.getElementById('rock').style.backgroundImage = "url('boxes.gif')";
        document.getElementById('rock').style.width = "70px";
        document.getElementById('rock').style.height = "70px";
        document.getElementById('rock').style.top = "175px";
 

    }else if(randomNum >= 9 && randomNum <= 10) {
        
        document.getElementById('rock').style.backgroundImage = "url('baby dragon.gif')";
        document.getElementById('rock').style.width = "100px";
        document.getElementById('rock').style.height = "300px";
        document.getElementById('rock').style.top = "-75px";
    }


}

setInterval(runPeriodically, 3700);



const homeButton = document.getElementById('goHome')

function backHome() {
    setTimeout(() => {
        window.location.href = "First Page.html";  
      }, 500);
    }



homeButton.addEventListener("click", backHome); 
/* useless stuff
const playAgain = document.getElementById('playAgain')

function playAgainButton() {
    setTimeout(() => {
        window.location.reload('Game Page.html');  
      }, 500);
    }



playAgain.addEventListener("click", playAgainButton); 
*/