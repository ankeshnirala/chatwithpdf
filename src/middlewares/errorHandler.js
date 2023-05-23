
import { CustomError } from "../errors/customError.js";

const errorHandler = (err, req, res, next) => {
  
  if (err instanceof CustomError) {
    return res
      .status(err.statusCode)
      .send({ status: 0, errors: err.serializeErrors(), data: [] });
  }

  res.status(400).send({
    status: 0,
    errors: [{ message: err.message }],
    data: [],
  });
};

export { errorHandler };