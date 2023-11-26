// Create Promise

const connect = true // check internet connection
const url1 = 'aun.fold/file0.json'
const url2 = 'aun.fold/file1.json'
const url3 = 'aun.fold/file2.json'
const url4 = 'aun.fold/file3.json'

function downloading(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(()=>{
            if (connect) {
                resolve(`Download ${url} completed`)
            } else {
                reject(`Something went wrong!`)
            }
        }, 3000)
    })
}

downloading(url1).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error)
})

// Promise hell

//    downloading(url1).then(function(result){
//        console.log(result)
//        return downloading(url2).then(function(result){
//            console.log(result)
//            return downloading(url3).then(function(result){
//                console.log(result)
//            })
//        })
//    })

downloading(url1).
then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
    return downloading(url4)
}).then(function(result){
    console.log(result)
})
// then hell