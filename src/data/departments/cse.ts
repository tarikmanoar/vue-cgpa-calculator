import type { Department } from './types'

export const cse: Department = {
  id: 'cse',
  name: 'Computer Science & Engineering',
  shortName: 'CSE',
  totalCredits: 162,
  totalSemesters: 8,
  description: 'Bachelor of Science in Computer Science and Engineering',
  courseData: {
    1: [
      { code: 'CSE-111', name: 'Introduction to Computer Systems', credits: 3.00 },
      { code: 'EEE-111', name: 'Introduction to Digital Electronics', credits: 3.00 },
      { code: 'EEE-112', name: 'Introduction to Digital Electronics Lab', credits: 1.50 },
      { code: 'PHY-111', name: 'Physics-I', credits: 3.00 },
      { code: 'MATH-111', name: 'Linear Algebra & Co-ordinate Geometry', credits: 3.00 },
      { code: 'GED-111', name: 'Principles of Accounting', credits: 2.00 },
      { code: 'GED-112', name: 'Bangladesh Studies', credits: 2.00 },
      { code: 'BANG-111', name: 'Functional Bengali language', credits: 2.00 }
    ],
    2: [
      { code: 'CSE-121', name: 'Structured Programming Using C', credits: 3.00 },
      { code: 'CSE-122', name: 'Structured Programming Using C Lab', credits: 1.00 },
      { code: 'CSE-123', name: 'Digital Logic Design', credits: 3.00 },
      { code: 'CSE-124', name: 'Digital Logic Design Lab', credits: 1.00 },
      { code: 'EEE-121', name: 'Electronic Device & Circuits', credits: 3.00 },
      { code: 'EEE-122', name: 'Electronic Device & Circuits lab', credits: 1.50 },
      { code: 'PHY-121', name: 'Physics-II', credits: 3.00 },
      { code: 'PHY-122', name: 'Physics-II Lab', credits: 1.00 },
      { code: 'MATH-121', name: 'Differential and Integral Calculus', credits: 3.00 },
      { code: 'ENG-121', name: 'Basic English', credits: 3.00 },
      { code: 'CSE-125', name: 'Viva Voce', credits: 1.00 }
    ],
    3: [
      { code: 'CSE-211', name: 'Data Structures', credits: 3.00 },
      { code: 'CSE-212', name: 'Data Structures Lab', credits: 1.00 },
      { code: 'CSE-213', name: 'Discrete Mathematics', credits: 3.00 },
      { code: 'ED-211', name: 'Engineering Drawing', credits: 1.00 },
      { code: 'ED-212', name: 'Engineering Drawing Lab', credits: 1.00 },
      { code: 'CHEM-211', name: 'Chemistry', credits: 3.00 },
      { code: 'CHEM-212', name: 'Chemistry Lab', credits: 1.00 },
      { code: 'MATH-211', name: 'Statistical Methods & Probability', credits: 3.00 },
      { code: 'ENG-211', name: 'Communicative English', credits: 2.00 },
      { code: 'GED-211', name: 'Principles of Economics', credits: 3.00 }
    ],
    4: [
      { code: 'CSE-221', name: 'Object Oriented Programming', credits: 3.00 },
      { code: 'CSE-222', name: 'Object Oriented Programming Lab', credits: 1.00 },
      { code: 'CSE-223', name: 'Algorithm Design and Analysis', credits: 3.00 },
      { code: 'CSE-224', name: 'Algorithm Design and Analysis Lab', credits: 1.00 },
      { code: 'CSE-225', name: 'Numerical Methods', credits: 2.00 },
      { code: 'MATH-221', name: 'Equations & Vector Analysis', credits: 3.00 },
      { code: 'GED-221', name: 'Law & Ethics in Engineering Practice', credits: 2.00 },
      { code: 'GED-222', name: 'Social History and World Civilization', credits: 3.00 },
      { code: 'CSE-226', name: 'Viva Voce', credits: 1.00 }
    ],
    5: [
      { code: 'CSE-311', name: 'Computer Organization & Architecture', credits: 3.00 },
      { code: 'CSE-312', name: 'Data and Telecommunication', credits: 3.00 },
      { code: 'CSE-313', name: 'Microprocessor, Microcontroller and Assembly Language', credits: 3.00 },
      { code: 'CSE-314', name: 'Microprocessor, Microcontroller and Assembly Language Lab', credits: 1.00 },
      { code: 'CSE-315', name: 'Database Management Systems', credits: 3.00 },
      { code: 'CSE-316', name: 'Database Management Systems Lab', credits: 1.00 },
      { code: 'GED-311', name: 'Principles of Management', credits: 2.00 },
      { code: 'CSE-317', name: 'Elective Course (Section II Minor group)', credits: 3.00 },
      { code: 'CSE-318', name: 'Elective Course (Section II Minor group)', credits: 3.00 }
    ],
    6: [
      { code: 'CSE-321', name: 'Operating Systems', credits: 3.00 },
      { code: 'CSE-322', name: 'Operating Systems Lab', credits: 1.00 },
      { code: 'CSE-323', name: 'Computer Networks', credits: 3.00 },
      { code: 'CSE-324', name: 'Computer Networks Lab', credits: 1.00 },
      { code: 'CSE-325', name: 'Software Engineering', credits: 3.00 },
      { code: 'CSE-326', name: 'Software Engineering Lab', credits: 1.00 },
      { code: 'CSE-327', name: 'Compiler Design', credits: 3.00 },
      { code: 'CSE-328', name: 'Compiler Design Lab', credits: 1.00 },
      { code: 'CSE-329', name: 'Elective Course (Section I Major group)', credits: 3.00 },
      { code: 'CSE-330', name: 'Viva Voce', credits: 1.00 }
    ],
    7: [
      { code: 'CSE-411', name: 'Simulation and Modeling', credits: 3.00 },
      { code: 'CSE-412', name: 'Simulation and Modeling Lab', credits: 1.00 },
      { code: 'CSE-413', name: 'Computer Graphics', credits: 3.00 },
      { code: 'CSE-414', name: 'Computer Graphics Lab', credits: 1.00 },
      { code: 'CSE-415', name: 'Artificial Intelligence and Neural Networking', credits: 3.00 },
      { code: 'CSE-416', name: 'Artificial Intelligence and Neural Networking Lab', credits: 1.00 },
      { code: 'CSE-417', name: 'E-Commerce and Web Engineering', credits: 3.00 },
      { code: 'CSE-418', name: 'E-Commerce and Web Engineering Lab', credits: 1.00 },
      { code: 'CSE-419', name: 'Elective Course (Section I Major group)', credits: 3.00 }
    ],
    8: [
      { code: 'CSE-421', name: 'Digital Signal Processing', credits: 3.00 },
      { code: 'CSE-422', name: 'Digital Signal Processing Lab', credits: 1.00 },
      { code: 'CSE-423', name: 'Mobile Application development', credits: 3.00 },
      { code: 'CSE-424', name: 'Mobile Application development Lab', credits: 1.00 },
      { code: 'CSE-425', name: 'Elective Course (Section I Major group)', credits: 3.00 },
      { code: 'CSE-428', name: 'Project Work', credits: 3.00 },
      { code: 'CSE-429', name: 'Field work and Industrial Tour', credits: 1.00 },
      { code: 'CSE-430', name: 'Viva Voce', credits: 2.00 }
    ]
  },
  semesterCredits: {
    '1': 20.50,
    '2': 23.50,
    '3': 21.00,
    '4': 19.00,
    '5': 22.00,
    '6': 20.00,
    '7': 19.00,
    '8': 17.00
  }
}
