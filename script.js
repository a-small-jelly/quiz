function buildQuiz(){

	const output = [];

	myQuestions.forEach(
		(currentQuestion, questionNumber) => {

		const answers = [];

		for(letter in currentQuestion.answers) {

			answers.push(
				`<label>
				<input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} <br>
				</label>`
				);
		}


		output.push(
			`<div class="question"> ${currentQuestion.question} </div>
			<div class="answers"> ${answers.join('')} </div>
			<br>`)

	});

quizContainer.innerHTML = output.join('');

}




function showResults(){

	const answerContainers = quizContainer.querySelectorAll('.answers');

	let babyScore = 0;
	let nailsScore = 0;
	let isThisScore = 0;
	let supremacyScore = 0;
	let allScores = [];
	let counts = {};

	myQuestions.forEach( (currentQuestion, questionNumber) => {

		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		allScores.push.apply(allScores, myQuestions[questionNumber].answers[`${userAnswer}`]);
	})


		allScores.forEach((x) => {
			counts[x] = (counts[x] || 0) + 1;
		})

		for (let i = 0; i < allScores.length; i++) {
			if (allScores[i] === "isThis") {
				isThisScore++;
			} else if (allScores[i] === "nails") {
				nailsScore++;
			} else if (allScores[i] === "supremacy") {
				supremacyScore++; 
			} else if (allScores[i] === "baby") {
				babyScore++;
			}
		}

	let totals = [babyScore, nailsScore, isThisScore, supremacyScore];
		totals.sort(function(a, b){return b - a});


		if (babyScore > nailsScore && babyScore > isThisScore && babyScore > supremacyScore) {
			document.getElementById("results").innerHTML = '<img src="result1.png">';
			console.log("babbby");
		} else if (isThisScore > babyScore && isThisScore > nailsScore && isThisScore > supremacyScore) {
			document.getElementById("results").innerHTML = '<img src="result2.jpg">';
		} else if (nailsScore > babyScore && nailsScore > isThisScore && nailsScore > supremacyScore) {
			document.getElementById("results").innerHTML = '<img src="result3.jpg">';
		} else if (supremacyScore > babyScore && supremacyScore > isThisScore && supremacyScore > nailsScore) {
			document.getElementById("results").innerHTML = '<img src="result4.jpg">';
		}


}







// variables

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// score variables

let baby = 0;
let nails = 0;
let supremacy = 0;
let isThis = 0;


const myQuestions = [

	{
		question: "Do you like babies?", 
		answers: {
			"YES omg": ["baby", "baby", "baby"],
			"I don't care": ["isThis", "nails"],
			"I answer to a higher power": ["supremacy", "supremacy"]
		},
	},
	{
		question: "If you had the chance to become a snail, would you?",
		answers: {
			"Of course I would": ["baby", "baby"],
			"I know better than to challenge evolution": ["supremacy"], 
			"No": ["isThis", "nails"]
		}, 
	},
	{
		question: "How do you usually express admiration?", 
		answers: {
			"Devotion": ["nails", "baby", "nails"],
			"Servitude": ["supremacy", "supremacy"],
			"Costuming": ["baby", "nails", "baby"], 
			"Wonder": ["isThis", "isThis"]
		}, 
	}, 
	{
		question: "What do you think about eternal life?", 
		answers: {
			"You don't get a second chance at humanity.":["nails", "isThis"],
			"No matter how perfect the day is, it always has to end.": ["baby"],
			"An unending, unchanging midnight.": ["supremacy"]
		}, 
	}, 
	{
		question: "Which of these sounds like the best compliment to you?", 
		answers: {
			"I don't have the strength to stay away from you anymore.": ["isThis"],
			"Your scent is like a drug to me. My own personal brand of heroin.": ["supremacy", "nails"],
			"You're my only reason to stay alive...if that's what I am.": ["supremacy", "baby", "supremacy"],
			"You are my life now.": ["baby", "supremacy", "baby"]
		}, 
	}, 
	{
		question: "Do you question authority or follow blindly?", 
		answers: {
			"Asking questions is how I connect to the deeper truth.": ["isThis", "isThis"], 
			"It would be blasphemous to question the principles that bind us all together.": ["supremacy", "supremacy"]
		}, 
	}, 
	{
		question: "Which of these characters do you most identify with?", 
		answers: {
			"Emmett": ["nails"],
			"Rosalie": ["baby"], 
			"Carlysle": ["supremacy"],
			"Jasper": ["isThis"]
		}, 
	}
	];





buildQuiz();
submitButton.addEventListener('click', showResults);
