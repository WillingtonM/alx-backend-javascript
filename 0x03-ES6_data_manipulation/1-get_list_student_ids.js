export default function getListStudentIds(array) {
  if (Array.isArray(array)) return array.map((elmnt) => elmnt.id);
  return [];
}
