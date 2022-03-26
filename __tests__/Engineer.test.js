const Engineer = require("../lib/Engineer");

const employee = new Engineer('Raquel', '1234567', 'email@example.com', 'nsoroma');

test('Can the Employee Role can be returned using getRole()', () => {
  expect(employee.getRole()).toBe('Engineer');
});

test('Can the Employee GitHub User ID can be returned using getGithub()', () => {
  expect(employee.getGithub()).toBe('nsoroma');
});
