function generateResume(){

let name = document.getElementById("name").value;
let job = document.getElementById("job").value;
let skills = document.getElementById("skills").value;
let experience = document.getElementById("experience").value;

let resume = `
<h1>${name}</h1>

<h2>${job}</h2>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Experience</h3>
<p>${experience}</p>
`;

document.getElementById("resumeOutput").innerHTML = resume;

}

html2pdf().from(element).save("My_Resume.pdf");

}
