function* Generate1(){
  yield 1;
  yield 2;
}
function* Generate2(){
  yield 'a';
  yield 'b';
}
const gen1 = Generate1();
const gen2 = Generate2();
for(var n of gen1){
  console.log(n);
}
for(var k of gen2){
  console.log(k);
}
