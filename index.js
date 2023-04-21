import {PORT, app} from './src/app.js'
import {dbConnectMysql} from './config/mysql.js'

//run
app.listen(PORT, () => {
  console.log(`Server run in port ${PORT}`)
})

//mysql run
dbConnectMysql()