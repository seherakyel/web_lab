import { useState, type FormEvent } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: ContactFormData): FormErrors {
  const newErrors: FormErrors = {};
  if (!data.name.trim()) {
    newErrors.name = "Ad soyad zorunludur.";
  } else if (data.name.trim().length < 2) {
    newErrors.name = "Ad soyad en az 2 karakter olmalıdır.";
  }
  if (!data.email.trim()) {
    newErrors.email = "E-posta zorunludur.";
  } else if (!EMAIL_RE.test(data.email)) {
    newErrors.email = "Geçerli bir e-posta adresi giriniz.";
  }
  if (!data.subject.trim()) {
    newErrors.subject = "Konu zorunludur.";
  }
  if (!data.message.trim()) {
    newErrors.message = "Mesaj zorunludur.";
  } else if (data.message.trim().length < 10) {
    newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
  }
  return newErrors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 1000);
      });
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      window.alert("Gönderim başarısız. Tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <p className="text-green-800 dark:text-green-200 font-medium">Mesajınız başarıyla gönderildi!</p>
        <button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 text-sm text-green-700 dark:text-green-300 underline"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto w-full" noValidate>
      <Input
        id="contact-name"
        name="name"
        label="Ad Soyad"
        placeholder="Adınız Soyadınız"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        autoComplete="name"
      />

      <Input
        id="contact-email"
        name="email"
        label="E-posta"
        type="email"
        placeholder="ornek@mail.com"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
        autoComplete="email"
      />

      <div className="space-y-1">
        <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Konu
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
            errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
        >
          <option value="">Konu seçiniz…</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Öneri</option>
          <option value="isbirligi">İş Birliği</option>
        </select>
        {errors.subject && (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Mesaj
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Mesajınızı yazınız…"
          className={`w-full px-3 py-2 rounded-lg border resize-y bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
            errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.message && (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Gönderiliyor…" : "Gönder"}
      </Button>
    </form>
  );
}
