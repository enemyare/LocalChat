type IMessage = {
  id: number,
  text: string,
  from_id: number,
  to_id: number,
  reply_id: number
}

class Message implements IMessage{
  public id
  public text
  public from_id
  public to_id
  public reply_id

  constructor(id: number, text: string, from_id: number, to_id: number, reply_id: number) {
    this.id = id
    this.text = text
    this.from_id = from_id
    this.to_id = to_id
    this.reply_id = reply_id
  }
}

export default  Message