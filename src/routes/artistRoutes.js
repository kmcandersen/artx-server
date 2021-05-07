import express from 'express';
import Artist from '../models/Artist.js';

const router = express.Router();

router.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.send(artists);
  } catch (error) {
    res.send('GET all artists error: ', error.message);
  }
});

// add a new user/artist to db, once their Firebase ID is created
router.post('/artists', async (req, res) => {
  const { fbId, email, name } = req.body;

  if (!fbId || !email) {
    return res.status(422).send({ error: 'Email address is required' });
  }

  try {
    const artist = new Artist({ fbId, email, name });
    await artist.save();
    res.send(artist);
  } catch (error) {
    return res.status(422).send({ error: 'User not added' });
  }
});

// fields wo new data should not change to null
// not all fields should be allowed to change
router.patch('/artists/:id', async (req, res) => {
  const filter = { fbId: req.params.id };
  try {
    const artist = await Artist.findOneAndUpdate(
      filter,
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    );

    // updates initials IF name changed
    if (req.body.name) {
      let splitName = req.body.name.split(' ');
      if (splitName.length > 1) {
        artist.initials = `${splitName[0][0]}${
          splitName[splitName.length - 1][0]
        }`;
      } else {
        artist.initials = splitName[0][0];
      }
    }

    res.status(201).json(artist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
