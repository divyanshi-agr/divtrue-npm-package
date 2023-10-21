function divtrue() {
  let inputDiv = document.querySelector(".divtrue");
  let input = document.querySelector(".divtrue input");
  let content = inputDiv.appendChild(document.createElement("p"));
  let submitBtn = document.querySelector(".divtrue button");

  submitBtn.addEventListener("click", () => {
    if (input.value === "Divyanshi") {
      content.innerHTML = "Yeaa that's right suckaa!!";
    } else {
      content.innerHTML = "Leave.";
    }

    input.value = "";
  });
}

module.exports.divtrue = divtrue;
