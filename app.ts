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


const resumeForm = document.getElementById('resumeForm') as HTMLInputElement | null
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement | null

// function to generate resume

if (resumeForm && resumeOutput){
    resumeForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLInputElement).value;

        // Generate HTML for the resume
        const resumeHTML = `
        <h2>Generate Resume</h2>
        <p><strong> name:</strong> ${name}</p>
        <p><strong> email:</strong> ${email}</p>
        <p><strong> phone:</strong> ${phone}</p>
        <p><strong> education:</strong> ${education}</p>
        <p><strong> skills:</strong> ${skills}</p>
        <p><strong> workExperience:</strong> ${workExperience}</p>
        
        `;
        resumeOutput.innerHTML=resumeHTML
    });
} else {
    console.error('Form or output div not found in the DOM');
}