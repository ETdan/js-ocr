const express=require('express');
const bodyParser=require('body-parser');
const ejs =require('ejs');
const fs=require('fs')

const tesseract=require('tesseract.js');
const multer=require('multer');


const app=express();
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))


// multer(to collect and store image from form to public/image) set up
const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,'./public/image/')
  },
  filename:(req,file,cb)=>{
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})
const upload=multer({storage:storage});


// tesseract set up
const config = {
lang: "eng",
oem: 1,
psm: 3,
}


app.get('/',(req,res)=>{
    res.render('index',{post:''})
})

app.post('/',upload.single('file'),(req,res)=>{

    tesseract.recognize(
      // 'https://tesseract.projectnaptha.com/img/eng_bw.png', //test image
      `public/image/${uniqueSuffix + '-' + req.file.originalname}`,
      'eng'
    ).then(({data:{text}}) => {
      res.render('post',{post:text});
    })
})

app.listen(3000,console.log('active at 3000'))