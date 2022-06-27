// Write your solution in this file!
const employee = {
    name: 'Steve',
    streetAddress: '31 Goliath'
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, address) {
    const newEmployee = { ...employee };
    newEmployee[streetAddress] = address;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, address) {
    employee[streetAddress] = address;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const newerEmployee = { ...employee };
    delete newerEmployee.name;
    return newerEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}