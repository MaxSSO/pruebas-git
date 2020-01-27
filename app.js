function getCourseTimes(courseMinutes) {
  const courseHours = courseMinutes / 60
  const courseStudyHours = courseHours * 9
  const courseStudyDays = courseStudyHours / 3

  const courseTimes = `
    \r${courseHours.toFixed(2)} horas curso = ${courseMinutes} minutos curso / 60
    \r${courseStudyHours.toFixed(2)} horas estudio = ${courseHours.toFixed(2)} horas curso * 9
    \r${Math.ceil(courseStudyDays)} días estudio ≃ ${courseStudyHours.toFixed(2)} horas estudio / 3
  `

  return courseTimes
}

const courseTimes = getCourseTimes(64)
console.log(courseTimes)