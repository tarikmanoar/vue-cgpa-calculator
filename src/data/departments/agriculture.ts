import type { Department } from './types'

export const agriculture: Department = {
  id: 'agriculture',
  name: 'Agriculture',
  shortName: 'Agriculture',
  totalCredits: 160,
  totalSemesters: 8,
  description: 'Bachelor of Science in Agriculture',
  courseData: {
    1: [
      { code: 'AGR-111', name: 'Introduction to Agriculture', credits: 3.00 },
      { code: 'AGR-112', name: 'Soil Science', credits: 3.00 },
      { code: 'AGR-113', name: 'Soil Science Lab', credits: 1.00 },
      { code: 'BIO-111', name: 'Botany', credits: 3.00 },
      { code: 'BIO-112', name: 'Botany Lab', credits: 1.00 },
      { code: 'CHEM-111', name: 'Agricultural Chemistry', credits: 3.00 },
      { code: 'ENG-111', name: 'Basic English', credits: 3.00 },
      { code: 'GED-111', name: 'Bangladesh Studies', credits: 2.00 }
    ],
    2: [
      { code: 'AGR-121', name: 'Crop Production', credits: 3.00 },
      { code: 'AGR-122', name: 'Crop Production Lab', credits: 1.00 },
      { code: 'AGR-123', name: 'Plant Physiology', credits: 3.00 },
      { code: 'BIO-121', name: 'Genetics', credits: 3.00 },
      { code: 'CHEM-121', name: 'Organic Chemistry', credits: 3.00 },
      { code: 'ENG-121', name: 'Communicative English', credits: 3.00 }
    ],
    3: [
      { code: 'AGR-211', name: 'Agricultural Economics', credits: 3.00 },
      { code: 'AGR-212', name: 'Agronomy', credits: 3.00 },
      { code: 'AGR-213', name: 'Agronomy Lab', credits: 1.00 },
      { code: 'AGR-214', name: 'Animal Husbandry', credits: 3.00 },
      { code: 'BIO-211', name: 'Microbiology', credits: 3.00 },
      { code: 'BIO-212', name: 'Microbiology Lab', credits: 1.00 },
      { code: 'STAT-211', name: 'Agricultural Statistics', credits: 3.00 },
      { code: 'GED-211', name: 'Principles of Economics', credits: 3.00 }
    ],
    4: [
      { code: 'AGR-221', name: 'Horticulture', credits: 3.00 },
      { code: 'AGR-222', name: 'Horticulture Lab', credits: 1.00 },
      { code: 'AGR-223', name: 'Plant Pathology', credits: 3.00 },
      { code: 'AGR-224', name: 'Plant Pathology Lab', credits: 1.00 },
      { code: 'AGR-225', name: 'Agricultural Engineering', credits: 3.00 },
      { code: 'AGR-226', name: 'Irrigation & Water Management', credits: 3.00 },
      { code: 'BIO-221', name: 'Entomology', credits: 3.00 },
      { code: 'BIO-222', name: 'Entomology Lab', credits: 1.00 },
      { code: 'GED-221', name: 'Principles of Management', credits: 2.00 }
    ],
    5: [
      { code: 'AGR-311', name: 'Plant Breeding', credits: 3.00 },
      { code: 'AGR-312', name: 'Plant Breeding Lab', credits: 1.00 },
      { code: 'AGR-313', name: 'Agricultural Extension', credits: 3.00 },
      { code: 'AGR-314', name: 'Seed Technology', credits: 3.00 },
      { code: 'AGR-315', name: 'Agricultural Meteorology', credits: 3.00 },
      { code: 'AGR-316', name: 'Livestock Production', credits: 3.00 },
      { code: 'AGR-317', name: 'Elective Course I', credits: 2.00 },
      { code: 'GED-311', name: 'Environmental Science', credits: 2.00 }
    ],
    6: [
      { code: 'AGR-321', name: 'Post-Harvest Technology', credits: 3.00 },
      { code: 'AGR-322', name: 'Agricultural Marketing', credits: 3.00 },
      { code: 'AGR-323', name: 'Organic Farming', credits: 3.00 },
      { code: 'AGR-324', name: 'Agricultural Biotechnology', credits: 3.00 },
      { code: 'AGR-325', name: 'Farm Management', credits: 3.00 },
      { code: 'AGR-326', name: 'Elective Course II', credits: 2.00 },
      { code: 'AGR-327', name: 'Research Methodology', credits: 3.00 }
    ],
    7: [
      { code: 'AGR-411', name: 'Sustainable Agriculture', credits: 3.00 },
      { code: 'AGR-412', name: 'Agricultural Policy', credits: 3.00 },
      { code: 'AGR-413', name: 'Precision Agriculture', credits: 3.00 },
      { code: 'AGR-414', name: 'Elective Course III', credits: 3.00 },
      { code: 'AGR-415', name: 'Elective Course IV', credits: 3.00 },
      { code: 'AGR-416', name: 'Internship', credits: 3.00 },
      { code: 'AGR-417', name: 'Seminar', credits: 2.00 },
      { code: 'AGR-418', name: 'Viva Voce', credits: 1.00 }
    ],
    8: [
      { code: 'AGR-421', name: 'Thesis/Project Work', credits: 6.00 },
      { code: 'AGR-422', name: 'Agricultural Entrepreneurship', credits: 3.00 },
      { code: 'AGR-423', name: 'Food Security & Nutrition', credits: 3.00 },
      { code: 'AGR-424', name: 'Climate Change & Agriculture', credits: 3.00 },
      { code: 'AGR-425', name: 'Field Work & Industrial Tour', credits: 2.00 },
      { code: 'AGR-426', name: 'Comprehensive Viva', credits: 2.00 },
      { code: 'AGR-427', name: 'Elective Course V', credits: 2.00 }
    ]
  },
  semesterCredits: {
    '1': 19.00,
    '2': 19.00,
    '3': 20.00,
    '4': 20.00,
    '5': 20.00,
    '6': 20.00,
    '7': 21.00,
    '8': 21.00
  }
}
