import cuid from "cuid";
import MessageAdapter from "../../adapter/MessageAdapter";
import Message from "../../core/entities/Message";
import MessageRepository from "../../core/repository/MessageRepository";
import db from "../database";

export default class MessageRepositoryPg implements MessageRepository {
  async getMessage(id: string): Promise<Message> {
    const message = await db.oneOrNone("SELECT * FROM messages WHERE text = $1", id)
    return MessageAdapter.create(message.text, message.date, message.id)
  }
  async sendMessage(text: string, date: Date, id: string):Promise<void> {
    await db.oneOrNone(
      "INSERT INTO messages (id, text, date) VALUES ($1, $2, $3)", [id, text, date]
    )
  }

}