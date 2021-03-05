const Intern = require('../lib/Intern');

test('Set school from constructor', () => {
  const testSchool = '2University';
  const employee = new Intern('John', 5, 'john@fakemail.com', testSchool);
  expect(employee.school).toBe(testSchool);
});

test('getRole() returns Intern', () => {
  const testRole = 'Intern';
  const employee = new Intern('John', 5, 'john@fakemail.com', '2University');
  expect(employee.getRole()).toBe(testRole);
});

test('get school from getSchool()', () => {
  const testGetSchool = '2University';
  const employee = new Intern('John', 5, 'john@fakemail.com', testGetSchool);
  expect(employee.getSchool()).toBe(testGetSchool);
});
