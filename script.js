<<<<<<< HEAD
function machineASous(){

    var creditJoueur = document.getElementById("monnaie").value;
    var tentativeJoueur = document.getElementById("tentative").value;
    var highscore = document.getElementById("highscore").value;

    var audio = new Audio('son/pieces-1.mp3');
    var audio2 = new Audio('son/macron.mp3');
    var audio3 = new Audio('son/marine.mp3');
    var audio4 = new Audio('son/fillon.mp3');
    var audio5 = new Audio('son/melenchon.mp3');
    var audio6 = new Audio('son/defaite.mp3');



    var w = Math.floor(Math.random()*(5-1)+1);
    var x = Math.floor(Math.random()*(5-1)+1);
    var y = Math.floor(Math.random()*(5-1)+1);
    var z = Math.floor(Math.random()*(5-1)+1);


    document.getElementById("img_1").src = 'img/img_' + w + '.png';
    document.getElementById("img_2").src = 'img/img_' + x + '.png';
    document.getElementById("img_3").src = 'img/img_' + y + '.png';
    document.getElementById("img_4").src = 'img/img_' + z + '.png';

    
    creditJoueur --;
    tentativeJoueur ++;



    if(w == 1 && x == 1 && y == 1 && z == 1)
    {
        creditJoueur += 5;
        audio2.play();
    }

    if(w == 2 && x == 2 && y == 2 && z == 2)
    {
        creditJoueur += 5;
        audio3.play();
    }

    if(w == 3 && x == 3 && y == 3 && z == 3)
    {
        creditJoueur += 5;
        audio4.play();
    }

    if(w == 4 && x == 4 && y == 4 && z == 4)
    {
        creditJoueur += 5;
        audio5.play();
    }

    
    if(creditJoueur > highscore)
    {
        highscore = creditJoueur;
    }
    
    if(creditJoueur > highscore)
    {
        highscore = creditJoueur;
    }


    if(creditJoueur == 0)
    {
        document.getElementById("jouer").disabled = true;
        audio6.play();
        alert("Dommage ! Tout tes sous sont partis dans les caisses de l'état ! ");
        document.getElementById("rejouer").disabled = false;
    }


    document.getElementById("monnaie").value = creditJoueur;
    document.getElementById("tentative").value = tentativeJoueur;
    document.getElementById("highscore").value = highscore;
    storage.setItem("highscore", highscore);
    
=======
function machineASous(){

    var creditJoueur = document.getElementById("monnaie").value;
    var tentativeJoueur = document.getElementById("tentative").value;
    var highscore = document.getElementById("highscore").value;

    var audio = new Audio('son/pieces-1.mp3');
    var audio2 = new Audio('son/macron.mp3');
    var audio3 = new Audio('son/marine.mp3');
    var audio4 = new Audio('son/fillon.mp3');
    var audio5 = new Audio('son/melenchon.mp3');
    var audio6 = new Audio('son/defaite.mp3');


    var w = Math.floor(Math.random()*(5-1)+1);
    var x = Math.floor(Math.random()*(5-1)+1);
    var y = Math.floor(Math.random()*(5-1)+1);
    var z = Math.floor(Math.random()*(5-1)+1);


    document.getElementById("img_1").src = 'img/img_' + w + '.png';
    document.getElementById("img_2").src = 'img/img_' + x + '.png';
    document.getElementById("img_3").src = 'img/img_' + y + '.png';
    document.getElementById("img_4").src = 'img/img_' + z + '.png';

    
    creditJoueur --;
    tentativeJoueur ++;


    if(w == 1 && x == 1 && y == 1 && z == 1)
    {
        creditJoueur += 5;
        audio2.play();
    }

    if(w == 2 && x == 2 && y == 2 && z == 2)
    {
        creditJoueur += 5;
        audio3.play();
    }

    if(w == 3 && x == 3 && y == 3 && z == 3)
    {
        creditJoueur += 5;
        audio4.play();
    }

    if(w == 4 && x == 4 && y == 4 && z == 4)
    {
        creditJoueur += 5;
        audio5.play();
    }

    
    if(creditJoueur > highscore)
    {
        highscore = creditJoueur;
    }

    if(creditJoueur == 0)
    {
        document.getElementById("jouer").disabled = true;
        audio6.play();
        alert("Dommage ! Ton argent appartient à l'état ! ");
        document.getElementById("rejouer").disabled = false;
    }


    document.getElementById("monnaie").value = creditJoueur;
    document.getElementById("tentative").value = tentativeJoueur;
    document.getElementById("highscore").value = highscore;
    storage.setItem("highscore", highscore);
    
>>>>>>> origin/master
}