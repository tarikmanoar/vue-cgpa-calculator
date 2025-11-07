import type { Department } from './types'

export const sociology: Department = {
  id: 'sociology',
  name: 'Sociology',
  shortName: 'Sociology',
  totalCredits: 120,
  totalSemesters: 8,
  description: 'Bachelor of Arts in Sociology',
  courseData: {
    1: [
      { code: 'SOC-111', name: 'Introduction to Sociology', credits: 3.00 },
      { code: 'SOC-112', name: 'Social Research Methods', credits: 3.00 },
      { code: 'SOC-113', name: 'Bangladesh Society & Culture', credits: 3.00 },
      { code: 'ENG-111', name: 'Basic English', credits: 3.00 },
      { code: 'GED-111', name: 'Bangladesh Studies', credits: 2.00 },
      { code: 'BANG-111', name: 'Bengali Language', credits: 2.00 }
    ],
    2: [
      { code: 'SOC-121', name: 'Social Anthropology', credits: 3.00 },
      { code: 'SOC-122', name: 'Social Psychology', credits: 3.00 },
      { code: 'SOC-123', name: 'Classical Sociological Theory', credits: 3.00 },
      { code: 'ENG-121', name: 'Communicative English', credits: 3.00 },
      { code: 'GED-121', name: 'Statistics for Social Sciences', credits: 3.00 }
    ],
    3: [
      { code: 'SOC-211', name: 'Contemporary Sociological Theory', credits: 3.00 },
      { code: 'SOC-212', name: 'Rural Sociology', credits: 3.00 },
      { code: 'SOC-213', name: 'Urban Sociology', credits: 3.00 },
      { code: 'SOC-214', name: 'Political Sociology', credits: 3.00 },
      { code: 'SOC-215', name: 'Research Methodology', credits: 3.00 }
    ],
    4: [
      { code: 'SOC-221', name: 'Sociology of Development', credits: 3.00 },
      { code: 'SOC-222', name: 'Gender & Society', credits: 3.00 },
      { code: 'SOC-223', name: 'Social Stratification', credits: 3.00 },
      { code: 'SOC-224', name: 'Population Studies', credits: 3.00 },
      { code: 'SOC-225', name: 'Social Work & Community Development', credits: 3.00 }
    ],
    5: [
      { code: 'SOC-311', name: 'Industrial Sociology', credits: 3.00 },
      { code: 'SOC-312', name: 'Environmental Sociology', credits: 3.00 },
      { code: 'SOC-313', name: 'Family & Marriage', credits: 3.00 },
      { code: 'SOC-314', name: 'Social Movements', credits: 3.00 },
      { code: 'SOC-315', name: 'Elective Course I', credits: 3.00 }
    ],
    6: [
      { code: 'SOC-321', name: 'Criminology & Deviance', credits: 3.00 },
      { code: 'SOC-322', name: 'Medical Sociology', credits: 3.00 },
      { code: 'SOC-323', name: 'Religion & Society', credits: 3.00 },
      { code: 'SOC-324', name: 'Media & Society', credits: 3.00 },
      { code: 'SOC-325', name: 'Elective Course II', credits: 3.00 }
    ],
    7: [
      { code: 'SOC-411', name: 'Globalization & Society', credits: 3.00 },
      { code: 'SOC-412', name: 'Social Policy', credits: 3.00 },
      { code: 'SOC-413', name: 'Sociology of Education', credits: 2.00 },
      { code: 'SOC-414', name: 'Elective Course III', credits: 3.00 },
      { code: 'SOC-415', name: 'Field Work', credits: 2.00 },
      { code: 'SOC-416', name: 'Seminar', credits: 1.00 },
      { code: 'SOC-417', name: 'Viva Voce', credits: 1.00 }
    ],
    8: [
      { code: 'SOC-421', name: 'Advanced Social Theory', credits: 3.00 },
      { code: 'SOC-422', name: 'Social Change & Transformation', credits: 3.00 },
      { code: 'SOC-423', name: 'Elective Course IV', credits: 3.00 },
      { code: 'SOC-424', name: 'Thesis/Research Project', credits: 4.00 },
      { code: 'SOC-425', name: 'Internship', credits: 1.00 },
      { code: 'SOC-426', name: 'Comprehensive Examination', credits: 1.00 }
    ]
  },
  semesterCredits: {
    '1': 16.00,
    '2': 15.00,
    '3': 15.00,
    '4': 15.00,
    '5': 15.00,
    '6': 15.00,
    '7': 14.00,
    '8': 15.00
  }
}
