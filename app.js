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
