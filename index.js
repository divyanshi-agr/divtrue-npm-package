function divtrue() {
  let inputDiv = document.querySelector(".divtrue");
  let input = document.querySelector(".divtrue input");
  let content = inputDiv.appendChild(document.createElement("p"));

  if (input.value === "Divyanshi") {
    content.innerHTML = "You entered the string <em>Divyanshi</em>";
  } else {
    content.innerHTML = "You entered the wrong string!";
  }
}

module.exports.divtrue = divtrue;
