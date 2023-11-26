const connect = true // check internet connection
const url1 = 'aun.fold/file0.json'
const url2 = 'aun.fold/file1.json'
const url3 = 'aun.fold/file2.json'
const url4 = 'aun.fold/file3.json'

function downloading(url) {
    return new Promise(function(resolve, reject) {
        console.log(`Downloading ${url} ...`)
        setTimeout(()=>{
            if (connect) {
                resolve(`Download ${url} completed`)
            } else {
                reject(`Something went wrong!`)
            }
        }, 1000)
    })
}

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
}

start()