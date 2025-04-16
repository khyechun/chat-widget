(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/ChatWidget.ts
  var ChatWidget = class {
    constructor(config) {
      __publicField(this, "whatsappUrl");
      __publicField(this, "messengerUrl");
      __publicField(this, "viberUrl");
      __publicField(this, "lineUrl");
      if (config.whatsappUrl) {
        this.whatsappUrl = config.whatsappUrl;
      }
      if (config.messengerUrl) {
        this.messengerUrl = config.messengerUrl;
      }
      if (config.lineUrl) {
        this.lineUrl = config.lineUrl;
      }
      if (config.viberUrl) {
        this.viberUrl = config.viberUrl;
      }
    }
    show() {
      try {
        const chatWidgetContainerElement = document.getElementById("chat-widget");
        if (chatWidgetContainerElement) {
          chatWidgetContainerElement.innerHTML = this.getChatWidgetHTML();
          this.initializeClickHandlers();
        } else {
          console.error("No container with id: chat-widget");
        }
      } catch (e) {
        console.error(e);
      }
    }
    getChatWidgetHTML() {
      return `
      <div id="chat-widget-popup" class="chat-widget-popup--closed">
        <div id="chat-widget-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>
        <p style="color:#FFF;font-size:18px;margin:0;">Hello!</p>
        <p style="color:#FFFFFF;font-size:18px;margin:0;">Contact us through</p>
        <div id="chat-widget-chats">
          <div style="padding:12px">
            <p style="color:#697481;font-size:14px;margin:0;">Chat via</p>
          </div>
          ${this.whatsappUrl ? `
                <div id="chat-widget-whatsapp-container" class="messaging-channel-container" role="button">
                  <div style="display:flex;align-items: center;gap: 8px">
                    <img width="20px" height="20px" src="https://static.cdnlogo.com/logos/w/29/whatsapp-icon.svg">
                    <p style="font-size:14px; margin:0;">WhatsApp</p>
                  </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#697481"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </div>
                ` : ""}
          ${this.messengerUrl ? `
                <div id="chat-widget-messenger-container" class="messaging-channel-container" role="button">
                  <div style="display:flex;align-items: center;gap: 8px">
                    <img width="20px" height="20px" src="https://static.cdnlogo.com/logos/f/52/facebook-messenger.svg">
                    <p style="font-size:14px; margin:0;">Messenger</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#697481"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </div>
                ` : ""}
          ${this.lineUrl ? `
              <div id="chat-widget-line-container" class="messaging-channel-container" role="button">
                <div style="display:flex;align-items: center;gap: 8px">
                  <img width="24px" height="24px" src="https://static.cdnlogo.com/logos/l/29/line-messenger.svg">                        
                  <p style="font-size:14px; margin:0;">Line</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#697481"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
              </div>` : ""}
          ${this.viberUrl ? `
                <div id="chat-widget-viber-container" class="messaging-channel-container" role="button">
                  <div style="display:flex;align-items: center;gap: 8px">
                    <img width="20px" height="20px" src="https://static.cdnlogo.com/logos/v/17/viber.svg"></a>   
                    <p style="font-size:14px; margin:0;">Viber</p>                   
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#697481"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </div>` : ""}
        </div>
        <small style="text-align: center; color:#697481; display:block; position:absolute; bottom:12px; right:80px;">Powered by Bot MD</small>
      </div>
      <div id="chat-widget-button" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
      </div>
    `;
    }
    initializeClickHandlers() {
      const chatWidgetBtn = document.getElementById("chat-widget-button");
      const chatWidgetCloseBtn = document.getElementById(
        "chat-widget-close-button"
      );
      if (chatWidgetBtn) {
        chatWidgetBtn.onclick = () => {
          const chatWidgetPopup = document.getElementById("chat-widget-popup");
          if (!chatWidgetPopup) return;
          const isPopupopened = chatWidgetPopup.classList.contains(
            "chat-widget-popup--opened"
          );
          if (isPopupopened) {
            chatWidgetPopup.classList.replace(
              "chat-widget-popup--opened",
              "chat-widget-popup--closed"
            );
            return;
          }
          chatWidgetPopup.classList.replace(
            "chat-widget-popup--closed",
            "chat-widget-popup--opened"
          );
        };
      }
      if (chatWidgetCloseBtn) {
        chatWidgetCloseBtn.onclick = () => {
          const chatWidgetPopup = document.getElementById("chat-widget-popup");
          if (!chatWidgetPopup) return;
          chatWidgetPopup.classList.add("chat-widget-popup--closed");
          chatWidgetPopup.classList.remove("chat-widget-popup--opened");
        };
      }
      const whatsappButton = document.getElementById("chat-widget-whatsapp-container");
      const messengerButton = document.getElementById("chat-widget-messenger-container");
      const lineButton = document.getElementById("chat-widget-line-container");
      const viberButton = document.getElementById("chat-widget-viber-container");
      if (this.whatsappUrl && whatsappButton) {
        whatsappButton.onclick = () => {
          window.open(this.whatsappUrl, "_blank");
        };
      }
      if (this.lineUrl && lineButton) {
        lineButton.onclick = () => {
          window.open(this.lineUrl, "_blank");
        };
      }
      if (this.messengerUrl && messengerButton) {
        messengerButton.onclick = () => {
          window.open(this.messengerUrl, "_blank");
        };
      }
      if (this.viberUrl && viberButton) {
        viberButton.onclick = () => {
          window.open(this.viberUrl, "_blank");
        };
      }
    }
  };

  // src/index.ts
  window.ChatWidget = ChatWidget;
})();
