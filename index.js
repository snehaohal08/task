// 1. Confetti Boom on Reload
window.onload = () => {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.5 } // Center boom
    });
};

// 2. Regular Side Booms (Every 2 seconds)
function fireBoom() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0, y: 0.6 } // Left
    });
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 1, y: 0.6 } // Right
    });
}
setInterval(fireBoom, 2000);

// 3. Music Control
function playMusic() {
    let music = document.getElementById("song");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// 4. Gift Box Toggle
const click = document.querySelector(".click");
const pdfBtn = document.querySelector(".pdf-btn");

click.addEventListener("click", () => {
    click.classList.toggle("active");
    pdfBtn.style.display = click.classList.contains("active") ? "block" : "none";
});

// 5. Touch/Click to Flip Cards
const allCards = document.querySelectorAll('.card');
allCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});