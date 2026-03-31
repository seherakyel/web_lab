import ContactForm from "../forms/ContactForm";
import Card from "../ui/Card";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4" aria-labelledby="contact-heading">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            İletişim
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Kontrollü form ile mesaj gönderebilirsin; alanlar doğrulanır.
          </p>
        </div>

        <Card variant="outlined" className="p-4 sm:p-6 border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-gray-900">
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}
