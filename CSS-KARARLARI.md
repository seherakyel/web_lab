# CSS Kararları

## 1. Breakpoint Seçimi
- **640px ve 1024px** breakpoint'lerini seçtim çünkü bunlar içeriğin düzeninin bozulduğu doğal kırılma noktaları. Cihaz modeline bağlı değil, içerik odaklı bir tercih.
- Mobilde (0–639px) tüm bölümler dikey yığın (column) olarak gösteriliyor. 640px'den itibaren header ve about bölümü yatay düzene (row) geçiyor, proje kartları 2 sütun oluyor. 1024px'den itibaren proje kartları 3 sütuna çıkıyor ve ana içerik genişliği 1200px ile sınırlanıyor.

## 2. Layout Tercihleri
- **Header** için Flexbox seçtim çünkü tek boyutlu bir düzen — logo solda, navigasyon sağda yatay sıralı. Mobilde `flex-direction: column` ile dikey yığına dönüşüyor.
- **Proje kartları** için CSS Grid seçtim çünkü iki boyutlu bir ızgara düzeni gerekiyor. `repeat(auto-fit, minmax(280px, 1fr))` ile tablet boyutunda media query olmadan otomatik responsive grid elde ediyorum; masaüstünde ise `repeat(3, 1fr)` ile sabit 3 sütuna geçiyorum.
- `auto-fit` kullandım çünkü boş sütunlar olduğunda elemanlar genişleyerek alanı dolduruyor. `auto-fill` boş sütunları korurdu ki bu istediğim davranış değil.

## 3. Design Tokens
- **Renk paleti** olarak koyu tema (dark mode) tercih ettim. `#0f172a` (slate-900) arka plan, `#38bdf8` (sky-400) primary renk. Bu kombinasyon WCAG kontrast oranını karşılıyor ve modern bir görünüm sağlıyor.
- **Spacing skalası** 4px taban birimli geometrik artış izliyor: xs(4px), sm(8px), md(16px), lg(24px), xl(32px), 2xl(48px), 3xl(64px). Bu tutarlı bir dikey ritim oluşturuyor.
- **Fluid typography** için `clamp()` değerlerini `rem + vw` karışımıyla belirledim. Örneğin `--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` — minimum 16px altına düşmez (erişilebilirlik), vw sayesinde ekran genişliğiyle orantılı büyür, maksimum 18px'i geçmez. Yalnızca `vw` kullanmaktan kaçındım çünkü tarayıcı zoom'unda vw değişmez ve erişilebilirlik ihlali olur.

## 4. Responsive Stratejiler
- **Mobile-first** yaklaşımı uyguladım: CSS'in temel kuralları mobil (dar ekran) için yazılmış, ardından `min-width: 640px` ve `min-width: 1024px` media query'leri ile büyük ekranlar için kurallar ekleniyor. Bu performans açısından daha iyi çünkü mobil cihazlar yalnızca temel CSS'i yükler.
- Breakpoint'lerde değişen elemanlar: Header düzeni (dikey→yatay), navigasyon yönü (column→row), about bölümü düzeni (dikey→yatay), proje grid sütun sayısı (1→auto-fit→3), section padding'leri, footer düzeni (dikey→yatay), submit butonu genişliği (100%→auto).
- Görseller `max-width: 100%` ve `height: auto` ile her zaman kapsayıcılarına sığıyor. Proje kartlarındaki görseller `object-fit: cover` ile orantılı kırpılıyor.
