const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(data);
    var santaData = data.toString().split("\n");
    // console.log(santaData);

    var subData = [];

    for (i in santaData){
        subData[i] = santaData[i].split(" ");
    }

    getCurrentPosition(subData);
    getNewPosition(subData);

})

function getCurrentPosition(subData){
    var horizontalPos = 0;
    var depth = 0;
    for (i in subData){
        switch(subData[i][0]){
            case "forward":
                horizontalPos += +subData[i][1];
                break;
            case "up":
                depth -= +subData[i][1];
                break;
            case "down":
                depth += +subData[i][1];
                break;
        }
    }
    console.log ("Part 1 Answer: " +horizontalPos*depth);
}

function getNewPosition(subData){
    var horizontalPos = 0;
    var depth = 0;
    var aim = 0;

    for (i in subData){
        switch(subData[i][0]){
            case "forward":
                horizontalPos += +subData[i][1];
                depth += aim*subData[i][1]
                break;
            case "up":
                aim -= +subData[i][1];

                break;
            case "down":
                aim += +subData[i][1];
                break;
        }
    }
    console.log ("Part 2 Answer: " +horizontalPos*depth);

}