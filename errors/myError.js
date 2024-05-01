class customClassError extends Error{
    constructor(msg ,statesCode){
super(msg)
this.statesCode=statesCode
    }
}

const myCustomError = (msg, statesCode)=>{
    return new customClassError(msg , statesCode)
}

module.exports ={customClassError , myCustomError}