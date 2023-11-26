const fs = require('fs')

// Blocking

// Read file
const data = fs.readFileSync('files/input.txt', 'utf-8')
console.log(data)
// Write file
const outputText = `Hello Node.js\n${data}\nFile writed at ${new Date()}`
fs.writeFileSync('files/output.txt', outputText)


// Non-blocking
fs.readFile('files/input.txt','utf-8',(err,data)=>{
    if (err) return console.log('Error: ', err)
    console.log(data)
    const outputText_async = `Hello Node.js\n${data}\nFile writed at ${new Date()}`
    fs.writeFile('files/output_async.txt', outputText_async, err=>{
        if (err) return console.log('Error: ', err)
        console.log('Completed writed file')
    })
})