var number_selector = document.getElementById("score-selector");
var player1 = document.getElementById("player1-btn");
var player2 = document.getElementById("player2-btn");
var reset = document.getElementById("reset-btn");
var player1_score = 0;
var player2_score = 0;
var is_game_finished = false;
var winner = "null"

//Deals with the selection of 'playing to' score
number_selector.addEventListener("change", function()
{
    var selector_value = number_selector.value;
    var playing_to_score = document.getElementById("playing-to-score");
    if(selector_value <= 0)
    {
        number_selector.value = 1;
        playing_to_score.textContent = "1";
        //Maybe add a red border here for a second.
    }
    else if(is_game_finished){
        number_selector.value = playing_to_score.textContent;
        playing_to_score.textContent = playing_to_score.textContent;
    }
    else
    {
        playing_to_score.textContent = selector_value;
    }
});

player1.addEventListener("click", function() 
{
    if(!is_game_finished)
    {
        player1_score++;
        document.getElementById("player1-score").textContent = player1_score;

        if(player1_score == number_selector.value)
        {
            is_game_finished = true;
            winner = "player1";
            document.getElementById("player1-score").classList.add("winner");
        }
    }
});

player2.addEventListener("click", function()
{
    if (!is_game_finished) 
    {
        player2_score++;
        document.getElementById("player2-score").textContent = player2_score;

        if (player2_score == number_selector.value) 
        {
            is_game_finished = true;
            winner = "player2";
            document.getElementById("player2-score").classList.add("winner");
        }
    }
});

reset.addEventListener("click", function()
{
    player1_score = 0;
    player2_score = 0;
    is_game_finished = false;
    document.getElementById("player1-score").textContent = player1_score;
    document.getElementById("player2-score").textContent = player2_score;

    if(winner === "player1")
    {
        document.getElementById("player1-score").classList.remove("winner");
    }
    else
    {
        document.getElementById("player2-score").classList.remove("winner");
    }
});