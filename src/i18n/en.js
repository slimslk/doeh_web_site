const en = {
    // Navigation
    nav: {
        about: "About",
        download: "Download",
    },

    // Home page - hero section
    hero: {
        subtitle: "A World That Devours Itself",
        title: "Domains of\nEndless Hunger",
        buttonLabel: "Download",
        buttonSub: "Alpha Client v 0.0.2",
    },

    // Home page - about section
    about: {
        heading: "About the Game",
        p1: "DOEH: Domains of Endless Hunger is a dark fantasy online survival RPG set across a fractured multiverse of interconnected worlds known as Domains.",
        p2: 'At the moment of a mysterious and simultaneous event known only as THE ENDLESS HUNGER, all living beings across all worlds were struck by an unexplainable and irreversible condition: they must constantly consume to survive.',
        p3: "Food has become finite. Ecosystems collapse. Entire worlds are slowly emptied of life. The universe is no longer about conquest or power — it is about survival against depletion itself.",
        p4: "Players traverse between collapsing Domains using ancient portals, discovered through scattered written fragments that reveal their names. Each journey is a race against starvation, as resources in every world are temporary and quickly exhausted.",
        p5: "Death is final. There is no return, no resurrection, no second attempt. When a body fails, it is simply another resource consumed by the Endless Hunger. Every decision carries irreversible weight, and survival is measured not in victories, but in how long one can delay the inevitable.",
        closing: "The greatest enemy is not a creature — but the absence of sustenance itself.",
    },

    download: {
        subtitle: "Alpha Client v 0.0.2",
        title: "Download & Install",
        intro: "Follow the steps below to get the client running on your machine.",
        steps: [
            {
                title: "Install Python 3.12",
                content: `
Download Python from the official website:

[https://www.python.org/downloads/](https://www.python.org/downloads/)

Run the installer and **enable "Add Python to PATH"** during installation.

Verify the installation:

\`\`\`bash
python --version
\`\`\`

Expected output:

\`\`\`bash
Python 3.12.x
\`\`\`
`
            },
            {
                title: "Install uv",
                content: `
Install \`uv\` using pip:

\`\`\`bash
pip install uv
\`\`\`

Verify installation:

\`\`\`bash
uv --version
\`\`\`            
`
            },
            {
                title: "Clone the Repository",
                content: `
\`\`\`bash
git clone https://github.com/slimslk/doeh_game_client.git
cd doeh_game_client
\`\`\`
`
            },
            {
                title: "Install Project Dependencies",
                content: `
Create the virtual environment and install dependencies:

\`\`\`bash
uv sync
\`\`\`

This command will:

* create a virtual environment
* install dependencies from \`pyproject.toml\`
* prepare the project environment               
`
            },
            {
                title: "Running the Application",
                content: `
Start the application:

\`\`\`bash
uv run main.py
\`\`\`

Replace \`main.py\` with the correct entry point if your project uses a different file.
`
            }
        ],
        note: "This is an early alpha build. Expect bugs, missing content, and frequent updates. Report issues on the GitHub Issues page or in our Discord.",
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

export default en;
