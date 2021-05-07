import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import artistRoutes from './routes/artistRoutes.js';
import artworkRoutes from './routes/artworkRoutes.js';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(artistRoutes);
app.use(artworkRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
