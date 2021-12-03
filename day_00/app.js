const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(data);
    var santaData = data.toString().split("\n");
    console.log(santaData);
})