import Email from '../../src/domain/value-objects/Email';

test('Deve criar um email válido', () => {
  const email = new Email('teste@gmail.com');
  expect(email.getEmail()).toBe('teste@gmail.com');
});

test('Deve criar um email inválido', () => {
  expect(() => {
    new Email('teste@gmail');
  }).toThrow(new Error('Invalid Email'));
});

test('Deve ofuscar um email', () => {
  const email = new Email('teste@gmail.com');
  expect(email.getObfuscatedEmail()).toBe('te****te@gmail.com');
});
