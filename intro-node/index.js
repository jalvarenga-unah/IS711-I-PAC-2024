const os = require('node:os')

console.log(os.platform())
console.log(os.freemem() / 1024 / 1024) // visualizar la memoria libre
console.log(os.totalmem() / 1024 / 1024) // visualizar la memoria total
console.log(os.uptime() / 60 / 60 / 24)