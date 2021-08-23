import cuid from "cuid";
import Message from "../../core/entities/Message";
import MessageRepository from "../../core/repository/MessageRepository";

export default class MessageRepositoryMemory implements MessageRepository {
  messages: Message[] = [ new Message("Hello Potato First", new Date(), '1') ];
  
  getMessage(text: string): Promise<Message> {
    const message = this.messages.find(message => message.text === text)
    return Promise.resolve(message);
  }

  sendMessage(text: string, date: Date): Promise<Message> {
    const newMessage = new Message(text, date, cuid());
    this.messages.push(newMessage)
    return Promise.resolve(newMessage);
  }
}