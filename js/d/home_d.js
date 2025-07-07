import { dictionary_10000 } from "../dictionary_10000.js";
import {dictionary_5000 } from "../dictionary_5000.js";

export function home_d(dom) {

    document.addEventListener("changeDiv", () => {
        if (
            [
                "START",
            ]
            .includes(dom.els.home_d.dataset.from)
        ) {
            dom.changeDivToComplete("home_d");
            createWordle(dom);
            createKeyboard(dom);
            //let spanN = 0;
            //let divN = 0;
            //let testWords = [""];
            //let testWord = "";
        }

        let testWord = "";
        let testWords = [""];
        let sectionN = 0;
        let spanN = 0;

        const answerWord = dictionary_5000[Math.floor(Math.random() * dictionary_5000.length)];
        console.log(answerWord);

        dom.els.home_dKeyboard_section.addEventListener("pointerdown", (event) => {

            //event.target.style.color = "red";
            //const spanToModify = document.querySelector("#div" + divN + "-span" + spanN);
            const newLetter = event.target.innerText;
            //spanToModify.innerHTML = newLetter;
            if (newLetter === "a") {
                testWord += newLetter;
                extendWords(testWords, ["a", "á"]);
                displayLetter(sectionN, event, spanN);
                spanN++;
            }
            if (newLetter === "e") {
                testWord += newLetter;
                extendWords(testWords, ["e", "é"]);
                displayLetter(sectionN, event, spanN);
                spanN++;
            }
            if (newLetter === "i") {
                testWord += newLetter;
                extendWords(testWords, ["i", "í"]);
                displayLetter(sectionN, event, spanN);
                spanN++;
            }
            if (newLetter === "o") {
                testWord += newLetter;
                extendWords(testWords, ["o", "ó"]);
                displayLetter(sectionN, event, spanN);
                spanN++;
            }
            if (newLetter === "u") {
                testWord += newLetter;
                extendWords(testWords, ["u", "ú", "ü"]);
                displayLetter(sectionN, event, spanN);
                spanN++;
            }
            if (newLetter === "n") {
                testWord += newLetter;
                extendWords(testWords, ["n", "ñ"]);
                displayLetter(sectionN, event, spanN);
                spanN++;
            }
            if (
                newLetter === "b" ||
                newLetter === "c" ||
                newLetter === "d" ||
                newLetter === "f" ||
                newLetter === "g" ||
                newLetter === "h" ||
                newLetter === "j" ||
                newLetter === "k" ||
                newLetter === "l" ||
                newLetter === "m" ||
                newLetter === "p" ||
                newLetter === "q" ||
                newLetter === "r" ||
                newLetter === "s" ||
                newLetter === "t" ||
                newLetter === "v" ||
                newLetter === "w" ||
                newLetter === "x" ||
                newLetter === "y" ||
                newLetter === "z"
                ) {
                testWord += newLetter;
                extendWords(testWords, [newLetter]);
                displayLetter(sectionN, event, spanN);
                spanN++;
            }
            if (newLetter === "?") {
                const a = document.createElement("a");
                const href = "https://en.wiktionary.org/wiki/" + answerWord + "#spanish";
                a.setAttribute("href", href);
                a.textContent = answerWord;
                dom.els.home_dAnswer_p.append(a);
            }
            if (spanN === 5) {
                let actualWords = [];
                let i = 0;
                while (i < testWords.length) {
                    if (dictionary_5000.includes(testWords[i])) {
                        actualWords.push(testWords[i]);
                    }
                    i++;
                }
                const messageSpan = document.querySelector("#section" + sectionN + "-span5");
                if (actualWords.length === 0) {
                messageSpan.innerHTML = testWord + " is not in dictionary";
                i = 0;
                while (i < 5) {
                    const spanToClear = document.querySelector("#section" + sectionN + "-span" + i);
                    spanToClear.innerHTML = "";
                    i++
                }
                } else {
                // this while loop fails to add the classes when the letter in the answer word
                // has an accent on it. That would confuse the user. It requires a long winded
                // approach... You could have a stripAccents function and apply this to all the
                // letters in answerWord first
                function stripAccents(inputString) {
                    let returnString = "";
                    let i = 0;
                    while (i < inputString.length) {
                        if (
                            inputString[i] === "á" ||
                            inputString[i] === "a"
                        ) {
                            returnString += "a";
                        }
                        if (
                            inputString[i] === "é" ||
                            inputString[i] === "e"
                        ) {
                            returnString += "e";
                        }
                        if (
                            inputString[i] === "í" ||
                            inputString[i] === "i"
                        ) {
                            returnString += "i";
                        }
                        if (
                            inputString[i] === "ó" ||
                            inputString[i] === "o"
                        ) {
                            returnString += "o";
                        }
                        if (
                            inputString[i] === "ú" ||
                            inputString[i] === "ü" ||
                            inputString[i] === "u"
                        ) {
                            returnString += "u";
                        }
                        if (
                            inputString[i] === "ñ" ||
                            inputString[i] === "n"
                        ) {
                            returnString += "n";
                        }
                        if (
                            inputString[i] === "b" ||
                            inputString[i] === "c" ||
                            inputString[i] === "d" ||
                            inputString[i] === "f" ||
                            inputString[i] === "g" ||
                            inputString[i] === "h" ||
                            inputString[i] === "j" ||
                            inputString[i] === "k" ||
                            inputString[i] === "l" ||
                            inputString[i] === "m" ||
                            inputString[i] === "p" ||
                            inputString[i] === "q" ||
                            inputString[i] === "r" ||
                            inputString[i] === "s" ||
                            inputString[i] === "t" ||
                            inputString[i] === "v" ||
                            inputString[i] === "w" ||
                            inputString[i] === "x" ||
                            inputString[i] === "y" ||
                            inputString[i] === "z"
                            ) {
                                returnString += inputString[i];
                            }
                        i++
                    }
                    return returnString;
                }
                const answerWordMinusAccents = stripAccents(answerWord);
                i = 0;
                while (i < 5) {
                const spanToAddClass =document.querySelector("#section" + sectionN + "-span" + i);
                if (answerWordMinusAccents.includes(spanToAddClass.innerText)) {
                    spanToAddClass.classList.add("inAnswer");
                }
                if (answerWordMinusAccents[i] === (spanToAddClass.innerText)) {
                    spanToAddClass.classList.add("correct");
                }
                i++
                }
                messageSpan.innerHTML = "<a href='https://en.wiktionary.org/wiki/" + actualWords[0] + "#Spanish'>" + actualWords[0] + "</a>";
                i = 1;
                while (i < actualWords.length) {
                    messageSpan.innerHTML += ", <a href='https://en.wiktionary.org/wiki/" + actualWords[i] + "#Spanish'>" + actualWords[i] + "</a>";
                    i++;
                }
                sectionN++;
                }
                testWords = [""];
                testWord = "";
                actualWords = [];
                spanN = 0;
            }
        });
        
});

    function createKeyboard(dom) {
        const characters = [
            ["q", "", "w", "",  "e", "",  "r", "",  "t", "",  "", ""],
            ["",  "", "",  "y", "",  "u", "",  "i", "",  "o", "", "p"],
            ["a", "", "s", "",  "d", "",  "f", "",  "g", "",  "", ""],
            ["",  "", "",  "h", "",  "j", "",  "k", "",  "l", "", ""],
            ["z", "", "x", "",  "c", "",  "v", "",  "b", "",  "", ""],
            ["",  "", "",  "n", "",  "m", "",  "",  "",  "?", "", ""],
        ]
        characters.forEach(row => {
            const p = document.createElement("p");
            p.classList.add("row-of-chars");
            row.forEach(el => {
                const span = document.createElement("span");
                span.textContent = el;
                p.append(span);
            })
            dom.els.home_dKeyboard_section.append(p);
        })
    }

    function createWordle(dom) {
        let i = 0;
        while (i < 6) {
            const section = document.createElement("section");
            let j = 0;
            while (j < 6) {
                const span = document.createElement("span");
                span.setAttribute("id", "section" + i + "-span" + j);
                if (j === 5) {
                    span.classList.add("message");
                }
                section.append(span);
                j++;
            }
            dom.els.home_dWordle_section.append(section);
            i++;
        }
    }

    function displayLetter(sectionN, event, spanN) {
        const spanToModify = document.querySelector("#section" + sectionN + "-span" + spanN);
        const newLetter = event.target.innerText;
        spanToModify.innerHTML = newLetter;
        spanN = spanN + 1;
        console.log(spanN)
    }

    function extendWords(testWords, letters) {
        const tempTestWords = [];
        while (testWords.length > 0) {
            tempTestWords.push(testWords.pop());
        }
        while (tempTestWords.length > 0) {
            let wordToExtend = tempTestWords.pop();
            let i = 0
            while (i < letters.length) {
                testWords.push(wordToExtend + letters[i]);
                i++;
            }
        }
    }
}