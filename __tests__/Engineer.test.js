const Engineer = require('../lib/Engineer');

test('Can set github account', () => {
  const testGithubAccount = 'randomusername';
  const employee = new Engineer(
    'Alec',
    2,
    'alec@fakemail.com',
    testGithubAccount
  );
  expect(employee.github).toBe(testGithubAccount);
});

test('getRole() method should return Engineer', () => {
  const testRole = 'Engineer';
  const employee = new Engineer(
    'Alec',
    2,
    'alec@fakemail.com',
    'randomusername'
  );
  expect(employee.getRole()).toBe(testRole);
});

test('getGithub() method should get username', () => {
  const testGitHubUser = 'randomusername';
  const employee = new Engineer('Alec', 2, 'alec@fakemail.com', testGitHubUser);
  expect(employee.getGithub()).toBe(testGitHubUser);
});
