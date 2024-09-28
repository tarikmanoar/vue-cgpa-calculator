<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto w-full px-4 sm:px-0">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">First Capital University CGPA Calculator</h1>
        
        <form @submit.prevent="addCourse" class="mb-6">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label for="courseName" class="block text-sm font-medium text-gray-700">Course Name</label>
              <input
                v-model="newCourse.name"
                type="text"
                id="courseName"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="creditHours" class="block text-sm font-medium text-gray-700">Credit Hours</label>
              <input
                v-model.number="newCourse.creditHours"
                type="number"
                id="creditHours"
                required
                min="0"
                step="0.5"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="grade" class="block text-sm font-medium text-gray-700">Grade</label>
              <select
                v-model="newCourse.grade"
                id="grade"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Grade</option>
                <option v-for="grade in grades" :key="grade.letter" :value="grade.letter">
                  {{ grade.letter }} ({{ grade.point }})
                </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Course
          </button>
        </form>

        <div v-if="courses.length > 0" class="mb-6">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">Courses</h2>
          <ul class="space-y-2">
            <li v-for="(course, index) in courses" :key="index" class="flex justify-between items-center bg-gray-50 p-3 rounded-md">
              <span>{{ course.name }} ({{ course.creditHours }} credits) - {{ course.grade }}</span>
              <button
                @click="removeCourse(index)"
                class="text-red-600 hover:text-red-800 focus:outline-none"
              >
                Remove
              </button>
            </li>
          </ul>
        </div>

        <div v-if="cgpa !== null" class="text-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Your CGPA</h2>
          <p class="text-4xl font-bold text-blue-600">{{ cgpa.toFixed(2) }}</p>
          <p class="text-lg text-gray-600">Total Credit Attempts: {{ totalCredits }}</p>
        </div>

        <div class="flex justify-center">
          <button
            @click="exportAsPDF"
            class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mr-4"
          >
            Export as PDF
          </button>
          <button
            @click="exportAsImage"
            class="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Export as Image
          </button>
        </div>
        <div class="flex justify-center mt-6">
          <a href="https://github.com/tarikmanoar">
            <img src="https://img.shields.io/github/followers/tarikmanoar?style=social" alt="GitHub Follow" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const grades = [
  { letter: 'A+', point: 4.00 },
  { letter: 'A', point: 3.75 },
  { letter: 'A-', point: 3.50 },
  { letter: 'B+', point: 3.25 },
  { letter: 'B', point: 3.00 },
  { letter: 'B-', point: 2.75 },
  { letter: 'C+', point: 2.50 },
  { letter: 'C', point: 2.25 },
  { letter: 'D', point: 2.00 },
  { letter: 'F', point: 0.00 },
]

const newCourse = ref({ name: '', creditHours: null, grade: '' })
const courses = ref([])

const addCourse = () => {
  courses.value.push({ ...newCourse.value })
  newCourse.value = { name: '', creditHours: null, grade: '' }
}

const removeCourse = (index) => {
  courses.value.splice(index, 1)
}

const cgpa = computed(() => {
  if (courses.value.length === 0) return null

  let totalPoints = 0
  let totalCredits = 0

  courses.value.forEach(course => {
    const gradePoint = grades.find(g => g.letter === course.grade)?.point || 0
    totalPoints += gradePoint * course.creditHours
    totalCredits += course.creditHours
  })

  return totalPoints / totalCredits
})

const totalCredits = computed(() => {
  return courses.value.reduce((sum, course) => sum + course.creditHours, 0)
})

const exportAsPDF = async () => {
  const element = document.body
  const canvas = await html2canvas(element)
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF()
  const imgProps = pdf.getImageProperties(imgData)
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  pdf.save('cgpa_calculation.pdf')
}

const exportAsImage = async () => {
  const element = document.body
  const canvas = await html2canvas(element)
  const link = document.createElement('a')
  link.download = 'cgpa_calculation.png'
  link.href = canvas.toDataURL()
  link.click()
}

onMounted(() => {
  // Add any necessary initialization here
})
</script>