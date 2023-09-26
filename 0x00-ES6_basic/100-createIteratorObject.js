export default function createIteratorObject(report) {
   let employee = [];
   for (let [deprts, empls] of Object.entries(report.allEmployees)){
        for (let emp of empls){
            employee.push(emp);
        }
   }
   return employee;
}
