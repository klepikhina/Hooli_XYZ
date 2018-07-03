module.exports = {
  server: {
    "host": "localhost",
    "port": process.env.PORT || 8001
  },
  database: {
    host: 'localhost',
    user: 'root', /*add your username*/
    password: 'FeedM3Cookies!', /*add your mysql connection password*/
    port: '3306',
    database: 'HooliXYZ', /*the database*/
    multipleStatements: true
  }
}
