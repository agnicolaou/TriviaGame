$("#submit").hide()

//start
$("#start").on("click", function () {
    $("#start").remove();
    $("#submit").show();
    displayQuestion();

})



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
        var newDivQ = $("<div id='questions'>");
        newDivQ.text(questions[i].question);

        for (let j = 0; j < questions[i].choices.length; j++) {
            var newDivC = $("<div id='choices'>");
            newDivC.append('<input type = "radio" id=' + questions[i].choices[j] + ' name= "choice" value="j++">' + questions[i].choices[j] + '</input> <br>');
            $("#quiz-area").append(newDivQ);
            newDivQ.append(newDivC);
        }
    };
};



// '<input type = "radio" id=' + questions[i].choices[j] + ' name= "' + j + '" value=" ">' + questions[i].choices[j] + '</input> <br>'





{/* <form>
    <label class="radio-inline">
      <input type="radio" name="optradio" checked>Option 1
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio">Option 2
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio">Option 3
    </label>
  </form> */}

