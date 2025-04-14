import { MESSENGER_URL, TELEGRAM_URL, WHATSAPP_URL } from "./constants";

const CHAT_TYPES = {
  MESSENGER: 'messenger',
  WHATSAPP: 'whatsapp',
  TELEGRAM: 'telegram',
}
  
export type ChatType = typeof CHAT_TYPES[keyof typeof CHAT_TYPES];
  
// TODO: OOP properly later
export default class ChatWidget {
  chatType: ChatType;
  text: string;
  phoneNumber: string;
  pageName: string;

  constructor(options: { type: ChatType, text?: string, phoneNumber?: string, pageName?: string }) {
    this.chatType = options.type;

    if(options.text){
      this.text = options.text;
    }
    
    // ew 1
    if (options.phoneNumber){
      this.phoneNumber = options.phoneNumber
    }
    // ew 2
    if (options.pageName){
      this.pageName = options.pageName;
    }
  }

  show() {
    try {
      const chatWidgetContainerElement = document.getElementById('chat-widget');
      if (chatWidgetContainerElement) {
        chatWidgetContainerElement.style.position = 'absolute';
        chatWidgetContainerElement.style.bottom = '24px';
        chatWidgetContainerElement.style.right = '24px';
        chatWidgetContainerElement.innerHTML = this.getChatTypeHTML();
        this.initializeClickHandlers();
      } else {
        throw('No container with id: chat-widget');
      }
    } catch (e) {
      console.error(e);
    }
  }

  initializeClickHandlers() {
    const chatWidgetBtn = document.getElementById('chat-widget-button')
    if (chatWidgetBtn) {
      chatWidgetBtn.onclick = () => {
        (window as any)?.open(this.getChatURL(), '_blank');
      }
    }
  }

  getChatTypeHTML(): string {
    switch(this.chatType) {
      case CHAT_TYPES.WHATSAPP:
        return `
          <div id="chat-widget-button" style="background:#25d366;height:40px;width:40px;border-radius:16px">
            <div style="display:flex;justify-content: center;align-items: center;height: 40px; cursor:pointer;">
              <img width="24px" height="24px" src="https://static.cdnlogo.com/logos/w/29/whatsapp-icon.svg">
            </div>
          </div>
        `;
      case CHAT_TYPES.MESSENGER:
        return '';
      case CHAT_TYPES.TELEGRAM:
        return '';
      default:
        return '';
    }
  }

  getChatURL(): string {
    switch(this.chatType) {
      case CHAT_TYPES.WHATSAPP:
        return `${WHATSAPP_URL}phone=${this.phoneNumber}&text=${this.text}`
      case CHAT_TYPES.MESSENGER:
        return `${MESSENGER_URL}${this.pageName}?text=${this.text}`;
      case CHAT_TYPES.TELEGRAM:
        return `${TELEGRAM_URL}${this.phoneNumber}?text=${this.text}`;
      default:
        return '';
    }
  }
}
