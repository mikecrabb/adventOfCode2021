const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(data);
    var santaData = data.toString().split("\n");
    // console.log(santaData);

    puzzle1(santaData);
    sweepGen(santaData);
    puzzle1(sweepGen(santaData));
})


function puzzle1(data){
    console.log(data.length);

    var increases = 0;
    var others = 0;
    for (let i = 1; i < data.length; i++){
        if (data[i] > data[i-1]){
            increases++;
        }
        else{
            others++;
        }
    }
    console.log("Number of increases: " + increases + "number of others " + others);
}

function sweepGen(data){
    var sweepArray= [];
    for (let i = 1; i+2 < data.length; i++){
        sweepArray.push(+data[i] + +data[i+1] + +data[i+2])
    }
    console.log(sweepArray);
    return sweepArray;
}