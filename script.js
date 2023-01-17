function getPilihanComputer() {
  let comp = Math.random();

  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}

function rules(comp, player) {
  if (player == comp) return "DRAW!";
  if (player == "batu") return comp == "gunting" ? "WIN!" : "LOSE!";
  if (player == "gunting") return comp == "kertas" ? "WIN!" : "LOSE!";
  if (player == "kertas") return comp == "batu" ? "WIN!" : "LOSE!";
}

function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const img = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + img[i++] + ".png");
    if (i == img.length) {
      i = 0;
    }
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function (event) {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = rules(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pBatu.className;
// 	const hasil = rules(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGunting.className;
// 	const hasil = rules(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pKertas.className;
// 	const hasil = rules(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });
