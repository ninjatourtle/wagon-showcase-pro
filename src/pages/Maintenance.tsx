import { Wrench, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="КБС-Логистик" 
            className="h-20 w-auto"
          />
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="relative bg-primary/10 p-8 rounded-full border-2 border-primary/20">
              <Wrench className="h-20 w-20 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Технические работы
          </h1>
          <p className="text-xl text-muted-foreground">
            Сайт временно недоступен
          </p>
        </div>

        {/* Description */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-soft space-y-4">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Clock className="h-5 w-5 text-primary" />
            <p className="text-base">
              Мы проводим плановое техническое обслуживание для улучшения работы сервиса
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Приносим извинения за временные неудобства. Сайт скоро вернётся в работу.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-soft space-y-4">
          <h2 className="text-lg font-semibold text-foreground">
            Свяжитесь с нами
          </h2>
          
          <a 
            href="mailto:info@kbslogistic.ru"
            className="flex items-center justify-center gap-2 p-4 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/20"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">info@kbslogistic.ru</span>
          </a>
        </div>

        {/* Back to Home Button */}
        <div className="pt-4">
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Вернуться на главную
            </Button>
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-muted-foreground pt-8">
          © {new Date().getFullYear()} КБС-Логистик. Все права защищены.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
