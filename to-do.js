//theme style, body style, input box style and list style.
const icon = document.getElementById('icon');
const con = document.getElementById('con');
const container = document.getElementById('container');
const white = document.getElementById('light-container');
let theme = 'dark'

//sun icon/svg
icon.addEventListener('click', () => {
    theme ='light'
    // change theme
    // document.body.classList.toggle('light');
    document.body.classList.add('light');

    //change backgroundImage
    document.getElementById('container').style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
    document.getElementById('container').style.backgroundRepeat = "no-repeat"; 

    //change input box color
    document.getElementById('input').style.backgroundColor = "#EBEBEB";
    document.getElementById('typed').style.backgroundColor = "#EBEBEB";
    document.getElementById('typed').style.color = "black";  

    //change todoDiv/todo color/background
    const todoElements = document.querySelectorAll('.todo');
    for(const item of todoElements){
        item.style.backgroundColor = "#EBEBEB";
        item.style.color = "black";
    }

    // another method if you don't want to use the for of method
    // for(let i=0; i<todoElements.length; i++) {
    //     todoElements[i].style.background ="#EBEBEB";
    // }

    // icon addition and removal
    icon.style.display = 'none';
    con.style.display = 'block';
});

// moon icon/svg
con.addEventListener('click', () => {
    theme = 'dark'
    // change theme
    document.body.classList.add('black');
    document.body.classList.remove('light');

    //change backgroundImage
    document.getElementById('container').style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
    document.getElementById('container').style.backgroundRepeat = "no-repeat"; 

    //change input box color
    document.getElementById('input').style.backgroundColor = "#141414";
    document.getElementById('typed').style.backgroundColor = "#141414";
    document.getElementById('typed').style.color = "white";
    
    //change todoDiv/todo color/background
    const todoElements = document.querySelectorAll('.todo');
    for(const item of todoElements){
        item.style.backgroundColor = "#141414";
        item.style.color = "white";
    }

    // another method if you don't want to use the for of method
    // for(let i=0; i<todoElements.length; i++) {
    //     todoElements[i].style.background ="#141414";
    // }

    // icon addition and removal
    icon.style.display = 'block';
    con.style.display = 'none';
});


//todo lists
const todoInputs = document.querySelector(".todo-inputs");
const plus = document.querySelector(".fa-plus-square");
const list = document.querySelector(".list");

function addTodo(event) {
    //prevents form from submitting
    event.preventDefault();

    //new Div that contains the tick button
    const newDiv = document.createElement("div");
    newDiv.classList.add('new'); 
    const firstButton = document.createElement('button');
    firstButton.innerHTML = '<i class="fas fa-check"></i>';
    firstButton.classList.add('first-btn');
    list.appendChild(newDiv);

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    if(theme === 'light'){
        todoDiv.style.background = '#ebebeb';
        todoDiv.style.color = 'black';
    } 

    //lists
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInputs.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // if(theme === 'light'){
    //     newTodo.style.color = '#141414';
    // }

    //buttons
    // const firstButton = document.createElement('button');
    // firstButton.innerHTML = '<i class="fas fa-check"></i>';
    // firstButton.classList.add('first-btn');
    // todoDiv.appendChild(firstButton);

    //second button
    const secondButton = document.createElement('button');
    secondButton.innerHTML = '<i class="fas fa-trash"></i>';
    secondButton.classList.add('second-btn');
    todoDiv.appendChild(secondButton);
    todoDiv.insertBefore(firstButton, todoDiv.firstChild);

    //add todoDiv to list
    if (todoInputs.value.trim().length !== 0) {
        list.appendChild(todoDiv);
    }
    // list.appendChild(todoDiv);
    
    //clear the todoinputs value
    todoInputs.value = '';
}

function deleteTodo(d){
    const item = d.target;
    //delete the input
    if (item.classList[0] === "second-btn"){
        const todo = item.parentElement;
        //transformation
            todo.classList.add('incomplete');
            todo.addEventListener('transitionend', function(){
                todo.remove();
            });
    }

    //completed todos 
    if (item.classList[0] === "first-btn"){
        const todo = item.parentElement;
            todo.classList.toggle("completed");
    }
}

plus.addEventListener('click', addTodo);
list.addEventListener('click', deleteTodo);


// let arr = [];
// let inputDiv = document.getElementById('typed')

// function updateArray(){
//     let val = inputDiv.value;
//     arr.unshift(val);
//     console.log(arr)
// }

// inputDiv.addEventListener('keyup', updateArray);

// console.log('how');