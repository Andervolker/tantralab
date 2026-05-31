import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Океан ощущений",
  description: "Политика конфиденциальности и обработки персональных данных сообщества «Океан ощущений».",
};

const sectionTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.4rem",
  fontWeight: 400,
  color: "rgba(230,238,250,0.92)",
} as const;

export default function PrivacyPage() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A1128 0%, #101F42 50%, #0A1128 100%)",
        color: "rgba(230,238,250,0.7)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Ocean ambient depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none" style={{ background: "rgba(0,119,182,0.16)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(31,64,150,0.16)" }} />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-12 transition-opacity hover:opacity-70"
          style={{ color: "rgba(0,180,216,0.7)" }}
        >
          ← На главную
        </Link>

        {/* Title */}
        <h1
          className="mb-3 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300,
            background: "linear-gradient(135deg, #E6EEFA, #b8d4f0, #7eb8e8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Политика конфиденциальности
        </h1>
        <p className="text-xs mb-12" style={{ color: "rgba(0,180,216,0.55)" }}>
          Последнее обновление: {dateStr}
        </p>

        <div className="space-y-9 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
          <section>
            <h2 className="mb-3" style={sectionTitle}>1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности регулирует порядок обработки и использования
              персональных данных пользователей сайта сообщества{" "}
              <strong style={{ color: "rgba(230,238,250,0.9)" }}>«Океан ощущений»</strong> (далее — «Оператор»).
            </p>
            <p className="mt-3">
              Используя сайт и заполняя формы обратной связи, вы подтверждаете своё согласие с
              условиями настоящей Политики.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={sectionTitle}>2. Какие данные мы собираем</h2>
            <p>Оператор собирает следующие персональные данные, которые вы предоставляете добровольно:</p>
            <ul className="mt-3 space-y-1.5 ml-4">
              <li>• <strong style={{ color: "rgba(230,238,250,0.85)" }}>Имя</strong> — для обращения к вам при связи;</li>
              <li>• <strong style={{ color: "rgba(230,238,250,0.85)" }}>Телефон / Telegram</strong> — для записи на практику или мероприятие;</li>
              <li>• <strong style={{ color: "rgba(230,238,250,0.85)" }}>Цель визита</strong> — при заполнении интерактивного квиза.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={sectionTitle}>3. Цели обработки данных</h2>
            <p>Собранные данные используются исключительно для:</p>
            <ul className="mt-3 space-y-1.5 ml-4">
              <li>• Связи с вами для записи на сессии и мероприятия;</li>
              <li>• Подбора подходящего мастера и формата практики;</li>
              <li>• Ответа на ваши вопросы.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3" style={sectionTitle}>4. Передача данных третьим лицам</h2>
            <p>
              Оператор не продаёт, не передаёт и не раскрывает ваши персональные данные третьим
              лицам без вашего согласия, за исключением случаев, предусмотренных действующим
              законодательством Российской Федерации.
            </p>
            <p className="mt-3">
              Данные из формы заявки передаются в защищённый Telegram-канал Оператора исключительно
              для внутренней обработки запросов.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={sectionTitle}>5. Cookies</h2>
            <p>
              Сайт использует файлы cookie — небольшие текстовые файлы, сохраняемые в вашем браузере.
              Cookies не содержат персональных данных и применяются для корректной работы сайта
              и улучшения пользовательского опыта.
            </p>
            <p className="mt-3">
              Вы можете отключить cookies в настройках браузера. Это не повлияет на возможность
              просмотра сайта.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={sectionTitle}>6. Хранение и защита данных</h2>
            <p>
              Оператор принимает технические и организационные меры для защиты ваших персональных
              данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
              Данные хранятся в течение срока, необходимого для выполнения целей сбора.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={sectionTitle}>7. Ваши права</h2>
            <p>Вы вправе в любой момент:</p>
            <ul className="mt-3 space-y-1.5 ml-4">
              <li>• Запросить уточнение, обновление или удаление своих персональных данных;</li>
              <li>• Отозвать согласие на обработку данных;</li>
              <li>• Получить информацию о том, какие данные о вас хранятся.</li>
            </ul>
            <p className="mt-3">
              Для реализации прав свяжитесь с нами через форму обратной связи на{" "}
              <Link href="/#contact" style={{ color: "rgba(0,180,216,0.8)" }}>главной странице</Link>.
            </p>
          </section>

          <section>
            <h2 className="mb-3" style={sectionTitle}>8. Изменения в Политике</h2>
            <p>
              Оператор оставляет за собой право вносить изменения в настоящую Политику
              конфиденциальности. Актуальная версия всегда доступна на этой странице.
            </p>
          </section>

          <div className="pt-8 mt-8" style={{ borderTop: "1px solid rgba(0,180,216,0.15)" }}>
            <p style={{ color: "rgba(230,238,250,0.6)" }}>
              Океан ощущений · Пространство живого контакта с собой
            </p>
            <p className="mt-1 text-xs" style={{ color: "rgba(230,238,250,0.35)" }}>
              Сообщество телесных практиков и массажистов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
