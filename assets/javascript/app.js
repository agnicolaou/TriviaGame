$("#submit").hide()

//start
$("#start").on("click", function () {
    $("#start").remove();
    displayQuestion();
});



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
            var newDiv = $("<div>");
            
            newDiv.append("<input type = 'radio' name='question-" + i + "'value='" + questions[i].choices[j] + "'>" + questions[i].choices[j])
            $("#quiz-area").append(newDiv);
        }
    };
};



