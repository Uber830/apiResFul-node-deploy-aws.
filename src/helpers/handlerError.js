
export const handlerError = (res, msg = 'not contect', code = 400) => {
  res.status(code);
  res.send(`Message: ${msg}`);
};