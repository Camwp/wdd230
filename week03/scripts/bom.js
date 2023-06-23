const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
  const myItem = input.value.trim();
  if (myItem !== '') {
    displayList(myItem);
    chaptersArray.push(myItem);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  li.appendChild(deleteButton);
  list.appendChild(li);

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
