const findSum = (a,b)=>{
  return new Promise((resolve,reject)=>{
    if(a && b){
      resolve(a+b)
    }else{
      reject("Invalid Input")
    }
  });
};

const sum = async () =>{
  const ans = await findSum(1,2);
  console.log(ans);
}

sum();
