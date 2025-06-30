// Αν το κουμπί με ID 'quiz-button' υπάρχει στη σελίδα
const quizButton = document.getElementById('quiz-button');

if (quizButton) {
    // Προσθέτουμε event listener για το click
    quizButton.addEventListener('click', function() {
        // Εδώ καλείται η συνάρτηση του quiz όταν πατηθεί το κουμπί
        // Παράδειγμα: startQuiz();
        console.log('Το κουμπί Quiz πατήθηκε.');
    });
}