# Caveman Copy Hub

The standalone public hub for Mike Filsaime's Caveman Copy skill system.

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

## Publishing boundary

This project is intentionally standalone. Do not add it to the main Mike AI Skills Hub until that hub's active editor has finished and Mike gives explicit approval.
