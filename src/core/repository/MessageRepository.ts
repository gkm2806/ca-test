import Message from "../entities/Message";

export default interface MessageRepository {
  getMessage(id: string):Promise<Message>;
  sendMessage(text: string, date: Date, id: string):void;
}