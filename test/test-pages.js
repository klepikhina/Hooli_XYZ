const expect = require("chai").expect
const request = require('request');

it("Main Content", function(done){
  request('http://localhost:8001', function(err, res, body){
    expect(body).to.equal("Good Response")
    done()
  })
})
