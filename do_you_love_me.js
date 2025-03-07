const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // Sửa ở đây
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Thay đổi vị trí của nút No
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Xử lý sự kiện khi nhấn nút Yes
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
