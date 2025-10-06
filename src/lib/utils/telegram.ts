type FormData = {
  name: string;
  contact: string;
  message?: string;
  package?: string;
};

type TelegramResponse = {
  success: boolean;
  message: string;
};

/**
 * Отправка данных формы в Telegram бот
 */
export async function sendToTelegram(formData: FormData): Promise<TelegramResponse> {
  const BOT_TOKEN: string = import.meta.env.PUBLIC_TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE';
  const YOUR_USER_ID: string = import.meta.env.PUBLIC_TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID_HERE';

  if (BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || YOUR_USER_ID === 'YOUR_CHAT_ID_HERE') {
    console.warn('⚠️ Telegram bot credentials not configured! Check .env file.');
    if (import.meta.env.DEV) {
      console.log('📋 Form data that would be sent:', formData);
      return {
        success: true,
        message: '[DEV MODE] Заявка отправлена (только в консоль)',
      };
    }
    return {
      success: false,
      message: 'Telegram бот не настроен. Напишите напрямую: @svobodinaphoto',
    };
  }

  let messageText = '🎨 <b>Новая заявка на фотосессию!</b>\n\n';
  messageText += `👤 <b>Имя:</b> ${escapeHtml(formData.name)}\n`;
  messageText += `📱 <b>Контакт:</b> ${escapeHtml(formData.contact)}\n`;

  if (formData.package) {
    messageText += `📦 <b>Пакет:</b> ${escapeHtml(formData.package)}\n`;
  }

  if (formData.message?.trim()) {
    messageText += `\n💬 <b>Сообщение:</b>\n${escapeHtml(formData.message)}\n`;
  }

  messageText += `\n⏰ <b>Дата:</b> ${new Date().toLocaleString('ru-RU', {
    timeZone: 'Asia/Yekaterinburg',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })}`;

  const siteUrl: string = import.meta.env.PUBLIC_SITE_URL || 'https://promo.svobodinaphoto.ru';
  messageText += `\n\n🌐 <a href="${siteUrl}">Перейти на сайт</a>`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: YOUR_USER_ID,
        text: messageText,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const data: { ok: boolean; [key: string]: any } = await response.json();

    if (data.ok) {
      return {
        success: true,
        message: 'Заявка успешно отправлена!',
      };
    } else {
      console.error('Telegram API error:', data);
      return {
        success: false,
        message: 'Ошибка отправки. Попробуйте позже или напишите напрямую в Telegram.',
      };
    }
  } catch (error) {
    console.error('Network error:', error);
    return {
      success: false,
      message: 'Ошибка соединения. Проверьте интернет или напишите напрямую в Telegram.',
    };
  }
}

/**
 * Экранирование HTML для безопасности
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Получение chat_id для настройки бота
 */
export async function getChatId(botToken: string): Promise<number | null> {
  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/getUpdates`);
    const data: { ok: boolean; result: any[] } = await response.json();

    if (data.ok && data.result.length > 0) {
      const lastUpdate = data.result[data.result.length - 1];
      if (lastUpdate.message?.chat?.id) {
        return lastUpdate.message.chat.id;
      }
    }

    return null;
  } catch (error) {
    console.error('Error getting chat_id:', error);
    return null;
  }
}
