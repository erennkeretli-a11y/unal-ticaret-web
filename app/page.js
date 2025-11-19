const PHONE_NUMBER = "0551 198 22 78";
const PHONE_LINK = "tel:+905511982278";
const WHATSAPP_LINK =
  "https://wa.me/905511982278?text=Merhaba, sipariş vermek istiyorum.";
const MAP_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=K%C4%B1zlar%20P%C4%B1nar%C4%B1%20Caddesi%20Kulo%C4%9Flu%20Sk%20no%3A2c%2007400%20Alanya%2FAntalya";

export default function Home() {
  return (
    <main className="hero-bg min-h-screen pb-16 text-brandNavy">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-10 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 p-4 shadow-card backdrop-blur-xl">
          <div className="text-lg font-semibold tracking-[0.3em] text-brandBlue sm:text-xl">
            ÜNAL TİCARET
          </div>
          <a
            href={PHONE_LINK}
            className="gradient-border relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-white shadow-card sm:px-5 sm:py-2.5"
            style={{ background: "linear-gradient(135deg, #2ecc71, #27ae60)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a.75.75 0 00.75-.75v-3.6a.75.75 0 00-.648-.743l-4.35-.622a.75.75 0 00-.708.27l-1.7 2.042a11.962 11.962 0 01-6.255-6.255l2.042-1.7a.75.75 0 00.27-.708l-.622-4.35a.75.75 0 00-.743-.648H3a.75.75 0 00-.75.75V6.75z"
              />
            </svg>
            <span>Hemen Ara: {PHONE_NUMBER}</span>
          </a>
        </header>

        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-brandRed/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brandRed">
              IG KONGAZ Yetkili Bayii
            </span>
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold leading-tight text-brandNavy sm:text-4xl lg:text-5xl">
                Alanya'nın En Hızlı Tüp ve Su Servisi
              </h1>
              <p className="max-w-2xl text-base text-brandNavy/80 sm:text-lg">
                Kızlar Pınarı Caddesi ve çevresine dakikalar içinde teslimat. IG
                KONGAZ güvencesiyle tüp ve damacana su ihtiyaçlarınız tek tıkla
                kapınızda.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brandGreen px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:translate-y-[-2px] hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #128c7e, #25d366)" }}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.769.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.496.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M20.52 3.48C18.24 1.2 15.21 0 12 0 5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.17-1.61C7.94 23.45 9.97 24 12 24c6.63 0 12-5.37 12-12 0-3.21-1.2-6.24-3.48-8.52zM12 22.05c-1.9 0-3.76-.51-5.37-1.48l-.39-.23-3.66.96.98-3.56-.25-.37C2.24 15.99 1.8 14.03 1.8 12 1.8 6.49 6.49 1.8 12 1.8c2.7 0 5.23 1.05 7.13 2.95 1.9 1.9 2.95 4.43 2.95 7.13 0 5.51-4.69 10.2-10.08 10.17z" />
                </svg>
                WhatsApp ile Sipariş Ver
              </a>
              <div className="flex items-center gap-3 text-sm text-brandNavy/70">
                <div className="h-10 w-10 rounded-full bg-brandBlue/10 text-brandBlue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="m-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="max-w-[14rem] text-xs font-medium text-brandNavy/80 sm:text-sm">
                  Dakikalar içinde teslimat, güvenilir IG KONGAZ kalitesi.
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden rounded-3xl shadow-card">
            <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/10 via-white to-brandRed/5" />
            <div className="relative grid gap-6 p-6 sm:p-8">
              <div className="flex flex-col gap-4 rounded-2xl bg-white/90 p-5 shadow-inner sm:p-6">
                <div className="flex items-center gap-3 text-brandNavy/80">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brandBlue/15 text-brandBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7h18M5 7l1.5 12h11L19 7M8 7V4h8v3"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-brandBlue">Teslimat</p>
                    <p className="text-sm font-semibold">Alanya genelinde hızlı servis</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "19L Damacana Su",
                      description: "Soğuk ve taze içme suyu, dakikalar içinde kapınızda.",
                    },
                    {
                      title: "12kg IG KONGAZ Mutfak Tüpü",
                      description: "Yetkili bayiden güvenli, dolu ve mühürlü tüp teslimatı.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group flex flex-col justify-between gap-3 rounded-2xl border border-brandBlue/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-lg font-bold text-brandNavy">{item.title}</h3>
                          <span className="rounded-full bg-brandRed/10 px-3 py-1 text-xs font-semibold text-brandRed">
                            Hızlı Teslim
                          </span>
                        </div>
                        <div className="h-28 rounded-xl bg-gradient-to-br from-brandBlue/5 via-white to-brandRed/10 transition group-hover:from-brandBlue/10 group-hover:to-brandRed/15" />
                        <p className="text-sm text-brandNavy/75">{item.description}</p>
                      </div>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brandBlue px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:translate-y-[-2px] hover:shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.6}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25l-6.75 8.25-3.75-3"
                          />
                        </svg>
                        Sipariş Ver
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-brandBlue/10 bg-brandBlue/10 p-5 text-sm font-semibold text-brandNavy/80">
                <p>
                  "ÜNAL TİCARET - IG KONGAZ bayii" güvencesiyle tüp ve su
                  siparişlerinizi hızla ulaştırıyoruz. Güvenli ödeme, güler yüzlü
                  servis ve her gün 08:00'dan itibaren hizmet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="grid gap-6 rounded-2xl border border-white/60 bg-white/80 p-6 shadow-card backdrop-blur-xl sm:grid-cols-[2fr_1fr] sm:items-center">
          <div className="space-y-3 text-sm text-brandNavy/80">
            <p className="text-base font-semibold text-brandNavy">ÜNAL TİCARET - Tüp ve Su Bayii</p>
            <p>
              Adres: Kızlar Pınarı Caddesi, Kuloğlu Sk no:2c, 07400
              Alanya/Antalya.
            </p>
            <p>Çalışma Saatleri: Haftanın her günü 08:00'den itibaren hizmetinizdeyiz.</p>
          </div>
          <div className="flex flex-col gap-3 text-sm sm:items-end">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brandRed px-4 py-2 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.25c1.242 0 2.25-1.008 2.25-2.25S13.242 6.75 12 6.75 9.75 7.758 9.75 9s1.008 2.25 2.25 2.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9c0 7.142-7.5 12-7.5 12S4.5 16.142 4.5 9a7.5 7.5 0 1115 0z"
                />
              </svg>
              Yol Tarifi Al
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brandBlue/20 px-4 py-2 font-semibold text-brandBlue transition hover:bg-brandBlue/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.769.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.496.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M20.52 3.48C18.24 1.2 15.21 0 12 0 5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.17-1.61C7.94 23.45 9.97 24 12 24c6.63 0 12-5.37 12-12 0-3.21-1.2-6.24-3.48-8.52zM12 22.05c-1.9 0-3.76-.51-5.37-1.48l-.39-.23-3.66.96.98-3.56-.25-.37C2.24 15.99 1.8 14.03 1.8 12 1.8 6.49 6.49 1.8 12 1.8c2.7 0 5.23 1.05 7.13 2.95 1.9 1.9 2.95 4.43 2.95 7.13 0 5.51-4.69 10.2-10.08 10.17z" />
              </svg>
              WhatsApp ile İletişim
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
