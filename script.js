// --- THE MOVIE LIBRARY ---
const moviesAction = [
    { title: "John Wick", img: "johnwick.jpg", rating: "8.2", desc: "Ex-hitman seeks revenge.", trailer: "https://youtu.be/FkNxQ3sVMUE?si=26cJcvMSXWI-o7xw" },
    { title: "Mad Max", img: "madmax.jpg", rating: "8.1", desc: "Rebellion in the wasteland.", trailer: "https://youtu.be/sZ-4CME3TRs?si=P4oeeLoUfU8foQhe" },
    { title: "The operator", img: "operator.jpg", rating: "8.2", desc: "Jason statham.", trailer: "https://youtu.be/JIWARBvn8qU?si=FDS_E-9IzuJcEB3p" },
    { title: "The assassinator", img: "assassinator.jpg", rating: "8.1", desc: "Statham's action.", trailer: "https://youtu.be/YNemVi1H8Ck?si=AkIUAtpI-y3uE_U-" }
    // Add more action movies here following the same format!
];

const moviesComedy = [
    { title: "The Nice Guys", img: "thenice.jpg", rating: "7.4", desc: "Private eyes in the 70s.", trailer: "https://youtu.be/V9MkKjIFgb0?si=v64g4MCRL1eCryWp" },
    { title: "Step Brothers", img: "stepbrother.jpg", rating: "6.9", desc: "Grown men forced to live together.", trailer: "https://youtu.be/j5yLeYOjz4E?si=RYrlAwP9tb3Og9G2" },
    { title: "Superbad", img: "superbad.jpg", rating: "8.2", desc: "Ex-hitman seeks revenge.", trailer: "https://youtu.be/LvKvus3vCEY?si=CID96j05vmkkSWTI" },
    { title: "Game Night", img: "gamenight.jpg", rating: "8.1", desc: "ThE Game between household members.", trailer: "https://youtu.be/qmxMAdV6s4U?si=FbKNrwEdvx2H1kiZ" }
];

// --- THE QUIZ LOGIC ---
const questions = [
    { q: "Energy level?", a1: "High!", g1: "Action", a2: "Low...", g2: "Comedy" },
    { q: "Vibe?", a1: "Intense", g1: "Action", a2: "Chill", g2: "Comedy" },
    { q: "Weather?", a1: "Stormy", g1: "Action", a2: "Sunny", g2: "Comedy" },
    { q: "Snack?", a1: "Spicy", g1: "Action", a2: "Sweet", g2: "Comedy" },
    { q: "Goal?", a1: "Get Pumped", g1: "Action", a2: "Relax", g2: "Comedy" }
];

let currentIdx = 0;
let actionScore = 0;
let comedyScore = 0;
const qText = document.getElementById("question-text");
const btnBox = document.getElementById("answer-buttons");

function start() {
    currentIdx = 0; actionScore = 0; comedyScore = 0;
    show();
}

function show() {
    btnBox.innerHTML = "";
    let item = questions[currentIdx];
    qText.innerText = item.q;

    let b1 = document.createElement("button");
    b1.innerText = item.a1;
    b1.onclick = () => next(item.g1);
    btnBox.appendChild(b1);

    let b2 = document.createElement("button");
    b2.innerText = item.a2;
    b2.onclick = () => next(item.g2);
    btnBox.appendChild(b2);
}

function next(genre) {
    if (genre === "Action") { actionScore++; } else { comedyScore++; }
    currentIdx++;
    if (currentIdx < questions.length) { show(); } else { showResult(); }
}

// --- THE RESULT ENGINE (Randomizer + Links) ---
function showResult() {
    let movie;
    if (actionScore >= comedyScore) {
        // The Randomizer: Picks a random index from the Action list
        movie = moviesAction[Math.floor(Math.random() * moviesAction.length)];
    } else {
        // The Randomizer: Picks a random index from the Comedy list
        movie = moviesComedy[Math.floor(Math.random() * moviesComedy.length)];
    }

    qText.innerText = "Match Found!";
    btnBox.innerHTML = `
        <img src="${movie.img}" style="width: 200px; border-radius: 10px; margin: 15px auto; display: block;">
        <h2 style="color: #a29bfe; margin: 10px 0;">${movie.title}</h2>
        <p style="color: #f1c40f; font-weight: bold;">⭐ ${movie.rating}</p>
        <p style="font-size: 0.85rem; color: #ccc; margin-bottom: 20px;">${movie.desc}</p>
        
        <button onclick="window.open('${movie.trailer}', '_blank')" style="background-color: #e74c3c;">
            WATCH TRAILER
        </button>
        
        <button onclick="start()" style="background: transparent; border: 2px solid #6c5ce7; margin-top: 10px;">
            RESTART QUIZ
        </button>
    `;
}

start();
