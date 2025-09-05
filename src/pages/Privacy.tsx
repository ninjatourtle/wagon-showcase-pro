import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Политика конфиденциальности
              </h1>
              <p className="text-xl text-muted-foreground">
                Действует с 1 января 2025 года
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    1. Общие положения
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую ООО «КБС-ЛОГИСТИК» может получить о Пользователе во время использования сайта компании.
                  </p>
                  <p className="text-muted-foreground">
                    Использование сайта означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    2. Персональные данные пользователей
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    В рамках настоящей Политики под «персональными данными Пользователя» понимаются:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Персональная информация, которую Пользователь предоставляет о себе самостоятельно при регистрации или в процессе использования сайта</li>
                    <li>Данные, которые автоматически передаются сервисам сайта в процессе их использования с помощью установленного на устройстве Пользователя программного обеспечения</li>
                    <li>IP-адрес, информация из cookies, информация о браузере пользователя</li>
                    <li>Данные о времени доступа, адрес запрашиваемой страницы</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    3. Цели сбора персональной информации
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Персональные данные Пользователя используются для следующих целей:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Установления с Пользователем обратной связи, включая направление уведомлений, запросов</li>
                    <li>Определения места нахождения Пользователя для обеспечения безопасности</li>
                    <li>Подтверждения достоверности и полноты персональных данных</li>
                    <li>Предоставления Пользователю эффективной клиентской и технической поддержки</li>
                    <li>Осуществления рекламной деятельности с согласия Пользователя</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    4. Условия обработки персональных данных
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.
                  </p>
                  <p className="text-muted-foreground">
                    Компания принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    5. Права и обязанности сторон
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>Пользователь имеет право:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Получать информацию, касающуюся обработки его персональных данных</li>
                    <li>Требовать уточнения его персональных данных, их блокирования или уничтожения</li>
                    <li>Отозвать согласие на обработку персональных данных</li>
                  </ul>
                  <p className="text-muted-foreground mb-4">
                    <strong>Компания обязуется:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Использовать полученную информацию исключительно для целей, указанных в настоящей Политике</li>
                    <li>Не разглашать персональные данные Пользователя без его согласия</li>
                    <li>Осуществить блокирование или уничтожение персональных данных по требованию Пользователя</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    6. Изменение Политики конфиденциальности
                  </h2>
                  <p className="text-muted-foreground">
                    Компания имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента ее размещения на сайте.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    7. Контактная информация
                  </h2>
                  <p className="text-muted-foreground">
                    По всем вопросам, связанным с Политикой конфиденциальности, вы можете связаться с нами:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-foreground font-semibold">ООО «КБС-ЛОГИСТИК»</p>
                    <p className="text-muted-foreground">Email: info@kbslogistic.ru</p>
                    <p className="text-muted-foreground">Телефон: +7 (495) 157-83-02</p>
                    <p className="text-muted-foreground">Адрес: 115054, г. Москва, Дубининская ул., д. 57, стр. 2, помещ. 12Т</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}