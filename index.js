// JavaScript for the demos
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabContent, tabButtons;

    // Get all elements with class="tab-content" and hide them
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    // Get all elements with class="tab-btn" and remove the class "active"
    tabButtons = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    // Re-initialize syntax highlighting for the new tab
    hljs.highlightAll();
}

function jsSubmit() {
    let name = document.getElementById("js-input").value;
    document.getElementById("js-output").innerHTML = "Hello, " + name + "!";
    console.log("Hello, " + name + "!");
}

function promptAlert() {
    let name = prompt("Enter your name:");
    if (name) {
        alert("Hello, " + name + "!");
        document.getElementById("prompt-output").innerHTML = "Hello, " + name + "!";
    }
}

function directAssignment() {
    let name = "Ayush Lolusare";
    console.log("Hello, " + name + "!");
    document.getElementById("direct-output").innerHTML = "Hello, " + name + "!";
}

// Add event listener to ensure first tab is active on page load
document.addEventListener('DOMContentLoaded', function() {
    // Make sure Java tab is active at start
    document.getElementById('java').classList.add('active');
    document.querySelector('.tab-btn').classList.add('active');
    
    // Initialize highlight.js
    hljs.highlightAll();
});