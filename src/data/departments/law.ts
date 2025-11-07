import type { Department } from './types'

export const law: Department = {
  id: 'law',
  name: 'Law',
  shortName: 'Law',
  totalCredits: 136,
  totalSemesters: 8,
  description: 'Bachelor of Laws (LL.B)',
  courseData: {
    1: [
      { code: 'LAW-111', name: 'Introduction to Legal System', credits: 3.00 },
      { code: 'LAW-112', name: 'Constitutional Law-I', credits: 3.00 },
      { code: 'LAW-113', name: 'Contract Law-I', credits: 3.00 },
      { code: 'LAW-114', name: 'Jurisprudence', credits: 3.00 },
      { code: 'ENG-111', name: 'Legal English-I', credits: 3.00 },
      { code: 'GED-111', name: 'Bangladesh Studies', credits: 2.00 }
    ],
    2: [
      { code: 'LAW-121', name: 'Constitutional Law-II', credits: 3.00 },
      { code: 'LAW-122', name: 'Contract Law-II', credits: 3.00 },
      { code: 'LAW-123', name: 'Criminal Law-I', credits: 3.00 },
      { code: 'LAW-124', name: 'Law of Tort', credits: 3.00 },
      { code: 'ENG-121', name: 'Legal English-II', credits: 3.00 }
    ],
    3: [
      { code: 'LAW-211', name: 'Criminal Law-II', credits: 3.00 },
      { code: 'LAW-212', name: 'Family Law-I', credits: 3.00 },
      { code: 'LAW-213', name: 'Property Law', credits: 3.00 },
      { code: 'LAW-214', name: 'Administrative Law', credits: 3.00 },
      { code: 'LAW-215', name: 'Legal Research & Writing', credits: 2.00 },
      { code: 'GED-211', name: 'Principles of Economics', credits: 3.00 }
    ],
    4: [
      { code: 'LAW-221', name: 'Family Law-II', credits: 3.00 },
      { code: 'LAW-222', name: 'Company Law', credits: 3.00 },
      { code: 'LAW-223', name: 'Evidence Law', credits: 3.00 },
      { code: 'LAW-224', name: 'Civil Procedure Code', credits: 3.00 },
      { code: 'LAW-225', name: 'Criminal Procedure Code', credits: 3.00 },
      { code: 'GED-221', name: 'Principles of Management', credits: 2.00 }
    ],
    5: [
      { code: 'LAW-311', name: 'Labor & Industrial Law', credits: 3.00 },
      { code: 'LAW-312', name: 'Environmental Law', credits: 3.00 },
      { code: 'LAW-313', name: 'International Law', credits: 3.00 },
      { code: 'LAW-314', name: 'Human Rights Law', credits: 3.00 },
      { code: 'LAW-315', name: 'Land Law', credits: 3.00 },
      { code: 'LAW-316', name: 'Elective Course I', credits: 2.00 }
    ],
    6: [
      { code: 'LAW-321', name: 'Intellectual Property Law', credits: 3.00 },
      { code: 'LAW-322', name: 'Banking & Negotiable Instruments', credits: 3.00 },
      { code: 'LAW-323', name: 'Tax Law', credits: 3.00 },
      { code: 'LAW-324', name: 'Alternative Dispute Resolution', credits: 3.00 },
      { code: 'LAW-325', name: 'Cyber Law', credits: 3.00 },
      { code: 'LAW-326', name: 'Elective Course II', credits: 2.00 }
    ],
    7: [
      { code: 'LAW-411', name: 'Legal Ethics & Professional Conduct', credits: 3.00 },
      { code: 'LAW-412', name: 'Islamic Law', credits: 3.00 },
      { code: 'LAW-413', name: 'International Trade Law', credits: 3.00 },
      { code: 'LAW-414', name: 'Elective Course III', credits: 3.00 },
      { code: 'LAW-415', name: 'Moot Court', credits: 2.00 },
      { code: 'LAW-416', name: 'Legal Aid Clinic', credits: 2.00 },
      { code: 'LAW-417', name: 'Viva Voce', credits: 1.00 }
    ],
    8: [
      { code: 'LAW-421', name: 'Constitutional & Administrative Remedies', credits: 3.00 },
      { code: 'LAW-422', name: 'Law of Equity & Trusts', credits: 3.00 },
      { code: 'LAW-423', name: 'Elective Course IV', credits: 3.00 },
      { code: 'LAW-424', name: 'Dissertation/Research Project', credits: 4.00 },
      { code: 'LAW-425', name: 'Internship', credits: 2.00 },
      { code: 'LAW-426', name: 'Comprehensive Viva', credits: 2.00 }
    ]
  },
  semesterCredits: {
    '1': 17.00,
    '2': 17.00,
    '3': 17.00,
    '4': 17.00,
    '5': 17.00,
    '6': 17.00,
    '7': 17.00,
    '8': 17.00
  }
}
