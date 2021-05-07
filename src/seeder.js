import dotenv from 'dotenv';
import artists from './data/artists.js';
import artwork from './data/artwork.js';
import Artist from './models/Artist.js';
import Artwork from './models/Artwork.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Artwork.deleteMany();
    await Artist.deleteMany();
    await Artwork.insertMany(artwork);
    await Artist.insertMany(artists);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Artwork.deleteMany();
    await Artist.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// ie, ran "npm run data:destroy" else "npm run data:import"
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
