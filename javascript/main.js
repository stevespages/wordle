const wordle = document.querySelector("wordle");
let i = 0;
while (i < 6) {
    const div = document.createElement("div");
    let j = 0;
    while (j < 6) {
        const span = document.createElement("span");
        span.setAttribute("id", "div" + i + "-span" + j);
        if (j === 5) {
            span.classList.add("message");
        }
        div.append(span);
        j++;
    }
    wordle.append(div);
    i++;
}
const dictionary = ["tiene", "luego", "atras", "bueno", "tener"];
const answerWord = dictionary[Math.floor(Math.random() * dictionary.length)];
console.log(answerWord);
let spanN = 0;
let divN = 0;
let testWord = "";
/*
const keyboardDiv = document.querySelector("#keyboard-div");
keyboardDiv.addEventListener("click", (event) => {
    console.log(event.target.innerText);
});
*/
const keyboardDiv = document.querySelector("#keyboard-div");
keyboardDiv.addEventListener("click", (event) => {
  const spanToModify = document.querySelector("#div" + divN + "-span" + spanN);
  spanToModify.innerHTML = event.target.innerText;
  testWord = testWord + event.target.innerText;
  console.log(testWord);
  if (spanN === 4) {
    const messageSpan = document.querySelector("#div" + divN + "-span5");
    if (dictionary.includes(testWord)) {
        let i = 0;
        while (i < 5) {
            if (answerWord.includes(testWord.charAt(i))) {
                const spanToAddClass = document.querySelector("#div" + divN + "-span" + i);
                spanToAddClass.classList.add("inAnswer");
            }
            i++;
        }
        let j = 0;
        while (j < 5) {
            if (answerWord.charAt(j) === testWord.charAt(j)) {
                const spanToAddClass = document.querySelector("#div" + divN + "-span" + j);
                spanToAddClass.classList.add("correct");
            }
            j++;
        }
        if (testWord === answerWord) {
            messageSpan.innerHTML = "<p>Win! blah blah blah</p>";
        } else {
            messageSpan.innerHTML = "<p>blah blah blah</p>";
        }
        spanN = 0;
        testWord = "";
        divN++;
    } else {
        messageSpan.innerHTML = "<p>" + testWord + " is not in the dictionary</p>";
        spanN = 0
        testWord = "";
        let i = 0;
        while (i < 5) {
            const spanToClear = document.querySelector("#div" + divN + "-span" + i);
            spanToClear.innerHTML = "";
            i++;
        }
    }
  } else {
    spanN++;
  }
});
