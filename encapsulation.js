class Student {
    constructor() {
        this._name = "Yash";
        this._age = 20;
        this._grade = 100;
    }

    // Method to display student details
    displayInfo() {
        console.log(`Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`);
    }

    // Getter and Setter for Name
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    // Getter and Setter for Age
    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    // Getter and Setter for Grade
    get grade() {
        return this._grade;
    }

    set grade(newGrade) {
        this._grade = newGrade;
    }
}

const student1 = new Student();
student1.displayInfo();          
student1.name = 'Kabir';
student1.age = 21;
student1.grade = 99
student1.displayInfo();          
