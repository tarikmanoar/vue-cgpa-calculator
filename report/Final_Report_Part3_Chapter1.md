Chapter 1

INTRODUCTION

1.1 Introduction

For university students in Bangladesh, maintaining an accurate understanding of academic performance is crucial for planning their educational trajectory and career goals. The Grade Point Average (GPA) and Cumulative Grade Point Average (CGPA) serve as key indicators of academic achievement and are essential metrics for scholarship applications, graduate school admissions, and employment opportunities. At First Capital University of Bangladesh (FCUB), as in most Bangladeshi universities, final grades for courses are provided as letter grades (A+, A, A-, B+, B, etc.) corresponding to specific grade point values.

Students are then required to manually convert these letter grades into numerical grade points, multiply by the respective credit hours for each course, sum these values, and divide by the total credit hours to calculate their GPA for each semester. To determine the overall CGPA, students must perform similar weighted calculations across all completed semesters. This manual calculation process, while straightforward in theory, becomes increasingly complex and time-consuming as students progress through multiple semesters, taking numerous courses across different academic years.

The process is further complicated by the need to track different courses with varying credit hours across eight different departments at FCUB, each with its own curriculum structure. Human error in calculation is common, particularly when dealing with multiple semesters of data, and students often find themselves recalculating their CGPA multiple times to ensure accuracy. Additionally, there is no easy way for students to visualize their academic trends, understand their grade distribution, or calculate what GPA they need in remaining semesters to achieve a target CGPA.

This project, the "FCUB CGPA Calculator," addresses these challenges by providing a comprehensive, automated, and intelligent solution specifically designed for the diverse academic needs of FCUB students across all departments.

1.2 Background of the Study

The motivation for this project emerged from direct observation and personal experience within the student community at First Capital University of Bangladesh. During semester result publications, students consistently face several challenges:

**Calculation Complexity**: With courses ranging from 1 to 4 credit hours and multiple courses per semester, the weighted average calculation becomes mathematically intensive and error-prone when done manually.

**Multi-Semester Tracking**: As students progress through their degree programs (typically 8-12 semesters depending on the department), maintaining accurate records of all previous semester GPAs and recalculating CGPA becomes increasingly difficult.

**Department-Specific Curricula**: FCUB serves eight different departments (CSE, EEE, Public Health, Law, Business Administration, English, Sociology, and Agriculture), each with unique course structures, credit distributions, and semester requirements. Generic calculators fail to account for these specific requirements.

**Lack of Analytics**: Students need more than just a number; they need insights into their performance trends, grade distributions, and realistic goal-setting tools to improve their academic standing.

**Accessibility Issues**: Many students in Bangladesh face internet connectivity challenges, making it difficult to rely on online-only tools that require constant internet access.

**Data Portability**: Students often need to access their academic data across multiple devices (personal computers, smartphones, tablets) without the burden of creating accounts or storing sensitive data on external servers.

The "FCUB CGPA Calculator" was conceived to directly address these pain points by creating a modern, Progressive Web Application that combines powerful calculation capabilities with offline functionality, data persistence, and comprehensive analytics—all while maintaining simplicity and ease of use.

1.3 Project Overview

The FCUB CGPA Calculator is a comprehensive Progressive Web Application (PWA) built using cutting-edge web technologies to provide FCUB students with a robust, reliable, and user-friendly tool for academic performance tracking. The application is designed with the following core objectives:

**Multi-Department Support**: Full support for all eight departments at FCUB, with pre-loaded curriculum data including course codes, names, and credit hours for each department. Students can easily switch between departments, making the tool useful for students considering transfers or pursuing multiple degrees.

**Semester-Wise GPA Calculation**: A detailed semester calculator where students can select their specific semester, view all courses for that semester, input letter grades for each course, and instantly see their calculated GPA with complete transparency in the calculation process.

**Overall CGPA Computation**: A multi-semester CGPA calculator that allows students to input or import GPAs from multiple semesters and automatically computes the weighted cumulative GPA based on total credit hours.

**Performance Analytics**: Advanced statistics including grade distribution visualization, semester-wise performance trends, highest and lowest GPAs, and completion progress tracking.

**Required GPA Calculator**: An intelligent tool that calculates what GPA a student needs to achieve in remaining semesters to reach a target CGPA, with feasibility analysis (checking if the target is mathematically achievable).

**Bangladesh Grading Classification**: Automatic classification of CGPA according to Bangladeshi university standards (First Class with Distinction, First Class, Second Class, Third Class, Pass) with color-coded visual indicators.

**Offline-First Architecture**: Complete functionality without internet connection using service worker technology and IndexedDB for local data storage, ensuring students can use the calculator anytime, anywhere.

**Data Management**: Comprehensive export and import functionality allowing students to backup their data as JSON files and transfer between devices without account creation or cloud storage dependencies.

**Progressive Web App Features**: Installable on desktop and mobile devices, providing an app-like experience with push notification support (for future features), background sync, and optimized caching strategies.

**Modern, Responsive Design**: Clean and intuitive user interface built with Tailwind CSS v4, supporting dark mode, and fully responsive across all device sizes from smartphones to large desktop displays.

The technical implementation leverages Vue.js 3 with Composition API and TypeScript for type-safe, maintainable code, Vite.js for fast development and optimized production builds, IndexedDB for robust client-side data persistence, and Workbox for advanced service worker management. The application follows software engineering best practices including component-based architecture, state management with Pinia, and comprehensive error handling to ensure reliability and maintainability.

---
