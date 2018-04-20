var localeCompare = require("locale-compare");

test("works!", function() {
  var compare = localeCompare();
  expect(compare("ä", "z")).toBeLessThan(0);
});

test("works with specified locale!", function() {
  var compare = localeCompare("sv");

  // localeCompare doesn't support locale argument
  // in environments that lack Intl support
  if (typeof Intl === 'object') {
    expect(compare("ä", "z")).toBeGreaterThan(0);
  }
});
