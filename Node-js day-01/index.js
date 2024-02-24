 // let a = "Thomas"
 // let b = "Prakash"
 // console.log(a + b);

 // const os = require('os')

  // console.log(os.platform())
 // console.log(os.totalmem())

// console.log(os.version())


// const fs = require('fs')
 // asynchronous
// const str = `The <textarea> tag defines a multi-line text input control. It's often used in forms to collect user inputs like comments or reviews. 
//             A text area can hold an unlimited number of characters, and the text renders in a fixed-width font. `

//           fs.writeFile('test.txt',str,'utf8',(err)=>{
//             if(err)
//                 console.log(err)
//             else
//                 console.log("your file is write successfully")
//           })  

// fs.readFile('test.txt','utf8',(err,data)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(data)
// })

// synchronous
// const fs = require('fs')
// const str = ` Hi iam Thomas `
// try {
//     fs.writeFileSync('sample.txt',str,'utf-8')

//     fs.appendFileSync('sample.txt','I am from chennai' ,'utf-8')

//     let data = fs.readFileSync('sample.txt','utf-8')
//     console.log(data)
// } catch (error) {
//         console.log(error)
// }

const http = require('http')
const fs = require('fs')
const PORT = 1999

let server = http.createServer((req,res)=>{
    try {
        let data = fs.readFileSync('index.html','utf-8')

        res.writeHead(200,{'Content-Type':'text/html'}) 
        res.end(data)
    } catch (error) {
        console.log(error)
    }
})

server.listen(PORT,()=>console.log("Server listening to"+ PORT))