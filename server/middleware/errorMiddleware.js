import multer from "multer";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {

    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        return res.status(400).json({
          message: "File size exceeds the limit of 5MB",
        });
      default:
        return res.status(400).json({
          message: err.message,
        });
    }

    return res.status(400).json({
      message: err.message,
    });
  }

  if (err.message === "Only PDF files are allowed") {
    return res.status(400).json({
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    message: "Internal Server Error",
  });
}