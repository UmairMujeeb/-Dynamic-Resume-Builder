// interface FormData {
//     name: string;
//     email: string;
//     phone: string;
//     education: string;
//     skills: string[];
//     workExperience: string;
// }
// const form = document.getElementById('resumeForm') as HTMLFormElement;
// const resumePreview = document.getElementById('resumePreview') as HTMLDivElement;
// const updateResume = (data: FormData) => {
//     resumePreview.innerHTML = `
//         <h2>${data.name}</h2>
//         <p>Email: ${data.email}</p>
//         <p>Phone: ${data.phone}</p>
//         <h3>Education</h3>
//         <p>${data.education}</p>
//         <h3>Skills</h3>
//         <p>${data.skills.join(', ')}</p>
//         <h3>Work Experience</h3>
//         <p>${data.workExperience}</p>
//     `;
// }
// const handleSubmit = (event: Event) => {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const data: FormData = {
//         name: formData.get('name') as string,
//         email: formData.get('email') as string,
//         phone: formData.get('phone') as string,
//         education: formData.get('education') as string,
//         skills: (formData.get('skills') as string).split(',').map(skill => skill.trim()),
//         workExperience: formData.get('workExperience') as string
//     };
//     updateResume(data);
// }
// form.addEventListener('submit', handleSubmit);
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// function to generate resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var workExperience = document.getElementById('workExperience').value;
        // Generate HTML for the resume
        var resumeHTML = "\n        <h2>Generate Resume</h2>\n        <p><strong> name:</strong> ".concat(name, "</p>\n        <p><strong> email:</strong> ").concat(email, "</p>\n        <p><strong> phone:</strong> ").concat(phone, "</p>\n        <p><strong> education:</strong> ").concat(education, "</p>\n        <p><strong> skills:</strong> ").concat(skills, "</p>\n        <p><strong> workExperience:</strong> ").concat(workExperience, "</p>\n        \n        ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form or output div not found in the DOM');
}
