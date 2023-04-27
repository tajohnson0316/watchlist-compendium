let submitButton = document.getElementById("submit_button");
let platformNameInput = document.querySelector("#platform_name");

function toggleSubmitButton() {
  if (platformNameInput.value.length > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
