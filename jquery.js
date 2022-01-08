var playing = false;
var score;
var trialsLeft;
var step;
var action;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'peach', 'pear', 'watermelon'];
function addClass() {
    if (playing == true) {
        location.reload();
    } else {
        playing = true;
        score = 0;
        $("#heart").html(score);

        $("#heart").show();
        trialsLeft = 3;
        addHeart();
        $("#gameover").hide();

        $("#startgame").html("Reset Game");
    }
}

$("#startgame").on("click", addClass);


