const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const alumniSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  tahun_lulus: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  pekerjaan: {
    type: String,
    required: false
  }
});

const Alumni = mongoose.model("alumnis", alumniSchema);

module.exports = Alumni;
