var testee = require("testee");

testee.test(['test.html'], [{
	"os": "linux",
	"browser": "firefox",
	"browser_version": "latest"
},]).then(function() {
	process.exitCode = 0;
}, function() {
	process.exitCode = 1;
});
