//your JS code here. If required.
let code_container = document.querySelector(".code-container");
let container_count = 6; // Number of input fields
let heading = document.createElement("h3");
heading.innerText = "Verify Your Account";
heading.id = "verification_subtext";
code_container.appendChild(heading);
let lastEnteredElement = null;

let para = document.createElement("p");
para.id = "par1";
para.innerText = "We emailed you the six-digit code to acciojob@gmail.com. Enter the code below to confirm your email address.";
code_container.appendChild(para);

// Create a div for the inputs
let div = document.createElement("div");
div.className = "input-container"; // Add the input-container class

// Create 6 input fields for the code
for (let i = 1; i <= container_count; i++) {
    let input = document.createElement("input");
    input.className = "code"; // Add the code class for styling
	input.type = "number";
	input.id = `code-${i}`;
    input.max = "9"; // Restrict input to 1 character
	input.min = "0";
	input.maxLength = "1";
	input.addEventListener("input",onInput);
	input.addEventListener("keyup",backSpace);
	input.addEventListener("keyup",enter);
    div.appendChild(input);
}

code_container.appendChild(div);

let para1 = document.createElement("p");
para1.innerText = "This is design only.we didn't actually send you an email as we don't have have your email,right?";
para1.id = "para";
code_container.appendChild(para1);
function onInput(event){
	let curr_element = event.target;
	curr_element.nextElementSibling && curr_element.nextElementSibling.focus();
	lastEnteredElement = curr_element;
}
function backSpace(event){
	if(event.key === "Backspace"  && event.target.previousElementSibling){
		event.target.value = "";
		event.target.previousElementSibling && event.target.previousElementSibling.focus();
	}
}
function enter(e){
	if(e.key === "Enter" && e.target.value){
		e.target.nextElementSibling && e.target.nextElementSibling.focus();
	}
}
