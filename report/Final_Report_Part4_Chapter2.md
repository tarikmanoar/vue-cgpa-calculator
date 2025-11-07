Chapter 2

LITERATURE REVIEW & THEORETICAL BACKGROUND

2.1 Introduction

This chapter presents a comprehensive review of existing solutions for GPA and CGPA calculation, examines their limitations, and establishes the theoretical foundation for the FCUB CGPA Calculator. It covers the Bangladesh grading system, calculation methodologies, and Progressive Web Application concepts that form the technical backbone of this project.

2.2 Literature Review

2.2.1 Traditional Manual Calculation Methods

Historically, students at Bangladeshi universities have relied on manual calculation methods using calculators, spreadsheet software (Microsoft Excel or Google Sheets), or pen-and-paper arithmetic to determine their GPA and CGPA. While these methods are functional, they present several significant drawbacks:

**Error Susceptibility**: Manual calculations are highly prone to human error, particularly when dealing with multiple courses and semesters. A single arithmetic mistake can lead to incorrect GPA values, potentially affecting important academic and career decisions.

**Time Consumption**: The process of looking up grade point values, multiplying by credit hours, summing products, and dividing by total credits is repetitive and time-consuming, especially when recalculating CGPA with each new semester.

**No Data Persistence**: Spreadsheet files can be lost, corrupted, or accidentally deleted. There is no automatic backup mechanism, and students must manually maintain their calculation history.

**Lack of Insights**: Manual methods provide only the final numerical result without offering any analytical insights into performance trends, grade distributions, or predictive calculations for future semesters.

**Accessibility Issues**: Spreadsheet software may not be readily available on all devices, particularly smartphones, limiting accessibility for students who primarily use mobile devices.

2.2.2 Generic Online GPA Calculators

With the proliferation of web technologies, numerous generic GPA calculators have emerged online. These web-based tools typically offer simple interfaces where users can input course grades and credit hours to calculate GPA. However, they suffer from several critical limitations:

**Lack of Customization**: Generic calculators are not tailored to the specific grading scales, course structures, or curriculum requirements of First Capital University of Bangladesh or any specific institution. They often use different grading systems (American 4.0 scale vs. Bangladeshi system).

**No Data Persistence**: Most online calculators are stateless, requiring users to re-enter all their data every time they visit the website. There is no mechanism to save previous semester data or track CGPA over time.

**Internet Dependency**: These tools require constant internet connectivity to function, making them inaccessible in areas with poor network coverage or during internet outages.

**Privacy Concerns**: Some calculators require users to create accounts and store data on external servers, raising concerns about data privacy and security, particularly for sensitive academic information.

**Limited Functionality**: Most generic calculators offer only basic GPA calculation without additional features like performance analytics, trend visualization, required GPA calculation, or Bangladesh-specific classification systems.

**Intrusive Advertisements**: Many free online calculators are ad-supported, resulting in cluttered interfaces, poor user experience, and potential security risks from malicious advertisements.

2.2.3 Mobile Applications

Several mobile applications for GPA calculation are available on Android and iOS platforms. While these apps offer the advantage of portability, they present their own set of challenges:

**Platform Limitations**: Native mobile apps are typically available for either Android or iOS, not both, limiting accessibility for students using different mobile platforms.

**Installation Requirements**: Apps require installation from app stores, which may not be accessible in regions with app store restrictions, and consume device storage space.

**Update Dependencies**: Apps require regular updates to remain compatible with new operating system versions, and outdated apps may become unusable.

**Generic Design**: Like web-based calculators, mobile apps are rarely customized for specific universities or departments, failing to address institution-specific needs.

**Monetization Issues**: Free apps often include intrusive advertisements or offer limited functionality with premium features locked behind paywalls.

**No Cross-Platform Sync**: Data saved in a mobile app is typically device-specific, making it difficult to access the same information on desktop computers or other devices without complex synchronization mechanisms.

2.2.4 Progressive Web Applications

Progressive Web Applications (PWAs) represent a modern approach to web development that combines the best features of traditional websites and native mobile applications. PWAs have emerged as a powerful solution for creating cross-platform applications that are:

**Installable**: Can be installed on devices like native apps without going through app stores.

**Offline-Capable**: Function without internet connectivity using service worker technology.

**Responsive**: Adapt seamlessly to different screen sizes and device capabilities.

**Secure**: Served over HTTPS to ensure data security and integrity.

**Discoverable**: Accessible through search engines like traditional websites.

Recent research in educational technology has shown that PWAs offer significant advantages for academic tools, particularly in regions with limited internet connectivity. Studies indicate that offline-first applications improve accessibility and user engagement, especially for students in rural or underserved areas.

The FCUB CGPA Calculator leverages PWA technology to overcome the limitations of both traditional web applications and native mobile apps, providing a seamless, accessible, and powerful solution for academic performance tracking.

2.3 Theoretical Background

2.3.1 Bangladesh Grading System

The grading system used in Bangladeshi universities, including First Capital University of Bangladesh, follows a standardized letter grade to grade point conversion:

- **A+ (4.00)**: 80% and above - Excellent
- **A (3.75)**: 75% to less than 80% - Very Good
- **A- (3.50)**: 70% to less than 75% - Good
- **B+ (3.25)**: 65% to less than 70% - Above Average
- **B (3.00)**: 60% to less than 65% - Average
- **B- (2.75)**: 55% to less than 60% - Below Average
- **C+ (2.50)**: 50% to less than 55% - Pass
- **C (2.25)**: 45% to less than 50% - Pass
- **D (2.00)**: 40% to less than 45% - Pass
- **F (0.00)**: Below 40% - Fail

Additionally, the Bangladesh grading system includes classifications based on final CGPA:

- **First Class with Distinction**: CGPA ≥ 3.50
- **First Class**: CGPA 3.00 to 3.49
- **Second Class**: CGPA 2.50 to 2.99
- **Third Class**: CGPA 2.00 to 2.49
- **Pass**: CGPA below 2.00 but above minimum passing threshold

2.3.2 GPA and CGPA Calculation Formula

**Semester GPA Calculation**:

The Grade Point Average (GPA) for a single semester is calculated using a weighted average formula:

```
GPA = Σ(Grade Point × Credit Hours) / Σ(Credit Hours)
```

Where:
- Grade Point is the numerical value corresponding to the letter grade (e.g., A+ = 4.00)
- Credit Hours is the weight assigned to each course (typically ranging from 1 to 4)
- Σ represents the summation across all courses in the semester

**Example**: If a student takes three courses:
- Course 1: A+ (4.00) × 3 credits = 12.00
- Course 2: A (3.75) × 3 credits = 11.25
- Course 3: B+ (3.25) × 2 credits = 6.50
- Total: 29.75 / 8 credits = **GPA 3.72**

**Cumulative GPA (CGPA) Calculation**:

The Cumulative Grade Point Average is calculated by considering all completed semesters:

```
CGPA = Σ(Semester GPA × Semester Credits) / Σ(All Semester Credits)
```

Alternatively, using individual courses across all semesters:

```
CGPA = Σ(All Course Grade Points × Credit Hours) / Σ(All Course Credit Hours)
```

The FCUB CGPA Calculator implements both methods to ensure accuracy and provide flexibility in calculation approaches.

2.3.3 Progressive Web Application (PWA) Concepts

**Service Workers**: JavaScript files that run in the background, separate from web pages, enabling features like offline functionality, background sync, and push notifications. Service workers intercept network requests and can serve cached responses when the network is unavailable.

**Cache Storage API**: Allows storing HTTP responses for offline access. The FCUB CGPA Calculator uses sophisticated caching strategies:
- **Precaching**: Critical application assets (HTML, CSS, JavaScript) are cached during installation
- **Runtime Caching**: User data and dynamic content are cached as they are accessed
- **Cache-First Strategy**: Serves cached content first for speed, updates cache in background

**IndexedDB**: A low-level API for client-side storage of significant amounts of structured data. Unlike localStorage (limited to ~5MB), IndexedDB can store much larger datasets and supports complex queries. The FCUB CGPA Calculator uses IndexedDB to store:
- Course grades for each semester
- Semester GPA values
- Department selection and preferences
- User settings (theme, display preferences)

**Web App Manifest**: A JSON file that controls how the PWA appears when installed on a device, including app name, icons, theme colors, display mode, and screen orientation preferences.

**Workbox**: A library developed by Google that simplifies service worker creation and management, providing pre-built caching strategies, background sync capabilities, and offline analytics.

**Offline-First Architecture**: A design philosophy where applications are built to work offline by default, with online connectivity treated as a progressive enhancement rather than a requirement. This ensures maximum accessibility and reliability regardless of network conditions.

---
