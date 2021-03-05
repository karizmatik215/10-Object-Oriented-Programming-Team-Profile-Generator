const Employee = require('../lib/Employee');

test('Employee Object', () => {
  const employeeTest = new Employee();
  expect(typeof employeeTest).toBe('object');
});

test('Can set name from constructor', () => {
  const testName = 'Jared';
  const employee = new Employee(testName);
  expect(employee.name).toBe(testName);
});

test('Can set ID from constructor', () => {
  const testID = '1';
  const employee = new Employee('Jared', testID);
  expect(employee.id).toBe(testID);
});

test('Can set email from constructor', () => {
  const testEmail = 'jared@fakemail.com';
  const employee = new Employee('Jared', 1, testEmail);
  expect(employee.email).toBe(testEmail);
});

test('getName() method', () => {
  const testValue = 'Jared';
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test('getId() method', () => {
  const testGetId = 1;
  const employee = new Employee('Jared', testGetId);
  expect(employee.getId()).toBe(testGetId);
});

test('getEmail() method', () => {
  const testGetEmail = 'jared@fakemail.com';
  const employee = new Employee('Jared', 1, testGetEmail);
  expect(employee.getEmail()).toBe(testGetEmail);
});

test('getRole() method', () => {
  const testGetRole = 'Employee';
  const employee = new Employee('Jared', 1, 'jared@fakemail.com');
  expect(employee.getRole()).toBe(testGetRole);
});
