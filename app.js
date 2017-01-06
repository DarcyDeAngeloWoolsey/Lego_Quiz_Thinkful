//create an array with quesitons, because each question has a number of details (text, choices, which is corrct, and details) we need to make all these objects in the array. Later we can loop through the array to show the questions.

var questionArray = [
    {
        questionText: "What is the tallest tower built with LEGO?",
        questionChoices: ["The Eiffel Tower", "The Empire State Building", "A tower at California's Lego Land", "The Leaning Tower of Pisa"],
        questionCorrect: 2,
        questionsDetails: "The tallest LEGO tower was 94 feet high and used 465,000 bricks. The tower was a pirate ship mast with a treasure made of gold, yellow and clear bricks on top and was built at LEGOLAND in California."
    },

    {
        questionText: "LEGO is derived from a word in what language?",
        questionChoices: ["Swedish", "German", "Danish", "Welsh"],
        questionCorrect: 2,
        questionsDetails: "Lego is derived from the first two letters in each word in the Danish phrase Leg godt."
    },

    {
        questionText: "What does LEGO (leg godt) mean?",
        questionChoices: ["Play Well", "Play Nice", "Build", "Construct"],
        questionCorrect: 0,
        questionsDetails: "Leg godt means 'play well.'"
    },

    {
        questionText: "What is the largest Lego model ever built?",
        questionChoices: ["X-Wing fighter", "Airbus", "Lock Ness", "Death Star"],
        questionCorrect: 0,
        questionsDetails: "Lego has built a 1:1 scale model of the X-Wing fighter using an astounding 5,335,200 bricks! It's as big as the real thing, capable of fitting the real Luke Skywalker and Porkins."
    },

    {
        questionText: "If you laid all of the LEGO bricks sold in 2012 end-to-end, they would stretch around the world more than:",
        questionChoices: ["5 times", "18 times", "10 times", "20 times"],
        questionCorrect: 1,
        questionsDetails: "If you laid all of the LEGO bricks sold in 2012 end-to-end, they would stretch around the world more than 18 times. "
},
    {
        questionText: "The largest commercial LEGO set is:",
        questionChoices: ["Taj Mahal", "Ultimate Collector's Millennium Falcon", "Tower Bridge", "Death Star"],
        questionCorrect: 0,
        questionsDetails: "The Taj Mahal set. It has 5,922 individual pieces. The Ultimate Collector's Millennium Falcon, Tower Bridge and Death Star follow, in that order."
    },

    {
        questionText: "Ole Kirk Christiansen is the inventor of the Lego brick and founder of the company. What career did he have before becoming a toy maker?",
        questionChoices: ["Architect", "Painter", "Carpenter", "Teacher"],
        questionCorrect: 2,
        questionsDetails: "He was a carpenter. He lost his business and began to make toys out of his leftover wood."
    },

    {
        questionText: "What is the first toy Ole Kirk Christiansen and the Lego company made?",
        questionChoices: ["Wooden Model Airplanes", "Train Sets", "Yo-yo", "Wooden Ducks"],
        questionCorrect: 3,
        questionsDetails: "He was inspired to construct a small wooden duck toy for his children and when they loved it he put them into production to sell."
    },
    {
        questionText: "When was the Lego brick first created?",
        questionChoices: ["1935", "1949", "1934", "1945"],
        questionCorrect: 1,
        questionsDetails: "The company first started in 1932, but the interlocking LEGO blocks were manufactured from 1949."
    },

    {
        questionText: "How many Lego Masters are there in the world?",
        questionChoices: ["4", "40", "400", "4,000"],
        questionCorrect: 1,
        questionsDetails: "The road to becoming a master model builder for Lego is excruciating, arduous,  and the monetary payoff is less than exciting. To give you an idea of how selective this group is, there are only 40 Lego master builders in the world, 7 of whom are Americans."
    },

    {
        questionText: "What is Lego's moto?",
        questionChoices: ["It pays to be the best", "The best is just child's play", "Build better blocks", "Only the best is good enough"],
        questionCorrect: 3,
        questionsDetails: "Only the best is good enough is Lego's moto."
    }
]


var currentQuestion = 0; //start with 0 as the location of the current Question because the first index in an array is 0. This is used later to loop through the array
var totalNumberOfQuestions = questionArray.length; //make variable of the length of the question array so wee can have a total number of times to loop through so we know how manyt times we need to show questions on the screen
var correctQuestionsCounter = 0; //start a correct questions counter at 0 so we can ++ each time a question is correct


//the function below will empty any old data from the questions. Then it will add text to the screen.
function showQuestion() {
    //$('.correct').empty(); //move this as it shows on first round
    $('.questionsDetails').empty();
    $('.choiceWrapper').empty();
    $(".question .wrapper h3").text(questionArray[currentQuestion].questionText); //gets text from the array of questions based on the current question index (first is index 0) for the text of the question value in the object

    var totalNumberOfChoices = questionArray[currentQuestion].questionChoices.length; //creates the total numbe of choices based on the length of the array of choices in the value questionChoices to be used to determine how many choices to add in the  for loop for each Question they belong to.

    for (var i = 0; i < totalNumberOfChoices; i++) { // for each choice...
        //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
        var buildEachChoiceHTML = "<input type='radio' class='choice' name='choice'  value=" + i + ">" + questionArray[currentQuestion].questionChoices[i] + "<br>"; //...add it to this html
        //2.3.2 append that row to the choices container in html
        $('.choiceWrapper').append(buildEachChoiceHTML); //append each choice for the question object to the section choiceWrapper
    }

    $(".question .wrapper .questionCorrectCounter").text("You have  " + correctQuestionsCounter + " / " + totalNumberOfQuestions + " correct"); //put text as the current correct questions out of the total number of questions
    $(".question .wrapper .questionCounter").text("Question " + (currentQuestion + 1) + " / " + totalNumberOfQuestions); //put text as the current question + 1 (because the first question is array index 0) out of total number of Questions.
}

function showAnswer() { //function to get the user answer and compar with the correct Answer
    //if currentQuestion-1 choice:checked is equal to the   then var currectQuestionsCounter = currentQuestionsCounter + 1 and add a section that says "Correct" above the details, else, say "InCorrect"
    var userAnswer = $("input[class='choice']:checked").val(); //the var is equal to the value of the checked input with a class of choice
    var correctAnswer = questionArray[currentQuestion - 1].questionCorrect; //the var is equal to the last question for the array with the value from the key questionCorrect

    if (userAnswer == correctAnswer) { //if the user is correct...

        correctQuestionsCounter++; //...increase the correctQuestionCounter by 1


    } else {
        $(".question .wrapper .correct").html("Incorrect");
    }



}

function showResults() { //show the results
    var finalCorrect = correctQuestionsCounter; //variable will get the total correct questions
    $(".results .wrapper h3 span").text(finalCorrect); //text will be the total correct questions

    for (var i = 0; i < totalNumberOfQuestions; i++) { // loop for as many times as there are questions
        $(".results .wrapper .answerWrapper").append("<h2>" + questionArray[i].questionText + "</h2> <br/>" + "<p>" + questionArray[i].questionsDetails + "</p> <br/>"); //append the question and the answer details from the array
    }
}

$(document).ready(function () { //first we hid everything but the intro page
    $(".question").hide();
    $(".results").hide();
    $(".intro").show();


    $(".start").click(function (event) { //when we click the start button, we show the question div
        event.preventDefault();
        $(".intro").hide();
        $(".results").hide();
        $(".question").show();


        showQuestion(); //run the function called showQuestion

    });


    $(".answer").click(function (event) { //when we click on that we have chosen and answer...
        event.preventDefault();

        currentQuestion++; //... increase the current question

        if (currentQuestion < (totalNumberOfQuestions)) { //if the number for the current Question is less than the total number of Questions
            showAnswer(); //run the showAnswer function to check the answer and see if it matches the correct one
            showQuestion(); //run the showQuestion function again

        } else {



            showAnswer(); //else if the last question was the very last question then hide everything but the results section

            $(".intro").hide();
            $(".question").hide();
            $(".results").show();
            showResults(); //run the showResults function
        }


    });

    $(".restart").click(function (event) { //if they want to do the quiz again, then hide everything but the intro
        event.preventDefault();
        $(".question").hide();
        $(".results").hide();
        $(".intro").show();

        currentQuestion = 0; //reset the counters!
        correctQuestionsCounter = 0;
    });
});
