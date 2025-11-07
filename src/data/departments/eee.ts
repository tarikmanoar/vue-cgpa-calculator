import type { Department } from './types'

export const eee: Department = {
  id: 'eee',
  name: 'Electrical & Electronics Engineering',
  shortName: 'EEE',
  totalCredits: 160,
  totalSemesters: 8,
  description: 'Bachelor of Science in Electrical & Electronics Engineering',
  courseData: {
    1: [
      { code: 'EEE-111', name: 'Introduction to Electrical Engineering', credits: 3.00 },
      { code: 'EEE-112', name: 'Electrical Engineering Lab', credits: 1.50 },
      { code: 'MATH-111', name: 'Linear Algebra & Co-ordinate Geometry', credits: 3.00 },
      { code: 'PHY-111', name: 'Physics-I', credits: 3.00 },
      { code: 'PHY-112', name: 'Physics-I Lab', credits: 1.50 },
      { code: 'CHEM-111', name: 'Chemistry', credits: 3.00 },
      { code: 'GED-111', name: 'Bangladesh Studies', credits: 2.00 },
      { code: 'ENG-111', name: 'Basic English', credits: 3.00 }
    ],
    2: [
      { code: 'EEE-121', name: 'Circuit Analysis', credits: 3.00 },
      { code: 'EEE-122', name: 'Circuit Analysis Lab', credits: 1.50 },
      { code: 'MATH-121', name: 'Differential and Integral Calculus', credits: 3.00 },
      { code: 'PHY-121', name: 'Physics-II', credits: 3.00 },
      { code: 'CSE-121', name: 'Introduction to Programming', credits: 3.00 },
      { code: 'GED-121', name: 'Principles of Economics', credits: 3.00 }
    ],
    3: [
      { code: 'EEE-211', name: 'Electronic Devices & Circuits', credits: 3.00 },
      { code: 'EEE-212', name: 'Electronic Devices & Circuits Lab', credits: 1.50 },
      { code: 'EEE-213', name: 'Digital Logic Design', credits: 3.00 },
      { code: 'EEE-214', name: 'Digital Logic Design Lab', credits: 1.50 },
      { code: 'MATH-211', name: 'Differential Equations', credits: 3.00 },
      { code: 'ENG-211', name: 'Communicative English', credits: 3.00 },
      { code: 'GED-211', name: 'Principles of Management', credits: 2.00 },
      { code: 'EEE-215', name: 'Engineering Drawing', credits: 3.00 }
    ],
    4: [
      { code: 'EEE-221', name: 'Signals and Systems', credits: 3.00 },
      { code: 'EEE-222', name: 'Signals and Systems Lab', credits: 1.50 },
      { code: 'EEE-223', name: 'Electromagnetic Fields', credits: 3.00 },
      { code: 'EEE-224', name: 'Microprocessor & Interfacing', credits: 3.00 },
      { code: 'EEE-225', name: 'Microprocessor Lab', credits: 1.50 },
      { code: 'MATH-221', name: 'Complex Variables & Statistics', credits: 3.00 },
      { code: 'GED-221', name: 'Law & Ethics in Engineering', credits: 2.00 },
      { code: 'EEE-226', name: 'Viva Voce', credits: 2.00 }
    ],
    5: [
      { code: 'EEE-311', name: 'Power System Analysis', credits: 3.00 },
      { code: 'EEE-312', name: 'Power System Lab', credits: 1.50 },
      { code: 'EEE-313', name: 'Control Systems', credits: 3.00 },
      { code: 'EEE-314', name: 'Control Systems Lab', credits: 1.50 },
      { code: 'EEE-315', name: 'Communication Engineering', credits: 3.00 },
      { code: 'EEE-316', name: 'Communication Engineering Lab', credits: 1.50 },
      { code: 'EEE-317', name: 'Electrical Machines I', credits: 3.00 },
      { code: 'EEE-318', name: 'Electrical Machines Lab I', credits: 1.50 },
      { code: 'GED-311', name: 'Numerical Methods', credits: 2.00 }
    ],
    6: [
      { code: 'EEE-321', name: 'Power Electronics', credits: 3.00 },
      { code: 'EEE-322', name: 'Power Electronics Lab', credits: 1.50 },
      { code: 'EEE-323', name: 'Digital Signal Processing', credits: 3.00 },
      { code: 'EEE-324', name: 'DSP Lab', credits: 1.50 },
      { code: 'EEE-325', name: 'Electrical Machines II', credits: 3.00 },
      { code: 'EEE-326', name: 'Electrical Machines Lab II', credits: 1.50 },
      { code: 'EEE-327', name: 'Instrumentation & Measurement', credits: 3.00 },
      { code: 'EEE-328', name: 'Elective Course I', credits: 3.00 },
      { code: 'EEE-329', name: 'Viva Voce', credits: 1.00 }
    ],
    7: [
      { code: 'EEE-411', name: 'Renewable Energy Systems', credits: 3.00 },
      { code: 'EEE-412', name: 'Renewable Energy Lab', credits: 1.50 },
      { code: 'EEE-413', name: 'VLSI Design', credits: 3.00 },
      { code: 'EEE-414', name: 'Embedded Systems', credits: 3.00 },
      { code: 'EEE-415', name: 'Embedded Systems Lab', credits: 1.50 },
      { code: 'EEE-416', name: 'Elective Course II', credits: 3.00 },
      { code: 'EEE-417', name: 'Elective Course III', credits: 3.00 },
      { code: 'EEE-418', name: 'Industrial Training', credits: 1.50 }
    ],
    8: [
      { code: 'EEE-421', name: 'Power System Protection', credits: 3.00 },
      { code: 'EEE-422', name: 'Wireless Communication', credits: 3.00 },
      { code: 'EEE-423', name: 'Elective Course IV', credits: 3.00 },
      { code: 'EEE-424', name: 'Elective Course V', credits: 3.00 },
      { code: 'EEE-425', name: 'Project Work', credits: 4.00 },
      { code: 'EEE-426', name: 'Field Work & Industrial Tour', credits: 1.50 },
      { code: 'EEE-427', name: 'Comprehensive Viva', credits: 2.00 }
    ]
  },
  semesterCredits: {
    '1': 20.00,
    '2': 19.50,
    '3': 20.00,
    '4': 20.00,
    '5': 20.00,
    '6': 20.00,
    '7': 20.00,
    '8': 20.50
  }
}
