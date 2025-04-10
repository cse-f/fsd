const getAbs =(x)=>{
  return new Promise((resolve, reject)=>{
    if(x<0){
      resolve(-x);
    }
    else{
      resolve(x);
    }
  })
};

const find = async()=>{
  const a = await getAbs(-22);
  console.log(a);
};

find();
