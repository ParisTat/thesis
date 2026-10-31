// Λίστα με τις ερωτήσεις και τις απαντήσεις του κουίζ
const questions = [
    {
        question: "Ποιος πρότεινε πρώτος, το 1783, την ύπαρξη «σκοτεινών άστρων», από τα οποία ούτε το φως δεν μπορεί να διαφύγει;",
        optionA: "John Michell",
        optionB: "Albert Einstein",
        optionC: "Stephen Hawking",
        optionD: "Karl Schwarzschild",
        correctOption: "optionA"
    },

    {
        question: "Τι είναι ο 'ορίζοντας γεγονότων' μιας μαύρης τρύπας;",
        optionA: "Το όριο που διαχωρίζει την ορατή από την αόρατη ύλη",
        optionB: "Το όριο μέσα στο οποίο τίποτα δεν μπορεί να δραπετεύσει",
        optionC: "Η επιφάνεια μιας μαύρης τρύπας",
        optionD: "Η περιοχή γύρω από μια μαύρη τρύπα",
        correctOption: "optionB"
    },

    {
        question: "Ποια από τις παρακάτω δηλώσεις για τις μαύρες τρύπες είναι αληθής;",
        optionA: "Είναι σημεία με πολύ χαμηλή πυκνότητα",
        optionB: "Είναι αστέρες που καταστράφηκαν και έγιναν υπερσυμπυκνωμένοι",
        optionC: "Είναι περιοχές με υψηλή ατμοσφαιρική πίεση",
        optionD: "Είναι αστέρες σε στάδιο δημιουργίας",
        correctOption: "optionB"
    },

    {
        question: "Ποια είναι η κύρια πηγή της ακτινοβολίας των μαύρων τρυπών;",
        optionA: "Πυρηνικές αντιδράσεις",
        optionB: "Πυροτεχνήματα",
        optionC: "Υλικό που πέφτει στη μαύρη τρύπα και θερμαίνεται",
        optionD: "Η λάμψη των γειτονικών αστέρων",
        correctOption: "optionC"
    },

    {
        question: "Ποια από τις παρακάτω δηλώσεις για την εντροπία των μαύρων τρυπών είναι αληθής;",
        optionA: "Όλες οι μαύρες τρύπες έχουν την ίδια εντροπία",
        optionB: "Η εντροπία μιας μαύρης τρύπας είναι μηδενική",
        optionC: "Η εντροπία μιας μαύρης τρύπας είναι ανάλογη της επιφάνειας του ορίζοντα γεγονότων",
        optionD: "Η εντροπία μιας μαύρης τρύπας είναι ανάλογη της μάζας της",
        correctOption: "optionC"
    },

    {
        question: "Ποια είναι η κύρια πηγή ενέργειας ενός αστέρα;",
        optionA: "Κινητική ενέργεια",
        optionB: "Περιστροφική ενέργεια",
        optionC: "Πυρηνικές αντιδράσεις",
        optionD: "Ηλεκτρομαγνητική ακτινοβολία",
        correctOption: "optionC"
    },

    {
        question: "Τι είδους ακτινοβολία εκπέμπουν τα άστρα;",
        optionA: "Μόνο ορατό φως",
        optionB: "Μόνο ακτίνες Χ",
        optionC: "Ηχητικά κύματα",
        optionD: "Ηλεκτρομαγνητική ακτινοβολία σε ευρύ φάσμα (υπέρυθρη, ορατή, υπεριώδη κ.ά.)",
        correctOption: "optionD"
    },

    {
        question: "Ποιος αστέρας βρίσκεται πιο κοντά στη Γη;",
        optionA: "Αντάρης",
        optionB: "Ήλιος",
        optionC: "Βήτα Centauri",
        optionD: "Πολάρις",
        correctOption: "optionB"
    },

    {
        question: "Ποια από τις παρακάτω δηλώσεις για τους κόκκινους γιγάντες είναι αληθής;",
        optionA: "Είναι αστέρες στο τελευταίο στάδιο της εξέλιξης τους πριν γίνουν λευκοί νάνοι",
        optionB: "Είναι αστέρες σε στάδιο δημιουργίας",
        optionC: "Είναι αστέρες που έχουν ακόμη μεγάλο ποσό του υδρογόνου τους",
        optionD: "Είναι αστέρες που έχουν ακόμη μεγάλο ποσό του ηλίου τους",
        correctOption: "optionA"
    },

    {
        question: "Ποια από τις παρακάτω δηλώσεις για τους λευκούς νάνους είναι αληθής;",
        optionA: "Είναι πολύ φωτεινοί αστέρες",
        optionB: "Είναι αστέρες σε στάδιο δημιουργίας",
        optionC: "Είναι αστέρες με μεγάλη μάζα και υψηλή θερμοκρασία",
        optionD: "Είναι το τελικό στάδιο εξέλιξης ενός μικρού ή μεσαίου αστέρα",
        correctOption: "optionD"
    },

    {
        question: "Τι είναι μια σουπερνόβα;",
        optionA: "Η έκρηξη ενός αστέρα",
        optionB: "Ένας νέος αστέρας",
        optionC: "Ένας λευκός νάνος",
        optionD: "Ένας κόκκινος γίγαντας",
        correctOption: "optionA"
    },

    {
        question: "Τι προκαλεί την έκρηξη ενός αστέρα σε μια σουπερνόβα;",
        optionA: "Ολοκλήρωση της περιστροφικής κίνησης",
        optionB: "Εξάντληση του υδρογόνου στον πυρήνα του αστέρα",
        optionC: "Συνολική κατάρρευση του πυρήνα του αστέρα",
        optionD: "Η θερμοκρασία της επιφάνειάς του",
        correctOption: "optionC"
    },


    {
        question: "Ποιο από τα παρακάτω μπορεί να προκύψει από μια έκρηξη σουπερνόβα;",
        optionA: "Αστέρας νετρονίων ή μαύρη τρύπα",
        optionB: "Βαριά στοιχεία (π.χ. σίδηρος) που σκορπίζονται στο διάστημα",
        optionC: "Νεφέλωμα (υπόλειμμα σουπερνόβα)",
        optionD: "Όλα τα παραπάνω",
        correctOption: "optionD"
    },

    {
        question: "Τι είναι μια σουπερνόβα τύπου Ia;",
        optionA: "Η έκρηξη ενός λευκού νάνου σε διπλό σύστημα, όταν αποκτήσει αρκετή μάζα από τον σύντροφό του",
        optionB: "Η κατάρρευση του πυρήνα ενός πολύ μεγάλου άστρου",
        optionC: "Η γέννηση ενός νέου άστρου",
        optionD: "Η σύγκρουση δύο μαύρων τρυπών",
        correctOption: "optionA"
    },

    {
        question: "Τι συμβαίνει όταν ένα άστρο σαν τον Ήλιο εξαντλήσει το υδρογόνο στον πυρήνα του;",
        optionA: "Εκρήγνυται αμέσως ως σουπερνόβα",
        optionB: "Γίνεται μαύρη τρύπα",
        optionC: "Σβήνει απότομα",
        optionD: "Διογκώνεται και γίνεται κόκκινος γίγαντας",
        correctOption: "optionD"
    },

    {
        question: "Πώς ονομάζεται ο λευκός νάνος που βρίσκεται κοντά στον ήλιο;",
        optionA: "Σίριος Α",
        optionB: "Proxima Centauri",
        optionC: "Σίριος B",
        optionD: "Capella",
        correctOption: "optionC"
    },

    {
        question: "Ποιο είναι το τελικό στάδιο της εξέλιξης ενός αστέρα πριν γίνει λευκός νάνος;",
        optionA: "Κόκκινος νάνος",
        optionB: "Κόκκινος γίγαντας",
        optionC: "Μαύρος γίγαντας",
        optionD: "Μπλε νάνος",
        correctOption: "optionB"
    },

    {
        question: "Ποιο από τα παρακάτω δεν είναι ένα χαρακτηριστικό των λευκών νάνων;",
        optionA: "Πολύ υψηλή θερμοκρασία",
        optionB: "Μεγάλο μέγεθος και υψηλή φωτεινότητα",
        optionC: "Μικρό μέγεθος",
        optionD: "Μεγάλη πυκνότητα",
        correctOption: "optionB"
    },

    {
        question: "Τι είναι τα δυαδικά αστέρια;",
        optionA: "Αστέρες που έχουν δύο πυρήνες",
        optionB: "Ένα άστρο που χωρίστηκε στα δύο",
        optionC: "Αστέρες που δεν έχουν σχέση μεταξύ τους",
        optionD: "Δύο αστέρες που περιστρέφονται γύρω από το κοινό τους κέντρο μάζας",
        correctOption: "optionD"
    },

    {
        question: "Τι σχηματίζεται όταν ένας κόκκινος γίγαντας αποβάλει τα εξωτερικά του στρώματα;",
        optionA: "Ένα πλανητικό νεφέλωμα, με έναν λευκό νάνο στο κέντρο",
        optionB: "Μια μαύρη τρύπα",
        optionC: "Ένας αστέρας νετρονίων",
        optionD: "Ένα νέο άστρο",
        correctOption: "optionA"
    },

    {
        question: "Πώς καθορίζουμε την μάζα ενός αστέρα;",
        optionA: "Από την μέτρηση της τροχιάς του",
        optionB: "Από το Βαρυτικό του Φακό",
        optionC: "Από την παρατήρηση των τροχιακών κινήσεων ενός δορυφόρου γύρω από τον αστέρα",
        optionD: "Όλα τα παραπάνω",
        correctOption: "optionD"
    },

    {
        question: "Ποια είναι η κύρια ιδιότητα ενός αστέρα Νετρονίου;",
        optionA: "Πολύ χαμηλή θερμοκρασία",
        optionB: "Υπερβολικά υψηλή πυκνότητα",
        optionC: "Μεγάλη φωτεινότητα",
        optionD: "Μεγάλη διάμετρος",
        correctOption: "optionB"
    },

    {
        question: "Τι θα γίνει ο Ήλιος όταν φτάσει στο τέλος της ζωής του;",
        optionA: "Λευκός νάνος",
        optionB: "Αστέρας Νετρονίων",
        optionC: "Μαύρη τρύπα",
        optionD: "Αρχέγονη μαύρη τρύπα",
        correctOption: "optionA"
    },

    {
        question: "Σε ποιον αιώνα έγινε η πρώτη αναφορά μαύρης τρύπας;",
        optionA: "18ο",
        optionB: "19ο",
        optionC: "20ο",
        optionD: "21ο",
        correctOption: "optionA"
    },

    {
        question: "Ποια από τα παρακάτω δεν είναι είδη μαύρης τρύπας;",
        optionA: "Αστρική",
        optionB: "Υπερμεγέθης",
        optionC: "Ενδιάμεση",
        optionD: "Αστέρας νετρονίων",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] // Κενός πίνακας για να κρατάει τις τυχαία επιλεγμένες ερωτήσεις

function handleQuestions() { 
    // Συνάρτηση για να ανακατεύει και να τοποθετεί 10 ερωτήσεις στον πίνακα shuffledQuestions
    // Σε κάθε quiz θα ερωτώνται 10 ερωτήσεις τη φορά 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 // Κρατάει τον τρέχοντα αριθμό της ερώτησης
let playerScore = 0  // Κρατάει το σκορ του παίκτη
let wrongAttempt = 0 // Πλήθος των λανθασμένων απαντήσεων που επέλεξε ο παίκτης
let indexNumber = 0 // Θα χρησιμοποιηθεί για την εμφάνιση της επόμενης ερώτησης

// Συνάρτηση για την εμφάνιση της επόμενης ερώτησης στο DOM
// Επίσης διαχειρίζεται και δείχνει πληροφορίες του παίκτη και του quiz στο DOM
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] // Παίρνει την τρέχουσα ερώτηση
    const currentQuestionAnswer = currentQuestion.correctOption // Παίρνει την απάντηση της τρέχουσας ερώτησης
    const options = document.getElementsByName("option"); // Παίρνει όλα τα στοιχεία στο DOM με όνομα 'option' (σε αυτή την περίπτωση τα radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            // Παίρνει το σωστό radio input με τη σωστή απάντηση
            correctOption = option.labels[0].id
        }
    })

    // Έλεγχος για να βεβαιωθεί ότι ένα radio input έχει επιλεγεί
        if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    // Έλεγχος αν το επιλεγμένο radio button είναι το ίδιο με την απάντηση (δηλαδή αν ο χρήστης απάντησε σωστά)
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ // Προσθήκη στο σκορ του παίκτη
            indexNumber++ // Προσθήκη 1 στο index για να εμφανιστεί η επόμενη ερώτηση
            // Καθυστέρηση του αριθμού της ερώτησης μέχρι να φορτώσει η επόμενη ερώτηση
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

    // Εαν η απάντηση είναι λανθασμένη:    
        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ // Προσθήκη 1 στον αριθμό των λανθασμένων προσπαθειών 
            indexNumber++
            // Καθυστέρηση του αριθμού της ερώτησης μέχρι να φορτώσει η επόμενη ερώτηση
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



// Καλείται όταν πατηθεί το κουμπί επόμενης ερώτησης
function handleNextQuestion() {
    checkForAnswer() // Ελέγχει αν ο παίκτης επέλεξε σωστά ή λάθος
    unCheckRadioButtons()
    // Καθυστέρηση της επόμενης ερώτησης για ένα δευτερόλεπτο 
    setTimeout(() => {
        if (indexNumber <= 9) {
// Δείχνει την επόμενη ερώτηση όσο το νούμερο του index είναι μικρότερο του 9, το index νούμερο ξεκινά από 0 και φτάνει το 9, οπότε το 9 αντιστοιχεί στην 10η ερώτηση
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()// Τερματίζει το παιχνίδι αν το indexNumber είναι μεγαλύτερο από 9, δηλαδή αν είμαστε ήδη στη 10η ερώτηση
        }
        resetOptionBackground()
    }, 1000);
}

// Επαναφορά των επιλογών του background στο null μετά την εμφάνιση των σωστών/λάθος χρωμάτων
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// Αποεπιλογή όλων των radio buttons για την επόμενη ερώτηση 
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// Συνάρτηση για όταν έχουν απαντηθεί όλες οι ερωτήσεις
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // Έλεγχος για την απόδοση του παίκτη και επιλογή αντίστοιχου χρώματος στο σχόλιο
    if (playerScore <= 3) {
        remark = "Κακή Βαθμολογία! Συνέχισε την προσπάθεια."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Μέτρια Βαθμολογία. Μπορείς και καλύτερα."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Συγχαρητήρια! Συνέχισε την καλή δουλειά!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    // Δεδομένα για την εμφάνιση στον πίνακα του σκορ
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

// Κλείσιμο του modal του σκορ, επαναφορά του παιχνιδιού και ανακάτεμα των ερωτήσεων
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

// Συνάρτηση για το κλείσιμο του warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}