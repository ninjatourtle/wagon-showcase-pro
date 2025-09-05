import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { MapPin } from "lucide-react";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Контакты
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
          </div>
        </section>

        {/* Contact Component */}
        <Contact />

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Как нас найти
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg shadow-soft overflow-hidden aspect-video">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb870b2f8d3e0c7a3b8c5a5d5e5f5e5f5e5f5e5f5e5f5e5f5e5f5e5f5e5f5e5f&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Офис КБС Логистик на карте"
                />
              </div>
              <div className="mt-6 p-6 bg-muted rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Наш офис</h3>
                    <p className="text-muted-foreground">
                      115054, г. Москва, Дубининская ул., д. 57, стр. 2, помещ. 12Т
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Ближайшее метро: Павелецкая (5 минут пешком)
                    </p>
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