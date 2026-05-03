const de = {
  // Navigation
  nav: {
    about: "Über das Spiel",
    download: "Herunterladen",
  },

  // Home page - hero section
  hero: {
    subtitle: "Eine Welt, die sich selbst verschlingt",
    title: "Domains of\nEndless Hunger",
    buttonLabel: "Herunterladen",
    buttonSub: "Alpha-Client v 0.0.2",
  },

  // Home page - about section
  about: {
    heading: "Über das Spiel",
    p1: "DOEH: Domains of Endless Hunger ist ein Dark-Fantasy-Online-Survival-RPG, das sich über ein zerbrochenes Multiversum miteinander verbundener Welten erstreckt, bekannt als Domänen.",
    p2: "Im Moment eines geheimnisvollen und gleichzeitigen Ereignisses, bekannt nur als DER ENDLOSE HUNGER, wurden alle Lebewesen in allen Welten von einem unerklärlichen und unumkehrbaren Zustand befallen: Sie müssen ständig konsumieren, um zu überleben.",
    p3: "Nahrung ist endlich geworden. Ökosysteme brechen zusammen. Ganze Welten werden langsam des Lebens entleert. Das Universum dreht sich nicht mehr um Eroberung oder Macht — es geht ums Überleben gegen die Erschöpfung selbst.",
    p4: "Spieler durchqueren zusammenbrechende Domänen mit uralten Portalen, die durch verstreute schriftliche Fragmente entdeckt werden, die ihre Namen enthüllen. Jede Reise ist ein Wettlauf gegen den Hungertod, da Ressourcen in jeder Welt vergänglich und schnell erschöpft sind.",
    p5: "Der Tod ist endgültig. Es gibt keine Rückkehr, keine Wiedergeburt, keinen zweiten Versuch. Wenn ein Körper versagt, wird er lediglich zu einer weiteren Ressource, die vom Endlosen Hunger verschlungen wird. Jede Entscheidung trägt unwiderrufliches Gewicht, und Überleben misst sich nicht an Siegen, sondern daran, wie lange man das Unvermeidliche hinauszögern kann.",
    closing: "Der größte Feind ist kein Geschöpf — sondern die Abwesenheit von Nahrung selbst.",
  },

  // Download page
  download: {
    subtitle: "Alpha-Client v 0.0.2",
    title: "Herunterladen & Installieren",
    intro: "Folge den nachstehenden Schritten, um den Client auf deinem Rechner zum Laufen zu bringen.",
    steps: [
      {
        title: "Python 3.12 installieren",
        content: `
Lade Python von der offiziellen Website herunter:

[https://www.python.org/downloads/](https://www.python.org/downloads/)

Führe den Installer aus und aktiviere **"Add Python to PATH"** während der Installation.

Installation überprüfen:

\`\`\`bash
python --version
\`\`\`

Erwartete Ausgabe:

\`\`\`bash
Python 3.12.x
\`\`\`
`
      },
      {
        title: "uv installieren",
        content: `
Installiere \`uv\` mit pip:

\`\`\`bash
pip install uv
\`\`\`

Installation überprüfen:

\`\`\`bash
uv --version
\`\`\`
`
      },
      {
        title: "Repository klonen",
        content: `
\`\`\`bash
git clone https://github.com/slimslk/doeh_game_client.git
cd doeh_game_client
\`\`\`
`
      },
      {
        title: "Abhängigkeiten installieren",
        content: `
Erstelle eine virtuelle Umgebung und installiere die Abhängigkeiten:

\`\`\`bash
uv sync
\`\`\`

Dieser Befehl wird:

* eine virtuelle Umgebung erstellen
* Abhängigkeiten aus \`pyproject.toml\` installieren
* die Projektumgebung vorbereiten
`
      },
      {
        title: "Anwendung starten",
        content: `
Starte die Anwendung:

\`\`\`bash
uv run main.py
\`\`\`

Ersetze \`main.py\`, falls dein Projekt einen anderen Einstiegspunkt verwendet.
`
      }
    ],
    note: "Dies ist ein früher Alpha-Build. Erwarte Fehler, fehlende Inhalte und häufige Updates. Melde Probleme auf der GitHub-Issues-Seite oder in unserem Discord.",
  },

  // Footer
  footer: {
    title: "DOEH: Domains of Endless Hunger. 2026",
  },

  // Language switcher
  lang: {
    en: "EN",
    de: "DE",
    ua: "UA",
  },
};

export default de;
