import Image from "../models/Image.js";

export const getImages = async (req, res) => {
  try {
    const images = await Image.find();

    return res.json(images);
  } catch (error) {
    return res.status(500), json({ message: error.message });
  }
};

export const getImagesByDates = async (req, res) => {
  try {
    console.log(req.body);
    const images = await Image.find({
      date: {
        $gte: req.body.start,
        $lt: req.body.end,
      },
    });
    return res.json(images);
  } catch (error) {
    return res.status(500), json({ message: error.message });
  }
};

export const postImages = async (req, res) => {
  try {
    const { date, user } = req.body;
    const newImages = {
      date: date,
      user: user,
      urlimages: req.file.path,
    };

    const image = new Image(newImages);
    await image.save();

    return res.json({ message: "Imagen guardada", image });
  } catch (error) {
    console.error(error);
  }
};
