import User from "../../core/entities/User";
import userRepository from "../../core/repository/UserRepository";

export default class UserRepositoryMemory implements userRepository {
  users: User[] = []

  createUser(name: string, password: string, email: string): Promise<User> {
    const user = new User(name, password, email);
    return Promise.resolve(user);
  }
}