let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Boiling hot";
    } else if (distance < 20) {
        return "Really hot";
    } else if (distance < 40) {
        return "Hot";
    } else if (distance < 80) {
        return "Warm";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Really cold";
    } else if (distance < 420) {
        return "Freezing";
    } else {
        return "WINTER IS COMING";
    }
};
let width = 800;
let height = 800;
let clicks = 0;
let maxClicks = 10;
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
$("#map").click(function (event) {
    if (clicks < maxClicks) {
        clicks++;
        let distance = getDistance(event, target);
        let distanceHint = getDistanceHint(distance);
        $("#distance").text(distanceHint);
        $("#remainingClicks").text("Remaining clicks: " + (maxClicks - clicks));
        if (distance < 16) {
            alert("Found the treasure in " + clicks + " clicks");
        } else if (clicks === maxClicks){
            alert("GAME OVER");
        }
    }
});