import MessageRepository from "../../repository/MessageRepository";

export default class GetMessage {
  constructor(
    private messageRepository:MessageRepository
  ) {}

  execute (text: string) {
    const message = this.messageRepository.getMessage(text)
    return message
  }
}