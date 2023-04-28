let addButton = document.getElementById("submit_button");
let mediaNameInput = document.querySelector("#media_name");
let platformNameInput = document.querySelector("#platform_name");
let categoryInput = document.querySelector("#category");

let isAiringBlock = document.getElementById("is_airing_block");
if (categoryInput.value == "Series") {
  isAiringBlock.style.display = "block";
} else {
  isAiringBlock.style.display = "none";
}

let totalSeasonsBlock = document.getElementById("total_seasons_block");
let totalSeasonsInput = document.getElementById("total_seasons");
if (categoryInput.value == "Series") {
  totalSeasonsBlock.style.display = "block";
} else {
  totalSeasonsBlock.style.display = "none";
}

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
if (isWatchingCheckbox.value == 0) {
  isWatchingCheckbox.checked = false;
} else {
  isWatchingCheckbox.checked = true;
}

function toggleIsWatching() {
  if (isWatchingCheckbox.value == 1) {
    isWatchingCheckbox.value = 0;
  } else {
    isWatchingCheckbox.value = 1;
  }
}

let isAiringCheckbox = document.getElementById("is_airing");
if (isAiringCheckbox.value == 0) {
  isAiringCheckbox.checked = false;
} else {
  isAiringCheckbox.checked = true;
}

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

toggleAddMediaButton();
