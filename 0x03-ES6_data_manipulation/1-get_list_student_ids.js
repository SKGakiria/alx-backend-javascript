const getListStudentIds = (listedStudents) => {
  let listStudentIds = [];
  if (!(listedStudents instanceof Array)) {
    return listStudentIds;
  }
  listStudentIds = listedStudents.map((student) => student.id);
  return listStudentIds;
};

export default getListStudentIds;
