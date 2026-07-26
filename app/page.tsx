"use client";

import { useState } from "react";

type SkillPanel = {
  id: string;
  tab: string;
  eyebrow: string;
  title: string;
  summary: string;
  proofLabel: string;
  proofTitle: string;
  proofBody: string;
  invokes: string;
};

const skills: SkillPanel[] = [
  {
    id: "caveman-copy",
    tab: "Caveman Copy",
    eyebrow: "FOUNDATION / ANY COPY UNIT",
    title: "Make the value obvious to an outsider.",
    summary:
      "Use Caveman Copy when one hero, feature block, paragraph, elevator pitch, or CTA needs ruthless clarity. It builds the complete path from feature to promised land—without expanding the assignment.",
    proofLabel: "SCOPE LOCK",
    proofTitle: "One requested copy unit. No surprise sections.",
    proofBody:
      "The core skill protects the brief, verifies the product truth, and makes every capability answer the buyer’s real question: Why should I care?",
    invokes: "Always invokes Wordsmithing. Invokes Product Visual Proof when visuals are in scope.",
  },
  {
    id: "showcase",
    tab: "Product Showcase",
    eyebrow: "STRICT FIVE-CARD ORCHESTRATOR",
    title: "Pitch the product. Then prove the four reasons it wins.",
    summary:
      "Card one answers what the product is in seconds. Cards two through five sell the four strongest features—each carried through advantage, benefit, promised land, and its own verified visual proof.",
    proofLabel: "THE SEQUENCE",
    proofTitle: "01 elevator pitch. 02–05 killer features.",
    proofBody:
      "No filler cards. No repeated dashboards. Every card must make one commercially important idea easier to understand, believe, and want.",
    invokes: "Invokes Caveman Copy, Wordsmithing, and Product Visual Proof for every card.",
  },
  {
    id: "website-copy",
    tab: "Website Copy",
    eyebrow: "PAGE + SITE ORCHESTRATOR",
    title: "Carry one clear argument across the entire website.",
    summary:
      "Plan or rewrite a landing page, homepage, or multi-page product site without turning every page into the same sales letter. Each page gets a distinct job, promise, proof burden, and next action.",
    proofLabel: "SITE-LEVEL CONTROL",
    proofTitle: "One page or many. Every page earns its place.",
    proofBody:
      "The homepage introduces and routes. Product pages sell. Feature pages explain mechanisms. Proof, pricing, comparison, and legal pages keep their own jobs.",
    invokes: "Invokes Caveman Copy section by section and Product Visual Proof whenever visuals are included.",
  },
  {
    id: "showcase-website",
    tab: "Showcase Website",
    eyebrow: "SCROLL-DRIVEN SITE ORCHESTRATOR",
    title: "Turn a product family into a guided five-card tour.",
    summary:
      "Organize products into buyer-friendly categories. Give every product its own five-card story. Then move visitors forward and backward through the tour without dumping dozens of cards into one endless page.",
    proofLabel: "THE EXPERIENCE",
    proofTitle: "One opening card. Five cards per product. One clean handoff at a time.",
    proofBody:
      "Its DESIGN.md controls the pinned navigation, isolated card stacks, directional transitions, mobile reading behavior, reduced motion, and the persistent route into the deeper website.",
    invokes: "Invokes Caveman Product Showcase for every product, which invokes Caveman Copy, Wordsmithing, and Product Visual Proof.",
  },
  {
    id: "visual-proof",
    tab: "Visual Proof",
    eyebrow: "MESSAGE-FIRST PRODUCT EVIDENCE",
    title: "Run the product. Capture the truth. Build the proof.",
    summary:
      "Read the guide, find the current app, run it locally, navigate headlessly to the exact feature, and capture the real state. If the screenshot cannot communicate at block size, rebuild it faithfully in HTML and CSS.",
    proofLabel: "EVIDENCE ORDER",
    proofTitle: "Result → real UI → faithful reconstruction.",
    proofBody:
      "Show what the feature produces, changes, or makes possible. Generic dashboards, tiny labeled boxes, and palette-filling panels never qualify as proof.",
    invokes: "Can run independently or as the conditional visual layer beneath every Caveman skill.",
  },
  {
    id: "wordsmithing",
    tab: "Wordsmithing",
    eyebrow: "THE REQUIRED FINAL PASS",
    title: "Same meaning. Stronger words.",
    summary:
      "Tighten the approved argument one paragraph at a time. Cut throat-clearing, replace vague language with concrete outcomes, sharpen the emotional consequence, and keep every verified claim intact.",
    proofLabel: "READ-ALOUD STANDARD",
    proofTitle: "Clear. Fast. Specific. Easy to say.",
    proofBody:
      "One idea per sentence. Natural breath points. No stacked clauses burying the payoff. If a strong line tangles the mouth, it is not finished.",
    invokes: "Invoked by Caveman Copy for every final draft.",
  },
];

const installCommand =
  "unzip caveman-copy-skill-system.zip -d ~/.claude/skills/";

export default function Home() {
  const [active, setActive] = useState("overview");
  const [copied, setCopied] = useState(false);

  const selectSkill = (id: string) => {
    setActive(id);
    window.setTimeout(() => {
      document.getElementById("library")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const copyInstall = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <div className="announcement">
        <span>PUBLIC AI SKILLS LIBRARY</span>
        <i>•</i>
        <span className="announcement-secondary">
          PRODUCT TRUTH, CLEAR COPY, VISUAL PROOF
        </span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Caveman Copy Hub home">
          <span className="brand-mark">MF</span>
          <span>
            <b>Caveman Copy Hub</b>
            <small>Mike Filsaime</small>
          </span>
        </a>
        <a
          className="github-pill"
          href="https://github.com/mikefilsaime-groove/caveman-copy-hub"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section
          className="hero"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow inverse">THE COPY SYSTEM FOR PRODUCTS PEOPLE NEED TO UNDERSTAND</p>
            <h1 id="hero-title">
              Caveman Copy turns features into <em>reasons to buy.</em>
            </h1>
            <p className="hero-lede">
              Tell it what your product does. The six-skill system forces every
              claim through feature, advantage, benefit, and promised land—then
              proves the copy with visuals pulled from the real product.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#library">
                Explore the system <span aria-hidden="true">↓</span>
              </a>
              <a className="button secondary" href="#install">
                Install all six <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ul className="proof-list">
              <li>Say what the product is in one sentence</li>
              <li>Connect every feature to why the buyer should care</li>
              <li>Prove each claim with the real product</li>
            </ul>
          </div>

          <div className="collection-map" aria-label="Caveman Copy skill system map">
            <div className="map-top">
              <span>CAVEMAN / SYSTEM MAP</span>
              <b>06</b>
            </div>
            <div className="map-grid">
              <div className="map-core">
                <strong>CC</strong>
                <span>01 / CAVEMAN COPY</span>
              </div>
              <div className="map-node n1">
                PRODUCT PITCH <b>02</b>
              </div>
              <div className="map-node n2">
                WEBSITE COPY <b>03</b>
              </div>
              <div className="map-node n3">
                SHOWCASE SITE <b>04</b>
              </div>
              <div className="map-node n4">
                VISUAL PROOF <b>05</b>
              </div>
              <div className="map-node n5">
                WORDSMITH <b>06</b>
              </div>
            </div>
            <div className="map-footer">
              <span>
                <i /> WORDSMITH EVERY FINAL DRAFT
              </span>
              <span>ONE SHARED PRODUCT TRUTH</span>
            </div>
          </div>
        </section>

        <section className="portal-intro" aria-labelledby="system-heading">
          <div>
            <p className="eyebrow">THE SYSTEM</p>
            <h2 id="system-heading">
              One clear message.
              <br /> Six skills that finish the job.
            </h2>
          </div>
          <p>
            Fix one block. Pitch one product. Rewrite a website. Or turn a
            product family into a guided five-card tour. Every path follows the
            same rule: say what it is, explain why it matters, and prove it.
          </p>
        </section>

        <section className="tab-shell" id="library" aria-label="Caveman Copy skill library">
          <div className="tab-rail" role="tablist" aria-label="Caveman system skills">
            <button
              id="tab-overview"
              role="tab"
              aria-selected={active === "overview"}
              aria-controls="panel-overview"
              onClick={() => setActive("overview")}
            >
              Overview
            </button>
            {skills.map((skill) => (
              <button
                key={skill.id}
                id={`tab-${skill.id}`}
                role="tab"
                aria-selected={active === skill.id}
                aria-controls={`panel-${skill.id}`}
                onClick={() => setActive(skill.id)}
              >
                {skill.tab}
              </button>
            ))}
          </div>

          <div className="tab-panels">
            {active === "overview" ? (
              <div
                id="panel-overview"
                role="tabpanel"
                aria-labelledby="tab-overview"
              >
                <div className="panel-header">
                  <div>
                    <p className="eyebrow">START HERE</p>
                    <h3>
                      Choose the scope.
                      <br /> Then open the right system.
                    </h3>
                  </div>
                  <p>
                    The hub keeps one copy framework from turning into a rigid
                    robot. Use one skill for a section, one for a five-card
                    product pitch, one for a full website, and one for the
                    scroll-driven showcase experience. Proof and wordsmithing
                    switch on when the work needs them.
                  </p>
                </div>

                <div className="metric-grid">
                  <article>
                    <strong>06</strong>
                    <span>COORDINATED SKILLS</span>
                    <p>Focused roles that share one product truth.</p>
                  </article>
                  <article className="navy-card">
                    <strong>04</strong>
                    <span>OPERATING LEVELS</span>
                    <p>One block, one product, website copy, or a showcase site.</p>
                  </article>
                  <article>
                    <strong>01</strong>
                    <span>NON-NEGOTIABLE</span>
                    <p>Make the value obvious to an outsider.</p>
                  </article>
                </div>

                <div className="lane-grid">
                  <button onClick={() => selectSkill("caveman-copy")}>
                    <span>01 / FOUNDATION</span>
                    <b>Fix one hero, feature block, paragraph, or CTA</b>
                    <i aria-hidden="true">→</i>
                  </button>
                  <button onClick={() => selectSkill("showcase")}>
                    <span>02 / SHOWCASE</span>
                    <b>Pitch one product across five decisive cards</b>
                    <i aria-hidden="true">→</i>
                  </button>
                  <button onClick={() => selectSkill("website-copy")}>
                    <span>03 / WEBSITE</span>
                    <b>Carry one argument across every page</b>
                    <i aria-hidden="true">→</i>
                  </button>
                  <button onClick={() => selectSkill("showcase-website")}>
                    <span>04 / SHOWCASE SITE</span>
                    <b>Turn a product family into a guided five-card tour</b>
                    <i aria-hidden="true">→</i>
                  </button>
                  <button onClick={() => selectSkill("visual-proof")}>
                    <span>05 / EVIDENCE</span>
                    <b>Turn real product behavior into visual proof</b>
                    <i aria-hidden="true">→</i>
                  </button>
                </div>
              </div>
            ) : (
              skills
                .filter((skill) => skill.id === active)
                .map((skill) => (
                  <div
                    className="project-layout"
                    id={`panel-${skill.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${skill.id}`}
                    key={skill.id}
                  >
                    <div>
                      <p className="eyebrow">{skill.eyebrow}</p>
                      <h3>{skill.title}</h3>
                      <p className="project-summary">{skill.summary}</p>
                      <a className="button dark" href="#install">
                        Install this system <span aria-hidden="true">↓</span>
                      </a>
                    </div>
                    <aside>
                      <span>{skill.proofLabel}</span>
                      <b>{skill.proofTitle}</b>
                      <p>{skill.proofBody}</p>
                      <hr />
                      <span>HOW IT CONNECTS</span>
                      <p>{skill.invokes}</p>
                    </aside>
                  </div>
                ))
            )}
          </div>
        </section>

        <section className="install-section" id="install" aria-labelledby="install-heading">
          <div className="install-intro">
            <p className="eyebrow">INSTALL THE SYSTEM</p>
            <h2 id="install-heading">
              Six folders.
              <br /> One clear chain of command.
            </h2>
            <p>
              Download the bundle, place the six skill folders in your agent’s
              skills directory, and invoke the skill that matches the size of
              the job.
            </p>
            <a
              className="button primary"
              href="/downloads/caveman-copy-skill-system.zip"
              download
            >
              Download the skill bundle <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="install-card">
            <div className="install-card-top">
              <span>QUICK INSTALL / MACOS + LINUX</span>
              <b>06 SKILLS</b>
            </div>
            <ol>
              <li>
                <b>Download</b>
                <span>Save the ZIP to your Downloads folder.</span>
              </li>
              <li>
                <b>Unpack</b>
                <span>Move all six folders into your agent’s skills directory.</span>
              </li>
              <li>
                <b>Invoke</b>
                <span>Start with the skill that matches the scope of the job.</span>
              </li>
            </ol>
            <div className="command-box">
              <code>{installCommand}</code>
              <button onClick={copyInstall} aria-label="Copy install command">
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <p className="install-note">
              Your agent may use a different skill directory. Keep the six
              folders together so the orchestrators can call their required
              sub-skills.
            </p>
          </div>
        </section>

        <section className="closing-cta">
          <div>
            <p className="eyebrow inverse">USE THE HUB AS YOUR STARTING POINT</p>
            <h2>
              Say it plain.
              <br /> <em>Then prove it.</em>
            </h2>
          </div>
          <a
            className="button light"
            href="/downloads/caveman-copy-skill-system.zip"
            download
          >
            Download all six <span aria-hidden="true">↓</span>
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">MF</span>
          <span>
            <b>Caveman Copy Hub</b>
            <small>Mike Filsaime</small>
          </span>
        </a>
        <p>
          Brutally clear copy, disciplined scope, and product visuals that earn
          their place.
        </p>
        <div>
          <a href="#library">Skill map</a>
          <a href="#install">Installation</a>
        </div>
      </footer>
    </>
  );
}
