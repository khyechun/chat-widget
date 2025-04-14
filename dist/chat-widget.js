var ChatWidget = (() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/ChatWidget.ts
  var ChatWidget = class {
    constructor(chatType) {
      __publicField(this, "chatType");
      this.chatType = chatType;
    }
    show() {
      try {
        const chatWidgetContainerElement = document.getElementById("chat-widget");
        if (chatWidgetContainerElement) {
          chatWidgetContainerElement.innerHTML = "Hello world";
        } else {
          throw "No container with id: chat-widget";
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  // src/index.ts
  window.ChatWidget = ChatWidget;
})();
