export const successResponse = (res, code, message, data = null) => {
    return res.status(code).json({ code, message, data });
  };
  
  export const errorResponse = (res, code, message, errors = null) => {
    return res.status(code).json({ code, message, errors });
  };
  