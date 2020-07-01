const { palindrom } = require("./src/01");

test('Apakah ibu ratna antar ubi palindrom ? ', () => {
    expect(palindrom("ibu ratna antar ubi")).toBe(true);
  });

  test('bakar kasur ? ', () => {
    expect(palindrom("kasur ini rusak")).toBe(true);
  });