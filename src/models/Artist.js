import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  fbId: { type: String },
  name: { type: String, default: '', trim: true },
  initials: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'User must have an email address'],
  },
  displayEmail: {
    type: Boolean,
    default: false,
  },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  country: { type: String, default: '' },
  tags: { type: Array, default: [] },
  aboutMe: { type: String, default: '' },
  moreInfo: { type: String, default: '' },
  profilePhotoUrl: {
    type: Array,
    default: [],
  },
});

artistSchema.pre('save', async function () {
  try {
    let splitName = this.name.split(' ');
    if (splitName.length > 1) {
      this.initials = `${splitName[0][0]}${splitName[splitName.length - 1][0]}`;
    } else {
      this.initials = splitName[0][0];
    }
  } catch (error) {
    res.send(`Artist save function error: ${error.message}`);
  }
});

const Artist = mongoose.model('Artist', artistSchema);

export default Artist;
