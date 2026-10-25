let items = ['Americano', 'Breve', 'Cappuccino', 'Espresso', 'Latte'];

const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const sortItemBtn = document.getElementById('sortItemBtn');

function renderList() {
  itemList.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => removeItem(index));

    li.appendChild(removeBtn);
    itemList.appendChild(li);
  });
}

function addItem() {
  const value = itemInput.value.trim();
  if (value !== '') {
    items.push(value);
    itemInput.value = '';
    renderList();
  }
}

function removeItem(index) {
  items.splice(index, 1);
  renderList();
}

function sortList() {
  items.sort();
  renderList();
}

if (addItemBtn) addItemBtn.addEventListener('click', addItem);
if (sortItemBtn) sortItemBtn.addEventListener('click', sortList);

if (itemInput) {
  itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  });
}

renderList();