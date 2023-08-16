window.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementById("startButton");

    button.addEventListener("click", function(){
        fetchQuiz().then(quiz => displayQuiz(quiz));
    });
});

async function fetchQuiz(){
    const key = "r6gjoYvrmuUxZi9TIfQAyO6vvQJ9cbinHKVuFBny";
    const urlBeginning = "https://quizapi.io/api/v1/questions";

    const category = "linux";
    const difficulty = "easy";
    const limit = "5"

    const url = urlBeginning + "?apiKey=" + key + 
    "&category=" + category + "&difficulty=" + difficulty + 
    "&limit=" + limit;

    try {
        let response = await fetch(url);
        let data = await response.json();
        return JSON.stringify(data);
    } catch (error) {
        console.error(error);
    }
}

function displayQuiz(data){
    let json = JSON.parse(data);

    let quizBox = document.getElementById("quizBox");

    let questions = [];

    json.forEach(item => {
        let fullElement = document.createElement("div");
        fullElement.classList.add("fullElement");

        let questionUI = _createQuestionUI(item, item.id);
        let submitButton = _createSubmitButton(item, item.id);

        quizBox.append(questionUI);
        quizBox.append(submitButton);

        questions.append(fullElement);
    });
}

function _createQuestionUI(question, id){
    let questionBox = document.createElement("div");
    questionBox.classList.add("questionBox");

    let p = document.createElement("p");
    p.innerHTML = question.question;
    p.classList.add("question");

    questionBox.append(p);

    for(let answer in question.answers){
        if(question.answers[answer] === null) continue;

        let label = document.createElement("label");
        label.innerHTML = question.answers[answer];
        label.classList.add("answer");

        let answerElement = document.createElement("input");
        answerElement.type = "radio";
        answerElement.name = id;
        answerElement.value = answer;
    
        label.append(answerElement);
        
        questionBox.append(label);
    }

    return questionBox;
}

function _createSubmitButton(question, id){
    let submitButton = document.createElement("button");
    submitButton.classList.add("submitButton");
    submitButton.innerHTML = "SUBMIT";
    submitButton.addEventListener("click", function(){
        let userInput = document.getElementsByName(id);
        for(let i = 0; i < userInput.length; i++){
            if(userInput[i].checked){
                if(userInput[i].value === question.correct_answer) alert("correct");
            }
        }
    })

    return submitButton;
}