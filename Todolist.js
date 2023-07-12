//Creating a "Remove From List " button and append it to each list item.
var nodeList = document.getElementsByTagName("li");
for     (var i = 0; i < nodeList.length; i++) {
    var     button = document.createElement("button");
    var buttonText = document.createTextNode("\u00D7");
    //Providing an accessible name to the buttons
    button.setAttribute("aria-label", "Remove From List");
    //Creating a class for each button
    button.className     = "remove";
    button.appendChild(buttonText);
    nodeList[i].appendChild(    button);
}   


//click on the "remove From List" button to hide it.
var removeButton = document.getElementsByClassName("remove");
var j ;
for(j = 0; j < removeButton.length; j++) {
    removeButton[j].onclick = function() {
        var div  = this.parentElement;
        div.style.display = "none";
    } 
}

function addListItem() {
    const myList = document.getElementById("mylist");    
    const userInput = document.getElementById("listitem");
    if (userInput.value === "") {
        alert("You must enter something in input");
    } else {
        var listItem = document.createElement("li");
        var listText = document.createTextNode(userInput.value);
        listItem.appendChild(listText);
        myList.appendChild(listItem);
//Clearing the input field
        userInput.value = ""
    }
    var     button = document.createElement("button");
    var buttonText = document.createTextNode("\u00D7");
    //Providing an accessible name to the buttons
    button.setAttribute("aria-label", "Remove From List");
    //Creating a class for each button
    button.className     = "remove";
    button.appendChild(buttonText);
    listItem.appendChild(button);
    for(j = 0; j < removeButton.length; j++) {
        removeButton[j].onclick = function() {
            var div  = this.parentElement;
            div.style.display = "none";
        }        
    }
}