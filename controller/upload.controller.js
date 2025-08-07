export const uploadImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file was uploaded." });
    }

    res.status(200).json({
      message: "Image uploaded successfully!",
      imageUrl: req.file.path,
      publicId: req.file.filename,
    });
  } catch (error) {
    console.error("Image upload failed:", error);
    res.status(500).json({ message: "Server error during upload." });
  }
};
