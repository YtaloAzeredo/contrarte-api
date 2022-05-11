import { User } from '@models/User'

test('oi', () => {
  const user = new User()

  user.name = 'yto'

  expect(user.name).toEqual('yto')
})
