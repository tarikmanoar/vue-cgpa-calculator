import type { Department } from './types'

export const publicHealth: Department = {
  id: 'public-health',
  name: 'Public Health',
  shortName: 'Public Health',
  totalCredits: 144,
  totalSemesters: 8,
  description: 'Bachelor of Public Health',
  courseData: {
    1: [
      { code: 'PH-111', name: 'Introduction to Public Health', credits: 3.00 },
      { code: 'PH-112', name: 'Biostatistics', credits: 3.00 },
      { code: 'BIO-111', name: 'Human Biology', credits: 3.00 },
      { code: 'BIO-112', name: 'Human Biology Lab', credits: 1.00 },
      { code: 'ENG-111', name: 'Basic English', credits: 3.00 },
      { code: 'GED-111', name: 'Bangladesh Studies', credits: 2.00 },
      { code: 'BANG-111', name: 'Functional Bengali Language', credits: 2.00 }
    ],
    2: [
      { code: 'PH-121', name: 'Environmental Health', credits: 3.00 },
      { code: 'PH-122', name: 'Epidemiology', credits: 3.00 },
      { code: 'PH-123', name: 'Health Education & Promotion', credits: 3.00 },
      { code: 'BIO-121', name: 'Microbiology', credits: 3.00 },
      { code: 'ENG-121', name: 'Communicative English', credits: 3.00 }
    ],
    3: [
      { code: 'PH-211', name: 'Occupational Health & Safety', credits: 3.00 },
      { code: 'PH-212', name: 'Nutrition & Food Safety', credits: 3.00 },
      { code: 'PH-213', name: 'Health Policy & Management', credits: 3.00 },
      { code: 'PH-214', name: 'Research Methodology', credits: 3.00 },
      { code: 'STAT-211', name: 'Advanced Biostatistics', credits: 3.00 },
      { code: 'GED-211', name: 'Principles of Economics', credits: 3.00 }
    ],
    4: [
      { code: 'PH-221', name: 'Maternal & Child Health', credits: 3.00 },
      { code: 'PH-222', name: 'Infectious Diseases', credits: 3.00 },
      { code: 'PH-223', name: 'Non-Communicable Diseases', credits: 3.00 },
      { code: 'PH-224', name: 'Health Information Systems', credits: 3.00 },
      { code: 'PH-225', name: 'Community Health Nursing', credits: 3.00 },
      { code: 'GED-221', name: 'Principles of Management', credits: 3.00 }
    ],
    5: [
      { code: 'PH-311', name: 'Global Health', credits: 3.00 },
      { code: 'PH-312', name: 'Disaster Management', credits: 3.00 },
      { code: 'PH-313', name: 'Health Economics', credits: 3.00 },
      { code: 'PH-314', name: 'Reproductive Health', credits: 3.00 },
      { code: 'PH-315', name: 'Behavioral Sciences', credits: 3.00 },
      { code: 'PH-316', name: 'Elective Course I', credits: 3.00 }
    ],
    6: [
      { code: 'PH-321', name: 'Disease Surveillance & Control', credits: 3.00 },
      { code: 'PH-322', name: 'Health Communication', credits: 3.00 },
      { code: 'PH-323', name: 'Mental Health', credits: 3.00 },
      { code: 'PH-324', name: 'Health Program Planning', credits: 3.00 },
      { code: 'PH-325', name: 'Environmental Toxicology', credits: 3.00 },
      { code: 'PH-326', name: 'Elective Course II', credits: 3.00 }
    ],
    7: [
      { code: 'PH-411', name: 'Health Law & Ethics', credits: 3.00 },
      { code: 'PH-412', name: 'Health Quality Assurance', credits: 3.00 },
      { code: 'PH-413', name: 'Health Advocacy', credits: 3.00 },
      { code: 'PH-414', name: 'Elective Course III', credits: 3.00 },
      { code: 'PH-415', name: 'Field Practicum', credits: 3.00 },
      { code: 'PH-416', name: 'Seminar', credits: 2.00 },
      { code: 'PH-417', name: 'Viva Voce', credits: 1.00 }
    ],
    8: [
      { code: 'PH-421', name: 'Public Health Research Project', credits: 6.00 },
      { code: 'PH-422', name: 'Health Leadership', credits: 3.00 },
      { code: 'PH-423', name: 'One Health Approach', credits: 3.00 },
      { code: 'PH-424', name: 'Elective Course IV', credits: 3.00 },
      { code: 'PH-425', name: 'Internship', credits: 2.00 },
      { code: 'PH-426', name: 'Comprehensive Examination', credits: 2.00 }
    ]
  },
  semesterCredits: {
    '1': 17.00,
    '2': 18.00,
    '3': 18.00,
    '4': 18.00,
    '5': 18.00,
    '6': 18.00,
    '7': 18.00,
    '8': 19.00
  }
}
