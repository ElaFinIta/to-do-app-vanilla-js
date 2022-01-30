'use strict';


const form = document.querySelector("#add_task");
const toDoList = document.querySelector('#things-to-do');

const listElements = document.querySelectorAll('li input');
let eggOpened = 1; // ignore, just having fun

// append new element to list based on submitted input in input field
form.addEventListener("submit", event  => {
    event.preventDefault();
 
    //validate input: no empty string allowed
    const inputFieldText = document.querySelector('#text-to-add').value;
    if (inputFieldText !== "") {

        // create a new list element with class name "list_el"
        const newLi = document.createElement("li");
        newLi.className = 'list_el';

        // create checkbox input
        const newCheckbox = document.createElement("input");
        newCheckbox.setAttribute("type", "checkbox");
        newCheckbox.setAttribute("id", inputFieldText);

        // add eventListener to checkbox
        newCheckbox.addEventListener("click", event => {
            newCheckbox.toggleAttribute("checked");
        });

        // append checkbox input 
        newLi.appendChild(newCheckbox);

        // create label
        const newLabel = document.createElement("label");
        newLabel.setAttribute("for", inputFieldText);
        newLabel.textContent = inputFieldText;

        // little surpise, ignore
        if (inputFieldText.toLowerCase() === "sleep" && eggOpened > 0) {
            const newEgg = document.createElement("p");
            newEgg.classList.add("sleep-message");
            newEgg.textContent = "★ sleeping is essential ★";
            toDoList.insertAdjacentElement("afterend", newEgg);
            eggOpened -= 1;
        }

        // append label
        newLi.appendChild(newLabel);

        // append the list element into ul
        toDoList.appendChild(newLi);
    }
    // if input is an empty string, add a new paragraph with a warning message
    else {
        const validationMessagePar = document.createElement("p");
        validationMessagePar.classList.add("warning-message");
        validationMessagePar.textContent = 'You tried to add an empty string';
        form.insertAdjacentElement("beforebegin", validationMessagePar);

        // remove warning message when focus in input field
        document.querySelector('#text-to-add').addEventListener("click", event => {
            //console.log(document.activeElement);
            validationMessagePar.remove();
        })
    }

    // clearing input field from input text
    form.reset();

})

