var studentScore = 97;
function calculateGrade(studentScore) {
    switch (studentScore) {
        case studentScore >= 90: {
            console.log("Student's Grade is Grade A")
            break;
        }
        case studentScore > 70 || studentScore < 90: {
            console.log("Student's Grade is Grade B")
            break;
        }
        case studentScore > 50 || studentScore < 70: {
            console.log("Student's Grade is Grade C")
            break;
        }
        case studentScore < 50: {
            console.log("Student's Grade is Grade D")
            break;
        }
        default: {
            console.log("Information Unavailable")
            break
        }

    }
}
calculateGrade(studentScore);