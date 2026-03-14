function generateResume(){

let name = document.getElementById("name").value;
let job = document.getElementById("job").value;
let skills = document.getElementById("skills").value;
let experience = document.getElementById("experience").value;

if(name === ""){
alert("Please enter your name");
return;
}

let resume = `
<div id="resumeContent">

<h1>${name}</h1>

<h2>${job}</h2>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Experience</h3>
<p>${experience}</p>

</div>
`;

document.getElementById("resumeOutput").innerHTML = resume;

}

function downloadPDF(){

let element = document.getElementById("resumeContent");

if(!element){
alert("Please generate the resume first!");
return;
}

html2pdf().from(element).save("My_Resume.pdf");

}
