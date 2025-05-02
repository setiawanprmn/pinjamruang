// data.js
const ruanganData = {
    "Gedung Letter U": {
      "Lantai 2": Array.from({length: 16}, (_, i) => `R2-${(i+1).toString().padStart(2, '0')}`),
      "Lantai 3": Array.from({length: 16}, (_, i) => `R3-${(i+1).toString().padStart(2, '0')}`)
    },
    "Gedung BR": {
      "Lantai 1": ["BR 1-1", "BR 1-2", "BR 1-3"],
      "Lantai 2": ["BR 2-1", "BR 2-2", "BR 2-3"],
      "Lantai 3": ["BR 3-1", "BR 3-2", "BR 3-3"]
    },
    "Gedung COE": {
      "Lantai 1": ["COE1-01", "COE1-02", "COE1-03", "COE1-04"],
      "Lantai 2": ["COE2-01", "COE2-02", "COE2-03", "COE2-04"],
      "Lantai 3": ["COE3-01", "COE3-02", "COE3-03", "COE3-04"]
    },
    "Lainnya": ["Aula FT", "Vikon FT", "Lapangan A FT", "Lapangan B FT"]
  };