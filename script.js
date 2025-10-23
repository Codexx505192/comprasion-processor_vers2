const phones = {
  iphone15: {
    name: "iPhone 15 Pro",
    image: "img/iphone_15pro.png",
    score: 1641883,
    cpuFreq: 3780
  },
  samsung24: {
    name: "Samsung S24 Ultra",
    image: "img/samsung_s24_ultra.png",
    score: 1814869,
    cpuFreq: 3390
  },
  xiaomi14: {
    name: "Xiaomi 14 Ultra",
    image: "img/xiaomi 14 Ultra.png",
    score: 2100000,
    cpuFreq: 4200
  },
  samsung25: {
    name: "Samsung S25 Ultra",
    image: "img/s_25ultra.png",
    score: 2050000,
    cpuFreq: 3500
  },
  iphone17: {
    name: "iPhone 17 Pro",
    image: "img/iphone_17_pro.png",
    score: 2033552,
    cpuFreq: 4260
  },
  iphone11: {
    name: "iPhone 11",
    image: "img/iphone11.png",
    score: 929528,
    cpuFreq: 2650
  },
  realmegt7:{
    name: "realmi gt 7",
    image: "img/realmi_gt7f.png",
    score: 2151533,
    cpuFreq: 3400
  }
};

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

document.getElementById("compareBtn").addEventListener("click", () => {
  const key1 = document.getElementById("phone1").value;
  const key2 = document.getElementById("phone2").value;
  const p1 = phones[key1];
  const p2 = phones[key2];

  img1.src = p1.image;
  img2.src = p2.image;

  const maxScore = Math.max(p1.score, p2.score);
  const leftPercent = (p1.score / maxScore) * 100;
  const rightPercent = (p2.score / maxScore) * 100;

  const cpuLeftEl = document.getElementById("cpuLeft");
  const cpuRightEl = document.getElementById("cpuRight");
  cpuLeftEl.style.width = leftPercent + "%";
  cpuLeftEl.textContent = p1.score.toLocaleString();
  cpuRightEl.style.width = rightPercent + "%";
  cpuRightEl.textContent = p2.score.toLocaleString();

  const winnerEl = document.getElementById("cpuWinner");
  let speedText = "";

  if (p1.score > p2.score) {
    winnerEl.textContent = "🏆 Победитель: " + p1.name;
    speedText = `🚀 ${p1.name} быстрее, чем ${p2.name}`;
  } else if (p2.score > p1.score) {
    winnerEl.textContent = "🏆 Победитель: " + p2.name;
    speedText = `🚀 ${p2.name} быстрее, чем ${p1.name}`;
  } else {
    winnerEl.textContent = "⚖️ Ничья";
    speedText = "⚖️ Оба телефона одинаково быстрые!";
  }

  // показываем частоту процессора и кто быстрее
  const freqInfo = document.getElementById("freqInfo");
  freqInfo.innerHTML = `
    <p>${p1.name}: <b>${p1.cpuFreq} МГц</b></p>
    <p>${p2.name}: <b>${p2.cpuFreq} МГц</b></p>
    <hr>
    <p><b>${speedText}</b></p>
  `;
});

