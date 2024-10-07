let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
function findCommonCourses() {
    const commonCourses = student1Courses.filter(course => student2Courses.includes(course));
    const resultado = "Cursos comunes:" + commonCourses;
    document.getElementById('exercise4').textContent = resultado;
}
findCommonCourses();