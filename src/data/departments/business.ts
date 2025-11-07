import type { Department } from './types'

export const business: Department = {
  id: 'business',
  name: 'Business Administration',
  shortName: 'BBA',
  totalCredits: 126,
  totalSemesters: 8,
  description: 'Bachelor of Business Administration',
  courseData: {
    1: [
      { code: 'BUS-111', name: 'Principles of Management', credits: 3.00 },
      { code: 'BUS-112', name: 'Principles of Accounting', credits: 3.00 },
      { code: 'BUS-113', name: 'Business Mathematics', credits: 3.00 },
      { code: 'BUS-114', name: 'Microeconomics', credits: 3.00 },
      { code: 'ENG-111', name: 'Business English', credits: 3.00 },
      { code: 'GED-111', name: 'Bangladesh Studies', credits: 2.00 }
    ],
    2: [
      { code: 'BUS-121', name: 'Financial Accounting', credits: 3.00 },
      { code: 'BUS-122', name: 'Macroeconomics', credits: 3.00 },
      { code: 'BUS-123', name: 'Business Statistics', credits: 3.00 },
      { code: 'BUS-124', name: 'Organizational Behavior', credits: 3.00 },
      { code: 'CSE-121', name: 'Computer Applications in Business', credits: 3.00 }
    ],
    3: [
      { code: 'BUS-211', name: 'Managerial Accounting', credits: 3.00 },
      { code: 'BUS-212', name: 'Marketing Management', credits: 3.00 },
      { code: 'BUS-213', name: 'Business Law', credits: 3.00 },
      { code: 'BUS-214', name: 'Business Communication', credits: 3.00 },
      { code: 'BUS-215', name: 'Human Resource Management', credits: 3.00 }
    ],
    4: [
      { code: 'BUS-221', name: 'Financial Management', credits: 3.00 },
      { code: 'BUS-222', name: 'Operations Management', credits: 3.00 },
      { code: 'BUS-223', name: 'Business Research Methods', credits: 3.00 },
      { code: 'BUS-224', name: 'Consumer Behavior', credits: 3.00 },
      { code: 'BUS-225', name: 'Management Information Systems', credits: 3.00 }
    ],
    5: [
      { code: 'BUS-311', name: 'Corporate Finance', credits: 3.00 },
      { code: 'BUS-312', name: 'Strategic Management', credits: 3.00 },
      { code: 'BUS-313', name: 'International Business', credits: 3.00 },
      { code: 'BUS-314', name: 'Entrepreneurship', credits: 3.00 },
      { code: 'BUS-315', name: 'Supply Chain Management', credits: 2.00 },
      { code: 'BUS-316', name: 'Elective Course I', credits: 2.00 }
    ],
    6: [
      { code: 'BUS-321', name: 'Investment Analysis', credits: 3.00 },
      { code: 'BUS-322', name: 'Digital Marketing', credits: 3.00 },
      { code: 'BUS-323', name: 'Business Ethics & CSR', credits: 3.00 },
      { code: 'BUS-324', name: 'Project Management', credits: 3.00 },
      { code: 'BUS-325', name: 'Elective Course II', credits: 2.00 },
      { code: 'BUS-326', name: 'Elective Course III', credits: 2.00 }
    ],
    7: [
      { code: 'BUS-411', name: 'Business Analytics', credits: 3.00 },
      { code: 'BUS-412', name: 'Leadership & Change Management', credits: 3.00 },
      { code: 'BUS-413', name: 'E-Commerce', credits: 3.00 },
      { code: 'BUS-414', name: 'Elective Course IV', credits: 3.00 },
      { code: 'BUS-415', name: 'Internship', credits: 2.00 },
      { code: 'BUS-416', name: 'Seminar', credits: 1.00 },
      { code: 'BUS-417', name: 'Viva Voce', credits: 1.00 }
    ],
    8: [
      { code: 'BUS-421', name: 'Business Policy & Strategy', credits: 3.00 },
      { code: 'BUS-422', name: 'Global Business Environment', credits: 3.00 },
      { code: 'BUS-423', name: 'Elective Course V', credits: 3.00 },
      { code: 'BUS-424', name: 'Thesis/Capstone Project', credits: 4.00 },
      { code: 'BUS-425', name: 'Business Simulation', credits: 2.00 },
      { code: 'BUS-426', name: 'Comprehensive Examination', credits: 1.00 }
    ]
  },
  semesterCredits: {
    '1': 17.00,
    '2': 15.00,
    '3': 15.00,
    '4': 15.00,
    '5': 16.00,
    '6': 16.00,
    '7': 16.00,
    '8': 16.00
  }
}
