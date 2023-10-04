var student1 = {
    firstName: "Mary",
    lastName: "Knight",
    age: 22,
    location: "Atlanta"
};
var student2 = {
    firstName: "Bruce",
    lastName: "Lawon",
    age: 28,
    location: "New Jersey"
};
var studentsList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tblHead = document.createElement("thead");
var tblBody = document.createElement("tbody");
var rowHead = thead.insertRow(0);
var cell1Head = rowHead.insertCell(0);
var cell2Head = rowHead.insertCell(1);
cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
tbl.append(thead);
studentsList.forEach(function (student) {
    var row = tblBody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
tbl.append(tblBody);
body.append(tbl);
