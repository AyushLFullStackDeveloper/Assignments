  // JavaScript for the interactive input and output
  function jsSubmit(){
    let x = document.getElementById("js-input").value;
    document.getElementById("js-output").innerHTML = "Hello, " + x + "!";
    console.log("Hello, " + x + "!");
    alert("Hello, " + x + "!");
}