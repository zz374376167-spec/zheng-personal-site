import Script from "next/script";

/**
 * Dify (udify.app) 智能助手聊天机器人嵌入组件。
 * 通过 next/script 加载，避免与 React 渲染冲突。
 */
export function DifyChatbot() {
  return (
    <>
      <Script id="dify-chatbot-config" strategy="beforeInteractive">
        {`window.difyChatbotConfig = {
  token: "BicZhCqzauJrRE72",
  baseUrl: "https://udify.app",
  // 该脚本通过 next/script 动态加载，页面 load 事件已触发，
  // 需启用 dynamicScript 让 embed.min.js 立即初始化。
  dynamicScript: true,
  inputs: {
    // You can define the inputs from the Start node here
    // key is the variable name
    // e.g.
    // name: "NAME"
  },
  systemVariables: {
    // user_id: "YOU CAN DEFINE USER ID HERE",
    // conversation_id: "YOU CAN DEFINE CONVERSATION ID HERE, IT MUST BE A VALID UUID",
  },
  userVariables: {
    // avatar_url: "YOU CAN DEFINE USER AVATAR URL HERE",
    // name: "YOU CAN DEFINE USER NAME HERE",
  },
};`}
      </Script>
      <Script
        src="https://udify.app/embed.min.js"
        id="BicZhCqzauJrRE72"
        strategy="afterInteractive"
      />
    </>
  );
}
