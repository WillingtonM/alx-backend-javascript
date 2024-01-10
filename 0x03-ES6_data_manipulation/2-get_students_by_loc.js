export default function getStudentsByLocation(students, city) {
  return students.filter((stdnt) => stdnt.location === city);
}
