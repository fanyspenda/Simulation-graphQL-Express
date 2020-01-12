const alumniModel = require(`../../models/alumni`);
// const alumni = [
//   {
//     nama: "Fany",
//     tahun_lulus: 2020,
//     email: "fany@gmail.com",
//     pekerjaan: "Game Developer"
//   },
//   {
//     nama: "Ervansyah",
//     tahun_lulus: 2019,
//     email: "",
//     pekerjaan: "Web Developer"
//   },
//   {
//     nama: "Ervansyah",
//     tahun_lulus: 2019,
//     email: "",
//     pekerjaan: ""
//   }
// ];

const alumniResolver = {
  getAlumni: function() {
    let alumnis = alumniModel.find({}).then(docs => {
      return docs;
    });
    return alumnis;
  },

  total: () => {
    const countAlumni = {
      alumni: () => {
        let count = 0;
        count = alumniModel.count({}).then(total => {
          return total;
        });
        return count;
      },

      working: () => {
        let count = 0;
        count = alumniModel.count({ pekerjaan: { $ne: "" } }).then(total => {
          return total;
        });
        return count;
      },

      not_working: () => {
        let count = 0;
        count = alumniModel.count({ pekerjaan: "" }).then(total => {
          return total;
        });
        return count;
      },

      have_email: () => {
        let count = 0;
        count = alumniModel.count({ email: { $ne: "" } }).then(total => {
          return total;
        });
        return count;
      },

      no_email: () => {
        let count = 0;
        count = alumniModel.count({ email: "" }).then(total => {
          return total;
        });
        return count;
      }
    };

    return countAlumni;
  }
};

module.exports = alumniResolver;
