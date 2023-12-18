const loc = window.location.pathname;

const card = document.querySelector(".card-container");

const darkSwitch = document.querySelector('[data-js="darkMode"]');
const body = document.querySelector("body");
const main = document.querySelector("main");

const bbutton = document.querySelector('[data-js="bookmark"]');
const bookmarkImage = document.querySelector('[data-js="bookmarkImage"]');

const answerButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector('[data-js="answerText"]');

const form = document.querySelector('[data-js="addCards"]');
const addQuestion = document.querySelector('[data-js="addQuestion"]');
const addAnswer = document.querySelector('[data-js="addAnswer"]');
const addTag = document.querySelector('[data-js="addTag"]');

const charsQuestion = document.querySelector('[data-js="questionCharsLeft"]');
const charsAnswer = document.querySelector('[data-js="answerCharsLeft"]');

const submitButton = document.querySelector('[data-js="submitBtn"]');
const profileContainer = document.getElementById("kacke");
// storage for dark mode
/*
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("dark")) {
    darkSwitch.checked = true;
    body.classList.add("dark");
    main.classList.add("dark");
    profileContainer.classList.add("dark");
    //card.classList.add("darkcard");
  } else {
    darkSwitch.checked = false;
    body.classList.remove("dark");
    main.classList.remove("dark");
    profileContainer.classList.remove("dark");
    //card.classList.remove("darkcard");
  }
});
*/

darkSwitch.addEventListener("change", () => {
  //localStorage.setItem("dark", this.checked);
  if (darkSwitch.checked) {
    body.classList.add("dark");
    main.classList.add("dark");
    // profileContainer.classList.remove("profile-container");
    // profileContainer.classList.add("dark");
    //card.classList.add("darkcard");
    profileContainer.style.backgroundColor = "dimgray";
  } else {
    //localStorage.removeItem("dark");
    body.classList.remove("dark");
    main.classList.remove("dark");
    // profileContainer.classList.remove("dark");
    // profileContainer.classList.add("profile-container");
    //card.classList.remove("darkcard");
    profileContainer.style.backgroundColor = "var(--cards)";
  }
});

/*

// Bookmark toggle activate
let bCounter = 1;
bbutton.addEventListener("click", () => {
  if (bCounter % 2 != 0) {
    bookmarkImage.src = "./components/bm.png";
    bCounter++;
  } else {
    bookmarkImage.src = "./components/bmw.png";
    bCounter--;
  }
});

//answer toggle activate
let aCounter = 1;
answerButton.addEventListener("click", () => {
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


//form

if (loc === "form.html") {
  const path = window.location.pathname;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const section = document.createElement("section");
    section.classList.add("card-container");

    const newBookmark = document.createElement("button");
    //newBookmark.setAttribute('data-js="bookmark"');
    newBookmark.classList.add("bookmark");
    section.append(newBookmark);

    const newBookImage = document.createElement("img");
    newBookImage.src = "./components/bmw.png";
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
    newArticle.append(newAnswerButton);

    const newAnswerText = document.createElement("p");
    newAnswerText.classList.add("solution");
    newAnswerText.setAttribute("hidden", "");
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

    //newArticle.append(newAnswerButton);

    main.append(section);
    form.reset();
  });

  // Character Counts to textfields

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
}

// sumbit button

  submitButton.addEventListener("click", () => {
    submitButton.classList.toggle("mousedown");
    console.log("test");
  });

console.log(loc);
*/
