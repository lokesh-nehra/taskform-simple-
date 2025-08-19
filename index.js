// const firstNameError = document.getElementById('firstNameError');
// const lastNameError = document.getElementById('lastNameError');
// const emailError = document.getElementById('emailError');
// const contactError = document.getElementById('contactError');
// const courseError = document.getElementById('courseError')
// const studentIdError = document.getElementById('studentIdError');
// const qualificationError = document.getElementById('qualificationError');
// const outputDiv = document.getElementById('output');

// let isValid = true;

// const form = document.getElementById('myForm')
// const firstNameInput = document.getElementById('firstName');
// const lastNameInput = document.getElementById('lastName');
// const emailInput = document.getElementById('email');
// const contactInput = document.getElementById('contact');
// const courseInput = document.getElementById('course');
// const studentIdInput = document.getElementById('studentId');
// const qualificationInput = document.getElementById('qualification');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     //Making output to empty string upon rerendering.
//     firstNameError.textContent = "";
//     lastNameError.textContent = "";
//     emailError.textContent = "";
//     contactError.textContent = "";
//     courseError.textContent = "";
//     studentIdError.textContent = "";
//     qualificationError.textContent = "";


//     //Validating the inputs
//     if (firstNameInput.value.trim() === "") {
//         firstNameError.textContent = "Enter the first name!";
//         isValid = false;
//     }
//     if (lastNameInput.value.trim() === "") {
//         lastNameError.textContent = "Enter the last name!";
//         isValid = false;
//     }
//     if (emailInput.value.trim() === "") {
//         emailError.textContent = "Enter the email!"
//         isValid = false;
//     }
//     if (contactInput.value.trim() === "") {
//         contactError.textContent = "Enter the contact number!";
//         isValid = false;
//     }
//     if (courseInput.value.trim() === "") {
//         courseError.textContent = "Enter the course name!"
//         isValid = false;
//     }
//     if (studentIdInput.value.trim() === "") {
//         studentIdError.textContent = "Enter the Student Id!"
//         isValid = false;
//     }
//     if (qualificationInput.value.trim() === "") {
//         qualificationError.textContent = "Enter your qualification!"
//         isValid = false;
//     }

//     if (isValid) {

//         const firstname = firstNameInput.value.trim();
//         const lastname = lastNameInput.value.trim();
//         const email = emailInput.value.trim();
//         const contact = contactInput.value.trim();
//         const course = courseInput.value.trim();
//         const studentid = studentIdInput.value.trim();
//         const qualification = qualificationInput.value.trim();

//         outputDiv.innerHTML =
//             `<div>
//                 <h3>Output Details</h3>
//                 <strong><p>The first name is: ${firstname}</p> </strong>
//                 <strong><p>The last name is: ${lastname}</p> </strong>
//                 <strong><p>The email entered is: ${email}</p> </strong>
//                 <strong><p>The contact number is: ${contact}</p> </strong>
//                 <strong><p>The course name is: ${course}</p> </strong>
//                 <strong><p>The student id is: ${studentid}</p> </strong>
//                 <strong><p>The qualification is: ${qualification}</p> </strong>
//             </div>`


//         const userData = { firstname, lastname, email, contact, course, studentid, qualification };
//         localStorage.setItem('formdata', JSON.stringify(userData));



//         form.reset();
//     }
// });

let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach(stepDiv => {
        stepDiv.classList.remove('active');
    });
    document.getElementById(`step${step}`).classList.add('active');
}


function nextStep(step) {
    if (!validateStep(step)) return;
    currentStep = step + 1;
    showStep(currentStep);
    if (currentStep === 4) displayReview();
}

function prevStep(step) {
    currentStep = step;
    showStep(currentStep);
}

function setError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors(step) {
    const stepElement = document.getElementById(`step${step}`);
    const errors = stepElement.querySelectorAll('.error');
    errors.forEach(e => e.textContent = '');
}

function validateStep(step) {
    clearErrors(step);
    let valid = true;

    if (step === 1) {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const gender = document.getElementById('gender').value;

        if (firstName === '') {
            setError('firstNameError', 'First name required');
            valid = false;
        }
        if (lastName === '') {
            setError('lastNameError', 'Last name required');
            valid = false;
        }
        if (email === '') {
            setError('emailError', 'Email required');
            valid = false;
        }
        if (phone === '') {
            setError('phoneError', 'Phone required');
            valid = false;
        }
        if (!gender) {
            setError('genderError', 'Gender required');
            valid = false;
        }
    }
    if (step === 2) {
        const qualification = document.getElementById('qualification').value.trim();
        const course = document.getElementById('course').value.trim();
        const college = document.getElementById('college').value.trim();
        const fieldofstudy = document.getElementById('fieldofstudy').value.trim();

        if (qualification === '') {
            setError('qualificationError', 'Qualification required');
            valid = false;
        }
        if (course === '') {
            setError('courseError', 'Course required');
            valid = false;
        }
        if (college === '') {
            setError('collegeError', 'College required');
            valid = false;
        }
        if (fieldofstudy === '') {
            setError('fieldofstudyError', 'Field of study required')
        }
    }
    if (step === 3) {
        const company = document.getElementById('company').value.trim();
        const jobTitle = document.getElementById('jobTitle').value.trim();
        const experience = document.getElementById('experience').value.trim();
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        if (company === '') {
            setError('companyError', 'Company name required');
            valid = false;
        }

        if (jobTitle === '') {
            setError('jobTitleError', 'Job title required');
            valid = false;
        }

        if (experience === '' || Number(experience) < 0) {
            setError('experienceError', 'Experience required');
            valid = false;
        }
        if (!startDate) {
            setError('startDateError', 'Start date required');
            valid = false;
        }
        if (!endDate) {
            setError('endDateError', 'End date required');
            valid = false;
        }
    }
    return valid;
}

function displayReview() {
    const reviewDiv = document.getElementById('reviewDiv');
    const data = {
        'First Name': document.getElementById('firstName').value,
        'Last Name': document.getElementById('lastName').value,
        'Email': document.getElementById('email').value,
        'Gender': document.getElementById('gender').value,
        'Phone': document.getElementById('phone').value,
        'Qualification': document.getElementById('qualification').value,
        'Course': document.getElementById('course').value,
        'College': document.getElementById('college').value,
        'Field of study': document.getElementById('fieldofstudy').value,
        'Company': document.getElementById('company').value,
        'Job Title': document.getElementById('jobTitle').value,
        'Experience': document.getElementById('experience').value,
        'Start Date': document.getElementById('startDate').value,
        'End Date': document.getElementById('endDate').value
    }

    reviewDiv.innerHTML = '';
    for (let key in data) {
        reviewDiv.innerHTML += `<p><strong>${key}:</strong> ${data[key]}</p>`;
    }
}



document.getElementById('multiStepForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully :)')
});