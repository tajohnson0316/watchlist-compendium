let addButton = document.getElementById("submit_button");
let mediaNameInput = document.querySelector("#media_name");
let platformNameInput = document.querySelector("#platform_name");
let categoryInput = document.querySelector("#category");

let isAiringBlock = document.getElementById("is_airing_block");
isAiringBlock.style.display = "none";

let totalSeasonsBlock = document.getElementById("total_seasons_block");
totalSeasonsBlock.style.display = "none";
let totalSeasonsInput = document.getElementById("total_seasons");

function toggleAddMediaButton() {
  if (
    mediaNameInput.value.length > 0 &&
    platformNameInput.value != "Platform" &&
    categoryInput.value != "Category" &&
    totalSeasonsInput.value.length > 0
  ) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
}

let isWatchingCheckbox = document.getElementById("is_watching");
isWatchingCheckbox.value = 1;

function toggleIsWatching() {
  if (isWatchingCheckbox.value == 1) {
    isWatchingCheckbox.value = 0;
  } else {
    isWatchingCheckbox.value = 1;
  }
}

let isAiringCheckbox = document.getElementById("is_airing");
isAiringCheckbox.value = 1;

function toggleIsAiring() {
  if (isAiringCheckbox.value == 1) {
    isAiringCheckbox.value = 0;
  } else {
    isAiringCheckbox.value = 1;
  }
}

function toggleAdditionalSeriesFormFields() {
  if (categoryInput.value == "Series") {
    isAiringBlock.style.display = "block";
    totalSeasonsBlock.style.display = "block";
  } else {
    isAiringBlock.style.display = "none";
    totalSeasonsBlock.style.display = "none";
  }
}
