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
// class Student{
//     fullName: string;
//     constructor(public firstName,public middleInitial, public lastName){
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person{
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person){
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = new Student('Rui', 'L', 'User')
// document.body.innerHTML = greeter(user)


// let ass : Array<number>= [1,2,3];
// let lisft: number[] = [1, 2, 3];
// let li1st1: string[] = ['1',' 2',' 3'];
// let haa: [string,number];

	
// enum Color {Red=1, Green=5, Blue}
// let c: Color = Color.Green;

// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2];

// let list: any[] = [1, true, "free"];
// list[1] = 100;

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

