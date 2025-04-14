const CHAT_TYPES = {
  MESSENGER: 'messenger',
  WHATSAPP: 'whatsapp',
  TELEGRAM: 'telegram',
}
  
export type ChatType = typeof CHAT_TYPES[keyof typeof CHAT_TYPES];
  
export default class ChatWidget {
  chatType: ChatType;

  constructor(chatType: ChatType) {
    this.chatType = chatType
  }  

  show() {
    try {
      const chatWidgetContainerElement = document.getElementById('chat-widget')
      if(chatWidgetContainerElement){
        chatWidgetContainerElement.innerHTML = 'Hello world'
      } else {
        throw('No container with id: chat-widget')
      }
    } catch (e) {
      console.error(e)
    }
  }
}

