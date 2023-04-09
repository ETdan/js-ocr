// import r from 'tesseractocr'
// // const r=require('tesseractocr')
const tesseract = require('tesseractocr')
// // const config = {
// //     lang: "eng", // default
// //     oem: 3,
// //     psm: 3,
// //   }
  
// //   async function main() {
// //     try {
// //       const text = await tesseract.recognize("https://tesseract.projectnaptha.com/img/eng_bw.png", config)
// //       console.log("Result:", text)
// //     } catch (error) {
// //       console.log(error.message)
// //     }
// //   }
  
// //   main();
// async function x(){
//     // try{
//         const text = await r('https://tesseract.projectnaptha.com/img/eng_bw.png')
//         console.log( text)
//     // }
//     // catch(e){
//         // console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr is:",e)
//     // }
// }
// x();
const recognize = tesseract.withOptions({
    psm: 4,
    language: ['eng' ],
    config: ['tessedit_do_invert=0']
})

recognize('https://tesseract.projectnaptha.com/img/eng_bw.png', (err, text) => { 
    console.log(err,text);
})