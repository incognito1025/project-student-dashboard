# Student Dashboard Project

For this assignment, you will build a student dashboard that will make use of already existing data stored in a JSON file. Users will be able to view students in several ways as well as add comments to those students.

## Project scoring

This project has three different parts on which you will be graded. Each part is weighted differently.

- 70% of the project is scored on **completion**.
- 20% of the project is scored through the **mastery rubric**.
- 10% of the project is scored through **stretch goals**.

In total, you must receive at least 70% to complete this project. For example, you could attain 55% of points through the completion requirements, 10% of points through the mastery rubric, and 5% of points through the stretch goals.

### Completion

To complete this project, you will need to build a React application that meets the following feature and technical requirements.

#### Overall requirements

1. The front-end application should be successfully deployed to the web.
1. Your front-end repository should have a `readme.md` file with setup instructions for your application. It should also include a link to your deployed application.

#### Front-end feature requirements

To complete the front-end application, you will need to build a React application that demonstrates the following features.

3. **Student list.** The Home page should show a list of all students. Each student should be shown including their name, username (i.e., email), birthday, and profile photo.
1. **On-track status.** Each student should also be marked as either "On Track" or "Off Track." A student is "On Track" if the following is true about them:
   - The student has a resume certification (e.g. `certifications.resume` is `true`).
   - The student has a LinkedIn certification (e.g. `certifications.linkedin` is `true`).
   - The student has a GitHub certification (e.g. `certifications.github` is `true`).
   - The student has a mock interview certification (e.g. `certifications.mockInterview` is `true`).
   - The student has a current CodeWars score that is over 600.
1. details section includes the percentages for all scores, properly formatted as percentages.
   - The details section includes whether or not the student h**Additional student details.** Include a link or button on each student's profile that hides and shows additional information when clicked. This feature should include the following:
   - The text of the button changes depending on whether it is open or closed.
   - Opening the details section for one student does not open it for every other student.
   - The as received certain certifications. Instead of showing "true" or "false" for certifications, show an emoji or icon depending on the certification status.
1. **1-on-1 section.** Create a section in the student details section that contains information about a student's 1-on-1 with an instructor. To complete this feature, the following should be true:
   - The section should include a title. (e.g. "1-on-1 Notes".)
   - The section should include a form with commenter name, comment, and a submit button.
   - The section should show a list of all previous notes that have been added.
1. **Interactive 1-on-1 section.** Improve the 1-on-1 section with a working form. To complete this feature, the following should be true:
   - The form can be filled out and submitted. On submit, the inputs are cleared.
   - The submitted information is immediately shown in the list of notes.
   - While the notes will not persist if the page is loaded, the new notes _should_ be found if you interact with a new cohort in the cohort list and then find the student.
1. **Student list count.** The Home page should also include a count of how many students are within the data set.
1. **Unique list of cohorts.** The Home page should also include a unique list of cohorts on the page.
1. **Human-readable cohort names.** The list of cohorts should be human-readable (e.g. "Winter 2026" instead of "Winter2026") and ordered by time.
1. **Clickable cohorts.** When one of the cohorts is clicked from the cohort list, the students shown on the page should change so that only those students in the cohort are shown.
1. **Cohort title change.** When one of the cohorts is clicked from the cohort list, a heading on the page should change to display what cohort is being shown. The student count should update to reflect this change.

### Mastery rubric

This section of the project is designed to measure your increasing skill at writing good code and following best practices.

To view components of the mastery rubric, view the appropriate assignment on Canvas.

### Stretch goals

This section of the project measures your ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

When you submit your pull request, _make sure to include a description of any stretch goals you implemented._ You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project.

- Include a count for the number of notes added to each student, which is updated when a new note is added.
- Allow for the user to click a button and the view of students changes to be just a list of names, or just a grid of profile images.
- Implement a "dark mode" version of the website, which changes the CSS on click.
- Add color-coding or segmentation to the cohort list, so that each year is visually distinct from one another.

Points will be allocated in this section at the discretion of the instructor.

## Existing code

This project includes some existing code that will help you complete the features below.

- [`src/data/data.json`](./src/data/data.json): This contains data for over 200 students. Each student has multiple properties associated with them. Some important ones include:
  - `id`: A unique ID associated with each student.
  - `profilePhoto`: A randomly generated photo from [Random users](https://xsgames.co/randomusers/).
  - `cohort`: An object represents which "cohort" the student is in.

## Advice

When building a project, there are additional skills to be gained alongside the tech you are learning. In this project, your ability to do the following will be tested:

- To plan out your approach to large project before coding
- To break large features into small, testable tasks that you can build
- To synthesize multiple skills you've learned at once
- To learn new skills and syntax on your own
- To manage your time and stay focused on the important tasks
- To ask for help

Without a good strategy, React can be very difficult. Consider reading the following before getting started:

- [ReactJS: Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Suggested process

Consider the following process as a baseline for working through this project:

1. Start by sketching out the application on a piece of paper or online. Think about what the component hierarchy will be before you just start building.
1. Build a static, non-interactive, and non-styled version of the application first. For example, start by listing all of the student names on the page.
1. Once you have information displayed on the page, pick one component to work on to make more interactive.

Continue to slowly iterate, making small changes to complete each feature. Commit often, so that you can always undo your changes if you break something big.

## Example

The following is an example of the application. These images show the application completed at different stages of the project and highlights different parts of the project to make it clear what is being discussed.

### Landing page

![landing page](./instruction-assets/landing.png)

### Cohort list

![cohort list](./instruction-assets/cohort-list.png)

### Cohort list on click

![interactive cohort list](./instruction-assets/interactive-cohort-list.png)

### Student list with "On-track"

![on-track designation](./instruction-assets/improved-student-list.png)

### Student details section

![closed](./instruction-assets/student-details-closed.png)

![opened](./instruction-assets/student-details-opened.png)

### 1-on-1 section

![one-on-one section](./instruction-assets/one-on-one-section.png)


cohort list///////////////////////////////////
function CohortList({data}) {
    // console.log(props.data);
    const cohortList = [];
    let space = " ";

     for (let i = 0; i < data.length; i++) {
        data[i];

        let currentCohort = data[i].cohort.cohortCode;
        let humanReadableCohort = 
        
        if (!cohortList.includes(currentCohort) && (isNaN(cohortList))) {
            space += cohortList.push(currentCohort);
        } else {
            space += cohortList;
        }
        
     }
     console.log(cohortList);

    return (
        <div className="cohorts">
            <ul>
                {cohortList.map(oneCohort => {
                    return (
                        <li>
                            {oneCohort}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default CohortList;

//bundle of data
/*
"cohort": {
      "cohortCode": "Fall2026",


      make a list item via html element
      generate a list item 
      have text inside it
      every iteration ends at line 19
      */

      /*


{
    "id": "2Nxf4T1",
    "names": {
      "preferredName": "Ramona",
      "middleName": "Lyric",
      "surname": "Kling"
    },
    "username": "ramona.kling@pursuit.org",
    "dob": "5/2/1983",
    "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=female&minimum_age=34&maximum_age=44",
    "codewars": {
      "current": { "total": 1838, "lastWeek": 27 },
      "goal": { "total": 850, "lastWeek": 75 }
    },
    "certifications": {
      "resume": false,
      "linkedin": false,
      "github": false,
      "mockInterview": false
    },
    "notes": [],
    "cohort": {
      "cohortCode": "Winter2026",
      "cohortStartDate": "12/1/26",
      "scores": { "assignments": 0.72, "projects": 0.64, "assessments": 0.76 }
    }
  },


Components Map:

App  (Contains everything below)
     Header/Navigation  (Name of App)
     CohortList  (List of cohorts on the left side, better to put it before StudentList so its easier to write CSS)
     StudentList  (List of Students and all their info)
          StudentDetails  (Student info)
               CodewarsDetails  (Details about their codewars info, you missed this part)
               ScoreDetails  (Details about their pursuit grades)
               CertificationDetails  (Details about their overall progress)
          OneOnOneSection  (Section where we can view notes and write new ones)
               OneOnOneForm  (form to write a new note)
               OneOnOneNotesList  (View notes all ready written)


*/ 




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
// import StudentDetails from "./StudentDetails";
// import OneOnOneSection from "./OneOnOneSection";
// import React, { useState } from 'react;'

// export default function StudentList() {
//     const [students, setStudents] = useState(data);
//     const [sortedAsc, setSortedAsc] = useState(false);

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return Date.toLocalDateString('en-US', {
//             month: 'long',
//             day: 'numeric',
//             year: 'numeric'
//         });
//     };

// const handleSort = () => {
//     const sortStudents = [...Students];
//     if (sortedAsc) {
//         sortedStudents.sort((a, b) => new Date(a.brithDate) - newDate(a.brithDate));
//     }
//     setStudents(sortedStudents);
//     setSortedAsc(!sortedAsc);
// };


// return (
//     <main className="StudentList">
//         <div className="buttons">
//             <button onClick={handleSort}>Sort Ascending</button>
//         </div>
//         <div className="students-list">
//             {students.map((students, index) => (
//                 <div key={index} className="student-card">
//                     <h2>{students.preferredName} {students.middleName} {students.surname}</h2>
//                     <p>Birth Date: {formatDate(students.dob)}</p>
//                 </div>
//             ))}
//         </div>
//     </main>
//     );
// }


// /*


// {
//     "id": "2Nxf4T1",
//     "names": {
//       "preferredName": "Ramona",
//       "middleName": "Lyric",
//       "surname": "Kling"
//     },
//     "username": "ramona.kling@pursuit.org",
//     "dob": "5/2/1983",
//     "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=female&minimum_age=34&maximum_age=44",
//     "codewars": {
//       "current": { "total": 1838, "lastWeek": 27 },
//       "goal": { "total": 850, "lastWeek": 75 }
//     },
//     "certifications": {
//       "resume": false,
//       "linkedin": false,
//       "github": false,
//       "mockInterview": false
//     },
//     "notes": [],
//     "cohort": {
//       "cohortCode": "Winter2026",
//       "cohortStartDate": "12/1/26",
//       "scores": { "assignments": 0.72, "projects": 0.64, "assessments": 0.76 }
//     }
//   },


// Components Map:

// App  (Contains everything below)
//     1.  Header/Navigation  (Name of App)
//     2.  CohortList  (List of cohorts on the left side, better to put it before StudentList so its easier to write CSS)
//     3.  StudentList  (List of Students and all their info)
//           StudentDetails  (Student info) - child of StudentList
//                CodewarsDetails  (Details about their codewars info, you missed this part) - child of StudentDetails
//                ScoreDetails  (Details about their pursuit grades) - child of StudentDetails
//                CertificationDetails  (Details about their overall progress) -child of StudentDetails
//           OneOnOneSection  (Section where we can view notes and write new ones) -child of StudentList
//                OneOnOneForm  (form to write a new note)- child of OneOnOneSection
//                OneOnOneNotesList  (View notes all ready written) - child of OneOnOneSection






body {
  font-family: sans-serif;
  margin: 0;
}

html,
body,
#root {
  height: 100%;
  width: 100%;
}

.navbar-wrapper {
  background-color: hsl(140, 23%, 47%);
  height: 40px;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-right: 15px;
  text-align: center;
}






li{
  list-style: none;
}

.cohorts {
  text-emphasis-color: hsl(145, 55%, 71%);
} */

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  padding: 5px;
}

.contact-user-card {
  display: flex;
  flex-direction: column;
  font-size: xx-small;
  grid-column: 1 / span 1 ;
  grid-row: 1 / span 1;
  border: 1px solid gray;
  margin-left: 10px;
  margin-right: 50px;
  margin-bottom: 10px;
}

h1 {
  color: white;
  font-size: 40px;
}

/* OneOnOneForm.css */

form {
  margin-bottom: 20px; /* Add margin to create space between the form and the list */
}

label {
  display: block; /* Make labels block-level for better spacing */
  margin-bottom: 10px; /* Add margin between label and input */
}

input[type="text"],
textarea {
  width: 100%; /* Make inputs full-width */
  padding: 8px; /* Add padding to inputs */
  margin-bottom: 10px; /* Add margin between inputs */
  border: 1px solid #ccc; /* Add border to inputs */
  border-radius: 4px; /* Add border radius for rounded corners */
  box-sizing: border-box; /* Include padding and border in element's total width and height */
}

textarea {
  resize: vertical; /* Allow vertical resizing of textarea */
}

button {
  padding: 10px 20px; /* Add padding to button */
  background-color: #007bff; /* Set button background color */
  color: #fff; /* Set button text color */
  border: none; /* Remove button border */
  border-radius: 4px; /* Add border radius for rounded corners */
  cursor: pointer; /* Change cursor to pointer on hover */
}

button:hover {
  background-color: #0056b3; /* Change button background color on hover */
}

/* Optional: Style form container */
.form-container {
  padding: 20px; /* Add padding to form container */
  border: 1px solid #ccc; /* Add border to form container */
  border-radius: 4px; /* Add border radius for rounded corners */
  background-color: #f9f9f9; /* Set background color for form container */
}

/* StudentList.css */
/* 
.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px;
  margin-top: 25px;
  
} */



.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  padding: 5px;
}

.card img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.card h3 {
  margin-top: 0;
}

.card.on-track {
  border-color: green;
}

.card.off-track {
  border-color: #5C946F;
}

.card .details {
  margin-top: 20px;
}

.card .details h4 {
  margin-bottom: 10px;
}

.card .details p {
  margin: 5px 0;
}

.student-details {
  
}

/*

lab intro to react 
body {
  font-family: sans-serif;
  margin: 0;
}

html,
body,
#root {
  height: 100%;
  width: 100%;
}

.navbar-wrapper {
  background-color: #ADD7E6;
  height: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 15px;
}

.navbar button {
  margin-left: 15px;
  float: right;
  font-size: 7px;
}

.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px;
  margin-top: 25px;
  
}

.user-profile {
  display: flex;
  flex-direction: row;
  font-weight: 100;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  border: 1px solid gray;
  font-size: xx-small;
  text-align: center;
}

.user-profile img {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  float: left;
  margin-right: 10px;
}

.contacts {
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 1;
  grid-row: 1 / span 3;
  border: 1px solid gray;
  font-size: xx-small;
  text-align: center;
  gap:  25px;
  
}

.contact-user-photo img {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  float: left;
  margin-right: 10px;
}

.contact-user-card {
  display: flex;
  flex-direction: column;
  font-size: xx-small;
  text-align: center;
  grid-column: 1 / span 1 ;
  grid-row: 1 / span 1;
  border: 1px solid gray;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 25px;
 
}

.posts {
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 1;
  grid-row: 2 / span 2;
  border: 1px solid gray;
  font-size: xx-small;
  text-align: center;

}

/* .posts img {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
} */

/* .post {
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-column: 1 / span 1 ;
  grid-row: 1 / span 1;
  border: 1px solid gray;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
} */
/* 

 .contacts {
  grid-column: span 2; 
  grid-row: 3fr / span 2;
  border: 1px solid red;
}  */