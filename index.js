import {PORT, app} from './src/app.js'

//run
app.listen(PORT, () => {
  console.log(`Server run in port ${PORT}`)
})