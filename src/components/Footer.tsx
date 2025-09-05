import { Link } from "react-router-dom";

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
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Продажа вагонов
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Аренда вагонов
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ремонт и обслуживание
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">
              Компания
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/licenses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Лицензии
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Партнеры
                </Link>
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
              <li className="pt-2">
                <Link to="/contacts" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors underline">
                  Все контакты →
                </Link>
              </li>
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
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}