let a = -4;

function qualquer(z = a, k = a) {
  if (z === k) {
    return 1;
  } else {
    qualquer(z - 1, k) + qualquer(z-1, k-1);
  }
}; 

console.log(qualquer(a, a-1))
