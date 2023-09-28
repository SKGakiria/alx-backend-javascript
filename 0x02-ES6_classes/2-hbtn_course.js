export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(nName) {
    if (typeof nName !== 'string') throw TypeError('Name must be a string');
    this._name = nName;
  }

  get length() {
    return this._length;
  }

  set length(nLength) {
    if (typeof nLength !== 'number') throw TypeError('Length must be a number');
    this._length = nLength;
  }

  get students() {
    return this._students;
  }

  set students(nStudents) {
    if (
      !Array.isArray(nStudents)
      || nStudents.every((nStudent) => typeof nStudent !== 'string')
    ) throw TypeError('Students must be an array of strings');

    this._students = nStudents;
  }
}
