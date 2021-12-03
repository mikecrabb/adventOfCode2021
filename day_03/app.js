const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var santaData = data.toString().split("\n");

    var binaryData = [];

    for (i in santaData) {
        binaryData[i] = santaData[i].split("");
    }

    answerOne(binaryData);
    // answerTwo(binaryData);
    var oxygen = getOxygenValue(binaryData);

    var binaryData = [];
    for (i in santaData) {
        binaryData[i] = santaData[i].split("");
    }

    var co2 = getC02(binaryData);
    console.log("Part 2 Answer: "+ +co2 * +oxygen);
})



function answerOne(binaryData){
    console.log ("Part 1 Answer: " + +getGammaRate(binaryData) * +getEpsilonRate(binaryData))
}

function getGammaRate(binaryData) {
    var GammaRate = "";

    for (j in binaryData[0]) {
        var zeros = 0;
        var ones = 0;

        for (i in binaryData) {
            if (binaryData[i][j] == '0') {
                zeros++
            }
            else if (binaryData[i][j] == '1') {
                ones++
            }
        }
        if (zeros > ones){
            GammaRate += '1';
        }
        else{
            GammaRate += '0'
        }
    }
    return parseInt(GammaRate,2); 
}

function getEpsilonRate(binaryData) {
    var EpsilonRate = "";

    for (j in binaryData[0]) {
        var zeros = 0;
        var ones = 0;

        for (i in binaryData) {
            if (binaryData[i][j] == '0') {
                zeros++
            }
            else if (binaryData[i][j] == '1') {
                ones++
            }
        }
        if (zeros > ones){
            EpsilonRate += '0';
        }
        else{
            EpsilonRate += '1'
        }
    }
    return parseInt(EpsilonRate,2); 
}

function getOxygenValue(oxygenData){

    for (j in oxygenData[0]) {
        var zeros = 0;
        var ones = 0;

        for (i in oxygenData) {
            if (oxygenData[i][j] == '0') {
                zeros++;
            }
            else if (oxygenData[i][j] == '1') {
                ones++;
            }
        }

        if (zeros > ones){        
            
            for (var k = oxygenData.length - 1; k >= 0; k--) {
                if (oxygenData[k][j] == '1'){
                    oxygenData.splice([k],1);
                }

            }
        }
        else if (zeros < ones){
            for (var k = oxygenData.length - 1; k >= 0; k--) {
                if (oxygenData[k][j] == '0'){
                    oxygenData.splice([k],1);
                }
            }
        }
        else if (zeros == ones){
            for (var k = oxygenData.length - 1; k >= 0; k--) {
                if (oxygenData[k][j] == '0'){
                    oxygenData.splice([k],1);
                }
            }
        }
    }

    oxygenValue = ""
    for (x in oxygenData[0]){
        oxygenValue += oxygenData[0][x];
    }

    return parseInt(oxygenValue,2);
}

function getC02(co2Data){

    for (j in co2Data[0]) {
        var zeros = 0;
        var ones = 0;

        for (i in co2Data) {
            if (co2Data[i][j] == '0') {
                zeros++;
            }
            else if (co2Data[i][j] == '1') {
                ones++;
            }
        }
        if (zeros > ones){        
            
            for (var k = co2Data.length - 1; k >= 0; k--) {
                if (co2Data[k][j] == '0'){
                    co2Data.splice([k],1);
                }

            }
        }
        else if (zeros < ones){
            for (var k = co2Data.length - 1; k >= 0; k--) {
                if (co2Data[k][j] == '1'){
                    co2Data.splice([k],1);
                }
            }
        }
        else if (zeros == ones){
            for (var k = co2Data.length - 1; k >= 0; k--) {
                if (co2Data[k][j] == '1'){
                    co2Data.splice([k],1);
                }
            }
        }
        if (co2Data.length == 2){
            oxygenValue = "";
            for (x in co2Data[0]){
                oxygenValue += co2Data[0][x];
            }
            return parseInt(oxygenValue,2);
        }
    }
    
}