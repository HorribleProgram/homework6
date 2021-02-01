// Wire up search button.
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  console.log(inputValue);
});

// Binds search_list to the <ul> element.
const search_list = document.getElementById('history-list');

// Iterates over each <li> in the <ul> and assigns ids to them from [1, 5] inclusive.
// Needed to save to localStorage
let count = 1;
for (let li of search_list.children) {
  li.setAttribute("id", count++);
}

// Search History
let search_history = [];

// if (localStorage.getItem()) {
  // TODO: get search_history and populate #history-list.
// }
