var Kahoot = require("kahoot.js-updated");
var kahoots = [];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter a color? ', (value) => {
let pin = value
console.log(`You entered ${pin}`);
rl.close();
});
rl.question('Please enter a bot name: ', (value) => {
let name = value
console.log(`You entered ${name}`);
rl.close();
});
rl.question('Please enter a color? ', (value) => {
let botcount = value
console.log(`You entered ${botcount}`);
rl.close();
});

for (var i = 0; i < bot_count; i++) {
    kahoots.push(new Kahoot);
    kahoots[i].join(pin, name+" "+String(i)).catch(error => {
        console.log("join failed " + error.description + " " + error.status)
    });
    kahoots[i].on("Joined", () => {
        console.log("successfully joined game")
    });
    kahoots[i].on("QuestionStart", (question) => {
        question.answer(
            Math.floor(
                Math.random() * question.quizQuestionAnswers[question.questionIndex]
            ) + 0
        );
    });
    kahoots[i].on("Disconnect", (reason) => {
        console.log("disconnected because " + reason);
    });
}