
function playSound() {
var audio = new Audio('assets/Sounds/rizz.mp3');  // Erstelle ein Audio-Objekt mit der MP3-Datei
audio.play();  // Spiele den Sound ab
}


/* Consolen Test */
console.log("%cWas guckst du 🖕🏼", "color: limegreen; font-size: 24px;");
console.log("Das ist nur die Console oder was hast du jetzt erwartet🤷🏻‍♂️");


/* Audio play wenn man aufs pfp clickt */

function playSound_ack() {
  var audio = new Audio('assets/sounds/ack.mp3');  // Erstelle ein Audio-Objekt mit der MP3-Datei
  audio.play();  // Spiele den Sound ab
  }
  

function blackHoleTransition() {
  document.body.style.opacity = '0';


  setTimeout(() => {
    document.body.style.transition = 'all 0.2s ease-in-out';
    document.body.style.backgroundColor = "#121212";
  }, 10);
}

const code = [38, 38, 40, 40]; // ↑↑↓↓
let userInput = [];

window.addEventListener("keydown", e => {
  userInput.push(e.keyCode);
  if (userInput.toString().includes(code.toString())) {
    // Lauten Sound abspielen
    const audio = new Audio('assets/sounds/flashbang.mp3'); // Pfad zum Sound einfügen
    audio.volume = 1; // Lautstärke auf Maximum setzen
    audio.play();

    // White-Mode und Vollbild aktivieren
    document.body.style.backgroundColor = "#ffffff"; // Hintergrundfarbe auf Weiß setzen
    document.body.style.color = "#000000"; // Textfarbe auf Schwarz setzen

    // Alle Elemente auf der Seite auf White-Mode setzen
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      element.style.color = "#000000"; // Textfarbe auf Schwarz setzen
      if (element.style.backgroundColor !== "transparent") {
        element.style.backgroundColor = "#ffffff"; // Hintergrundfarbe auf Weiß setzen
      }
    });

    // Filter zurücksetzen (Helligkeits-Effekt entfernen)
    document.body.style.filter = "none"; 
    document.body.style.transition = "all 1s ease"; // Animation für den Übergang

    // Vollbild aktivieren
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }

    userInput = []; // Eingabe zurücksetzen
  }
  if (userInput.length > code.length) userInput.shift();
});



window.onload = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 2 && hour < 5) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'black';
    overlay.style.color = 'white';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = 9999;
    overlay.innerHTML = '<div style="text-align:center;"><h1>🕑 Bin grad am Schlafen!</h1><p>Ab 5 Uhr geht‘s weiter 😴</p></div>';
    document.body.appendChild(overlay);
  }
}


let keysPressed = {};

document.addEventListener('keydown', function(event) {
  keysPressed[event.key] = true;

  // Wenn 'm' und 'k' gleichzeitig gedrückt sind
  if (keysPressed['m'] && keysPressed['k']) {
    // Deine Animation oder Funktion starten
    startEasterEggAnimation();
  }
});

document.addEventListener('keyup', function(event) {
  keysPressed[event.key] = false;
});

function startEasterEggAnimation() {
  // Beispiel-Animation: die Seite fängt an, sich zu drehen
  document.body.style.transition = 'transform 1s ease-in-out';
  document.body.style.transform = 'rotate(720deg)';
  
  setTimeout(() => {
    document.body.style.transform = 'rotate(0deg)'; // Zurücksetzen
  }, 100);
}



// Hole das Paypal-Element
const paypalButton = document.querySelector('a.paypal');

// Füge EventListener für den Klick hinzu
paypalButton.addEventListener("click", (e) => {
  // Verhindere das Standardverhalten des Links
  e.preventDefault();

  // Setze die Klasse 'clicked', um den Text zu ändern
  paypalButton.classList.add('clicked');
  
  // Öffne den PayPal-Link in einem neuen Tab (wird hier nach dem Klick ausgeführt)
  window.open(paypalButton.href, '_blank');
});


