let questions = [
    {
        question: "Which movie was Vince Vaughn NOT in?",
        answers: ["The Lost World: Jurassic Park", "Anchorman", "Starsky & Hutch", "Zoolander 2"],
        correctAnswer: "Zoolander 2"
    },
    {
        question: "Which horror film was NOT based on a Stephen King novel?",
        answers: ["The Shining", "Halloween", "Pet Sematary", "It"],
        correctAnswer: "Halloween"
    },
    {
        question: "Which of these Steven Spielberg films was realesed first?",
        answers: ["E.T.", "Jaws", "Close Encounters of the Third Kind", "War of the Worlds"],
        correctAnswer: "Jaws"
    }

];


var answerButtons = $("#answerButtons");
var radioButton = $('<input type="radio" name="rbtnCount" />');

//question display
function displayQuestion() {
    for (let i = 0; i < questions.length; i++) {
        var newQDiv = $(

            '<div class = "danger"> ' + questions[i].question + '</div>'
            +
            '<input type = "radio" value="0" class="space">' + questions[i].answers[0] + '</input> <br>'
            +
            '<input type = "radio" value="0">' + " "+ questions[i].answers[1] + '</input> <br>'
            +
            '<input type = "radio" value="0">' + " "+ questions[i].answers[2] + '</input> <br>'
            +
            '<input type = "radio" value="0">' + " "+ questions[i].answers[3] + '</input> <br>'
        );

        if (questions[0].answers[0] === "Zoolander 2"){
            alert("hi");
        }
        



        $("#quiz-area").append(newQDiv);


        console.log(answerButtons);
    }

}


//start
$("#start").on("click", function () {
    $("#start").hide();
    displayQuestion()

})




