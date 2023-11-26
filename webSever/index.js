const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync(`${__dirname}/webpages/index.html`, 'utf-8')
const productPage = fs.readFileSync(`${__dirname}/webpages/product.html`, 'utf-8')

const server = http.createServer(function(req,res){
    const pathName = req.url
    console.log('url = ',pathName)
    const homepageHtml = `
    <h1>Hello Node.js</h1>
    <p style="background:yellow">Nice to meet you</p>
    `
    const productHtml = `
    <h1>Hello Node.js</h1>
    <p style="color:blue">This is product page</p>
    `
    //res.write(myHtml)
    if (pathName === '/' | pathName === '/home'){
        res.end(homepageHtml)
    } else if (pathName === '/product'){
        res.end(productHtml)
    } else {
        res.writeHead(404)
        res.end('<h1>Not Found</h1>')
    }
}).listen(8080, 'localhost', ()=>{
    console.log("start server in port 8080")
})