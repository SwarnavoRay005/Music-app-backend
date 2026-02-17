import express from "express";
import {
  createAlbum,
  createMusic,
  getallAlbums,
  getallMusics,
} from "../controllers/music.controller.js";
import { authArtist, authUser } from "../middlewares/auth.middlewares.js";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

router.post("/upload", authArtist, upload.single("music"), createMusic);
router.post("/album", authArtist, createAlbum);

router.get("/", authUser, getallMusics);
router.get("/albums", authUser, getallAlbums);

export default router;
