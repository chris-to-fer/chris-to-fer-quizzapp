const card = document.querySelector(".card-container");

const darkSwitch = document.querySelector('[data-js="darkMode"]');
const body = document.querySelector("body");
const main = document.querySelector("main");

const form = document.querySelector('[data-js="addCards"]');
const addQuestion = document.querySelector('[data-js="addQuestion"]');
const addAnswer = document.querySelector('[data-js="addAnswer"]');
const addTag = document.querySelector('[data-js="addTag"]');

const submitButton = document.querySelector('[data-js="submitBtn"]');

const charsQuestion = document.querySelector('[data-js="questionCharsLeft"]');
const charsAnswer = document.querySelector('[data-js="answerCharsLeft"]');

// storage for dark mode
/*
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("dark")) {
    //darkSwitch.checked = true;
    body.classList.add("dark");
    main.classList.add("dark");
    //card.classList.add("darkcard");
  } else {
    //darkSwitch.checked = false;
    body.classList.remove("dark");
    main.classList.remove("dark");
    //card.classList.remove("darkcard");
  }
});
*/
/*
if (loc === "profile.html") {
  darkSwitch.addEventListener("change", () => {
    localStorage.setItem("dark", this.checked);
    if (darkSwitch.checked) {
      body.classList.add("dark");
      main.classList.add("bark");
      //card.classList.add("darkcard");
      //card.sytle.backgrounfColor = "dimgray";
    } else {
      localStorage.removeItem("dark");
      body.classList.remove("dark");
      main.classList.remove("bark");
      //card.classList.remove("darkcard");
      //card.style.backgroundColor = burlywood;
    }
  });
}

*/

//form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const section = document.createElement("section");
  section.classList.add("card-container");

  const newBookmark = document.createElement("button");
  newBookmark.setAttribute("data-js", "bookmark");
  newBookmark.classList.add("bookmark");
  section.append(newBookmark);

  const newBookImage = document.createElement("img");
  newBookImage.src = "./components/bmw.png";
  newBookImage.setAttribute("data-js", "bookmarkImage");
  newBookmark.append(newBookImage);

  const newArticle = document.createElement("article");
  newArticle.classList.add("card-article");
  section.append(newArticle);

  const newQuestion = document.createElement("p");
  newArticle.append(newQuestion);
  newQuestion.textContent = addQuestion.value;

  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("check");
  newAnswerButton.textContent = "Show Answer";
  newAnswerButton.setAttribute("data-js", "answerButton");
  newArticle.append(newAnswerButton);

  const newAnswerText = document.createElement("p");
  newAnswerText.classList.add("solution");
  newAnswerText.setAttribute("hidden", "");
  newAnswerText.setAttribute("data-js", "answerText");
  newAnswerText.textContent = addAnswer.value;
  newArticle.append(newAnswerText);

  const newTagsContainer = document.createElement("p");
  newTagsContainer.classList.add("tags-container");
  section.append(newTagsContainer);

  const newTags = document.createElement("ul");
  newTags.classList.add("tags");
  newTagsContainer.append(newTags);

  const newList = document.createElement("li");
  newList.textContent = addTag.value;
  newTags.append(newList);

  main.append(section);

  //bookmark toggle activate
  const bookmarkImage = document.querySelector('[data-js="bookmarkImage"]');
  const bbutton = document.querySelector('[data-js="bookmark"]');

  bbutton.addEventListener("click", (e) => {
    if (bookmarkImage.src.match("bmw.png")) {
      bookmarkImage.src = "./components/bm.png";
    } else if (bookmarkImage.src.match("bm.png")) {
      bookmarkImage.src = "./components/bmw.png";
    }
  });

  //answer toggle activate
  const answerButton = document.querySelector('[data-js="answerButton"]');
  const answer = document.querySelector('[data-js="answerText"]');

  let aCounter = 1;
  answerButton.addEventListener("click", (e) => {
    if (aCounter % 2 != 0) {
      answer.removeAttribute("hidden");
      answerButton.textContent = "Hide answer";
      aCounter++;
    } else {
      answer.setAttribute("hidden", "");
      answerButton.textContent = "Show answer";
      aCounter--;
    }
  });

  charsAnswer.textContent = "";
  charsQuestion.textContent = "";
  form.reset();
});

// Character Counts to textfields

function countChars(inputField, output) {
  inputField.addEventListener("input", () => {
    output.textContent = 150 - inputField.value.length + " characters left";
    inputField.value.length === 150
      ? output.classList.add("red")
      : output.classList.remove("red");
  });
}

countChars(addQuestion, charsQuestion);
countChars(addAnswer, charsAnswer);

//legacy chars count
/*
addQuestion.addEventListener("input", () => {
  charsQuestion.textContent =
    150 - addQuestion.value.length + " characters left";
  addQuestion.value.length === 150
    ? charsQuestion.classList.add("red")
    : charsQuestion.classList.remove("red");
});


addAnswer.addEventListener("input", () => {
  charsAnswer.textContent = 150 - addAnswer.value.length + " characters left";
  addAnswer.value.length === 150
    ? charsAnswer.classList.add("red")
    : charsAnswer.classList.remove("red");
});
*/
