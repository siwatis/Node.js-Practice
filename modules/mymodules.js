function getCurrentTime(){
    return new Date()
}

function add(x,y){
    return x + y
}

// Export usable mudules
module.exports.getCurrenTime = getCurrentTime
module.exports.add = add