const expect = require("chai").expect
const request = require('request');

it("Login Content", function(done){
  request('http://localhost:8001/', function(err, res, body){
    expect(body).to.equal("Good Response")
    done()
  })
})

it("Login Status", function(done){
  request('http://localhost:8001/', function(err, res, body){
    expect(res.statusCode).to.equal(200)
    done()
  })
})

it("Main Status", function(done){
  request('http://localhost:8001', function(err, res, body){
    expect(res.statusCode).to.equal(404)
    done()
  })
})
