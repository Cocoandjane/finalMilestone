/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 
 * Author: 
 * 
 */

const unzipper = require('unzipper'),
  fs = require("fs"),
  PNG = require('pngjs').PNG,
  path = require('path');

  const extract = require('extract-zip')
 
//create a fucntion to extract myfile.zip using "unzipper" liberary, 
//show Extraction operation complete


/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */

const unzip = (pathIn, pathOut) => {
    fs.createReadStream(pathIn)
    .pipe(unzipper.Extract({ path: pathOut }));
  };
  unzip("myfile.zip", "jane")




/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */
const readDir = dir => {

    return new Promise((resolve, reject) => {
      fs.readdir('jane', (err, files) => {
        if(err){
          reject(err);
        }else{
          resolve(files);
        }
        });
      })

fileArrey("jane").then(files => console.log(files))



/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {

};

module.exports = {
  unzip,
  readDir,
  grayScale
};