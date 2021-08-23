import User from "../entities/User";

export default interface userRepository{
  createUser(name: string, password: string, email: string): Promise<User>
}