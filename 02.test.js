const {tambah,gabung} = require("./src/02");

const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']
//var first = ["Cecilie", "Lone"];
//var second = ["Emil", "Tobias", "Linus"];
//const first = ['A'];
//const second = ['B'];

test('tambah ? ', () => {
    expect(tambah(1,2)).toBe(3);
  });

test('gabung ? ', () => {
    expect(gabung(first,second,third)).toStrictEqual(["Behind","every","great","man","is","a","woman","rolling","her","eyes"]);
  });
