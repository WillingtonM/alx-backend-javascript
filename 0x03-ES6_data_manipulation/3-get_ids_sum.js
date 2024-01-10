export default function getStudentIdsSum(list) {
  return list.reduce((accumulator, currentVal) => accumulator + currentVal.id, 0);
}
