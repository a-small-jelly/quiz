function buildQuiz() {
	const output = [];
	questions.forEach(
		(currentQuestion, questionNumber) => {
			const answers = [];
			for (letter in currentQuestion.answers) {
				answers.push(
					`<label>
					<input type="radio" name="question$[questionNumber}" value="${letter}">
					${letter} :
					${currentQuestion.answers[letter]}
					</label> <br>`
					);
			}

			// add this question and its answers to the output
			output.push(
				`<div class="question"> ${currentQuestion.question} </div>
				<div class="answers"> ${answers.join('')} </div> <br>`
				);

		});

	//combine output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');

}



function showResults() {

	// gather answer containers from quiz
	const answerContainers = quizContainer.querySelectorAll('.answers');

	// keep track of user's answers
	let numCorrect = 0;


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

// questions

const questions = [

	{
		question: "Do you like babies?", 
		answers: {
			"YES omg": baby++,
			"I don't care": isThis++, 
			"I answer to a higher power": supremacy++
		},
		XXcorrectAnswer: ""
	},
	{
		question: "If you had the chance to become a snail, would you?",
		answers: {
			a: "Of course I would",
			b: "I know better than to challenge evolution"
		}, 
		XXcorrectAnswer: ""
	},
	{
		question: "How do you usually express admiration?", 
		answers: {
			a: "Devotion", 
			b: "Servitude",
			c: "Costuming"
		}, 
		XXcorrectAnswer: ""
	}, 
	{
		question: "What do you think about eternal life?", 
		answers: {
			a: "You don't get a second chance at humanity.", 
			b: "No matter how perfect the day is, it always has to end.",
			c: "An unending, unchanging midnight."
		}, 
		XXcorrectAnswer: ""
	}, 
	{
		question: "Which of these sounds like the best compliment to you?", 
		answers: {
			a: "I don't have the strength to stay away from you anymore.", 
			b: "Your scent is like a drug to me. My own personal brand of heroin.", 
			c: "You're my only reason to stay alive...if that's what I am.", 
			d: "You are my life now."
		}, 
		XXcorrectAnswer: ""
	}, 
	{
		question: "Do you question authority or follow blindly?", 
		answers: {
			a: "Asking questions is how I connect to the deeper truth.", 
			b: "It would be blasphemous to question the principles that bind us all together."
		}, 
		XXcorrectAnswer: ""
	}, 
	{
		question: "Which of these characters do you most identify with?", 
		answers: {
			a: "Emmett", 
			b: "Rosalie", 
			c: "Carlysle", 
			d: "Jasper"
		}, 
		XXcorrectAnswer: "asdf"
	}
	];


console.log(questions);

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);