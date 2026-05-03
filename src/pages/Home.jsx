import { useLang } from '../components/LangContext.jsx';
import DownloadButton from '../components/DownloadButton.jsx';
import './Home.css';

export default function Home() {
  const { t } = useLang();
  const { hero, about } = t;

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />

        <div className="hero__content">
          <p className="hero__subtitle">{hero.subtitle}</p>
          <h1 className="hero__title">
            {hero.title}
          </h1>
          <DownloadButton
            label={hero.buttonLabel}
            subText={hero.buttonSub}
            to="/download"
          />
        </div>
      </section>

      <section className="about">
        <h2 className="about__heading">{about.heading}</h2>
        <div className="about__body">
          <p>{about.p1}</p>
          <p>{about.p2}</p>
          <p>{about.p3}</p>
          <p>{about.p4}</p>
          <p>{about.p5}</p>
          <p className="about__closing">{about.closing}</p>
        </div>
      </section>
    </main>
  );
}
