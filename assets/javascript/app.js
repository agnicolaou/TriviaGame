$( document ).ready(function() {



$("#submit").hide();

//start
$("#start").on("click", function () {
    game.start();
    $("#title").text("THE CLOCK IS TICKING!");
});


function displaySubmit(){
    $("#submit").show();
    $("#submit").on("click", function () {
        game.done();
    });
};

// $(document).on("click", "#reset", function(){
//     game.start();
// })


//questions
let questions = [
    {
        question: "What classic horror movie is set in Haddonfield, Illinois?",
        choices: ["Nightmare on Elm Street", "Psycho", "Halloween", "Friday the 13th"],
        answer: "Halloween"
    },
    {
        question: "Which of the following movies is set at a summer camp?",
        choices: ["The Shining", "When a Stranger Calls", "Carrie", "Friday the 13th"],
        answer: "Friday the 13th"
    },
    {
        question: "How many killers are revealed at the end of “Scream?”",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "Leatherface was a character in what horror film?",
        choices: ["Carrie", "The Texas Chainsaw Massacre", "Psycho", "The Blair Witch Project"],
        answer: "The Texas Chainsaw Massacre"
    },
];

function displayQuestion() {
    //  question display
    for (let i = 0; i < questions.length; i++) {
        $("#quiz-area").append(questions[i].question);

        for (let j = 0; j < questions[i].choices.length; j++) {
            var newDiv = $("<div id='choices'>");
            $("#quiz-area").append(newDiv);
            newDiv.append("<input type = 'radio' name='question-" + i + "'value='" + questions[i].choices[j] + "'>" + " " + " " + questions[i].choices[j])
            $("#quiz-area").append(newDiv);

        }
    };
    //calling submit button
    displaySubmit();
};

// score tally
var game = {
    correct: 0,
    incorrect: 0,
    counter: 40,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 20){
            $("#title").text("HURRY UP! YOUR LIFE DEPENDS ON IT...");
        }
        if (game.counter <= 0) {
            game.done();
        }
    },

    // timer
    start: function () {
        timer = setInterval(game.countdown, 1000);
        var timerDiv = $("<div id='timer'>");
        timerDiv.append("Time Left:  <span id='counter'> 40 </span > Seconds");
        $("#quiz-area").append(timerDiv);
        $("#start").remove();
        displayQuestion();
    },



    // checks for user answer choice for each question
    done: function () {
        $.each($('input[name = "question-0"]:checked'), function () {
            if ($(this).val() == questions[0].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }

        });

        $.each($('input[name = "question-1"]:checked'), function () {
            if ($(this).val() == questions[1].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($('input[name = "question-2"]:checked'), function () {
            if ($(this).val() == questions[2].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($('input[name = "question-3"]:checked'), function () {
            if ($(this).val() == questions[3].answer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        this.result();

    },

    // uses user answer choice to determine if it is correct/incorrect/unanswered and appends the corresponding info to div
    result: function () {
        clearInterval(timer);
        $("#quiz-area").remove();
        
        if (this.correct === 4){
            $("#title").text("WAY TO GO, KILLER!");
        }
        else if (this.correct === 3){
            $("#title").text("YOU BARELY MADE IT OUT!");
        }
        else if (this.correct === 2){
            $("#title").text("TAKE ANOTHER STAB AT IT!");
        }
        else if (this.correct === 1){
            $("#title").text("NOT EVEN WORTH THE CHASE!");
        }
        else{
            $("#title").text("BETTER OFF DEAD!");
        };

        
        
        $("#sub-wrapper").append('<h3>' + "Correct: " + this.correct + '</h3>');
        $("#sub-wrapper").append('<h3>' + "Incorrect: " + this.incorrect + '</h3>');
        $("#sub-wrapper").append('<h3>' + "Unanswered: " + (questions.length - (this.incorrect + this.correct)) + '</h3>');
        // $("#sub-wrapper").prepend("<button id='reset'>TRY AGAIN</button>");
    }

};


});