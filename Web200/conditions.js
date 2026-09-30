let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", spaceQuiz);

function spaceQuiz() {

    let answer1 = document.getElementById("answer1").value.toLowerCase();
    let answer2 = document.getElementById("answer2").value.toLowerCase();
    let answer3 = document.getElementById("answer3").value.toLowerCase();

    let score = 0;

    switch (answer1) {
        case "earth":
            score++;
            break;

    }

    if (answer2 === "stars") {
        score++;
    }

    if (answer3 === "sun") {
        score++;
    }

    let feedback;

    if (score === 3) {
        feedback = "Nice job!";
    }
    else if (score === 2) {
        feedback = "You only missed one question, nice.";
    }
    else if (score === 1) {
        feedback = "You got one right.";
    }
    else {
        feedback = "try again";
    }

    document.getElementById("result").innerHTML =
        "Score: " + score + "/3<br>" + feedback;
}
