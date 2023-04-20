import { handlerError } from '../helpers/handlerError.js'

const general = (req, res) => {

  const message = `<h2>La verdad solo se puede encontrar en un lugar :<br> el codigo<h2>`
  return handlerError(res, message, 200)
};

const home = (req, res) => {

  const message = `<h2>"La mayoría de las patentes son una mierda. Dedicar tiempo a leerlas
es estúpido. Es cosa de los propietarios de las patentes hacerlo y procurar que se respeten" <br><br>
-- Linus Torvalds<h2>`
  return handlerError(res, message, 200)
};

export { general, home }