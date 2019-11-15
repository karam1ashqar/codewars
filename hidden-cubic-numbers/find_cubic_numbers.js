// cubic numbers

const res = [];
for (let i = 0; i < 1e3; ++i) {
  const str = ('000' + i).slice(-3);
  if (i === str.split``.reduce((a, b) => a + b**3, 0)) {
    res.push(str);
  }
}

console.log(res);

// [ '000', '001', '153', '370', '371', '407' ]
