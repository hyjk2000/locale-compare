import localeCompare from "../src/locale-compare";

const compare = localeCompare();
const compareInSwedish = localeCompare("sv");

["ä", "z"].sort(compare);
["ä", "z"].sort(compareInSwedish);
