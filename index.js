// Write your solution in this file!

let employee = {
    name: "Sam",
    name: "Sam"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    let obj = { ...employee };
    obj[key] = value;
    return obj;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    let obj = { ...employee };
    delete obj[key];
    return obj;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee[key];
      return employee;
  }
  //updateEmployeeWithKeyAndValue();
  updateEmployeeWithKeyAndValue(employee, "height", "190");
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "jack", "mabinda");
  
