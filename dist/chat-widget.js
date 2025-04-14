var ChatWidget = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    default: () => index_default
  });

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
  var index_default = ChatWidget;
  return __toCommonJS(index_exports);
})();
