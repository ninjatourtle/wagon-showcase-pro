import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TelegramRequest {
  formType: string;
  data: Record<string, any>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, data }: TelegramRequest = await req.json();
    
    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!botToken || !chatId) {
      throw new Error("Telegram credentials not configured");
    }

    let message = "";
    
    if (formType === "contact") {
      message = `🔔 *Новая заявка с формы обратной связи*\n\n` +
                `👤 *Имя:* ${data.name}\n` +
                `📧 *Email:* ${data.email}\n` +
                `📱 *Телефон:* ${data.phone || "Не указан"}\n` +
                `💬 *Сообщение:*\n${data.message}`;
    } else if (formType === "tender") {
      message = `🔔 *Новая заявка на участие в тендере*\n\n` +
                `🏢 *Организация:* ${data.companyName}\n` +
                `🔢 *ИНН:* ${data.inn}\n` +
                `👤 *Контактное лицо:* ${data.contactPerson}\n` +
                `📱 *Телефон:* ${data.phone}\n` +
                `📧 *Email:* ${data.email}\n` +
                `📋 *Категория:* ${data.category}\n` +
                `📊 *Опыт:* ${data.experience}\n` +
                `📝 *Описание:* ${data.description || "Не указано"}\n\n` +
                `✅ *Лицензии:* ${data.hasLicense ? "Есть" : "Нет"}\n` +
                `✅ *Сертификаты:* ${data.hasCertificates ? "Есть" : "Нет"}`;
    }

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error("Telegram API error:", result);
      throw new Error(`Telegram API error: ${result.description || "Unknown error"}`);
    }

    console.log("Message sent to Telegram successfully:", result);

    return new Response(
      JSON.stringify({ success: true, message: "Заявка отправлена" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-telegram function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
