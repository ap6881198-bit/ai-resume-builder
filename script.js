function generateResume(){

let name = document.getElementById("name").value;
let job = document.getElementById("job").value;
let skills = document.getElementById("skills").value;
let experience = document.getElementById("experience").value;

let resume = `
<h2>${name}</h2>
<h3>${job}</h3>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Experience</h3>
<p>${experience}</p>
`;

document.getElementById("resumeOutput").innerHTML = resume;

}

function downloadPDF(){

let element = document.getElementById("resumeOutput");

html2pdf().from(element).save("My_Resume.pdf");

}
