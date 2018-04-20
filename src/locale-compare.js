function localeCompare(locale) {
  return Intl && "Collator" in Intl
    ? new Intl.Collator(locale).compare
    : function(a, b) {
        return a.localeCompare(b);
      };
}

module.exports = localeCompare;
