export default function createIteratorObject(report) {
  const employee = [];
  // eslint-disable-next-line no-unused-vars
  for (const [deprts, empls] of Object.entries(report.allEmployees)) {
    for (const emp of empls) {
      employee.push(emp);
    }
  }
  return employee;
}
