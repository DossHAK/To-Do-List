
let myForm = document.forms.myForm;

myForm.addEventListener('submit', function() {
    event.preventDefault();

    let title = document.querySelector('#name').value;

    document.querySelector('.tasks').innerHTML += `
    <li class="list-group-item"><span>❌</span> ${title}</li>
    `;
    myForm.reset();
});

document.querySelector('.tasks').addEventListener('click', function() {
    if(event.target.tagName == 'SPAN') {
        event.target.parentElement.remove();
    }
});


document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('.tasks').innerHTML = '';
});


document.querySelector('#bg').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = `${event.target.dataset.color}`;
});