// Code 普通代码
//function greeter(person){
//    return 'Hello, '+person;
//}
//var user = 'Rui';
//document.body.innerHTML = greeter(user);
// TS代码？
//function greeter(person: string) {
//    return "Hello, " + person;
//} 
//var user = '12'
//document.body.innerHTML = greeter(user); 
// TS
//interface Person {
//    firstName: string;
//    lastName: string;
//}
//function greeter(person: Person) {
//    return 'Hello, '+person.firstName + ' ' + person.lastName; 
//}
//var user = {firstName: 'Huang', lastName: 'Rui'}
//document.body.innerHTML = greeter(user)
// Class
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('Rui', 'L', 'User');
document.body.innerHTML = greeter(user);
