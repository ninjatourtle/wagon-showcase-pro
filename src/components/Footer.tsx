import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Footer() {
  return <footer className="bg-primary-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="КБС" className="h-12 mb-4" />
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
    </footer>;
}