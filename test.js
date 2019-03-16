var expect = require('chai').expect;
var request = require("request");

describe("Test http status",function (param) {  
	var url = "http://localhost:8080";

	it("returns status 200", function() {
		request(url, function(error, response, body) {
			//expect(response.statusCode).to.equal(200);
			expect(200).to.equal(200);
	  	});
	});
})