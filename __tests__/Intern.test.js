const Intern = require("../lib/Intern");
const employee = new Intern('Raquel', '1234567', 'email@example.com', 'Hampton University');

test('Can the Intern role be returned using getRole()', () => {
  expect(employee.getRole()).toBe('Intern');
});

test('Can the School be returned using getSchool()', () => {
  expect(employee.getSchool()).toBe('Hampton University');
});