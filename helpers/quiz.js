// Λίστα με τις ερωτήσεις και τις απαντήσεις του κουίζ
const questions = [
    {
        question: "Ποιος αστροφυσικός όρισε πρώτος τη μαύρη τρύπα ως μια περιοχή στο διάστημα από την οποία τίποτα δεν μπορεί να δραπετεύσει;",
        optionA: "Albert Einstein",
        optionB: "Stephen Hawking",
        optionC: "Carl Sagan",
        optionD: "Neil deGrasse Tyson",
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
        question: "Ποια από τις παρακάτω δηλώσεις για τον 'εντροπικό νόμο των μαυρών τρυπών' είναι αληθής;",
        optionA: "Όλες οι μαύρες τρύπες έχουν την ίδια εντροπία",
        optionB: "Η εντροπία μιας μαύρης τρύπας είναι μηδενική",
        optionC: "Η εντροπία μιας μαύρης τρύπας είναι ανάλογη της επιφάνειας του συμβάντος ορίζοντος",
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
        question: "Πώς ονομάζεται η ακτινοβολία που εκπέμπεται από έναν αστέρα;",
        optionA: "Υπέρυθρη ακτινοβολία",
        optionB: "Υπεριώδης ακτινοβολία",
        optionC: "Ορατή ακτινοβολία",
        optionD: "Ηλιακή ακτινοβολία",
        correctOption: "optionD"
    },

    {
        question: "Ποιος αστέρας βρίσκεται πιο κοντά στη Γη;",
        optionA: "Αντάρης",
        optionB: "Ήλιος",
        optionC: "Βητα Centauri",
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
        question: "Τι είναι ένα supernova;",
        optionA: "Η εκρήξη ενός αστέρα",
        optionB: "Ένας νέος αστέρας",
        optionC: "Ένας λευκός νάνος",
        optionD: "Ένας κόκκινος γίγαντας",
        correctOption: "optionA"
    },

    {
        question: "Τι προκαλεί την εκρήξη ενός αστέρα σε ένα supernova;",
        optionA: "Ολοκλήρωση της περιστροφικής κίνησης",
        optionB: "Εξάντληση του υδρογόνου στον πυρήνα του αστέρα",
        optionC: "Συνολική κατάρρευση του πυρήνα του αστέρα",
        optionD: "Η θερμοκρασία της επιφάνειάς του",
        correctOption: "optionC"
    },


    {
        question: "Ποιο από τα παρακάτω είναι ένα προϊόν της έκρηξης ενός αστέρα σε supernova;",
        optionA: "Νετρόνια",
        optionB: "Ανιόντα",
        optionC: "Σίδηρος",
        optionD: "Όλα τα παραπάνω",
        correctOption: "optionD"
    },

    {
        question: "Πώς ονομάζεται η εκρήξη ενός μικρού αστέρα;",
        optionA: "Supernova τύπου Ια",
        optionB: "Κυριάκεια",
        optionC: "Supernova τύπου ΙΙ**",
        optionD: "Υπερνόβα",
        correctOption: "optionA"
    },

    {
        question: "Ποια είναι η κύρια ένδειξη ότι ένας αστέρας έχει καταναλώσει όλο του το υδρογόνο;",
        optionA: "Το κόκκινο χρώμα του",
        optionB: "Η έκρηξη ως supernova",
        optionC: "Το μαύρο χρώμα του",
        optionD: "Η παρουσία ενός λευκού νάνου στο κέντρο",
        correctOption: "optionD"
    },

    {
        question: "Πώς ονομάζεται ο λευκός νάνος που βρίσκεται κοντά στον ήλιο;",
        optionA: "Σίριος Α",
        optionB: "Προξίμιος",
        optionC: "Σίριος B",
        optionD: "Καπέλας",
        correctOption: "optionC"
    },

    {
        question: "Ποιο είναι το τελικό στάδιο της εξέλιξης ενός αστέρα πριν γίνει λευκός νάνος;",
        optionA: "Κόκκινος νάνος",
        optionB: "Κόκκινος γίγαντας",
        optionC: "Μαύρος γίγαντας",
        optionD: "Μπλε νάνος",
        correctOption: "optionA"
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
        optionB: "Αστέρες που περιστρέφονται γύρω από το ίδιο κέντρο μάζας",
        optionC: "Αστέρες που δεν έχουν σχέση μεταξύ τους",
        optionD: "Δύο αστέρες που περιστρέφονται γύρω από το κοινό τους κέντρο μάζας",
        correctOption: "optionD"
    },

    {
        question: "Γιατί εκτοπίζεται η εξωτερική ατμόσφαιρα ενός λευκού νάνου;",
        optionA: "Λόγω της κεντρικής κατάρρευσης του πυρήνα του",
        optionB: "Λόγω της παρουσίας ενός κοντινού αστέρα",
        optionC: "Λόγω της ιδιότητάς του να απορροφά το φως",
        optionD: "Λόγω της διάσπασης του ατμοσφαιρικού του υλικού",
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
        question: "Τί θα γίνει ο Ήλιος όταν φτάσει στο τέλος της ζωής του;",
        optionA: "Λευκός νάνος",
        optionB: "Αστέρας Νετρονίων",
        optionC: "Μαύρη τρύπα",
        optionD: "Αρχέγονη μαύρη τρύπα",
        correctOption: "optionA"
    },

    {
        question: "Σε ποιον αιώνα έγινε η πρώτη αναφορά μαύρης τρύπας;",
        optionA: "18ο",
        optionB: "19o",
        optionC: "20o",
        optionD: "21o",
        correctOption: "optionA"
    },

    {
        question: "Ποια από τα παρακάτω δεν είναι είδη μαύρης τρύπας;",
        optionA: "Αστρική",
        optionB: "Υπερμεγέθης",
        optionC: "Ενδιάμεση",
        optionD: "Μικροσκοπική",
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