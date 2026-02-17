import ImageKit from "@imagekit/nodejs";

const ImageKitClient = new ImageKit({
  privateKey: `${process.env.IMAGEKIT_PRIVATE_KEY}`,
});



export const uploadFile = async (file) => {
  const result = await ImageKitClient.files.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "spotify-backend/music",
  });

  return result;
};
