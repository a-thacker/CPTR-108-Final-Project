/*Get Character, Obstacle, Score, and Home Button Elements*/
    const character = document.getElementById("character");
    const rock = document.getElementById("rock");
    const score = document.getElementById("score");
    const goHomeBtn = document.getElementById("goHome");

/*Define jump Function/ Add and Remove Jump Animation to Character*/
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

    // Touch event listener
    document.addEventListener("touchstart", () => {
        jump();
    });

/*Define Collision Function / Display End of Game Alert*/
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

/*Create Random Array to determine Randomization of Obstacles*/
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*Choose Random Number from Array and set Obstacle Image / Size*/
    function runPeriodically() {
    const randomNum = myArray[Math.floor(Math.random() * myArray.length)];
    console.log("swtiching")
    if(randomNum >= 1 && randomNum <= 3) {
        document.getElementById('rock').style.backgroundImage = "url('https://opengameart.org/sites/default/files/Rock%20Pile.png')"; 
        document.getElementById('rock').style.width = "50px";
        document.getElementById('rock').style.height = "50px";
        document.getElementById('rock').style.top = "175px";
        

        } else if(randomNum >= 4 && randomNum <= 7) {
            
            document.getElementById('rock').style.backgroundImage = "url('boxes.gif')";
            document.getElementById('rock').style.width = "70px";
            document.getElementById('rock').style.height = "70px";
            document.getElementById('rock').style.top = "155px";
    

        }else if(randomNum >= 8 && randomNum <= 10) {
            
            document.getElementById('rock').style.backgroundImage = "url('baby dragon.gif')";
            document.getElementById('rock').style.width = "100px";
            document.getElementById('rock').style.height = "300px";
            document.getElementById('rock').style.top = "-75px";
        }


    }
    setInterval(runPeriodically, 3700);
    
/*Define Home Button Function & Add Event Listener*/
    function backHome() {
        setTimeout(() => {
            window.location.href = "First Page.html";  
        }, 200);
        }
    goHomeBtn.addEventListener("click", backHome);
