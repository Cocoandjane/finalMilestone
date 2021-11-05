
const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

  const unzipper = require("unzipper");
  const fs = require("fs")
  // 1. install npm 
  // 2. source: npm website and search unizipper
    fs.createReadStream('./myfile.zip')
  .pipe(unzipper.Extract({ path: 'jane' }));

  const fileArrey = (jane) => {
    return new Promise((resolve, reject) => {
      fs.readdir('jane', (err, files) => {
        if(err){
          reject(err);
        }else{
          resolve(files);
        }
        });
      })
  }


  

  
/* 1. create a fucntion to extract myfile.zip using "unzipper" liberary, show Extraction operation complete
   2. create a function called readDir(jane) to
        1. read the png directory
        2. loop through the png files 
        3. make the path into an arrey
   3. crate a function called grayScale(pathIN, pathOut), pathIn is path of the png files,
       pathOut is greyscaled images will be put in
        1. lop through the pixel arry, 
        2. modify rgb values to create grayscale filters
        3. save the modified pixel arrey into a new PNG img into pathOut directory.
    */