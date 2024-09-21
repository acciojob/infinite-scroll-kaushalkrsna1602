//your code here!
// script.js

// Function to create list items
function createListItems(count) {
  const list = document.getElementById('infi-list');
  
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// Initial population of the list with 10 items
createListItems(10);

// Function to check if the user has scrolled to the bottom
function checkScroll() {
  const list = document.getElementById('infi-list');
  
  // If scrolled to the bottom, add 2 more items
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    createListItems(2);
  }
}

// Event listener for scrolling
document.getElementById('infi-list').addEventListener('scroll', checkScroll);

