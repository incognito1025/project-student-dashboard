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


