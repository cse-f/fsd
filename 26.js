const s1 = Symbol();
const s2 = Symbol();
const s3 = Symbol('a');
const s4 = Symbol('a');
const s5 = Symbol.for('a');
const s6 = Symbol.for('a');
console.log(s5==s6);
console.log(s4==s3);
console.log(s1==s2);
