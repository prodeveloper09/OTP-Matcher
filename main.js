const generateBtn = document.querySelector(".generate-btn");

generateBtn.addEventListener("click", function () {
  let randomNum = getRandomInt(1111, 9999);

  document.querySelector(".form-control").value = randomNum;
});

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const pinCheck = document.querySelectorAll(".button");

function pinInput(x) {
  let item = document.querySelector(".pinInput");
  item.value = item.value + x;
}
pinCheck.forEach((btn) => {
  btn.addEventListener("click", function () {
    pinInput(this.innerText);
  });
});

function backBtn() {
  let item = document.querySelector(".pinInput");
  item.value = item.value.slice(0, -1);
}

function reset() {
  let item = document.querySelector(".pinInput");
  item.value = null;
}


let tryLeft = 3;
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function () {
  let generatedPin = document.querySelector(".form-control").value;
  let userPin = document.querySelector(".pinInput").value;

  if (generatedPin === userPin) {
    document.querySelector(".Matched-notify").classList.remove("d-none");
    document.querySelector(".notify").classList.add("d-none");
    document.querySelector(".try-left").innerText = ""; 
  } else {
    tryLeft--;

    document.querySelector(".notify").classList.remove("d-none");
    document.querySelector(".Matched-notify").classList.add("d-none");

    // show try left text
    document.querySelector(".try-left").innerText = `${tryLeft} try left`;

    // if tries finished
    if (tryLeft === 0) {
      submitBtn.disabled = true;
      document.querySelector(".try-left").innerText = "❌ No tries left";
    }
  }
});

generateBtn.addEventListener("click", function () {
  tryLeft = 3;
  document.querySelector(".try-left").innerText = "";
  submitBtn.disabled = false;
});
