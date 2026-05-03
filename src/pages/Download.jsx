import { useLang } from '../components/LangContext.jsx';
import './Download.css';
import ReactMarkdown from 'react-markdown';

export default function Download() {
  const { t } = useLang();
  const { download } = t;

  return (
    <main className="dl">
      <section className="dl__hero">
        <div className="dl__hero-bg" aria-hidden="true" />
        <div className="dl__hero-content">
          <p className="dl__subtitle">{download.subtitle}</p>
          <h1 className="dl__title">{download.title}</h1>
          <p className="dl__intro">{download.intro}</p>
        </div>
      </section>

      <section className="dl__steps">
        <div className="dl__steps-inner">
          {download.steps.map((step, i) => (
              <article className="step" key={i}>
                  <div className="step__num">
                      {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="step__content">
                      <h3 className="step__title">{step.title}</h3>

                      <div className="step__body">
                          <ReactMarkdown>
                              {step?.content || ""}
                          </ReactMarkdown>
                      </div>
                  </div>
              </article>
          ))}
        </div>

        <aside className="dl__note">
          {download.note}
        </aside>
      </section>
    </main>
  );
}
