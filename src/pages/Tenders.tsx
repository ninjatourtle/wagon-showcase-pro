import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Users, FileCheck, TrendingUp, CheckCircle, Award, Building, Phone, Mail, FileText } from "lucide-react";
import konstantinovPhoto from "@/assets/konstantinov.jpg";
import { useToast } from "@/hooks/use-toast";

export default function Tenders() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    inn: "",
    contactPerson: "",
    phone: "",
    email: "",
    category: "",
    experience: "",
    description: "",
    hasLicense: false,
    hasCertificates: false,
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в течение 3 рабочих дней",
    });

    // Reset form
    setFormData({
      companyName: "",
      inn: "",
      contactPerson: "",
      phone: "",
      email: "",
      category: "",
      experience: "",
      description: "",
      hasLicense: false,
      hasCertificates: false,
      agreeTerms: false
    });
  };

  const principles = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Прозрачность",
      description: "Все закупки проводятся на конкурсной основе с публикацией полной документации"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Равные возможности",
      description: "Каждый поставщик имеет равные шансы на победу в тендере при соответствии требованиям"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Четкие критерии",
      description: "Победитель определяется на основе объективных критериев: цена, качество, сроки"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Долгосрочное партнерство",
      description: "Мы заинтересованы в надежных партнерах для постоянного сотрудничества"
    }
  ];

  const requirements = [
    "Наличие всех необходимых лицензий и разрешений",
    "Опыт работы в железнодорожной отрасли не менее 3 лет",
    "Финансовая устойчивость и отсутствие задолженностей",
    "Наличие производственных мощностей или складских помещений",
    "Сертификаты качества на продукцию",
    "Готовность к прохождению аудита"
  ];

  const categories = [
    "Поставка вагонов и платформ",
    "Запасные части и комплектующие",
    "Ремонт и модернизация",
    "Лизинг подвижного состава",
    "Логистические услуги",
    "Техническое обслуживание"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Тендерные закупки
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              КБСЛогистик проводит все закупки на конкурсной основе через собственную систему электронных торгов
            </p>
          </div>

          {/* Info Section */}
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">
                Честные и прозрачные закупки
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Мы работаем только с проверенными поставщиками через нашу внутреннюю базу. 
                Все тендеры проводятся в электронном формате с соблюдением принципов честной конкуренции.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Поставщиков в базе</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">1200+</div>
                  <div className="text-sm opacity-90">Проведенных тендеров</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm opacity-90">Выполненных контрактов</div>
                </div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Принципы нашей работы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-strong transition-all duration-300">
                  <div className="flex justify-center mb-4">{principle.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Procurement Head Contact */}
          <Card className="mb-8 p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src={konstantinovPhoto} 
                alt="Александр Константинов" 
                className="w-32 h-32 rounded-full object-cover shadow-strong"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">Александр Константинов</h3>
                <p className="text-lg text-muted-foreground mb-4">Начальник отдела внутренних закупок</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="tel:+74951578302" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Phone className="h-5 w-5 mr-2" />
                    +7 (495) 157-83-02, доб. 2771
                  </a>
                  <a href="mailto:a.konstantinov@kbslogistic.ru" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Mail className="h-5 w-5 mr-2" />
                    a.konstantinov@kbslogistic.ru
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Procurement Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Николай Довлатов</h3>
                <p className="text-muted-foreground mb-4">Специалист отдела закупок</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+74951578302" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    +7 (495) 157-83-02, доб. 335
                  </a>
                  <a href="mailto:n.dovlatov@kbslogistic.ru" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    n.dovlatov@kbslogistic.ru
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Анна Яковлева</h3>
                <p className="text-muted-foreground mb-4">Специалист отдела закупок</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+74951578302" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    +7 (495) 157-83-02, доб. 348
                  </a>
                  <a href="mailto:a.yakovleva@kbslogistic.ru" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    a.yakovleva@kbslogistic.ru
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Requirements Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Требования к поставщикам</h2>
              <p className="text-muted-foreground mb-6">
                Для участия в наших тендерах поставщик должен соответствовать следующим требованиям:
              </p>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Категории закупок</h2>
              <p className="text-muted-foreground mb-6">
                Мы проводим тендеры по следующим направлениям:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <Card key={index} className="p-4 border-l-4 border-l-primary">
                    <p className="font-medium">{category}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <Card className="max-w-4xl mx-auto p-8 shadow-strong">
            <div className="text-center mb-8">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Стать поставщиком</h2>
              <p className="text-muted-foreground">
                Заполните форму для включения в базу поставщиков КБСЛогистик
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="companyName">Название организации *</Label>
                  <Input
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    placeholder="ООО 'Название'"
                  />
                </div>

                <div>
                  <Label htmlFor="inn">ИНН *</Label>
                  <Input
                    id="inn"
                    required
                    value={formData.inn}
                    onChange={(e) => setFormData({...formData, inn: e.target.value})}
                    placeholder="1234567890"
                    pattern="[0-9]{10,12}"
                  />
                </div>

                <div>
                  <Label htmlFor="contactPerson">Контактное лицо *</Label>
                  <Input
                    id="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    placeholder="Иванов Иван Иванович"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="info@company.ru"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Категория услуг *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Опыт работы в отрасли *</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Выберите опыт" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-1">Менее 1 года</SelectItem>
                      <SelectItem value="1-3">1-3 года</SelectItem>
                      <SelectItem value="3-5">3-5 лет</SelectItem>
                      <SelectItem value="5-10">5-10 лет</SelectItem>
                      <SelectItem value="more-10">Более 10 лет</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Описание компании и услуг</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Расскажите о вашей компании, опыте работы, основных клиентах..."
                  rows={4}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasLicense"
                    checked={formData.hasLicense}
                    onCheckedChange={(checked) => setFormData({...formData, hasLicense: checked as boolean})}
                  />
                  <Label htmlFor="hasLicense" className="cursor-pointer">
                    Имеются все необходимые лицензии и разрешения
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasCertificates"
                    checked={formData.hasCertificates}
                    onCheckedChange={(checked) => setFormData({...formData, hasCertificates: checked as boolean})}
                  />
                  <Label htmlFor="hasCertificates" className="cursor-pointer">
                    Имеются сертификаты качества на продукцию/услуги
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                  />
                  <Label htmlFor="agreeTerms" className="cursor-pointer">
                    Согласен с условиями обработки персональных данных *
                  </Label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  <FileText className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
                <Button type="button" variant="outline" size="lg" className="flex-1">
                  <Mail className="mr-2 h-5 w-5" />
                  Связаться с отделом закупок
                </Button>
              </div>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Остались вопросы?</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+74951578302" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                +7 (495) 157-83-02
              </a>
              <a href="mailto:tender@kbslogistic.ru" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                tender@kbslogistic.ru
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}