const Employee = require("../lib/Employee");

const employee = new Employee('Raquel', '1234567', 'email@example.com');

test('Can the name be returned using getName()', () => {
    expect(employee.getName()).toBe('Raquel');
});

test('Can the Employee ID can be returned using getId()', () => {
    expect(employee.getId()).toBe('1234567');
});

test('Can the email address can be returned using getEmail()', () => {
    expect(employee.getEmail()).toBe('email@example.com');
});
