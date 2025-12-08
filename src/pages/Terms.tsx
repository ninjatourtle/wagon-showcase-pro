import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Terms() {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Условия использования
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
                    Настоящие Условия использования (далее – «Условия») регулируют отношения между ООО «КБС» (далее – «Компания») и пользователем сайта (далее – «Пользователь») при использовании сайта компании и всех связанных с ним сервисов.
                  </p>
                  <p className="text-muted-foreground">
                    Используя сайт, Пользователь соглашается с настоящими Условиями в полном объеме. В случае несогласия с Условиями, Пользователь должен воздержаться от использования сайта.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    2. Предмет соглашения
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Компания предоставляет Пользователю право использования сайта следующими способами:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Просмотр информации, размещенной на сайте</li>
                    <li>Использование функционала сайта для получения информации об услугах Компании</li>
                    <li>Направление запросов и обращений через формы обратной связи</li>
                    <li>Загрузка материалов, предназначенных для свободного использования</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    3. Права и обязанности Пользователя
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>Пользователь имеет право:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Использовать сайт в пределах, установленных настоящими Условиями</li>
                    <li>Получать информацию об услугах Компании</li>
                    <li>Обращаться в службу поддержки по вопросам работы сайта</li>
                  </ul>
                  <p className="text-muted-foreground mb-4">
                    <strong>Пользователь обязуется:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Соблюдать настоящие Условия использования</li>
                    <li>Не нарушать работоспособность сайта</li>
                    <li>Не использовать сайт для распространения незаконной информации</li>
                    <li>Не копировать и не использовать материалы сайта без согласия Компании</li>
                    <li>Предоставлять достоверную информацию при заполнении форм на сайте</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    4. Права и обязанности Компании
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>Компания имеет право:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Изменять содержание и функционал сайта без предварительного уведомления</li>
                    <li>Приостанавливать работу сайта для проведения технических работ</li>
                    <li>Ограничивать доступ к сайту при нарушении Пользователем настоящих Условий</li>
                    <li>Использовать обезличенные данные о действиях Пользователя для улучшения работы сайта</li>
                  </ul>
                  <p className="text-muted-foreground mb-4">
                    <strong>Компания обязуется:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Обеспечивать работоспособность сайта</li>
                    <li>Размещать актуальную информацию об услугах</li>
                    <li>Соблюдать конфиденциальность персональных данных Пользователя</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    5. Интеллектуальная собственность
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Все материалы, размещенные на сайте, включая тексты, изображения, логотипы, товарные знаки, являются объектами интеллектуальной собственности Компании или используются с разрешения правообладателей.
                  </p>
                  <p className="text-muted-foreground">
                    Использование материалов сайта без письменного разрешения Компании запрещено и может повлечь ответственность в соответствии с действующим законодательством.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    6. Ограничение ответственности
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Компания не несет ответственности за:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Любые прямые или косвенные убытки, произошедшие в результате использования или невозможности использования сайта</li>
                    <li>Несанкционированный доступ к персональным данным Пользователя третьими лицами</li>
                    <li>Перерывы в работе сайта, вызванные техническими причинами</li>
                    <li>Действия третьих лиц, связанные с использованием сайта</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    7. Разрешение споров
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Все споры, возникающие в связи с использованием сайта, разрешаются путем переговоров. При невозможности достижения соглашения споры подлежат рассмотрению в суде по месту нахождения Компании в соответствии с действующим законодательством Российской Федерации.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    8. Изменение Условий
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Компания оставляет за собой право в любое время изменять настоящие Условия. Изменения вступают в силу с момента их публикации на сайте.
                  </p>
                  <p className="text-muted-foreground">
                    Продолжение использования сайта после внесения изменений означает согласие Пользователя с новой редакцией Условий.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    9. Контактная информация
                  </h2>
                  <p className="text-muted-foreground">
                    По всем вопросам, связанным с Условиями использования, вы можете связаться с нами:
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}