import UserRepository from "../../repository/UserRepository";

export default class CreateUser {
  constructor(
    private userRepository:UserRepository
  ) {}

  execute (name: string, password: string, email: string) {
    const user = this.userRepository.createUser(name, password, email)
    return user
  }
}