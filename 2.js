var a = [1,2,3,4,5,6,12];
a = a.map(n=>n*2);
//doubled values
console.log(a);
a = a.filter(n=>(n>20));
//filtered values
console.log(a);
