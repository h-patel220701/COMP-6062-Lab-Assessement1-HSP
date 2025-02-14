const studentFullName = 'Happy';

const studentNumber = 1213851;

const info = `${studentFullName} -  ${studentNumber}`;

 // const info = concat(studentFullName, studentNumber);

console.log(info);

let headerContent = document.querySelector("h1");
headerContent.classList.add("headingPrimary");
headerContent.textContent = info;

