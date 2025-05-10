// Function to load quizzes from local storage
function loadQuizzes() {
    const quizList = document.getElementById('quizList');
    quizList.innerHTML = ''; // Clear the list

    const quizzes = JSON.parse(localStorage.getItem('quizData')) || [];

    if (quizzes.length === 0) {
        quizList.innerHTML = '<p class="text-center text-xl">No quizzes available.</p>';
        return;
    }

    quizzes.forEach((quiz, index) => {
        const quizItem = document.createElement('div');
        quizItem.className = 'quiz-item border border-purple-600 rounded-xl p-5 mb-5';

        quizItem.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${quiz.question}</h3>
            <ul class="list-disc pl-5 mb-2">
                <li>A: ${quiz.a}</li>
                <li>B: ${quiz.b}</li>
                <li>C: ${quiz.c}</li>
                <li>D: ${quiz.d}</li>
            </ul>
            <p class="mb-2">Correct Answer: <strong>${quiz.correct.toUpperCase()}</strong></p>
            <div class="flex gap-3">
                <button class="btn bg-blue-500 text-white" onclick="editQuiz(${index})">Edit</button>
                <button class="btn bg-red-500 text-white" onclick="deleteQuiz(${index})">Delete</button>
            </div>
        `;

        quizList.appendChild(quizItem);
    });
}

// Function to delete a quiz
function deleteQuiz(index) {
    const quizzes = JSON.parse(localStorage.getItem('quizData')) || [];
    quizzes.splice(index, 1); // Remove the quiz at the specified index
    localStorage.setItem('quizData', JSON.stringify(quizzes)); // Save updated quizzes
    loadQuizzes(); // Reload the quiz list
}

// Function to edit a quiz
function editQuiz(index) {
    const quizzes = JSON.parse(localStorage.getItem('quizData')) || [];
    const quiz = quizzes[index];

    const newQuestion = prompt('Edit Question:', quiz.question);
    const newA = prompt('Edit Option A:', quiz.a);
    const newB = prompt('Edit Option B:', quiz.b);
    const newC = prompt('Edit Option C:', quiz.c);
    const newD = prompt('Edit Option D:', quiz.d);
    const newCorrect = prompt('Edit Correct Answer (a, b, c, or d):', quiz.correct);

    if (newQuestion && newA && newB && newC && newD && newCorrect) {
        quizzes[index] = {
            question: newQuestion,
            a: newA,
            b: newB,
            c: newC,
            d: newD,
            correct: newCorrect
        };

        localStorage.setItem('quizData', JSON.stringify(quizzes)); // Save updated quizzes
        loadQuizzes(); // Reload the quiz list
    }
}

// Load quizzes on page load
document.addEventListener('DOMContentLoaded', loadQuizzes);