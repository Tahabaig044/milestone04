const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
const generateResumeHTML = async (): Promise<string> => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const addressInput = document.getElementById('address') as HTMLTextAreaElement;
    const institutionInput = document.getElementById('institution') as HTMLInputElement;
    const degreeInput = document.getElementById('degree') as HTMLInputElement;
    const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const companyInput = document.getElementById('company') as HTMLInputElement;
    const positionInput = document.getElementById('position') as HTMLInputElement;
    const startDateInput = document.getElementById('start-date') as HTMLInputElement;
    const endDateInput = document.getElementById('end-date') as HTMLInputElement;
    const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement;
    const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement;
    const photoInput = document.getElementById('photo') as HTMLInputElement | null;

    // Basic validation
    if (!nameInput || !emailInput || !phoneInput || !addressInput ||
        !institutionInput || !degreeInput || !graduationDateInput ||
        !skillsInput || !companyInput || !positionInput ||
        !startDateInput || !endDateInput || !responsibilitiesInput) {
        alert('Please ensure all required fields are present.');
        return '';
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const photoBase64 = photoInput && photoInput.files?.[0] ? await fileToBase64(photoInput.files[0]) : '';

    const institution = institutionInput.value.trim();
    const degree = degreeInput.value.trim();
    const graduationDate = graduationDateInput.value.trim();
    const skills = skillsInput.value.trim();
    const company = companyInput.value.trim();
    const position = positionInput.value.trim();
    const startDate = startDateInput.value.trim();
    const endDate = endDateInput.value.trim();
    const responsibilities = responsibilitiesInput.value.trim();
    const about = aboutInput ? aboutInput.value.trim() : '';
    if (!name || !email || !phone || !address || !institution ||
        !degree || !graduationDate || !skills || !company ||
        !position || !startDate || !endDate || !responsibilities) {
        alert('Please fill in all required fields.');
        return '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return '';
    }

    const phonePattern = /^\d{10}$/;  // Adjust regex pattern as needed
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        return '';
    }
    if (new Date(startDate) > new Date(endDate)) {
        alert('End date cannot be before the start date.');
        return '';
    }
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume</title>
            <style>
            
section {
    padding: 20px;
}

h1.main-heading {
    color:#054875eb;
    border-bottom: 2px solid #054875eb;
    padding-bottom: 10px;
}

.form-section {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button.submit-btn {
    background-color:#054875eb;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin: 10px;
}

button.submit-btn:hover {
    background-color:#3b80adeb;
    border: 1px solid #054875eb;
    box-shadow: #054875eb;
}

.hidden {
    display: none;
}

.resume-container {
    width: 90%;
    max-width: 800px;
    /* text-align: center; */
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    border: 2px solid #054875eb;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #deecf1;
    border-radius: 5px;
    font-size: 80%;
}
.resume-header{
    display: flex;

    width: 100%;
    /* flex-direction: column; */
    justify-content: center; 
     align-items: center;
}
.personalinfo{
    left: 0px;
    
}
.resume-header img {
    right: 0px;
    width: 18em;
    height: 19vh;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    font-size: 80%;
}
.resume-section {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #57959f;
}
.resume-section h2 {
    font-size: 20px;
    margin-bottom: 10px;
}
            </style>
        </head>
        <body>
            <div class="resume-container">
                <div class="resume-header">
                    ${photoBase64 ? `<img src="${photoBase64}" alt="Photo"/>` : '<p>No photo available</p>'}
                    <div class="personalinfo">
                    <h1>${name}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                </div>
                </div>
                <div class="resume-section">
                    <h1>Education</h1>
                    <p><strong>Institution: ${institution}</strong></p>
                    <p>Degree: ${degree}</p>
                    <p>Graduation Date: ${graduationDate}</p>
                </div>
                <div class="resume-section">
                    <h1>Skills</h1>
                    <p>${skills}</p>
                </div>
                <div class="resume-section">
                    <h1>Work Experience</h1>
                    <p><strong>${company}</strong> - ${position}</p>
                    <p>Start Date: ${startDate}</p>
                    <p>End Date: ${endDate || 'Present'}</p>
                    <p>Responsibilities: ${responsibilities}</p>
                </div>
                <div class="resume-section">
                    <h1>About</h1>
                    <p>${about}</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
    const downloadButton = document.getElementById('download-resume') as HTMLButtonElement;
    const editButton = document.getElementById('edit-resume') as HTMLButtonElement;
    const shareButton = document.getElementById('share-resume') as HTMLButtonElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    const resumeContent = document.getElementById('resume-content') as HTMLElement;

    generateButton.addEventListener('click', async () => {
        const resumeHTML = await generateResumeHTML();
        if (resumeHTML) {
            resumeContent.innerHTML = resumeHTML;
            resumeOutput.classList.remove('hidden');
            downloadButton.classList.remove('hidden');
            editButton.classList.remove('hidden');
            shareButton.classList.remove('hidden');
        }
    });

    downloadButton.addEventListener('click', () => {
        const resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
        const url = URL.createObjectURL(resumeBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.html';
        a.click();
        URL.revokeObjectURL(url);
    });

    editButton.addEventListener('click', () => {
        resumeOutput.classList.add('hidden');
    });

    shareButton.addEventListener('click', () => {
        const resumeURL = 'https://example.com/resume.html'; // Replace with the actual URL
        window.open(resumeURL, '_blank');
    });

    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsContent = document.getElementById('skills-content') as HTMLElement;

    toggleSkillsButton.addEventListener('click', () => {
        if (skillsContent.classList.contains('hidden')) {
            skillsContent.classList.remove('hidden');
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsContent.classList.add('hidden');
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });

    const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement;
    const navLinks = document.getElementById('nav-links') as HTMLElement;

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
