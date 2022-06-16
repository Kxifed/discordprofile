

<!DOCTYPE html>
<html lang="en">
<head onload="">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <audio id="Audio" src="https://cdn.discordapp.com/attachments/919858993176920126/959738499790172170/All_Im_Sayin.mp3" autoplay></audio>
    <title></title>
</head>
<body>
    <div id="box" onmouseenter="ColorBlack()" onmouseleave="ColorWhite()"></div>
    <div id="box2"></div>
    <div id="box3"></div>
    <div id="box4"></div>
    <img id="PFP" src="https://cdn.discordapp.com/attachments/919858993176920126/955218976496033882/1_iPbPVQ7efdiLnwxUjKZ2Ww.png">
    <h1 id="Username">3X3#3359</h1>
    <h2 id="AboutH">About Me:</h2>
    <h2 id="AboutM">JavaScript &#38 Python Programmer <br>------------------------------<br>This website will show my <br> updated username if I get <br> banned or change my tag.
    </h2>
    <button id="Button" onclick="Start()">Click to enter Website</button>
    <button id="Profile" onclick="DiscordProfile()">Goto Profile</button>
</body>
</html>
<style>
    @keyframes ColorTransition {
        0% {
            background-color: black
        }
        50% {
            background-color: red
        }
        70% {
            background-color: pink;
        }
        100% {
            background-color: orange;
        }
    }
    #Button {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        color: white;
        font-size: 1in;
        background-color: black;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        border-style: none;
        z-index: 99;
        animation: ColorTransition 1.5s infinite;
    }
    body {
        overflow: hidden;
        background-color: rgb(30,30,30);
    }
    #Username {
        position: absolute;
        left: 620px;
        top: 350px;
        font-family: Arial, impact;
        letter-spacing: -0.4mm;
        color: rgb(255, 255, 255);
        transition: 0.3s ease-in-out;
        text-shadow: 2px 2px 25px rgba(255,255,255);
    }
    #Username:hover {
        transition: 0.3s ease-in-out;
        top: 346px;
    }
    @keyframes ImageFloat {
        0% {
            transform: translateY(0px);
        }
        10% {
            transform: translateY(1px);  
        }    
        20% {
            transform: translateY(2px);  
        }
        30% {
            transform: translateY(3px);  
        }
        40% {
            transform: translateY(4px);  
        }
        50% {
             transform: translateY(5px);  
        }
        60% {
             transform: translateY(4px);  
        }
        70% {
             transform: translateY(3px);  
        }
        80% {
             transform: translateY(2px);  
        }
         90% {
            transform: translateY(1px);  
        }
        100% {
            transform: translateY(0px);
        }
    }   
    #PFP {
        position: absolute;
        width: 115px;
        height: 115px;
        left: 708.9px;
        top: 250px;
        border-radius: 100px;
        box-shadow: 2px 2px 15px 2px rgba(255,255,255);
        animation: ImageFloat 0.7s infinite;
        transition: 0.3s ease-in-out;
    }
    #PFP:hover {
        transition: 0.3s ease-in-out;
        filter: invert();
        box-shadow: 2px 2px 15px 2px rgba(48,48,48);
    }
    #Profile {
        position: absolute;
        border: none;
        border-radius: 1mm;
        color: white;
        background-color: rgb(30, 189, 25);
        width: 90px;
        height: 25px;
        top: 377.9px;
        left: 814px;
        box-shadow: 2px 2px 15px 2px rgb(0, 255, 64);
        transition: 0.3s ease-in-out;
        font-family: Arial;
    }
    #Profile:hover {
        transition: 0.3s ease-in-out;
        top: 373px;
    }
    #box {
        position: absolute;
        background-color: rgb(38,38,38);
        top: 222px;
        left: 614px;
        width: 300px;
        height: 350px;
        border-radius: 3px;
        transition: 0.3s ease-in-out;
        opacity: 0.99;
    }
    #box2 {
        position: absolute;
        background-color: rgb(50,50,50);
        top: 222px;
        left: 614px;
        width: 300px;
        height: 80px;
        border-radius: 3px;
        transition: 0.3s ease-in-out;
        opacity: 0.99;
    }
    #box3 {
        position: absolute;
        background-color: rgb(50,50,50);
        top: 409px;
        left: 614px;
        width: 300px;
        height: 2.5px;
        border-radius: 3px;
        transition: 0.3s ease-in-out;
        opacity: 0.99;
    }
    #AboutH {
        position: absolute;
        color: white;
        top: 415px;
        left: 622px;
        font-size: 5mm;
        font-family: 'fantasy';
        transition: 0.3s ease-in-out;
    }
    #AboutM {
        position: absolute;
        color: rgb(230,230,230);
        top: 445px;
        left: 624px;
        font-size: 4mm;
        font-family: 'Courier New', Courier;
    }
    #box4 {
        position: absolute;
        background-color: rgb(34,34,34);
        top: 455px;
        left: 620px;
        width: 288px;
        height: 110px;
        border-radius: 3px;
        transition: 0.3s ease-in-out;
    }
    #box:hover {
        transition: 0.3s ease-in-out;
        filter: invert();
        opacity: 1;
    }
    @media (max-width: 940px) {
        #box {
            left: 110px;
            top: 60px;
        }
        #box2 {
            left: 110px;
            top: 60px;
        }
        #box3 {
            left: 110px;
            top: 215px;
        }
        #box4 {
            left: 117px;
            top: 295px;
        }
        #AboutH {
            left: 118px;
            top: 255px;
        }
        #AboutM {
            left: 119px;
            top: 285px;
        }
        #PFP {
            left: 200px;
            top: 60px;
        }
        #Profile {
            left: 316px;
            top: 186px;
        }
        #Profile:hover {
            top: 182px;
        }
        #Username {
            left: 113px;
            top: 160px;
        }
        #Username:hover {
            top: 155px;
        }
    }
</style>

<script>
function Start() {
    document.getElementById('Button').remove()
    document.getElementById('Audio').play()
}
function DiscordProfile() {
    window.open('https://lookup.guru/812787047000571904')
}
function ColorWhite() {
    document.getElementById('Username').style.color = 'white'
    document.getElementById('AboutH').style.color = 'white'
}
function ColorBlack() {
    document.getElementById('Username').style.color = 'black'
    document.getElementById('AboutH').style.color = 'black'
}
</script>
