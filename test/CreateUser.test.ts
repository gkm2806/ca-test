import User from "../src/core/entities/User"
import CreateUser from "../src/core/useCases/users/CreateUser"
import UserRepositoryMemory from "../src/infra/repository/UserRepositoryMemory"

test('It should be able to create user', async () => {
  const userRepositoryMemory = new UserRepositoryMemory;
  const createUser = new CreateUser(userRepositoryMemory)
  const user = await createUser.execute('aova', 'senhasecreta', 'a@a.com')
  expect(user.name).toBe("aova")
})