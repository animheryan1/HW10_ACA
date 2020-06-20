class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    toString() {
        return this.firstName + " " + this.lastName + " is " + this.gender + " and is " + this.age + " years old";
    }
}

const person1 = new Person("John", "Lenon", "male", 33);
console.log(person1.toString());

class Student extends Person {
    constructor(firstName, lastName, gender, age, programs, year, fee) {
        super(firstName, lastName, gender, age);
        this._programs = programs;
        this._year = year;
        this._fee = fee;
        this.data = programs.reduce((obj, program) => {
            obj[program] = null;
            return obj
        }, {});
    }

    get programs() {
        return this._programs;
    }

    set programs(value) {
        this._programs = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        this._fee = value;
    }

    passExam(program, grade) {
        this.data[program] = grade;
        let passedAll = true;
        for (const grade of Object.values(this.data)) {
            if (grade === null || (grade <= 50)) {
                passedAll = false;
                break;
            }
        }
        if (passedAll) this.year++;
    }

    toString() {
        return super.toString() + " and has following programs: " + this.programs;
    }
}

const student1 = new Student("James", "Bond", "male", 40, ["math", "biology"], 3, 1500);
console.log(student1.data);
student1.passExam("math", 60);
console.log(student1.data);
console.log(student1.year);
student1.passExam("biology", 60);
console.log(student1.data);
console.log(student1.year);
console.log(student1.toString());
console.log(student1.firstName);

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }

    get program() {
        return this._program;
    }

    set program(value) {
        this._program = value;
    }

    get pay() {
        return this._pay;
    }

    set pay(value) {
        this._pay = value;
    }

    toString() {
        return super.toString() + ", teaches " + this.program + " with " + this.pay + " pay";
    }
}

const teacher = new Teacher("Irina", "Armenovna", "female", 70, "ruseren", 80);

console.log(teacher.toString());