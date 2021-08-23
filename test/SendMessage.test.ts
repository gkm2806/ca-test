import GetMessage from "../src/core/useCases/messages/getMessage";
import SendMessage from "../src/core/useCases/messages/SendMessage";
import MessageRepositoryPg from "../src/infra/database/MessageRepositoryPg";
import MessageRepositoryMemory from "../src/infra/repository/MessageRepositoryMemory";

test("Should send message", async() => {
  const messageRepository = new MessageRepositoryMemory();
  const sendMessage = new SendMessage(messageRepository);
  await sendMessage.execute('Hello Potato');

  expect(messageRepository.messages[1].text).toBe('Hello Potato');
})

test("Should get message", async() => {
  const messageRepositoryMemory = new MessageRepositoryMemory();
  const getMessage = new GetMessage(messageRepositoryMemory);
  const message = await getMessage.execute('Hello Potato First');
  expect(message.id).toBe('1');
})


test("Should send message on database", async() => {
  const messageRepository = new MessageRepositoryPg();
  const sendMessage = new SendMessage(messageRepository);
  await sendMessage.execute('Hello Potato');
  
  const messageOnDb = await messageRepository.getMessage('Hello Potato');

  expect(typeof messageOnDb).toBe('Message');
})
