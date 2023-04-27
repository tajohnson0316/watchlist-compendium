let addButton = document.getElementById("quick_add_submit_button");
let mediaNameInput = document.querySelector("#media_name");
let platformNameInput = document.querySelector("#platform_name");
let categoryInput = document.querySelector("#category");

function toggleAddMediaButton() {
  if (
    mediaNameInput.value.length > 0 &&
    platformNameInput.value != "Platform" &&
    categoryInput.value != "Category"
  ) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
}
