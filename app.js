document.addEventListener('DOMContentLoaded', function () {
  const gedungRadio = document.querySelectorAll('input[name="gedung"]');
  const lantaiRadio = document.querySelectorAll('input[name="lantai"]');
  const ruanganList = document.querySelectorAll('.list-data .card');

  function filterRuangan() {
    const selectedGedung = document.querySelector('input[name="gedung"]:checked')?.id;
    const selectedLantai = document.querySelector('input[name="lantai"]:checked')?.id;

    ruanganList.forEach((ruangan) => {
      const gedung = ruangan.querySelector('.card-gedung')?.textContent.trim();

      if (
        (selectedGedung === 'fakultas-teknik-cilegon' && gedung === 'Gedung Letter U') ||
        (selectedGedung === 'fakultas-teknik-cilegon' && gedung === 'Gedung BR') ||
        (selectedGedung === 'fakultas-teknik-cilegon' && gedung === 'Gedung COE') ||
        (selectedGedung === 'fakultas-teknik-cilegon' && gedung === 'Lainnya')
      ) {
        if (selectedLantai === 'lantai-1' && gedung === 'Gedung Letter U') {
          ruangan.style.display = 'block';
        } else if (selectedLantai === 'lantai-2' && gedung === 'Gedung BR') {
          ruangan.style.display = 'block';
        } else if (selectedLantai === 'lantai-3' && gedung === 'Gedung COE') {
          ruangan.style.display = 'block';
        } else if (selectedLantai === 'lantai-4' && gedung === 'Lainnya') {
          ruangan.style.display = 'block';
        } else {
          ruangan.style.display = 'none';
        }
      } else {
        ruangan.style.display = 'none';
      }
    });
  }

  gedungRadio.forEach((radio) => radio.addEventListener('change', filterRuangan));
  lantaiRadio.forEach((radio) => radio.addEventListener('change', filterRuangan));

  filterRuangan();
});

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search');
  const ruanganList = document.querySelectorAll('.list-data .card');

  function searchRuangan() {
    const searchTerm = searchInput.value.toLowerCase();

    ruanganList.forEach((ruangan) => {
      const ruanganName = ruangan.querySelector('.card-ruangan')?.textContent.trim().toLowerCase();
      if (ruanganName.includes(searchTerm)) {
        ruangan.style.display = 'block';
      } else {
        ruangan.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', searchRuangan);
  searchRuangan();
});

// todo: add card status
const cardStatus = document.querySelectorAll('.card-status');

cardStatus.forEach((item) => {
  const status = item.getAttribute('class').split(' ')[1];
  const statusText = ['Available', 'Unavailable', 'Booking', 'Done'];
  const result = statusText.find((item) => item.toLowerCase() === status);
  item.textContent = result;
});
// Fungsi untuk menyimpan booking ke localStorage
function saveBookingToStorage(bookingData) {
  // Ambil data yang sudah ada atau buat array kosong
  const existingBookings = JSON.parse(localStorage.getItem('roomBookings')) || [];
  
  // Tambahkan booking baru
  existingBookings.push(bookingData);
  
  // Simpan kembali ke localStorage
  localStorage.setItem('roomBookings', JSON.stringify(existingBookings));
}

// Fungsi untuk mengambil semua booking
function getAllBookings() {
  return JSON.parse(localStorage.getItem('roomBookings')) || [];
}

// Fungsi untuk menghapus semua data (untuk testing)
function clearAllBookings() {
  localStorage.removeItem('roomBookings');
}
// // app.js - Tambahkan fungsi ini
// function generateRuangan() {
//   const listData = document.querySelector('.list-data');
//   listData.innerHTML = '';

//   for (const [gedung, data] of Object.entries(ruanganData)) {
//     if (gedung === 'Lainnya') {
//       data.forEach(ruangan => createCard(ruangan, gedung));
//     } else {
//       for (const [lantai, ruangans] of Object.entries(data)) {
//         ruangans.forEach(ruangan => createCard(ruangan, gedung));
//       }
//     }
//   }
// }

// function createCard(namaRuangan, gedung) {
//   const card = document.createElement('a');
//   card.className = 'card sm';
//   card.href = '#';
  
//   card.innerHTML = `
//     <div class="card-title">
//       <h4 class="card-ruangan">${namaRuangan}</h4>
//       <h5 class="card-gedung">${gedung}</h5>
//     </div>
//     <div class="card-status available"></div>
//   `;
  
//   document.querySelector('.list-data').appendChild(card);
// }

// // Panggil fungsi saat halaman dimuat
// document.addEventListener('DOMContentLoaded', generateRuangan);
// // app.js - Tambahkan fungsi profil
// function initProfile() {
//   const profileData = JSON.parse(localStorage.getItem('profile')) || {
//     name: 'Setiawan Permana',
//     status: 'Mahasiswa',
//     photo: '../assets/profile.png'
//   };

//   // Update semua komponen profil
//   document.querySelectorAll('.profile-name').forEach(el => el.textContent = profileData.name);
//   document.querySelectorAll('.profile-status').forEach(el => el.textContent = profileData.status);
//   document.querySelectorAll('.profile-img').forEach(img => img.src = profileData.photo);
// }

// // Form submit handler
// document.getElementById('editProfileForm')?.addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   const profileData = {
//     name: document.getElementById('fullName').value,
//     status: document.getElementById('userStatus').value,
//     photo: document.getElementById('profilePhoto').files[0] 
//       ? URL.createObjectURL(document.getElementById('profilePhoto').files[0])
//       : document.querySelector('.profile-img').src
//   };

//   localStorage.setItem('profile', JSON.stringify(profileData));
//   initProfile(); // Update UI
//   alert('Profil berhasil diperbarui!');
// });

// // Panggil saat halaman dimuat
// document.addEventListener('DOMContentLoaded', initProfile);