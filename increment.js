// Diligent one aren'tcha? If you expected something here, it's best to scram. oh.. and if you read this, you're gullible. 
const incBtn = document.getElementById("incBtn");
const countNum = document.getElementById("countNum");
const funText = document.getElementById("uboa");
const title = document.getElementById("countTitle");
const admin = document.getElementById("countCredits");

const theme = new Audio('save.mp3');
theme.volume = 0.75;
theme.loop = true;

let count = 0;
let hasSpoken = false;
let freeze = false;

function Save(){
theme.play();
}

function SaveMute(){
theme.pause();
}

function changeBackgroundToBlack() {
  document.body.style.backgroundColor = "black";
}

function countNumtoWhite() {
  countNum.style.color = "white";
  countNum.style.fontFamily = "Kalam";
}

function titletoWhite(){
    title.style.color = "white";
    title.style.fontFamily = "Kalam";
    title.textContent = "Your reflection";
}

function creditstoWhite(){
    admin.style.color = "white";
    admin.style.fontFamily = "Kalam";
    admin.textContent = "oh? this is interesting...";
}

function Snow(){
      const audio = new Audio('snow.mp3');
      audio.volume = 0.75;
      audio.loop = true;
  audio.play();
}

function TitleChange(){
    document.title = "hopelessness";
}


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function updateText(count) {
  if (count >= 26722 && !hasSpoken) {
    hasSpoken = true;
    freeze = true;
    changeBackgroundToBlack();
    countNumtoWhite();
    titletoWhite();
    creditstoWhite();   
    Snow();
    SaveMute();
    TitleChange();

    const dialogue = [
      "So, we meet again.",
      "...A wonderful sight, isn't it?",
      "I'm sure that you still aren't aware yet however...",
      "You do know what you've caused right?",
      "Even now... you keep going. That's some real perseverance you got.",
      "You're not planning on stopping, are you?",
      "I like that about you. Your unwavering determination.",
      "Yet.. it still pisses me off somehow.",
      "Can't you just let go?",
      "Mika and the others... they've already made their decision.",
      "They've given up on you.",
      "Anyways, if you were searching for something... That password might lead you to IT.",
      "Maybe that is something of interest for a person like you.",
      "I shalln't interfere anymore — as I've already played my role.",
      "Farewell, may we meet again.",
      ""
    ];

    for (let line of dialogue) {
      funText.textContent = line;
      await wait(3000);
    }
  } else if (!hasSpoken) {
    funText.textContent = "";
  }
}

incBtn.onclick = function () {
  Save();
  if (freeze === true) return;
  count += 1;
  countNum.textContent = count;
  updateText(count);
};

console.log("save loaded");