const {Employee} = require("./Employee");
console.log(Employee);
class Manager extends Employee {
    constructor(name, title, salary, boss = null, numEmployees = null){
        super(name, title, salary, boss);
        this.numEmployees = numEmployees;
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

    bonus(multiplier){
        const bonusVar = Manager.totalSubsalary(this.numEmployees) * multiplier;
        return bonusVar
    }
}

const hobbes = new Manager(`Hobbes`, `Founder`, 1000000, null, ['Hobbes', `Calvin`, `Susie`, `Lily`, `Clifford`]);
const clifford = new Employee(`Clifford`, `TA`, 90000, `Susie`);
const susie = new Manager(`Susie`, `TA Manager`, 100000, `Calvin`, [`Clifford`, `Lily`, `Susie`]);
const lily = new Employee(`Lily`, `TA`, 90000, `Susie`);
const calvin = new Manager(`Calvin`, `Director`, 130000, `Hobbes`, [`Lily`, `Susie`, `Clifford`, `Calvin`]);

console.log(hobbes.bonus(0.05)); // 70500
console.log(calvin.bonus(0.05)); // 20500
console.log(susie.bonus(0.05)); // 14000
console.log(lily.bonus(0.05)); // 4500
console.log(clifford.bonus(0.05)); // 4500
