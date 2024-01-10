export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((elmnt) => elmnt.location === city)
    .map((person) => {
      const marks = newGrades.filter((elmnt) => elmnt.studentId === person.id);
      const grd = marks.length ? marks[0].grd : 'N/A';
      return {
        ...person,
        grd,
      };
    });
}
