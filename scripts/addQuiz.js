document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const question = document.getElementById('question').value;
    const optionA = document.getElementById('optionA').value;
    const optionB = document.getElementById('optionB').value;
    const optionC = document.getElementById('optionC').value;
    const optionD = document.getElementById('optionD').value;
    const correct = document.getElementById('correct').value;

    // Create a new quiz object
    const newQuiz = {
        question,
        a: optionA,
        b: optionB,
        c: optionC,
        d: optionD,
        correct
    };

    // Get existing quizzes from local storage or initialize an empty array
    const quizzes = JSON.parse(localStorage.getItem('quizData')) || [];

    // Add the new quiz to the array
    quizzes.push(newQuiz);

    // Save the updated array back to local storage
    localStorage.setItem('quizData', JSON.stringify(quizzes));

    // Clear the form
    document.getElementById('quizForm').reset();

    // Notify the user
    alert('Quiz question added successfully!');
});