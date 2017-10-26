var employees = [];

function EmployeeInfo (name, jobtitle, salary) {
    this.Name = name;
    this.Title = jobtitle;
    this.Salary = salary;
    this.EmploymentStatus = "Full Time";
    this.Print = function() {
        console.log("Name: " + this.Name + ", Title: " + this.Title + ", Salary: " + this.Salary + ", Status: " + this.EmploymentStatus);
    }
};

var firstEmployee = new EmployeeInfo ("Joe Smith", "Sr. Director", "50,000k");
// console.log(firstEmployee);
// console.log(firstEmployee.Print())
firstEmployee.EmploymentStatus = "Contract";
//firstEmployee.Print();

var secEmployee = new EmployeeInfo ("Janice Mack", "VP New Business", "100,000k");
// console.log(secEmployee);
// secEmployee.Print();

var thirdEmployee = new EmployeeInfo ("Jolene And", "Direcor", "60,000k");
// thirdEmployee.Print();

//
//employees.push(firstEmployee, secEmployee, thirdEmployee);
employees.push(firstEmployee);
console.log(employees)
