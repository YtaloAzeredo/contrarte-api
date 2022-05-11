import { User } from '@models/User'

test('oi', () => {
  const user = new User()

  user.name = 'yto test'

  expect(user.name).toEqual(process.env.NAME)
})
