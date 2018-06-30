const config = {
  server: {
    "host": "localhost",
    "port": process.env.PORT || 8001
  },
  database: {
    host: 'localhost',
    user: 'root', /*add your username*/
    password: 'admin', /*add your mysql connection password*/
    port: '3306',
    database: 'HooliXYZ' /*the database*/
  }
}
module.exports = config
