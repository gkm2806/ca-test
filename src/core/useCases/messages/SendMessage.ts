import cuid from "cuid";
import MessageRepository from "../../repository/MessageRepository";

export default class SendMessage {
  constructor(
    private messageRepository:MessageRepository
  ) {}

  execute (text: string) {
    const message = this.messageRepository.sendMessage(text, new Date(), cuid())
    return message
  }
}