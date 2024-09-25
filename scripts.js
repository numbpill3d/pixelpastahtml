// Cursed Inventory
const cursedItems = ['skull', 'eye', 'doll', 'mirror', 'book', 'mask'];
const inventory = document.getElementById('inventory');
cursedItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cursed-item');
    itemElement.title = item;
    itemElement.addEventListener('click', () => cursedItemClick(item));
    inventory.appendChild(itemElement);
});

function cursedItemClick(item) {
    const messages = [
        "The " + item + " pulses with an otherworldly energy...",
        "You hear distant screams as you touch the " + item + "...",
        "The " + item + " whispers ancient secrets into your mind...",
        "A chill runs down your spine as you handle the " + item + "...",
        "The " + item + " seems to be staring back at you..."
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}

// Spirit Meter
const spiritLevel = document.getElementById('spirit-level');
setInterval(() => {
    const level = Math.random() * 100;
    spiritLevel.style.width = `${level}%`;
}, 3000);

// Moon Phase
const moonPhases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
const moonPhaseElement = document.getElementById('moon-phase');
setInterval(() => {
    const randomPhase = moonPhases[Math.floor(Math.random() * moonPhases.length)];
    moonPhaseElement.textContent = randomPhase;
}, 5000);

// Glitch Effect
const glitchOverlay = document.querySelector('.glitch-overlay');
setInterval(() => {
    glitchOverlay.style.opacity = '0.5';
    setTimeout(() => {
        glitchOverlay.style.opacity = '0';
    }, 100);
}, 10000);

// Random Haunting
const hauntedElements = document.querySelectorAll('h1, h2, h3, p');
setInterval(() => {
    const randomElement = hauntedElements[Math.floor(Math.random() * hauntedElements.length)];
    const originalText = randomElement.textContent;
    randomElement.textContent = '01010111 01000001 01010100 01000011 01001000 00100000 01001111 01010101 01010100';
    setTimeout(() => {
        randomElement.textContent = originalText;
    }, 1000);
}, 15000);

// Creepy Audio
function playCreepySound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(Math.random() * 200 + 100, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
}
setInterval(playCreepySound, 30000);

// Spiral Cursor
const spiralCursor = document.querySelector('.spiral-cursor');
document.addEventListener('mousemove', (e) => {
    spiralCursor.style.left = e.pageX + 'px';
    spiralCursor.style.top = e.pageY + 'px';
});

// Infected Cursor
const infectedCursor = document.getElementById('infected-cursor');
let cursorInfection = 0;
document.addEventListener('mousemove', (e) => {
    infectedCursor.style.left = e.pageX + 'px';
    infectedCursor.style.top = e.pageY + 'px';
    cursorInfection++;
    if (cursorInfection > 100) {
        infectedCursor.style.boxShadow = `0 0 ${cursorInfection / 10}px ${cursorInfection / 10}px rgba(255, 0, 0, 0.5)`;
    }
});

// ASCII Art Face
const asciiFace = document.getElementById('ascii-face');
const faces = [
    `
    .-""""""-.
  .'          '.
 /   .      .   \\
:   '        '   :
|   \   ----  /  |
 :  .'"____"'.  :
  '.          .'
    '-......-'
    `,
    `
     ,     ,
    (\\____/)
     (_oo_)
       (O)
     __||__    \\)
  []/______\\[] /
  / \\______/ \\/
 /    /__\\
(\\   /____\\
    `
];
asciiFace.textContent = faces[Math.floor(Math.random() * faces.length)];

// Creepy Messages
const creepyMessages = [
    "Behind you...",
    "Don't look away...",
    "It's watching you...",
    "You can't escape...",
    "Join us..."
];
const creepyMessageElement = document.getElementById('creepy-message');
setInterval(() => {
    creepyMessageElement.textContent = creepyMessages[Math.floor(Math.random() * creepyMessages.length)];
    creepyMessageElement.style.opacity = '1';
    setTimeout(() => {
        creepyMessageElement.style.opacity = '0';
    }, 3000);
}, 20000);

// Hidden Messages
function addHiddenMessages() {
    const hiddenMessages = [
        "Help me",
        "Save yourself",
        "They're coming",
        "Don't trust them",
        "Run while you can"
    ];
    document.body.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.001) {
            const hiddenMessage = document.createElement('div');
            hiddenMessage.classList.add('hidden-message');
            hiddenMessage.style.left = e.pageX + 'px';
            hiddenMessage.style.top = e.pageY + 'px';
            hiddenMessage.textContent = hiddenMessages[Math.floor(Math.random() * hiddenMessages.length)];
            document.body.appendChild(hiddenMessage);
            setTimeout(() => {
                hiddenMessage.remove();
            }, 1000);
        }
    });
}
addHiddenMessages();

// Start video on page load
window.addEventListener('load', () => {
    const staticVideo = document.getElementById('static-video');
    staticVideo.play();
});
