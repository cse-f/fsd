//1)deleting a file
const fs = require('fs');
fs.unlink('temp.txt', (err) => {
  if (err) {
    console.log("Error occurred:", err.message);
  } else {
    console.log("File deleted successfully.");
  }
});

//2)creating and deleting a directory
//creating
const fs = require(fs);
fs.mkdir('tempDir',(err)=>{
  if(err){
    console.log("Error occurred:", err.message);
  }
  else{
    console.log("Directory created successfully.");
  }
});

//deleting a directory
const fs = require('fs');
fs.rmdir('tempDir',(err)=>{
  if(err){
    console.log("Error occurred:", err.message);
  }
  else{
    console.log("Directory deleted successfully.");
  }
});

//3)deleting a file within a dierctory
const fs = require('fs');
fs.unlink('myFolder/myFile.txt', (err) => {
  if (err) {
    console.log("Error deleting file:", err.message);
  } else {
    console.log("File deleted successfully from directory.");
  }
});

//4)removing a file and then removing a directory
const fs = require('fs');
// Paths
const dir = 'sampleFolder';
const file = `${dir}/file.txt`;
// Step 1: Delete the file
fs.unlink(file, (err) => {
  if (err) {
    console.log("❌ Error deleting file:", err.message);
    return;
  }
  console.log("File deleted successfully.");
  // Step 2: Delete the directory
  fs.rmdir(dir, (err) => {
    if (err) {
      console.log("Error deleting directory:", err.message);
    } else {
      console.log(" Directory deleted successfully.");
    }
  });
});

//5)creating a directory and writing the data to the file within the directory
const fs = require('fs');
// Directory and file setup
const dir = 'myDataFolder';
const filePath = `${dir}/info.txt`;
const data = 'Hello! This file is inside a new directory.';
// Step 1: Create the directory (if it doesn’t exist)
fs.mkdir(dir, (err) => {
  if (err) {
    console.log("Error creating directory:", err.message);
    return;
  }
  console.log(" Directory created.");
  // Step 2: Write data to the file inside the directory
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log("Error writing file:", err.message);
    } else {
      console.log("File written inside the directory.");
    }
  });
});

//6)Create a server that listens to client requests using http module
const http = require('http');
const server = http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end("Welcome to our home page");
  }
  else if(req.url==='/about'){
    res.end("this is about page");
  }
  else{
    res.end("page not found");
  }
});
server.listen(3000,()=>console.log("server running in port 3000"));




