const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

//Creamos el almacen
//// new = instansear
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "userProyectFullTime",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "svg", "webp"], //svg-imagen de subida en vectorial  webp-formato grafico para que sean mas optimizadas a la hora de renderizar.
  },
});

//Creamos la función de subir imagenes
const upload = multer({ storage });

//Función de borrado de imagenes
const deleteImgCloudinary = (imgUrl) => {
  const imgSplited = imgUrl.split("/");
  const nameSplited = imgSplited[imgSplited.length - 1].split(".");
  const folderSplited = imgSplited[imgSplited.length - 2];
  const public_id = `${folderSplited}/${nameSplited[0]}`;

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Image delete in cloudinary");
  });
};

//sirve para configurarlo
const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  });
};

module.exports = { upload, deleteImgCloudinary, configCloudinary };
