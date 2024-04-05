const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1);
console.log(obj2);

const notaAttr = "nota";
const valorAttr = 7.89;
const obj3 = {};
obj3[notaAttr] = valorAttr;
console.log(obj3);

const obj4 = { [notaAttr]: valorAttr };
console.log(obj4);

const obj5 = {
  getPayments() {
    return 5;
  },
};

console.log(obj5.getPayments())
