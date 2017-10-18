function getGrade(score) {
    let grade;
    // Write your code here
    if (score >= 0 && score <= 5) {
        grade = "F";
    } else if (score > 5 && score <= 10) {
        grade = "E";
    } else if (score > 10 && score <= 15) {
        grade = "D";
    } else if (score > 15 && score <= 20) {
        grade = "C";
    } else if (score > 20 && score <= 25) {
        grade = "B";
    } else if (score > 25 && score <= 30) {
        grade = "A";
    }
    
    return grade;
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s.charAt(0)) {
        case ("a" || "e" || "i" || "o" || "u"):
            letter = "A";
            break;
        case ("b" || "c" || "d" || "f" || "g"):
            letter = "B";
            break;
        case ("h" || "j" || "k" || "l" || "m"):
            letter = "C";
            break;
        default:
            letter = "D";
    }
    
    return letter;
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            console.log(s[i]);
        }
    }
    for (var k = 0; k < s.length; k++) {
        if (s[k] != "a" && s[k] != "e" && s[k] != "i" && s[k] != "o" && s[k] != "u") {
            console.log(s[k]);
        }
    }
}