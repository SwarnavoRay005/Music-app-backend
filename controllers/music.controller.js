import Music from "../models/music.models.js";
import jwt from "jsonwebtoken";
import Album from "../models/album.models.js";
import { uploadFile } from "../services/storage.service.js";

export const createMusic = async (req, res) => {
  // creating a music (only if the user is an artist):
  const { title } = req.body;
  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await Music.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  res.status(201).json({ message: "Music created successfully", music });
};

export const createAlbum = async (req, res) => {
  const { title, musics } = req.body;

  const album = await Album.create({
    title,
    artist: req.user.id,
    musics: musics,
  });

  res.status(201).json({ message: "Album created successfully", album });
};

export const getallMusics = async (req, res) => {
  const musics = await Music.find().populate("artist"); // gets the data of the artist as well

  res.status(200).json({ message: "Musics fetched successfully", musics });
};

export const getallAlbums = async (req, res) => {
  const albums = await Album.find().populate("artist"); // gets the data of the artist as well

  res.status(200).json({ message: "Albums fetched successfully", albums });
};
