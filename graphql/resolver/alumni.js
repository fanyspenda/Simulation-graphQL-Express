const alumni = [
  {
    nama: "Fany",
    tahun_lulus: 2020,
    email: "fany@gmail.com",
    pekerjaan: "Game Developer"
  },
  {
    nama: "Ervansyah",
    tahun_lulus: 2019,
    email: "",
    pekerjaan: "Web Developer"
  },
  {
    nama: "Ervansyah",
    tahun_lulus: 2019,
    email: "",
    pekerjaan: ""
  }
];

const alumniResolver = {
  getAlumni: function() {
    return alumni;
  },

  total: function() {
    const countAlumni = {
      alumni: alumni.length,
      not_working: () => {
        let count = 0;
        alumni.map((value, index) => {
          if (value.pekerjaan == "") {
            count += 1;
          }
        });
        return count;
      },
      have_email: () => {
        let count = 0;
        alumni.map((value, index) => {
          if (value.email != "") {
            count += 1;
          }
        });
        return count;
      }
    };

    return countAlumni;
  }
};

module.exports = alumniResolver;
