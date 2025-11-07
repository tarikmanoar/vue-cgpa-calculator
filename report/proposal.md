Project Proposal for 6th Semester in Computer Science & Engineering 

Project title:
Semester Wise GPA and CGPA Calculator
Course title: Software Engineering Lab
Course code: 326


Department of Computer Science & Engineering
First Capital University of Bangladesh, Chuadanga
Date of submission: 19/08/2025


Md. Tarik Manoar
ID: 0572310005101040
27th Batch 6th semester
Session: 23-24
Computer Science & Engineering


Saifa Azmiri Mohona
Lecturer
Computer Science & Engineering
First Capital University of Bangladesh, Chuadanga



Abstract
In many academic institutions, students receive their semester results in the form of letter grades (e.g., A+, A, B), which they must then manually convert into a Grade Point Average (GPA) and a Cumulative Grade Point Average (CGPA). This manual process can be tedious, time-consuming, and prone to errors. To address this issue, this project proposes the development of a "Semester Wise GPA and CGPA Calculator" specifically tailored for the students of the Computer Science and Engineering (CSE) department at First Capital University of Bangladesh (FCUB). The primary goal of this web-based application is to provide students with a simple, efficient, and user-friendly tool to accurately calculate their semester GPA and overall CGPA. The application is being developed using modern web technologies, including Vue.js for the frontend framework, Tailwind CSS for styling, and Vite.js as the build tool. Key features include the ability to calculate GPA for each semester, compute the overall CGPA, store semester data in the browser's local storage to avoid repetitive data entry, and an option to save the results as a PDF or an image file. This tool aims to streamline the academic tracking process for students, allowing them to easily monitor their performance throughout their degree program.


Table of Contents
Chapter 1: Introduction
4
1.1: Introduction
4
1.2: Motivation
4
Chapter 2: Related Work
5
Chapter 3: Objective
6
Chapter 4: Methodology
7
4.1: Software Specification
7
4.1.1: Vue.js
4.1.2: Tailwind CSS


4.1.3: Vite.js


Chapter 5: Conclusion
9
References




Chapter 1:
Introduction

1.1 Introduction:
For university students, particularly those in demanding fields like Computer Science and Engineering, maintaining a clear and accurate understanding of academic performance is crucial. The process of calculating Grade Point Average (GPA) and Cumulative Grade Point Average (CGPA) is a fundamental part of this tracking. However, at First Capital University of Bangladesh, as in many other institutions, final grades for courses are provided as letter grades. Students are then required to manually convert these grades into numerical points, factor in the credit hours for each course, and perform the necessary calculations to determine their GPA and CGPA. This manual method is not only inefficient but also susceptible to human error, which can lead to an incorrect assessment of academic standing. This project, the "FCUB CGPA Calculator," is designed to automate and simplify this entire process, providing CSE students with an intuitive and reliable tool to manage their academic results.

1.2 Motivation:
The primary motivation behind this project stems from a direct need observed within the student community of the CSE department at FCUB. Students often struggle with the repetitive and error-prone task of calculating their GPA at the end of each semester and keeping track of their overall CGPA. An automated tool would alleviate this burden, saving students valuable time and ensuring the accuracy of their calculations.
This work provides a modern, web-based solution that offers several key benefits:
It simplifies the complex calculation process into a few simple clicks.
By storing data locally, it eliminates the need for students to re-enter their grades for previous semesters every time they want to calculate their updated CGPA.
The ability to save results as a PDF or image provides students with an easy way to document and share their academic progress.
The system is specifically designed for the FCUB CSE curriculum, ensuring that all courses and credit hours are accurately represented.


Chapter 2:
Related Work
While numerous generic GPA and CGPA calculators are available online, many of them lack the specific features required to meet the needs of students at a particular university or department.
One common type of existing solution is the simple, form-based calculator that requires users to manually input the credit hours and the grade points for each subject. These tools do not retain any data, forcing the user to re-enter all information every time they use the calculator. This is highly inefficient for calculating CGPA over multiple semesters.
Another category includes mobile applications that offer similar functionality. While some of these apps may offer data storage, they often come with intrusive advertisements or are not tailored to the specific grading system and curriculum of a particular institution like First Capital University of Bangladesh.
A few universities provide their own official GPA calculators through their student portals. However, these are often part of larger, more complex enterprise systems that can be slow and difficult to navigate. Furthermore, not all universities offer such a tool.
Limitations of Existing Systems:
Lack of Customization: Generic calculators are not tailored to the specific courses, credit hours, and grading scales of the FCUB CSE department.
No Data Persistence: Most web-based calculators do not save user data, making it cumbersome to track CGPA over time.
Poor User Experience: Many existing tools have outdated interfaces, are cluttered with ads, or are not user-friendly.
The proposed system directly addresses these limitations by providing a customized, persistent, and user-centric solution for the students of the CSE department at FCUB.


Chapter 3:
Objective
The primary objectives of this project are as follows:
To develop a user-friendly web application that allows students of the FCUB CSE department to easily calculate their semester-wise GPA.
To implement a feature for calculating the overall CGPA based on the GPA values from all completed semesters.
To utilize the browser's local storage to save the grades entered for each semester, ensuring that students do not have to re-enter data repeatedly.
To provide an option for students to download or save their calculated GPA and CGPA results as a PDF or an image file for their personal records.
To create a clean, modern, and responsive user interface that is easy to navigate on both desktop and mobile devices.
To ensure the accuracy and reliability of the calculations according to the official grading policy of First Capital University of Bangladesh.


Chapter 4: 
Methodology

4.1 Software Specification:

Frontend Framework: Vue.js
Styling: Tailwind CSS
Build Tool: Vite.js
Deployment: Vercel
Language: JavaScript, HTML, CSS

4.1.1 Vue.js:

Vue.js is a progressive JavaScript framework used for building user interfaces. It is known for its simplicity, performance, and approachability. For this project, Vue.js was chosen for its component-based architecture, which allows for the creation of reusable and manageable UI elements. Its reactive data-binding system simplifies the process of updating the GPA and CGPA in real-time as the user inputs their grades, providing an interactive and dynamic user experience.

4.1.2 Tailwind CSS:

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in the markup. Unlike traditional CSS frameworks that come with pre-designed components, Tailwind provides the building blocks to create a unique and bespoke design. It was selected for this project to facilitate the rapid development of a clean, modern, and fully responsive user interface without being constrained by the default styling of other frameworks.

4.1.3 Vite.js:

Vite.js is a modern frontend build tool that significantly improves the development experience. It offers a faster and leaner development environment compared to traditional bundlers. Vite's instant server start and lightning-fast Hot Module Replacement (HMR) allow for near-instantaneous feedback during development, which greatly accelerates the implementation and testing of new features for the calculator.




Chapter 5:
Conclusion

This project presents the design and development of a "Semester Wise GPA and CGPA Calculator" for the CSE students of First Capital University of Bangladesh. The application successfully addresses the need for a simple, accurate, and efficient tool to replace the manual and error-prone process of calculating academic performance. By leveraging modern web technologies like Vue.js, Tailwind CSS, and Vite.js, the calculator provides a responsive and user-friendly experience. The inclusion of features such as local storage for data persistence and the ability to save results further enhances its utility for students.
Future work on this project could involve expanding its functionality. For instance, a feature could be added to visualize the student's academic progress over time using charts and graphs. Additionally, the application could be expanded to include the curricula of other departments within the university. The project could also be integrated with a backend service to allow users to create accounts and sync their data across multiple devices. Ultimately, this tool serves as a valuable asset for students, empowering them to take better control of their academic journey.


References
Vue.js Official Documentation. Retrieved from https://vuejs.org/
Tailwind CSS Official Documentation. Retrieved from https://tailwindcss.com/
Vite.js Official Documentation. Retrieved from https://vitejs.dev/
