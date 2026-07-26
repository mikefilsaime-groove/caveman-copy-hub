# Caveman Copy Hub

The standalone public hub for Mike Filsaime's Caveman Copy skill system.

- **Live site:** https://caveman-copy-hub.mikefilsaime.chatgpt.site/
- **Source:** https://github.com/mikefilsaime-groove/caveman-copy-hub

The site documents and distributes six coordinated skills:

- `caveman-copy`
- `caveman-product-showcase`
- `caveman-website-copy`
- `caveman-showcase-website`
- `product-visual-proof`
- `wordsmithing-skill`

## Local development

Requirements: Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

The local site opens at the URL printed by the development server.

## Validation

```bash
npm run build
```

## Skill bundle

The downloadable ZIP is generated at:

```text
public/downloads/caveman-copy-skill-system.zip
```

Keep all six skill folders together so the orchestrators can load their required sub-skills.

## Install from source

The complete, browsable skill source is in [`skills/`](skills/). Copy the six
folders into your global skills directory, or download the bundled ZIP from the
live site. Keep the folder names unchanged so the orchestrators can resolve
their required sub-skills.
