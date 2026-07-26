# Caveman Showcase Website Design System

## Purpose

A Showcase Website turns a product family into a guided product tour before the visitor enters the deeper website. It is not a carousel pasted into a hero and it is not a conventional page containing seventy-five visible sections.

The experience must answer one question at a time:

1. What is this product family?
2. What is this product?
3. What makes this product special?
4. Why should I care?
5. Where can I learn more or use it?

The interface exists to sequence those answers without hiding them.

## Core architecture

### Site-level opening

Use one opening card for the entire company, suite, or product family. It must state:

- the brand or suite name;
- what the product family is;
- the breadth or organizing idea;
- the simplest reason to continue.

Do not repeat this opening card inside every category. The next scroll step begins the first real product.

### Categories and products

Use two navigation levels:

- **Category navigation:** the buyer’s major jobs or product families.
- **Product navigation:** the products inside the active category.

Keep both levels compact and pinned while the showcase is active. The card—not navigation chrome—must dominate the first viewport.

Include a Home or equivalent control that returns to the site-level opening card.

When a flagship or curated category improves orientation, place it first and keep the remaining job-based categories intact.

### Five-card product story

Each product owns an isolated five-card stack:

- **Card 1 — Product:** product name plus the instant elevator pitch.
- **Card 2 — Killer feature 1:** the strongest mechanism or differentiator.
- **Card 3 — Killer feature 2:** the next most valuable capability.
- **Card 4 — Killer feature 3:** the next reason to believe or switch.
- **Card 5 — Killer feature 4:** the capability that completes the product story.

The product name is a brand label, not the benefit headline. Keep both visible when clarity requires them.

Do not create filler cards to reach five. Re-evaluate the product and evidence until the four commercially decisive features are identified.

## Card composition

### Message side

Give the copy enough scale and whitespace to be read, not merely admired.

Preferred hierarchy:

1. card number and product owner;
2. product name or named feature;
3. plain-language definition;
4. short mechanism/advantage explanation;
5. prominent promised-land statement;
6. page and product-site actions.

Eyebrow copy may orient the reader but must never carry the main explanation.

### Proof side

The proof side must make the claim visible.

Use this preference order:

1. the decisive output or result;
2. a clean real product screenshot;
3. a faithful HTML/CSS reconstruction of the exact product state;
4. a focused workflow or before/after explanation;
5. prominent, specific supporting bullets when visual proof is not possible.

Do not use a generic dashboard, repeated black panel, decorative geometry, tiny labels, or a headline duplicated inside a visual frame.

Zigzag layouts are allowed when they improve rhythm, but the message/proof relationship must remain obvious.

### Actions

Offer clear exits without competing with the card:

- **See page:** the internal deep-dive page.
- **See site:** the external or standalone product site.

Rename actions when the destination is more specific, but preserve the distinction between learning inside the host site and visiting the product.

## Visual language

Treat the host brand as the source of truth. Translate this system into its colors, type, spacing, radii, and component language instead of cloning Scale.gg literally.

- Use a restrained family of card tones with strong text contrast.
- Rotate the starting tone between products so every tab change feels distinct.
- Let the active product tab inherit or coordinate with the first card’s tone.
- Keep inactive tabs quiet and readable.
- Use depth to show upcoming cards behind the active card, never in front of it.
- Avoid identical visual templates across every product.

When a showcase mode deliberately differs from the traditional site, use a controlled navigation-state change—such as a dark showcase bar—while preserving brand continuity.

## Motion model

Motion explains navigation. It must never compete with comprehension.

### Within one product

- Pin the active card region while the reader advances through the five-card stack.
- Bring the next card forward cleanly.
- Keep previous and upcoming cards behind the active card.
- Never load all cards on top and cascade them away.
- Never flash previous cards in front during a product change.

### Between products and categories

- After card five, transition horizontally to card one of the next product.
- After the final product, continue to card one of the next category.
- Scrolling upward from card one returns horizontally to card five of the previous product or category.
- Use directionally consistent motion: forward moves one direction, backward reverses it.
- A brief tab pulse or bounce may confirm the change. Avoid expanding side bars or effects that resemble broken CSS.

### Direct navigation

Clicking a category or product tab must:

1. cancel the current transition;
2. reset the destination to its first complete card;
3. align the card to the top of the readable showcase viewport;
4. update selected states and accessible announcements;
5. never land between stacked cards.

### Reduced motion

Honor `prefers-reduced-motion`. Replace scroll-linked transforms with immediate state changes or short fades. All content and navigation must remain usable without animation.

## Showcase and site modes

When the deeper website remains available, use one persistent switcher across every page.

The control should clearly distinguish:

- the guided product showcase;
- the deeper website experience;
- an all-products mega menu when useful.

Keep the closed state cohesive with the main navigation. Make the open state distinct enough to reveal a mode change without becoming the loudest CTA on the page.

Close the menu on outside click, Escape, destination selection, and route change. Mark the current mode clearly.

Do not call the deeper website “traditional” or “old.” Use benefit-led labels such as “See how it works,” “Explore the full site,” or language appropriate to the product.

## Responsive behavior

Desktop may use a side-by-side copy/proof layout. Mobile normally stacks copy above proof.

On small screens:

- let the card height grow with its content;
- do not advance until the complete message and proof have been readable;
- remove secondary chrome before shrinking important copy;
- keep buttons and tabs touchable;
- allow horizontal tab scrolling without causing page overflow;
- preserve the decisive product result in the proof area;
- avoid fixed heights that crop copy or distort screenshots;
- account for browser chrome and safe-area insets.

Verify at 320×700, 390×844, and 430×932.

## Accessibility and semantics

- Keep a real `h1` for the site-level opening.
- Use meaningful headings for products and features.
- Implement category/product navigation with buttons or tabs and accurate selected states.
- Announce product/category changes in an `aria-live` region without reading the entire card automatically.
- Preserve keyboard navigation, focus visibility, and logical DOM order.
- Use useful alternative text for informative screenshots and reconstructions.
- Keep SEO-relevant copy in HTML, even when animation controls visibility.

## State and implementation guidance

Store product content as structured data separate from the renderer:

```text
category
  product
    name
    page URL
    site URL
    cards[5]
      kind
      title
      definition
      description
      promised land
      proof source
      proof component
      tone
```

Track active category, product, and card explicitly. Do not infer all three from uncontrolled page position.

Prefer one mounted product stack at a time when that prevents cascade flashes and improves performance. Preload only the next/previous card assets required for a clean handoff.

The animation library is an implementation choice, not part of the design identity. Use CSS, Intersection Observer, GSAP, or the host framework’s motion system only when it can preserve the behavior above.

## Failure conditions

Stop and revise when any of these appear:

- a vague opening headline that does not say what the product family is;
- a product’s first card that omits the product name or definition;
- a feature card without a buyer outcome;
- generic or repeated proof panels;
- essential copy rendered as fine print;
- every product opening on the same card color;
- stacked cards flashing or cascading in front during a tab change;
- category/product changes landing halfway through a card;
- mobile scroll advancing before the card can be read;
- showcase controls missing from deeper pages when a persistent mode switch was promised;
- motion without reduced-motion support;
- protected site components changed without permission.

## Final test

Ask two questions for every card:

1. Could a first-time buyer explain the idea after one glance?
2. Does the proof make the claim easier to believe and want?

If either answer is no, the card is decoration—not a showcase.

