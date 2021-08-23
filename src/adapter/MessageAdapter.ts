import Message from "../core/entities/Message";

export default class MessageAdapter {
  static create(text: string, date: Date, id: string){
    return new Message(text, date, id)
  }
}