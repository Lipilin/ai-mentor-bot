export const textsConfig = {
    BACK_TEXT: `Вернуться Назад`,
    MAIN_MENU: `
    <pre>
    <b>🤖 AI-Ментор Eglinik Courses</b>
    
    Ваш персональный помощник по курсам!
    
    <b>✨ Возможности:</b>
    • 📖 Задать вопрос по любому курсу
    • 💡 Докупить новые токены для запросов!
    
    <b>🎯 Меню:</b>
    </pre>
      `,
    ACCOUNT_PAGE: (ctx) => `
      <pre>
      👤  ПРОФИЛЬ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━
      Имя    │ ${ctx.session.user.name}
      Баллы  │ ${ctx.session.user.tokens} ток.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━
      </pre>
        `
}