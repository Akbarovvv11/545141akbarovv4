function openGame(game) {
  localStorage.setItem('selectedGame', game);
  window.location.href = 'game.html';
}

function goBack() {
  window.location.href = 'index.html';
}

const gameTitle = document.getElementById('game-title');
const packagesContainer = document.getElementById('packages');

const gamesData = {
  pubg: {
    name: "PUBG Mobile",
    items: [
      { uc: "60 UC", price: "12,000 UZS" },
      { uc: "325 UC (RP)", price: "59,000 UZS" },
      { uc: "720 UC (RP)", price: "126,000 UZS" },
      { uc: "20,050 UC", price: "2,850,000 UZS" }
    ]
  },
  ml: {
    name: "Mobile Legends",
    items: [
      { uc: "86 Diamonds", price: "14,000 UZS" },
      { uc: "170 Diamonds", price: "25,000 UZS" },
      { uc: "514 Diamonds", price: "63,000 UZS" },
      { uc: "1000 Diamonds", price: "120,000 UZS" }
    ]
  },
  ff: {
    name: "Free Fire",
    items: [
      { uc: "100 Diamonds", price: "15,000 UZS" },
      { uc: "210 Diamonds", price: "30,000 UZS" },
      { uc: "560 Diamonds", price: "70,000 UZS" },
      { uc: "1150 Diamonds", price: "130,000 UZS" }
    ]
  }
};

if (gameTitle && packagesContainer) {
  const selectedGame = localStorage.getItem('selectedGame');
  const data = gamesData[selectedGame];
  if (data) {
    gameTitle.textContent = data.name;
    data.items.forEach(pkg => {
      const div = document.createElement('div');
      div.className = 'package';
      div.innerHTML = `<h3>${pkg.uc}</h3><p>${pkg.price}</p>`;
      packagesContainer.appendChild(div);
    });
  }
}

function sendOrder() {
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const game = localStorage.getItem('selectedGame');
  if (!id || !name) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }
  const message = `🎮 Yangi buyurtma!\n👤 Ism: ${name}\n🆔 ID: ${id}\n🕹️ O‘yin: ${gamesData[game].name}`;
  const url = `https://t.me/UC_UMAR?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}