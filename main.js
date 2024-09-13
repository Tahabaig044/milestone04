var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Utility function to convert image file to Base64 string
var fileToBase64 = function (file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
// Function to generate resume HTML
var generateResumeHTML = function () { return __awaiter(_this, void 0, void 0, function () {
    var nameInput, emailInput, phoneInput, addressInput, institutionInput, degreeInput, graduationDateInput, skillsInput, companyInput, positionInput, startDateInput, endDateInput, responsibilitiesInput, aboutInput, photoInput, name, email, phone, address, photoBase64, _a, institution, degree, graduationDate, skills, company, position, startDate, endDate, responsibilities, about, emailPattern, phonePattern;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                nameInput = document.getElementById('name');
                emailInput = document.getElementById('email');
                phoneInput = document.getElementById('phone');
                addressInput = document.getElementById('address');
                institutionInput = document.getElementById('institution');
                degreeInput = document.getElementById('degree');
                graduationDateInput = document.getElementById('graduation-date');
                skillsInput = document.getElementById('skills');
                companyInput = document.getElementById('company');
                positionInput = document.getElementById('position');
                startDateInput = document.getElementById('start-date');
                endDateInput = document.getElementById('end-date');
                responsibilitiesInput = document.getElementById('responsibilities');
                aboutInput = document.getElementById('about-me');
                photoInput = document.getElementById('photo');
                // Basic validation
                if (!nameInput || !emailInput || !phoneInput || !addressInput ||
                    !institutionInput || !degreeInput || !graduationDateInput ||
                    !skillsInput || !companyInput || !positionInput ||
                    !startDateInput || !endDateInput || !responsibilitiesInput) {
                    alert('Please ensure all required fields are present.');
                    return [2 /*return*/, ''];
                }
                name = nameInput.value.trim();
                email = emailInput.value.trim();
                phone = phoneInput.value.trim();
                address = addressInput.value.trim();
                if (!(photoInput && ((_b = photoInput.files) === null || _b === void 0 ? void 0 : _b[0]))) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoInput.files[0])];
            case 1:
                _a = _c.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = '';
                _c.label = 3;
            case 3:
                photoBase64 = _a;
                institution = institutionInput.value.trim();
                degree = degreeInput.value.trim();
                graduationDate = graduationDateInput.value.trim();
                skills = skillsInput.value.trim();
                company = companyInput.value.trim();
                position = positionInput.value.trim();
                startDate = startDateInput.value.trim();
                endDate = endDateInput.value.trim();
                responsibilities = responsibilitiesInput.value.trim();
                about = aboutInput ? aboutInput.value.trim() : '';
                // Validate if all fields are filled
                if (!name || !email || !phone || !address || !institution ||
                    !degree || !graduationDate || !skills || !company ||
                    !position || !startDate || !endDate || !responsibilities) {
                    alert('Please fill in all required fields.');
                    return [2 /*return*/, ''];
                }
                emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    return [2 /*return*/, ''];
                }
                phonePattern = /^\d{10}$/;
                if (!phonePattern.test(phone)) {
                    alert('Please enter a valid phone number (10 digits).');
                    return [2 /*return*/, ''];
                }
                // Validate dates (simple check)
                if (new Date(startDate) > new Date(endDate)) {
                    alert('End date cannot be before the start date.');
                    return [2 /*return*/, ''];
                }
                // Generate resume HTML
                return [2 /*return*/, "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>Resume</title>\n            <style>\n            \nsection {\n    padding: 20px;\n}\n\nh1.main-heading {\n    color:#054875eb;\n    border-bottom: 2px solid #054875eb;\n    padding-bottom: 10px;\n}\n\n.form-section {\n    margin-bottom: 20px;\n}\n\nlabel {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n}\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"tel\"],\ninput[type=\"date\"],\ntextarea {\n    width: 100%;\n    padding: 8px;\n    margin-bottom: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\nbutton.submit-btn {\n    background-color:#054875eb;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    font-size: 16px;\n    cursor: pointer;\n    border-radius: 4px;\n    margin: 10px;\n}\n\nbutton.submit-btn:hover {\n    background-color:#3b80adeb;\n    border: 1px solid #054875eb;\n    box-shadow: #054875eb;\n}\n\n.hidden {\n    display: none;\n}\n\n.resume-container {\n    width: 90%;\n    max-width: 800px;\n    /* text-align: center; */\n    margin: 0 auto;\n    padding: 20px;\n    box-sizing: border-box;\n    border: 2px solid #054875eb;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    background-color: #deecf1;\n    border-radius: 5px;\n    font-size: 80%;\n}\n.resume-header{\n    display: flex;\n\n    width: 100%;\n    /* flex-direction: column; */\n    justify-content: center; \n     align-items: center;\n}\n.personalinfo{\n    left: 0px;\n    \n}\n.resume-header img {\n    right: 0px;\n    width: 18em;\n    height: 19vh;\n    border-radius: 50%;\n    object-fit: cover;\n    margin-bottom: 10px;\n    font-size: 80%;\n}\n.resume-section {\n    margin-bottom: 20px;\n    padding: 10px;\n    border: 1px solid #57959f;\n}\n.resume-section h2 {\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n            </style>\n        </head>\n        <body>\n            <div class=\"resume-container\">\n                <div class=\"resume-header\">\n                    ".concat(photoBase64 ? "<img src=\"".concat(photoBase64, "\" alt=\"Photo\"/>") : '<p>No photo available</p>', "\n                    <div class=\"personalinfo\">\n                    <h1>").concat(name, "</h1>\n                    <p>Email: ").concat(email, "</p>\n                    <p>Phone: ").concat(phone, "</p>\n                    <p>Address: ").concat(address, "</p>\n                </div>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Education</h1>\n                    <p><strong>Institution: ").concat(institution, "</strong></p>\n                    <p>Degree: ").concat(degree, "</p>\n                    <p>Graduation Date: ").concat(graduationDate, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Skills</h1>\n                    <p>").concat(skills, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Work Experience</h1>\n                    <p><strong>").concat(company, "</strong> - ").concat(position, "</p>\n                    <p>Start Date: ").concat(startDate, "</p>\n                    <p>End Date: ").concat(endDate || 'Present', "</p>\n                    <p>Responsibilities: ").concat(responsibilities, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>About</h1>\n                    <p>").concat(about, "</p>\n                </div>\n            </div>\n        </body>\n        </html>\n    ")];
        }
    });
}); };
// Event listeners and functions
document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generate-resume');
    var downloadButton = document.getElementById('download-resume');
    var editButton = document.getElementById('edit-resume');
    var shareButton = document.getElementById('share-resume');
    var resumeOutput = document.getElementById('resume-output');
    var resumeContent = document.getElementById('resume-content');
    generateButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var resumeHTML;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, generateResumeHTML()];
                case 1:
                    resumeHTML = _a.sent();
                    if (resumeHTML) {
                        resumeContent.innerHTML = resumeHTML;
                        resumeOutput.classList.remove('hidden');
                        downloadButton.classList.remove('hidden');
                        editButton.classList.remove('hidden');
                        shareButton.classList.remove('hidden');
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    downloadButton.addEventListener('click', function () {
        var resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
        var url = URL.createObjectURL(resumeBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'resume.html';
        a.click();
        URL.revokeObjectURL(url);
    });
    editButton.addEventListener('click', function () {
        resumeOutput.classList.add('hidden');
    });
    shareButton.addEventListener('click', function () {
        var resumeURL = 'https://example.com/resume.html'; // Replace with the actual URL
        window.open(resumeURL, '_blank');
    });
    // Toggle skills visibility
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsContent = document.getElementById('skills-content');
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsContent.classList.contains('hidden')) {
            skillsContent.classList.remove('hidden');
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsContent.classList.add('hidden');
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
    // Navigation toggle script
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
