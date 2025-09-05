export default function Footer() {
  return (
    <footer className="bg-primary-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              КБСЛогистик
            </h3>
            <p className="text-primary-foreground/80">
              Ваш надежный партнер в сфере железнодорожных перевозок
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Услуги
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Продажа вагонов
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Аренда вагонов
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ремонт и обслуживание
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Компания
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Лицензии
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Партнеры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Контакты
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+7 (495) 157-83-02</li>
              <li>info@kbslogistic.ru</li>
              <li>115054, г. Москва, Дубининская ул., д. 57, стр. 2</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-primary-foreground/60 text-sm mb-4">
            <p>© 2025 КБС Логистик. Все права защищены.</p>
            <p className="mt-2">
              ООО «КБС-ЛОГИСТИК», ИНН: 9725091562, ОГРН: 1227700468192, КПП: 772501001
            </p>
            <p>Адрес: 115054, г. Москва, Дубининская ул., д. 57, стр. 2, помещ. 12Т</p>
            <p>Генеральный директор: Чепец Петр Петрович</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}