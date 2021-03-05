const Manager = require('../lib/Manager');

test('Set office number from constructor', () => {
  const testOfficeNumber = 1;
  const employee = new Manager(
    'Jared',
    1,
    'jared@fakemail.com',
    testOfficeNumber
  );
  expect(employee.officeNumber).toBe(testOfficeNumber);
});

test('getRole() returns Manager', () => {
  const testRole = 'Manager';
  const employee = new Manager('Jared', 1, 'jared@fakemail.com', 1);
  expect(employee.getRole()).toBe(testRole);
});

test('get office number from getOfficeNumber()', () => {
  const testGetOffice = 1;
  const employee = new Manager('Jared', 1, 'jared@fakemail.com', testGetOffice);
  expect(employee.getOfficeNumber()).toBe(testGetOffice);
});
