class Employee{
    constructor(name, title, salary, boss){
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }
    bonus(multiplier){
        const bonusVar = this.salary * multiplier;
        return bonusVar;
    }
}
exports.Employee = Employee;
