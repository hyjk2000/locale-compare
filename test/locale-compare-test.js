"use strict";

const assert = require("assert");

const compare = require("../src/locale-compare")();

(function test_works() {
	assert.ok(compare("ä", "z") < 0);
})();

console.log("All tests passed.");
