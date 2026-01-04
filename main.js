// Fitur PopUp
var btnClose = document.getElementById("btnClose");
var overlay = document.getElementById("overlay");

// Muncul otomatis saat halaman dibuka
window.addEventListener("load", function () {
  overlay.classList.remove("hidden");
});

// Tutup popup
btnClose.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

// Klik area gelap untuk menutup
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.classList.add("hidden");
  }
});


const dataOrang = {
  ikhsan: { nama: "Ikhsan", kamar: "1 Tahanan" },
  april: { nama: "April", id: 2 },
  sulfi: { nama: "Sulfi", id: 3 },
  ahmad: { nama: "Ahmad", id: 4 },
  budi: { nama: "Budi", id: 5 },
  citra: { nama: "Citra", id: 6 },
  dinda: { nama: "Dinda", id: 7 },
  eka: { nama: "Eka", id: 8 },
  faisal: { nama: "Faisal", id: 9 },
  gilang: { nama: "Gilang", id: 10 },
  hendra: { nama: "Hendra", id: 11 },
  indah: { nama: "Indah", id: 12 },
  johan: { nama: "Johan", id: 13 },
  kartika: { nama: "Kartika", id: 14 },
  luthfi: { nama: "Luthfi", id: 15 },
  maya: { nama: "Maya", id: 16 },
  nabila: { nama: "Nabila", id: 17 },
  okta: { nama: "Okta", id: 18 },
  putri: { nama: "Putri", id: 19 },
  qori: { nama: "Qori", id: 20 },
  rizki: { nama: "Rizki", id: 21 },
  sari: { nama: "Sari", id: 22 },
  taufik: { nama: "Taufik", id: 23 },
  ulfa: { nama: "Ulfa", id: 24 },
  vina: { nama: "Vina", id: 25 },
  wahyu: { nama: "Wahyu", id: 26 },
  yusuf: { nama: "Yusuf", id: 27 },
  zahra: { nama: "Zahra", id: 28 },
  aditya: { nama: "Aditya", id: 29 },
  bella: { nama: "Bella", id: 30 },
  chandra: { nama: "Chandra", id: 31 },
  dewi: { nama: "Dewi", id: 32 },
  erwin: { nama: "Erwin", id: 33 },
  farah: { nama: "Farah", id: 34 },
  galih: { nama: "Galih", id: 35 },
  hana: { nama: "Hana", id: 36 },
  irfan: { nama: "Irfan", id: 37 },
  jessica: { nama: "Jessica", id: 38 },
  kevin: { nama: "Kevin", id: 39 },
  lina: { nama: "Lina", id: 40 },
  maulana: { nama: "Maulana", id: 41 },
  nadya: { nama: "Nadya", id: 42 },
  oscar: { nama: "Oscar", id: 43 },
  prima: { nama: "Prima", id: 44 },
  rani: { nama: "Rani", id: 45 },
  satria: { nama: "Satria", id: 46 },
  tiara: { nama: "Tiara", id: 47 },
  usman: { nama: "Usman", id: 48 },
  veronica: { nama: "Veronica", id: 49 },
  widya: { nama: "Widya", id: 50 },
  yuni: { nama: "Yuni", id: 51 },
  zaki: { nama: "Zaki", id: 52 },
  aldi: { nama: "Aldi", id: 53 },
  brian: { nama: "Brian", id: 54 },
  clara: { nama: "Clara", id: 55 },
  doni: { nama: "Doni", id: 56 },
  elsa: { nama: "Elsa", id: 57 },
  firman: { nama: "Firman", id: 58 },
  grace: { nama: "Grace", id: 59 },
  hilmi: { nama: "Hilmi", id: 60 },
  ilham: { nama: "Ilham", id: 61 },
  jihan: { nama: "Jihan", id: 62 },
  kiki: { nama: "Kiki", id: 63 },
  lukman: { nama: "Lukman", id: 64 },
  melisa: { nama: "Melisa", id: 65 },
  nico: { nama: "Nico", id: 66 },
  olivia: { nama: "Olivia", id: 67 },
  rama: { nama: "Rama", id: 68 },
  selvi: { nama: "Selvi", id: 69 },
  tommy: { nama: "Tommy", id: 70 }
};

// ================== FUNGSI PENCARIAN ==================
function cariNama() {
  const input = document.getElementById("inputNama").value.toLowerCase();
  const hasil = document.getElementById("hasil");

  if (dataOrang[input]) {
    hasil.textContent =
      `Nama: ${dataOrang[input].nama} | KAMAR: ${dataOrang[input].kamar}`;
  } else {
    hasil.textContent = "Nama tidak ditemukan";
  }
}

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.dataset.target;
      let current = 0;

      const increment = target / 100; // kecepatan

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
      observer.unobserve(counter); // supaya tidak hitung ulang
    }
  });
}, {
  threshold: 0.5 // 50% elemen terlihat
});

counters.forEach(counter => {
  observer.observe(counter);
});

function kirimWA() {
  var nomor = "6285299974205";
  var pesan = "Halo, minn bisa minta nomor WA nya?";

  var link = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
  window.open(link, "_blank");
}

