const loc = window.location.pathname;

/*document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("dark")) {
    body.classList.add("dark");
    main.classList.add("dark");
    card.classList.add("darkcard");
    darkSwitch.checked = true;
  } else {
    body.classList.remove("dark");
    main.classList.remove("dark");
    card.classList.remove("darkcard");
    darkSwitch.checked = false;
  }
});
*/
const darkSwitch = document.querySelector('[data-js="darkMode"]');
const body = document.querySelector("body");
const main = document.querySelector("main");
const card = document.getElementsByClassName("card-container");

const bbutton = document.querySelector('[data-js="bookmark"]');
const bookmarkImage = document.querySelector('[data-js="bookmarkImage"]');

const answerButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector('[data-js="answerText"]');

const form = document.querySelector('[data-js="addCards"]');
const addQuestion = document.querySelector('[data-js="addQuestion"]');
const addAnswer = document.querySelector('[data-js="addAnswer"]');
const addTag = document.querySelector('[data-js="addTag"]');

if (loc === "/profile.html") {
  darkSwitch.addEventListener("change", () => {
    localStorage.setItem("dark", this.checked);
    if (darkSwitch.checked) {
      body.classList.add("dark");
      main.classList.add("dark");
      card.classList.add("darkcard");
      //card.sytle.backgrounfColor = "dimgray";
    } else {
      localStorage.removeItem("dark");
      body.classList.remove("dark");
      main.classList.remove("dark");
      card.classList.remove("darkcard");
      //card.style.backgroundColor = burlywood;
    }
  });
}

if (loc === "/index.html" || loc === "/bookmark.html") {
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
    console.log("test");
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
}
//form
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
  newTags.textContent = addTag.value;
  newTagsContainer.append(newTags);

  newArticle.append(newAnswerButton);

  main.append(section);
});
