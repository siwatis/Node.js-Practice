// Callback function

function calculate(x, y, callback) {
    console.log("In calculating...")
    setTimeout(()=>{
        const sum = x + y
        callback(sum)
    }, 3000
    )
}

function display(result){
    console.log(`Summation = ${result}`)
}

calculate(100, 50, display)

// Reduce form

calculate(100, 90, function(result){
    console.log(`Summation = ${result}`)
})

// Callback hell

const data1 = "data1.json"
const data2 = "data2.json"
const data3 = "data3.json"
const data4 = "data4.json"

function downloading(data, callback) {
    console.log(`Downloading file: ${data}`)
    setTimeout( () => {
        callback(data)
    }, 1000)
}

downloading(data1, function(result) {
    console.log(`file: ${result} completed`)
    downloading(data2, function(result) {
        console.log(`file: ${result} completed`)
        downloading(data3, function(result) {
            console.log(`file: ${result} completed`)
            downloading(data4, function(result) {
                console.log(`file: ${result} completed`)
                
            })
        })
    })
})