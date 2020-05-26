window.addEventListener('load', function () {

    // Get The desired inputs to show and display results
    let playGameBtn = document.getElementById('playGameBtn');
    let gameSection = document.getElementById('game');
    const scramTextInp = document.getElementById('scramText');
    const corTextInp = document.getElementById('corText');
    const checkBtn =document.getElementById('check');
    const playerName = document.getElementById('playerName');

    const displayScore = document.getElementById('gameScore');
    
    // Data For Games are Stord in Array
    var data = [
        "HYPERTEXT",
        "INDEX",
        "DATA",
        "DEBUG",
        "ALGORITHM",
        "PROJECT",
        "COURSE",
        "TRAVERSY",
        "BOOTSTRAP",
        "NODE",
        "COMPTIA",
        "AZURE",
        "HACKATHON",
        "ONSENUI",

        "HYPERTEXT",
        "INDEX",
        "DATA",
        "DEBUG",
        "ALGORITHM",
        "PROJECT",
        "COURSE",
        "TRAVERSY",
        "BOOTSTRAP",
        "NODE",
        "COMPTIA",
        "AZURE",
        "HACKATHON",
        "ONSENUI",

        "HYPERTEXT",
        "INDEX",
        "DATA",
        "DEBUG",
        "ALGORITHM",
        "PROJECT",
        "COURSE",
        "TRAVERSY",
        "BOOTSTRAP",
        "NODE",
        "COMPTIA",
        "AZURE",
        "HACKATHON",
        "ONSENUI",

        "HYPERTEXT",
        "INDEX",
        "DATA",
        "DEBUG",
        "ALGORITHM",
        "PROJECT",
        "COURSE",
        "TRAVERSY",
        "BOOTSTRAP",
        "NODE",
        "COMPTIA",
        "AZURE",
        "HACKATHON",
        "ONSENUI",

        "HYPERTEXT",
        "INDEX",
        "DATA",
        "DEBUG",
        "ALGORITHM",
        "PROJECT",
        "COURSE",
        "TRAVERSY",
        "BOOTSTRAP",
        "NODE",
        "COMPTIA",
        "AZURE",
        "HACKATHON",
        "ONSENUI",

        "HYPERTEXT",
        "INDEX",
        "DATA",
        "DEBUG",
        "ALGORITHM",
        "PROJECT",
        "COURSE",
        "TRAVERSY",
        "BOOTSTRAP",
        "NODE",
        "COMPTIA",
        "AZURE",
        "HACKATHON",
        "ONSENUI",

        "HYPERTEXT",
        "INDEX",
        "DATA",
        "DEBUG",
        "ALGORITHM",
        "PROJECT",
        "COURSE",
        "TRAVERSY",
        "BOOTSTRAP",
        "NODE",
        "COMPTIA",
        "AZURE",
        "HACKATHON",
        "ONSENUI"
    ];

    // Methods Related to game
    // Once clicked the play game button then strt the game

    // Scramble data 
    function scramble(text) {
        let str = text;
        let strArray = str.split("");
        let sortStrArry = strArray.sort();
        let scrambledStr = sortStrArry.join("");

        return scrambledStr;
    }


    const playGame = () => {

        gameSection.classList ="animated fadeIn delay-5s bg-light p-3"
        displayScore.className = "d-none";

        let score = 0;
            let count = 90;

            let retText = scramble(data[count]);
            console.log(retText);
            scramTextInp.value = retText;
           

            checkBtn.addEventListener('click', () => {
               let enteredStr = corTextInp.value;
                if(enteredStr != "") {
                    let str =  enteredStr.toUpperCase();
                    if(str === data[count]) {
                    score++;
                        console.log("HEY HEY EHYEEEE!!"+count);
                        scramTextInp.value = scramble(data[--count]);
                        corTextInp.value = "";
                        displayScore.className = "full-display"
                        displayScore.textContent = "Score "+score;
                    } else {
                    score--;
                    console.log("Get throwned out"+data[count]);   
                    corTextInp.value = "";
                    displayScore.className = "full-display"
                    displayScore.textContent = "Score "+score;
                    }
                } else {
                    this.alert(`Hey ${name} You have to enter the word to proceed!!!`)
                }
            });

        Darshan
    }




    // ###############################################################
    // const name = window.prompt("For your game convinence you have to enter your Name");
    playerName.textContent = name;
    playGameBtn.addEventListener('click', playGame);
    gameSection.className = "d-none";


    

   
     
});