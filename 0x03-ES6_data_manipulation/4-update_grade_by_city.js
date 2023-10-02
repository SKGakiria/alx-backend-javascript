function updateStudentGradeByCity(listStudents, city, newGrades) {
  const cityStudents = listStudents.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const studentGrades = newGrades.filter((grade) => grade.studentId === student.id);
    if (studentGrades.length > 0) {
      return {
        ...student,
        grade: studentGrades[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
