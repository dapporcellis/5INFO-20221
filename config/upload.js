const multer = require("multer");
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "projeto20221",
  api_key: "963331446926495",
  api_secret: "QD17N-hCKAycJEj-D_KtO6rwxqY",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [
    { width: 100, height: 100, gravity: "faces", crop: "thumb" },
  ],
});
const upload = multer({ storage: storage });

module.exports = upload;

/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/fotos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
*/
