import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

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
      </main>
      <Footer />
    </div>
  );
}