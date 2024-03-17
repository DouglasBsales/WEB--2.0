let i = 1;
let x = 1;
while (i < 10) {
  x = 1;
  while (x < 10) {
    console.log(`${i} x ${x} = ${i * x}`);
    x++;
  }
  i++;
}
