import type { Department } from './types'

export const english: Department = {
  id: 'english',
  name: 'English',
  shortName: 'English',
  totalCredits: 120,
  totalSemesters: 8,
  description: 'Bachelor of Arts in English',
  courseData: {
    1: [
      { code: 'ENG-111', name: 'Introduction to English Literature', credits: 3.00 },
      { code: 'ENG-112', name: 'Fundamentals of English Grammar', credits: 3.00 },
      { code: 'ENG-113', name: 'Reading & Comprehension', credits: 3.00 },
      { code: 'ENG-114', name: 'Basics of Writing', credits: 3.00 },
      { code: 'GED-111', name: 'Bangladesh Studies', credits: 2.00 },
      { code: 'BANG-111', name: 'Bengali Language', credits: 2.00 }
    ],
    2: [
      { code: 'ENG-121', name: 'Introduction to Poetry', credits: 3.00 },
      { code: 'ENG-122', name: 'Introduction to Prose', credits: 3.00 },
      { code: 'ENG-123', name: 'English Phonetics & Phonology', credits: 3.00 },
      { code: 'ENG-124', name: 'Academic Writing', credits: 3.00 },
      { code: 'GED-121', name: 'Introduction to Linguistics', credits: 3.00 }
    ],
    3: [
      { code: 'ENG-211', name: 'Shakespeare Studies', credits: 3.00 },
      { code: 'ENG-212', name: 'Romantic Poetry', credits: 3.00 },
      { code: 'ENG-213', name: 'Victorian Literature', credits: 3.00 },
      { code: 'ENG-214', name: 'English Morphology & Syntax', credits: 3.00 },
      { code: 'ENG-215', name: 'Creative Writing', credits: 3.00 }
    ],
    4: [
      { code: 'ENG-221', name: 'Modern Poetry', credits: 3.00 },
      { code: 'ENG-222', name: 'Modern Drama', credits: 3.00 },
      { code: 'ENG-223', name: 'American Literature', credits: 3.00 },
      { code: 'ENG-224', name: 'Literary Criticism & Theory', credits: 3.00 },
      { code: 'ENG-225', name: 'Sociolinguistics', credits: 3.00 }
    ],
    5: [
      { code: 'ENG-311', name: 'Post-Colonial Literature', credits: 3.00 },
      { code: 'ENG-312', name: 'Contemporary Fiction', credits: 3.00 },
      { code: 'ENG-313', name: "Women's Writing", credits: 3.00 },
      { code: 'ENG-314', name: 'Translation Studies', credits: 3.00 },
      { code: 'ENG-315', name: 'Elective Course I', credits: 3.00 }
    ],
    6: [
      { code: 'ENG-321', name: 'Postmodern Literature', credits: 3.00 },
      { code: 'ENG-322', name: 'Film & Literature', credits: 3.00 },
      { code: 'ENG-323', name: 'World Literature', credits: 3.00 },
      { code: 'ENG-324', name: 'English Language Teaching', credits: 3.00 },
      { code: 'ENG-325', name: 'Elective Course II', credits: 3.00 }
    ],
    7: [
      { code: 'ENG-411', name: 'Cultural Studies', credits: 3.00 },
      { code: 'ENG-412', name: 'Comparative Literature', credits: 3.00 },
      { code: 'ENG-413', name: 'Research Methodology', credits: 2.00 },
      { code: 'ENG-414', name: 'Elective Course III', credits: 3.00 },
      { code: 'ENG-415', name: 'Elective Course IV', credits: 3.00 },
      { code: 'ENG-416', name: 'Seminar', credits: 1.00 },
      { code: 'ENG-417', name: 'Viva Voce', credits: 1.00 }
    ],
    8: [
      { code: 'ENG-421', name: 'Literary Theory Seminar', credits: 3.00 },
      { code: 'ENG-422', name: 'South Asian Literature', credits: 3.00 },
      { code: 'ENG-423', name: 'Elective Course V', credits: 3.00 },
      { code: 'ENG-424', name: 'Thesis/Research Project', credits: 4.00 },
      { code: 'ENG-425', name: 'Portfolio Development', credits: 1.00 },
      { code: 'ENG-426', name: 'Comprehensive Examination', credits: 1.00 }
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
