import User from '../../src/domain/entity/User';

test('Deve criar um novo usuario', async () => {
  const user = await User.create({
    id: '0373e634-2d03-457e-a24d-2b0c8c3b7c37',
    name: 'Bernardo',
    email: 'bernardo@gmail.com',
    last_activity: 1649073600 * 1000,
    role: 'admin',
    status: 'enabled',
  });
  console.log(user.last_activity);
  expect(user.paying).toBe(true);
});
