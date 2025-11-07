// Department and course data types

export interface Course {
  code: string
  name: string
  credits: number
  grade?: string
}

export interface CourseData {
  [semester: number]: Course[]
}

export interface SemesterCredits {
  [semester: string]: number
}

export interface Department {
  id: string
  name: string
  shortName: string
  totalCredits: number
  totalSemesters: number
  courseData: CourseData
  semesterCredits: SemesterCredits
  description?: string
}

export type DepartmentId = 'cse' | 'eee' | 'public-health' | 'law' | 'business' | 'english' | 'sociology' | 'agriculture'
