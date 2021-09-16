import express from 'express';
import Artwork from '../models/Artwork.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/artwork', async (req, res) => {
  try {
    const artworks = await Artwork.find();
    artworks.sort((a, b) => (a.title > b.title ? 1 : -1));
    res.send(artworks);
  } catch (error) {
    res.send('GET all artwork error: ', error.message);
  }
});

router.post('/artwork', async (req, res) => {
  const { artistFbId, title, address, year, aboutText, tags, coords } =
    req.body;

  if (!title || !address) {
    return res.status(422).send({ error: 'Title and address are required' });
  }

  let photoUrls = req.body.photoUrls.length
    ? req.body.photoUrls
    : [
        `${process.env.CLOUD_UPLOAD_URL}/v1631823440/artwork/hf65gnbsxwvzjvz348zx.jpg`,
      ];

  try {
    const artwork = new Artwork({
      artistFbId,
      title,
      address,
      year,
      aboutText,
      tags,
      photoUrls,
      coords,
    });
    await artwork.save();
    res.send(artwork);
  } catch (error) {
    return res.status(422).send({ error: 'Artwork not added' });
  }
});

// fields wo new data should not change to null
// not all fields should be allowed to change
router.patch('/artwork/:id', async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndUpdate(
      req.params.id,
      // req.body,
      {
        $set: req.body,
        // $set: {
        //   title: req.body.title,
        //   address: req.body.address,
        // },
      },
      { runValidators: true, new: true }
    );
    res.status(201).json(artwork);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/artwork/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Artwork.findOneAndRemove({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error: 'Artwork not deleted' });
  }
});

export default router;
