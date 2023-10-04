interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mary",
  lastName: "Knight",
  age: 22,
  location: "Atlanta",
};

const student2: Student = {
  firstName: "Bruce",
  lastName: "Lawon",
  age: 28,
  location: "New Jersey",
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const tbl: HTMLTableElement = document.createElement("table");
const tblHead: HTMLTableSectionElement = document.createElement("thead");
const tblBody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
tbl.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tblBody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

tbl.append(tblBody);
body.append(tbl);
