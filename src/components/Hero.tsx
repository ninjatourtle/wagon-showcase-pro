import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronRight, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-train.jpg";
import logo from "@/assets/logo.png";
export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Отправка формы
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время"
    });

    // Очистка формы и закрытие модального окна
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
    setIsModalOpen(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  return <>
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Железнодорожные вагоны" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fadeInUp">
            <img 
              src={logo} 
              alt="КБС-Логистик" 
              className="h-20 md:h-24 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Надежный поставщик железнодорожных вагонов всех типов для грузовых перевозок по всей России
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-strong transition-all hover:scale-105" onClick={() => setIsModalOpen(true)}>
                <Phone className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-6 text-lg transition-all" onClick={() => navigate("/catalog")}>
                Каталог вагонов
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Получить консультацию</DialogTitle>
            <DialogDescription>
              Оставьте заявку и наши специалисты свяжутся с вами в течение часа
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input id="name" placeholder="Ваше имя" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input id="phone" type="tel" placeholder="+7 (999) 999-99-99" value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@mail.ru" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea id="message" placeholder="Опишите ваш вопрос или потребность" className="min-h-[100px]" value={formData.message} onChange={handleInputChange} />
            </div>
            <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold">
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>;
}