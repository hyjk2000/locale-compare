const localeCompare = require("locale-compare");

test("works!", function() {
  const compare = localeCompare();
  expect(compare("ä", "z")).toBeLessThan(0);
});

test("works with specified locale!", function() {
  const compare = localeCompare("sv");
  expect(compare("ä", "z")).toBeGreaterThan(0);
});
