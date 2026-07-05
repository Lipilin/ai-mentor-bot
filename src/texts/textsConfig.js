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
        `,
    MENTOR_PAGE_TEXT: `Задайте вопрос по любому из курсов Eglinik Courses`, 
    START_PAGE_TEXT: (ctx) => `Привет, ${ctx.from.first_name} я бот AI-ментор! Задавай любые вопросы по курсам Eglinik Cources!`,
    MENTOR_PAGE_BLOCK_ERROR: `К сожалению у вас не осталось токенов, но вы можете докупить их в разделе покупки запросов`,
    PAYMENT_BUTTON: `Купить Дополнитльные Запросы`,
    ACCOUNT_BUTTON: `Аккаунт`, 
    MENTOR_BUTTON: `Обратиться к Ментору`,
    MAIN_MENU_BUTTOTN: `Основное Меню`, 
    MENTOR_PAGE_PROCESS_ERROR: `К сожалению Ментор сейчас сликшом занят, обратитесь позже`,
    GENERAL_ERROR_MESSAGE: `В Менторе возникла непредвиденная ошибка, перезупастите бота написав <b>/start</b>`, 
    ENTER_MENTOR_PAGE_WARNING: `Пожалуйста войдите в раздел общения с AI ментором, чтобы задать вопрос`, 
    PAYMENT_SUCCESS: `Вы приобрели токены для вопросов Ментору! Теперь вы можете обратиться к нему!`, 
    CONTINUE_MENTOR: `Задайте еще вопрос, если хотите продолжить текущий диалог`
}