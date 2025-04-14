(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/ChatWidget.tsx
  var CHAT_TYPES = {
    MESSENGER: "messenger",
    WHATSAPP: "whatsapp",
    TELEGRAM: "telegram"
  };
  var ChatWidget = class {
    constructor(options) {
      __publicField(this, "chatType");
      __publicField(this, "url");
      this.chatType = options.type;
      this.url = options.url;
    }
    show() {
      try {
        const chatWidgetContainerElement = document.getElementById("chat-widget");
        if (chatWidgetContainerElement) {
          chatWidgetContainerElement.style.position = "absolute";
          chatWidgetContainerElement.style.bottom = "24px";
          chatWidgetContainerElement.style.right = "24px";
          chatWidgetContainerElement.innerHTML = this.getChatTypeHTML();
          this.initializeClickHandlers();
        } else {
          throw "No container with id: chat-widget";
        }
      } catch (e) {
        console.error(e);
      }
    }
    initializeClickHandlers() {
      const chatWidgetBtn = document.getElementById("chat-widget-button");
      if (chatWidgetBtn) {
        chatWidgetBtn.onclick = () => {
          console.log("hello");
          window == null ? void 0 : window.open(this.url, "_blank").focus();
        };
      }
    }
    getChatTypeHTML() {
      switch (this.chatType) {
        case CHAT_TYPES.WHATSAPP:
          return `  
          <div id="chat-widget-button" style="background:#25d366;height:40px;width:40px;border-radius:16px">
            <div style="display:flex;justify-content: center;align-items: center;height: 40px; cursor:pointer;">
              <img width="24px" height="24px" src="https://static.cdnlogo.com/logos/w/29/whatsapp-icon.svg">
            </div>
          </div>
        `;
        case CHAT_TYPES.MESSENGER:
          return "";
        case CHAT_TYPES.TELEGRAM:
          return "";
        default:
          return "";
      }
    }
  };

  // src/index.ts
  window.ChatWidget = ChatWidget;
})();
