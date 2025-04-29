document.addEventListener('DOMContentLoaded', () => {
    displayContacts();
});

let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

let addNameBtn = document.getElementById('addNameBtn');
addNameBtn.addEventListener('click', addName);

function filterNames() {
    let filterValue = filterInput.value.toUpperCase();
    let ul = document.getElementById('names');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a) { // Ensure there is an <a> tag
            if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    }
}

function displayContacts() {
    let contacts = getContactsFromLocalStorage();
    for (let letter in contacts) {
        let ul = document.getElementById(letter);
        contacts[letter].forEach(contact => {
            let li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `<a href="#">${contact}</a> <button class="btn btn-danger btn-sm float-right delete">X</button>`;
            ul.appendChild(li);
        });
    }
}

function addName() {
    let newNameInput = document.getElementById('newName');
    let newName = newNameInput.value.trim();

    if (newName === '') {
        showAlert('Please enter a name', 'danger');
        return;
    }

    let firstLetter = newName[0].toUpperCase();
    let contacts = getContactsFromLocalStorage();

    if (!contacts[firstLetter]) {
        contacts[firstLetter] = [];
    }

    if (contacts[firstLetter].includes(newName)) {
        showAlert('This name already exists', 'danger');
        return;
    }

    contacts[firstLetter].push(newName);
    contacts[firstLetter].sort();
    localStorage.setItem('contacts', JSON.stringify(contacts));

    let ul = document.getElementById(firstLetter);
    ul.innerHTML = '';
    contacts[firstLetter].forEach(contact => {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<a href="#">${contact}</a> <button class="btn btn-danger btn-sm float-right delete">X</button>`;
        ul.appendChild(li);
    });

    showAlert('Name added successfully', 'success');
    newNameInput.value = '';
}

document.getElementById('names').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let name = li.getElementsByTagName('a')[0].textContent;
        let firstLetter = name[0].toUpperCase();

        li.remove();
        removeNameFromLocalStorage(name, firstLetter);
        showAlert('Name removed successfully', 'success');
    }
});

function getContactsFromLocalStorage() {
    let contacts;
    if (localStorage.getItem('contacts') === null) {
        contacts = {};
    } else {
        contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return contacts;
}

function removeNameFromLocalStorage(name, firstLetter) {
    let contacts = getContactsFromLocalStorage();
    contacts[firstLetter] = contacts[firstLetter].filter(contact => contact !== name);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function showAlert(message, className) {
    let alert = document.getElementById('alert');
    alert.className = `alert alert-${className}`;
    alert.textContent = message;
    alert.style.display = 'block';

    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}
