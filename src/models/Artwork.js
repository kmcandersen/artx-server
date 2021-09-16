import mongoose from 'mongoose';
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    reviewerFbId: {
      type: String,
      // required: [true, 'Review must have a User id'],
    },
  },
  {
    timestamps: true,
  }
);

const artworkSchema = new mongoose.Schema({
  artistFbId: {
    type: String,
    // required: [true, 'Artwork must have an Artist id'],
  },
  title: { type: String, required: [true, 'Artwork must have a title'] },
  year: { type: Number, default: null },
  aboutText: { type: String, default: '' },
  address: { type: String, required: [true, 'Artwork must have a location'] },
  tags: { type: Array, default: [] },
  reviews: [reviewSchema],
  favoriteCount: { type: Number, default: 0 },
  photoUrls: {
    type: Array,
    default: [],
  },
  coords: { type: Array, default: [] },
});

const Artwork = mongoose.model('Artwork', artworkSchema);

export default Artwork;
