import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку и наши специалисты свяжутся с вами в течение часа
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Отправить запрос
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-background"
                />
                <Input 
                  placeholder="Телефон" 
                  type="tel"
                  className="bg-background"
                />
              </div>
              <Input 
                placeholder="Email" 
                type="email"
                className="bg-background"
              />
              <Textarea 
                placeholder="Сообщение" 
                className="min-h-[120px] bg-background"
              />
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
              >
                Отправить заявку
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Контактная информация
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Телефон</p>
                  <p className="text-muted-foreground">+7 (495) 157-83-02</p>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">info@kbslogistic.ru</p>
                  <p className="text-muted-foreground">sales@kbslogistic.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Адрес</p>
                  <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                  <p className="text-muted-foreground">Бизнес-центр "Транспорт"</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Режим работы</p>
                  <p className="text-muted-foreground">Пн-Пт: 09:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: по договоренности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}