const Employee = require("./Employee");

class Manager extends Employee {
    constructor(numEmployees){
        super(name, title, salary, boss);
        this.numEmployees = numEmployees;
    }
    static bonus(multiplier){
        const bonusVar = (this.salary * this.numEmployees) * multiplier;
        Employee.salary;
    }
    static sumOfSalary(){

    }
}
