import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Card from './components/ui/Card';
import Alert from './components/ui/Alert';
import { useState, useEffect } from 'react';

export default function UIKit() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-8 space-y-12 transition-colors">
            <div className="flex justify-between items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    UI Kit
                </h1>
                <div className="flex gap-4 items-center">
                    <a href="/" className="px-3 py-1.5 rounded-md font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Ana Sayfaya Dön</a>
                    <button
                        onClick={toggleTheme}
                        className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2.5 rounded-full shadow-sm hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Tema değiştir"
                    >
                        <span className="dark:hidden" aria-hidden="true">&#9790;</span>
                        <span className="hidden dark:inline" aria-hidden="true">&#9728;</span>
                    </button>
                </div>
            </div>

            {/* --- BUTTONS --- */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-800 dark:text-gray-200">Buttons</h2>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Varyant 1: Renkler</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Varyant 2: Boyutlar</h3>
                        <div className="flex flex-wrap items-end gap-4">
                            <Button variant="primary" size="sm">Small</Button>
                            <Button variant="primary" size="md">Medium</Button>
                            <Button variant="primary" size="lg">Large</Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Disabled Durumu</h3>
                        <div className="flex flex-wrap items-end gap-4">
                            <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">Disabled</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-6 max-w-md">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-800 dark:text-gray-200">Inputs</h2>

                <div className="space-y-6 p-6 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800">
                    {/* Varyant 3: Normal */}
                    <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Normal / Default</h3>
                        <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
                    </div>

                    {/* Varyant 4: Hatalı */}
                    <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Hata Durumu</h3>
                        <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" defaultValue="Geçersiz Veri" />
                    </div>

                    {/* Varyant 5: Help text */}
                    <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Yardım Metni</h3>
                        <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin." placeholder="mail@example.com" />
                    </div>

                    {/* Varyant 6: Disabled */}
                    <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Devre Dışı</h3>
                        <Input id="ui-dis" label="Disabled Input" disabled value="Düzenlenemez" />
                    </div>
                </div>
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-800 dark:text-gray-200">Cards</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Varyant 7: Elevated */}
                    <Card variant="elevated" title="Elevated Card">
                        <p className="text-gray-600 dark:text-gray-400">Gölge ile yükseltilmiş kart. İçeriğe derinlik katmak için kullanılır.</p>
                    </Card>

                    {/* Varyant 8: Outlined */}
                    <Card variant="outlined" title="Outlined Card">
                        <p className="text-gray-600 dark:text-gray-400">Çerçeveli kart. Daha sade, sınırları belirgin bir görünüm sunar.</p>
                    </Card>

                    {/* Varyant 9: Filled */}
                    <Card variant="filled" title="Filled Card">
                        <p className="text-gray-600 dark:text-gray-400">Dolgulu arka plan. Arka planla hafif bir kontrast yaratarak ayrışır.</p>
                    </Card>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-6 max-w-2xl">
                <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 text-gray-800 dark:text-gray-200">Alerts</h2>

                <div className="space-y-4">
                    {/* Varyantlar: Info, Success, Warning, Error */}
                    <Alert variant="info" title="Bilgi" dismissible>
                        Kullanıcıya standart bilgilendirme mesajı vermek için kullanılır.
                    </Alert>

                    <Alert variant="success" title="Başarılı">
                        İşlem başarıyla tamamlandığında kullanıcıyı onaylamak için gösterilir.
                    </Alert>

                    <Alert variant="warning" title="Uyarı" dismissible>
                        Dikkat edilmesi gereken, kalıcı olabilecek durumlarda kullanılır.
                    </Alert>

                    <Alert variant="error" title="Hata" dismissible>
                        Sistem hatalarında, doğrulama sorunlarında kırmızı vurguyla gösterilir.
                    </Alert>
                </div>
            </section>
        </div>
    );
}
