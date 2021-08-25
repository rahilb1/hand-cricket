var batsman, bowler, sum = 0, total = 0;
myStorage = window.localStorage
function bat(i) {
    batsman = i;
    document.getElementById("batsman").innerHTML = '<img src="' + batsman + '.png" width="100px" height="200px">';
    bowler = Math.floor(Math.random() * 6) + 1;
    document.getElementById("bowler").innerHTML = '<img src="' + bowler + '.png" width="100px" height="200px">';

    if(batsman == bowler) {
        localStorage.setItem("key1", sum);
        alert("Ouch! Clean bowled... Your score is: " + sum)
        location.href = "bowl.html";
    } else {
        countbat();
    }
}
function bowl(i) {
    bowler = i;
    document.getElementById("bowler").innerHTML = '<img src="' + bowler + '.png" width="100px" height="200px">';
    batsman = Math.floor(Math.random() * 6) + 1;
    document.getElementById("batsman").innerHTML = '<img src="' + batsman + '.png" width="100px" height="200px">';

    if(batsman == bowler) {
        localStorage.setItem("key2", total);

        alert("HOWAZAT! CPU score is: " + total)
        location.href = "end.html";
    } else {
        countbowl();
    }
}
function countbat() {
    sum += batsman;
    document.getElementById("score").innerHTML ="<strong>"+sum+"</strong>";

}
function countbowl() {
    total += batsman;
    document.getElementById("score").innerHTML = "<strong>"+total+"</strong>";
}
function endFunc() {
    var bowl = localStorage.getItem("key2");
    var bat = localStorage.getItem("key1");
    console.log(bat);
    console.log(bowl);
    console.log(bat-bowl);
    if(bat>bowl) {
        document.getElementById("end").innerHTML = 'Congratulations! You win'
    } else if(bowl>bat) {
        document.getElementById("end").innerHTML = 'Computer wins'
    } else {
        document.getElementById("end").innerHTML = 'Its a tie!'  
    }
    localStorage.clear();
}
