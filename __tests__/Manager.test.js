const Manager = require("../lib/Manager");

const employee = new Manager('Raquel', '1234567', 'email@example.com','7779311');

test('Can the name be returned using getName()', () => {
    expect(employee.getName()).toBe('Raquel');
});

test('Can the Employee ID can be returned using getId()', () => {
    expect(employee.getId()).toBe('1234567');
});

test('Can the Employee Role can be returned using getEmail()', () => {
  expect(employee.getEmail()).toBe('email@example.com');
});

test('Can the email address can be returned using getOfficeNumber()', () => {
    expect(employee.getOfficeNumber()).toBe('7779311');
});
