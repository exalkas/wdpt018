const errorHandler = (err, req, res, next) => {
  console.log("Error handler here");
  console.log("Error handler here. error is", err);

  if (process.env.NODE_ENV !== "production") {
    console.log("🚀 ~ err:", err.stack);
  }

  res.status(err.status).send(err.message);
};

export default errorHandler;
