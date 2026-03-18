// =============================================
//  EnglishQuest – script.js
//  Integração com Supabase
// =============================================

// ── SUPABASE CONFIG ────────────────────────────
const SUPABASE_URL = "https://bfkiipxuilltkjrrztmx.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJma2lpcHh1aWxsdGtqcnJ6dG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMjE2NzUsImV4cCI6MjA4ODY5NzY3NX0.auc6AGduIrb-05947GH8mUysRfIa9zlHiVdPNQso5kU"

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── QUESTION DATA ──────────────────────────────
const LEVELS = [
  {
    name: "Level 1 · Counting 🔢",
    emoji: "🔢",
    questions: [
      {
        type: "multiple",
        visual: "📷📷📷",
        text: "How many cameras are there?",
        options: ["1", "2", "3", "5"],
        answer: "3"
      },
      {
        type: "truefalse",
        visual: "🛁",
        text: 'Is this sentence correct?\n"This is a bath."',
        options: ["True ✅", "False ❌"],
        answer: "True ✅"
      },
      {
        type: "multiple",
        visual: "🪑🪑",
        text: "How many chairs are there?",
        options: ["1", "2", "3", "4"],
        answer: "2"
      },
      {
        type: "truefalse",
        visual: "🐱🐱🐱🐱",
        text: 'Is this sentence correct?\n"There are four cats."',
        options: ["True ✅", "False ❌"],
        answer: "True ✅"
      },
      {
        type: "multiple",
        visual: "📚📚📚📚📚",
        text: "How many books are there?",
        options: ["3", "4", "5", "6"],
        answer: "5"
      }
    ]
  },
  {
    name: "Level 2 · There is / are 📝",
    emoji: "📝",
    questions: [
      {
        type: "blank",
        visual: "👩‍🏫",
        text: "Complete the sentence:",
        blankBefore: "There",
        blankAfter: "a teacher in the classroom.",
        options: ["is", "are"],
        answer: "is"
      },
      {
        type: "blank",
        visual: "🐦🐦",
        text: "Complete the sentence:",
        blankBefore: "There",
        blankAfter: "two birds on the tree.",
        options: ["is", "are"],
        answer: "are"
      },
      {
        type: "truefalse",
        visual: "🍎",
        text: 'Is this sentence correct?\n"There are an apple on the table."',
        options: ["True ✅", "False ❌"],
        answer: "False ❌"
      },
      {
        type: "blank",
        visual: "🐕🐕🐕",
        text: "Complete the sentence:",
        blankBefore: "There",
        blankAfter: "three dogs in the park.",
        options: ["is", "are"],
        answer: "are"
      },
      {
        type: "truefalse",
        visual: "🪟",
        text: 'Is this sentence correct?\n"There is a window in the room."',
        options: ["True ✅", "False ❌"],
        answer: "True ✅"
      }
    ]
  },
  {
    name: "Level 3 · Prepositions 📍",
    emoji: "📍",
    questions: [
      {
        type: "blank",
        visual: "🐱🪑",
        text: "The cat is sitting:",
        blankBefore: "The cat is",
        blankAfter: "the chair.",
        options: ["on", "under"],
        answer: "on"
      },
      {
        type: "multiple",
        visual: "🎒",
        text: "The bag is __ the desk.\n(it's below the desk)",
        options: ["on", "in", "under", "next to"],
        answer: "under"
      },
      {
        type: "blank",
        visual: "📦",
        text: "Where is the ball?",
        blankBefore: "The ball is",
        blankAfter: "the box.",
        options: ["in", "on"],
        answer: "in"
      },
      {
        type: "multiple",
        visual: "🐶🌳",
        text: "The dog is __ the tree.\n(it's beside the tree)",
        options: ["on", "under", "in", "next to"],
        answer: "next to"
      },
      {
        type: "blank",
        visual: "☕📱🖥️",
        text: "Where is the phone?",
        blankBefore: "The phone is",
        blankAfter: "the laptop and the cup.",
        options: ["next to", "between"],
        answer: "between"
      }
    ]
  },
  {
    name: "Level 4 · Possessives & Colors 🎨",
    emoji: "🎨",
    questions: [
      {
        type: "multiple",
        visual: "🎒",
        text: "The bag belongs to me.\nIt is ___.",
        options: ["mine", "yours", "his", "hers"],
        answer: "mine"
      },
      {
        type: "truefalse",
        visual: "🧢👦",
        text: 'Is this sentence correct?\n"This is Tom\'s hat."',
        options: ["True ✅", "False ❌"],
        answer: "True ✅"
      },
      {
        type: "blank",
        visual: "🚲👧",
        text: "The bike belongs to her.",
        blankBefore: "The bike is",
        blankAfter: ".",
        options: ["hers", "his"],
        answer: "hers"
      },
      {
        type: "multiple",
        visual: "⚽👦👦",
        text: "The ball belongs to the boys.\nIt is ___.",
        options: ["mine", "hers", "theirs", "yours"],
        answer: "theirs"
      },
      {
        type: "truefalse",
        visual: "📖👩‍🏫",
        text: 'Is this sentence correct?\n"This book is your."',
        options: ["True ✅", "False ❌"],
        answer: "False ❌"
      },
      {
        type: "multiple",
        visual: "🍎",
        text: "What color is the apple?",
        options: ["blue", "red", "green", "yellow"],
        answer: "red"
      },
      {
        type: "blank",
        visual: "🐘",
        text: "Describe the elephant:",
        blankBefore: "The elephant is",
        blankAfter: "and big.",
        options: ["grey", "pink"],
        answer: "grey"
      },
      {
        type: "truefalse",
        visual: "🍋",
        text: 'Is this sentence correct?\n"The lemon is yellow."',
        options: ["True ✅", "False ❌"],
        answer: "True ✅"
      },
      {
        type: "multiple",
        visual: "🐸",
        text: "What color is the frog?",
        options: ["red", "blue", "green", "orange"],
        answer: "green"
      },
      {
        type: "blank",
        visual: "🌊",
        text: "Describe the ocean:",
        blankBefore: "The ocean is",
        blankAfter: "and deep.",
        options: ["blue", "red"],
        answer: "blue"
      }
    ]
  },
  {
    name: "Level 5 · Plurals & Verbs 📖",
    emoji: "📖",
    questions: [
      {
        type: "multiple",
        visual: "👧👦👧",
        text: "What is the plural of \"child\"?",
        options: ["childs", "childen", "children", "childes"],
        answer: "children"
      },
      {
        type: "truefalse",
        visual: "🦷🦷",
        text: 'Is this sentence correct?\n"I have two tooths."',
        options: ["True ✅", "False ❌"],
        answer: "False ❌"
      },
      {
        type: "blank",
        visual: "🐟🐟🐟",
        text: "Complete with the correct plural:",
        blankBefore: "There are three",
        blankAfter: "in the lake.",
        options: ["fish", "fishes"],
        answer: "fish"
      },
      {
        type: "multiple",
        visual: "🐭🐭",
        text: "What is the plural of \"mouse\"?",
        options: ["mouses", "mice", "mices", "mouse"],
        answer: "mice"
      },
      {
        type: "truefalse",
        visual: "🦶🦶",
        text: 'Is this sentence correct?\n"My feet are cold."',
        options: ["True ✅", "False ❌"],
        answer: "True ✅"
      },
      {
        type: "blank",
        visual: "🐶",
        text: "Complete the sentence:",
        blankBefore: "The dog",
        blankAfter: "a long tail.",
        options: ["has", "have"],
        answer: "has"
      },
      {
        type: "multiple",
        visual: "👩‍🍳",
        text: "She ___ breakfast every morning.",
        options: ["make", "makes", "making", "maked"],
        answer: "makes"
      },
      {
        type: "truefalse",
        visual: "👦📚",
        text: 'Is this sentence correct?\n"He like to read books."',
        options: ["True ✅", "False ❌"],
        answer: "False ❌"
      },
      {
        type: "blank",
        visual: "🐱😴",
        text: "Complete the sentence:",
        blankBefore: "The cat",
        blankAfter: "all day long.",
        options: ["sleeps", "sleep"],
        answer: "sleeps"
      },
      {
        type: "multiple",
        visual: "👨‍👩‍👧‍👦",
        text: "My family ___ in a big house.",
        options: ["live", "lives", "living", "livs"],
        answer: "lives"
      }
    ]
  }
];

// ── STATE ──────────────────────────────────────
let state = {
  level: 0,
  questionIndex: 0,
  score: 0,
  lives: 3,
  answered: false,
  playerName: '',
  sessionId: null,
};

// ── DOM REFS ───────────────────────────────────
const screens = {
  home:     document.getElementById("screen-home"),
  game:     document.getElementById("screen-game"),
  levelup:  document.getElementById("screen-levelup"),
  gameover: document.getElementById("screen-gameover"),
  win:      document.getElementById("screen-win"),
};

// ── SCREEN MANAGEMENT ─────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

// ── INIT STARS ────────────────────────────────
function initStars() {
  const container = document.getElementById("stars");
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("div");
    s.className = "star";
    const size = Math.random() * 16 + 6;
    s.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(s);
  }
}

// ── SOUND ─────────────────────────────────────
function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "correct") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.start(); osc.stop(ctx.currentTime + 0.5);
    } else {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.setValueAtTime(130, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(); osc.stop(ctx.currentTime + 0.35);
    }
  } catch(e) { /* silence if audio fails */ }
}

// ── CONFETTI ──────────────────────────────────
function launchConfetti(duration = 2500) {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";

  const colors = ["#58cc02","#ffc800","#1cb0f6","#ff4b4b","#ce82ff","#ff9900"];
  const particles = Array.from({length: 110}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 1.5,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - .5) * .15,
    drift: (Math.random() - .5) * 2,
  }));

  const end = Date.now() + duration;
  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y += p.speed; p.x += p.drift; p.angle += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size * 0.6);
      ctx.restore();
    });
    if (Date.now() < end) requestAnimationFrame(frame);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display="none"; }
  }
  frame();
}

// ── SUPABASE: CRIAR SESSÃO ─────────────────────
async function createSession() {
  try {
    const { data, error } = await db
      .from('game_sessions')
      .insert({
        player_name:     state.playerName,
        score:           0,
        lives_remaining: 3,
        level_reached:   1,
        completed:       false,
      })
      .select('id')
      .single();

    if (error) throw error;
    state.sessionId = data.id;
  } catch (err) {
    console.warn('Supabase createSession falhou:', err.message);
  }
}

// ── SUPABASE: ATUALIZAR SESSÃO ─────────────────
async function updateSession(extra = {}) {
  if (!state.sessionId) return;
  try {
    const { error } = await db
      .from('game_sessions')
      .update({
        score:           state.score,
        lives_remaining: state.lives,
        level_reached:   state.level + 1,
        ...extra,
      })
      .eq('id', state.sessionId);

    if (error) throw error;
  } catch (err) {
    console.warn('Supabase updateSession falhou:', err.message);
  }
}

// ── SUPABASE: SALVAR NO LEADERBOARD ───────────
async function saveToLeaderboard() {
  try {
    const { error } = await db
      .from('leaderboard')
      .insert({
        player_name:   state.playerName,
        score:         state.score,
        level_reached: state.level + 1,
      });

    if (error) throw error;
  } catch (err) {
    console.warn('Supabase leaderboard falhou:', err.message);
  }
}

// ── SUPABASE: BUSCAR RANKING ───────────────────
async function fetchLeaderboard() {
  try {
    const { data, error } = await db
      .from('leaderboard')
      .select('player_name, score, level_reached')
      .order('score', { ascending: false })
      .limit(5);

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.warn('Supabase fetchLeaderboard falhou:', err.message);
    return [];
  }
}

// ── LOAD QUESTION ─────────────────────────────
function loadQuestion() {
  const level = LEVELS[state.level];
  const q = level.questions[state.questionIndex];
  state.answered = false;

  document.getElementById("level-badge").textContent = level.name;

  const total = level.questions.length;
  const pct = (state.questionIndex / total) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-label").textContent =
    `${state.questionIndex + 1} / ${total}`;

  document.getElementById("question-visual").textContent = q.visual;

  const qtEl = document.getElementById("question-text");
  const fbEl  = document.getElementById("fill-blank");
  const qCard = document.getElementById("question-card");

  qCard.style.animation = "none";
  void qCard.offsetWidth;
  qCard.style.animation = "";

  if (q.type === "blank") {
    qtEl.textContent = q.text;
    document.getElementById("blank-before").textContent = q.blankBefore + " ";
    document.getElementById("blank-slot").textContent = "___";
    document.getElementById("blank-slot").classList.remove("filled");
    document.getElementById("blank-after").textContent = " " + q.blankAfter;
    fbEl.style.display = "block";
  } else {
    qtEl.textContent = q.text;
    fbEl.style.display = "none";
  }

  const fb = document.getElementById("feedback-banner");
  fb.className = "feedback-banner hidden";

  const grid = document.getElementById("answers-grid");
  grid.innerHTML = "";
  const isTwoOpt = q.options.length === 2;
  grid.className = "answers-grid " + (isTwoOpt ? "cols-2" : "cols-1");

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => checkAnswer(opt, btn, q));
    grid.appendChild(btn);
  });

  document.getElementById("btn-next").classList.add("hidden");
  updateLives();
  updateScore();
}

// ── CHECK ANSWER ──────────────────────────────
function checkAnswer(selected, btn, q) {
  if (state.answered) return;
  state.answered = true;

  const correct = selected === q.answer;
  const fb = document.getElementById("feedback-banner");

  document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);

  if (correct) {
    state.score += 10;
    btn.classList.add("selected-correct");
    fb.className = "feedback-banner correct";
    document.getElementById("feedback-icon").textContent = "✅";
    document.getElementById("feedback-text").textContent = "Correct! Great job! 🎉";
    playSound("correct");

    if (q.type === "blank") {
      const slot = document.getElementById("blank-slot");
      slot.textContent = selected;
      slot.classList.add("filled");
    }
  } else {
    state.lives--;
    btn.classList.add("selected-wrong");
    fb.className = "feedback-banner wrong";
    document.getElementById("feedback-icon").textContent = "❌";
    document.getElementById("feedback-text").textContent =
      `Try again! The answer is: "${q.answer}"`;
    playSound("wrong");

    document.querySelectorAll(".answer-btn").forEach(b => {
      if (b.textContent === q.answer) b.classList.add("selected-correct");
    });
  }

  fb.classList.remove("hidden");
  updateLives();
  updateScore();

  updateSession();

  if (state.lives <= 0) {
    setTimeout(showGameOver, 1400);
    return;
  }

  document.getElementById("btn-next").classList.remove("hidden");
}

// ── NEXT QUESTION ─────────────────────────────
function nextQuestion() {
  const level = LEVELS[state.level];
  state.questionIndex++;

  if (state.questionIndex >= level.questions.length) {
    showLevelComplete();
  } else {
    loadQuestion();
  }
}

// ── UPDATE UI ─────────────────────────────────
function updateLives() {
  const hearts = document.querySelectorAll(".heart");
  hearts.forEach((h, i) => {
    h.classList.toggle("lost", i >= state.lives);
  });
}

function updateScore() {
  document.getElementById("score-display").textContent = state.score;
}

// ── LEVEL COMPLETE ────────────────────────────
function showLevelComplete() {
  const starMap = { 3:"⭐⭐⭐", 2:"⭐⭐", 1:"⭐", 0:"" };
  document.getElementById("stars-earned").textContent = starMap[state.lives] || "⭐";
  document.getElementById("levelup-title").textContent =
    state.level < LEVELS.length - 1 ? "Level Complete! 🎉" : "Final Level Done! 🏆";
  document.getElementById("levelup-emoji").textContent =
    LEVELS[state.level].emoji;

  launchConfetti(2200);
  showScreen("levelup");
}

// ── ADVANCE LEVEL ─────────────────────────────
function advanceLevel() {
  state.level++;
  state.questionIndex = 0;

  if (state.level >= LEVELS.length) {
    showWin();
  } else {
    showScreen("game");
    loadQuestion();
  }
}

// ── GAME OVER ─────────────────────────────────
function showGameOver() {
  document.getElementById("gameover-score").textContent = state.score;
  updateSession({ completed: false });
  showScreen("gameover");
}

// ── WIN ───────────────────────────────────────
// ✅ CORREÇÃO: renderLeaderboard() agora é chamada com await
async function showWin() {
  document.getElementById("win-score").textContent = state.score;

  const rank = state.score >= 220 ? "🏆 Champion!"
             : state.score >= 160  ? "⭐ Superstar!"
             : state.score >= 100  ? "😊 Good Job!"
             :                       "📖 Keep Practicing!";
  document.getElementById("win-rank").textContent = rank;

  await updateSession({ completed: true });
  await saveToLeaderboard();
  await renderLeaderboard(); // ✅ aguarda antes de exibir a tela

  launchConfetti(3500);
  showScreen("win");
}

// ── RENDERIZAR LEADERBOARD NA TELA DE VITÓRIA ─
// ✅ CORREÇÃO: usa o elemento fixo do HTML, sem insertBefore dinâmico
async function renderLeaderboard() {
  const lbEl = document.getElementById("leaderboard-block");

  // Mostra loading enquanto busca
  lbEl.innerHTML = '<p style="font-weight:800;color:#46a302;margin-bottom:8px;">🏅 Top 5 Players</p>'
                 + '<p style="color:#aaa;font-size:.85rem;">Loading...</p>';

  const rows = await fetchLeaderboard();

  lbEl.innerHTML = '<p style="font-weight:800;color:#46a302;margin-bottom:8px;">🏅 Top 5 Players</p>';

  if (!rows.length) {
    lbEl.innerHTML += '<p style="color:#aaa;font-size:.85rem;">No records yet.</p>';
    return;
  }

  const medals = ["🥇","🥈","🥉","4️⃣","5️⃣"];
  rows.forEach((row, i) => {
    // ✅ CORREÇÃO: compara pelo score também para destacar o jogador atual com mais precisão
    const isYou = row.player_name === state.playerName;
    lbEl.innerHTML += `
      <div style="
        display:flex; justify-content:space-between; align-items:center;
        padding: 6px 0;
        border-bottom: 1px solid #e0f0cc;
        font-weight: ${isYou ? 800 : 600};
        color: ${isYou ? '#46a302' : '#3c3c3c'};
        font-size: .92rem;
      ">
        <span>${medals[i]} ${row.player_name}${isYou ? ' (you!)' : ''}</span>
        <span>⭐ ${row.score}</span>
      </div>
    `;
  });
}

// ── CAPTURAR NOME DO JOGADOR ───────────────────
function injectNameInput() {
  const card = document.querySelector(".home-card");
  const btnStart = document.getElementById("btn-start");

  const wrapper = document.createElement("div");
  wrapper.style.cssText = "width:100%;margin-bottom:16px;";
  wrapper.innerHTML = `
    <input
      id="player-name-input"
      type="text"
      maxlength="20"
      placeholder="Enter your name 👤"
      style="
        width: 100%;
        padding: 13px 18px;
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        border: 2.5px solid #e0e0e0;
        border-radius: 12px;
        outline: none;
        color: #3c3c3c;
        transition: border-color .2s;
        box-sizing: border-box;
      "
    />
  `;

  card.insertBefore(wrapper, btnStart);

  const input = document.getElementById("player-name-input");
  input.addEventListener("focus", () => input.style.borderColor = "#58cc02");
  input.addEventListener("blur",  () => input.style.borderColor = "#e0e0e0");
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") btnStart.click();
  });
}

// ── RESTART ───────────────────────────────────
async function resetGame() {
  const input = document.getElementById("player-name-input");
  const name = input ? input.value.trim() : '';
  const playerName = name || 'Anonymous';

  // ✅ Reconstrói o state completamente para evitar vazamento de dados entre sessões
  state = {
    level: 0,
    questionIndex: 0,
    score: 0,
    lives: 3,
    answered: false,
    playerName: playerName,
    sessionId: null,
  };

  createSession(); // fire-and-forget: não bloqueia o início do jogo

  showScreen("game");
  loadQuestion();
}

// ── EVENT LISTENERS ───────────────────────────
document.getElementById("btn-start").addEventListener("click", resetGame);
document.getElementById("btn-next").addEventListener("click", nextQuestion);
document.getElementById("btn-next-level").addEventListener("click", advanceLevel);
document.getElementById("btn-restart-go").addEventListener("click", resetGame);
document.getElementById("btn-play-again").addEventListener("click", resetGame);

// ── START ─────────────────────────────────────
initStars();
injectNameInput();