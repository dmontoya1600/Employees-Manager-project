const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, title, salary, boss, numEmployees){
        super(name, title, salary, boss);
        this.numEmployees = numEmployees;
    }
    bonus(multiplier){
        const bonusVar = totalSubsalary(this.numEmployees) * multiplier;
        return bonusVar
    }
    static totalSubsalary(employees){
        let totalsal = 0
        const totalSalary = employees.forEach(function(el){
            if(el.name === this.name){
                totalsal += el.salary
            } else if(el.boss === this.name){
                totalsal += el.salary
            }
        })
        return totalsal
    }
}


