  // Prototype
    // single Responsibility Principle
    function Employee(name, id, salary, department) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.department = department;
      }
    
      // Open/Closed Principle
      Employee.prototype.clone = function () {
        return new Employee(this.name, this.id, this.salary, this.department);
      };
    
      // Single Responsibility Principle
      function createEmployees() {
        const originalEmployee = new Employee(
          document.getElementById('employeeName').value,
          parseInt(document.getElementById('employeeId').value),
          parseFloat(document.getElementById('employeeSalary').value),
          document.getElementById('employeeDepartment').value
        );
    
        const clonedEmployee = originalEmployee.clone();
        const forDatabaseEmployee = originalEmployee.clone();
        forDatabaseEmployee.name = "ForDatabase";
        document.getElementById('originalEmployee').innerHTML = getEmployeeDetails(originalEmployee);
        document.getElementById('clonedEmployee').innerHTML = getEmployeeDetails(clonedEmployee);
        document.getElementById('forDatabaseEmployee').innerHTML = getEmployeeDetails(forDatabaseEmployee);
      }
    
      // Single Responsibility Principle
      function showOriginal() {
        const originalEmployee = new Employee(
          document.getElementById('employeeName').value,
          parseInt(document.getElementById('employeeId').value),
          parseFloat(document.getElementById('employeeSalary').value),
          document.getElementById('employeeDepartment').value
        );
        document.getElementById('originalEmployee').innerHTML = getEmployeeDetails(originalEmployee);
      }
    
      // Single Responsibility Principle
      function showCloned() {
        const originalEmployee = new Employee(
          document.getElementById('employeeName').value,
          parseInt(document.getElementById('employeeId').value),
          parseFloat(document.getElementById('employeeSalary').value),
          document.getElementById('employeeDepartment').value
        );
        const clonedEmployee = originalEmployee.clone();
        document.getElementById('clonedEmployee').innerHTML = getEmployeeDetails(clonedEmployee);
      }
    
      // Single Responsibility Principle
      function showForDatabase() {
        const originalEmployee = new Employee(
          document.getElementById('employeeName').value,
          parseInt(document.getElementById('employeeId').value),
          parseFloat(document.getElementById('employeeSalary').value),
          document.getElementById('employeeDepartment').value
        );
        // Open/Closed Principle
        const forDatabaseEmployee = originalEmployee.clone();
        forDatabaseEmployee.name = "ForDatabase";
        document.getElementById('forDatabaseEmployee').innerHTML = getEmployeeDetails(forDatabaseEmployee);
      }
    
      function getEmployeeDetails(employee) {
        return `
          <p>Name: ${employee.name}</p>
          <p>ID: ${employee.id}</p>
          <p>Salary: ${employee.salary}</p>
          <p>Department: ${employee.department}</p>
        `;
      }