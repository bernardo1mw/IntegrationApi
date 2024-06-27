import axios from 'axios';

test('Deve testar o endpoint /users', async () => {
  const response = await axios.get('http://localhost:3001/users');
  const output = response.data;
  expect(output.length).toBe(11);
});

test('Deve testar o retorno de um usuario com email ofuscado', async () => {
  const response = await axios.get('http://localhost:3001/users');
  const output = response.data;
  console.log(output);
  const [gmailUser] = output.filter((user) => {
    return user.id == '5fb75748-efa6-4d48-9930-14289d87466f';
  });
  expect(gmailUser.email).toBe('ky****se@gmail.com');
});
