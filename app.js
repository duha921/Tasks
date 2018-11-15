let fs=require('fs');
var _ = require("underscore");

let res2=fs.readFile('./flower.txt',(err,data)=>{
console.log("number of rows "+data.toString().split('\n').length)


var S_start=_.filter(data.toString().split('\n'),function(sss){
    return sss.startsWith('S');})
    console.log("Start With S \n")
    console.log(S_start)
    console.log("number of flwers not start with s \n")
    console.log(data.toString().split('\n').length - S_start.length +'\n')
        

    var D_start=_.filter(data.toString().split('\n'),function(D){
        return D.startsWith('D');})
        console.log("Start with my First Letter D \n")
        console.log(D_start)


        var lengthOf5=_.filter(data.toString().split('\n'),function(l){
            return l.length=='5';})
            console.log("length of 5 \n")
            console.log(lengthOf5)
           
});
