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

### Canonical Scale.gg interaction reference

When the user asks for behavior “like the Scale.gg frontend,” do not approximate the interaction from this document alone. Inspect the current homepage implementation before writing showcase motion:

- `css/working.css`: `.showcase-nav-tab`, `.showcase-product-tab`, `.showcase-card`, `.showcase-product-section.is-stack-active`, `.showcase-handoff`, and responsive/reduced-motion rules.
- `js/working.js`: `pulseActiveTabs`, `mountChapter`, `transitionOverlay`, `transitionToIndex`, `bindReverseChapterGesture`, `updateDepth`, and `maybeAdvanceChapter`.

Port the interaction model into the destination component without importing unrelated homepage layout, header, or full-page scroll assumptions.

#### Compact navigation reference

The Scale.gg showcase navigation is not a row of large outline pills.

- Category controls are quiet text tabs with no enclosing pill. Use an approximately `13px` label, a `43–46px` row, and a `3px` animated underline for the selected category.
- Product/topic controls are compact tabs approximately `36px` high with `12px` labels, `5px 14px` padding, and roughly a `10px` radius.
- The selected product/topic tab uses the coordinated card accent as a compact fill, a restrained shadow, and a short underline. Inactive tabs remain transparent.
- On selection or chapter arrival, pulse both selected tabs with the Scale.gg arrival motion: `420ms`, rising about `4px`, settling about `1px` below origin, then returning to rest.
- Horizontally overflowing rows hide their scrollbar, reveal clipped content with edge fades, and scroll the selected control into view.
- Navigation must consume only the space needed for orientation. The card—not the tab chrome—dominates the viewport.

#### One mounted chapter at a time

A chapter is one product or subtopic and exactly five cards. Mount only the active chapter in the animated stack.

- Do not render every chapter as one long sequence of sticky sections and call that a stack.
- Keep the content model for every chapter available, but place only the active chapter’s five cards in the live animated stack.
- Give each card a stable zero-based `--stack-index` and a higher `z-index` than the previous card.
- Direct category or product navigation builds the destination chapter, transitions to it, mounts it, resets it to Card 1, updates both navigation levels, and announces the new state.

#### Exact desktop stack behavior

Make the card element itself sticky. Do not make five unrelated card interiors sticky inside five viewport-height wrappers.

Reference structure:

```css
.chapter-card {
  position: sticky;
  top: calc(var(--showcase-sticky-top) + (var(--stack-index) * 7px));
  z-index: calc(10 + var(--stack-index));
}
```

As the next card approaches its `7px`-offset sticky position:

- it moves in front of the previous card;
- the previous card remains visible behind it;
- the previous card scales from `1` toward approximately `0.98`;
- the previous card darkens from `brightness(1)` toward approximately `brightness(0.94)`;
- transforms update in short linear frames (the reference uses about `90ms`) so the depth follows scrolling without lag.

At least two card edges must be visibly layered during the handoff. If the old card simply scrolls away before the next card appears, the showcase is not using the Scale.gg stack.

#### Exact chapter handoff behavior

After Card 5, place a next-chapter sentinel after the active stack. On desktop, when that sentinel reaches roughly `62%` of the viewport while the reader is moving down:

1. clone Card 1 of the next chapter into a fixed overlay matching the visible outgoing card’s exact rectangle;
2. keep the outgoing card visible underneath;
3. for forward navigation, start the incoming clone at `translateX(105%)`;
4. animate it to `translateX(0)` over approximately `620ms` with `cubic-bezier(0.72, 0, 0.18, 1)`;
5. after the animation, mount the destination chapter, align its complete Card 1 beneath the sticky navigation, remove the overlay, update selected tabs, and run the arrival pulse.

Backward navigation mirrors the same overlay from `translateX(-105%)`.

Scrolling upward from the aligned first card of any chapter except the first must return to the previous chapter. Accumulate a deliberate upward-wheel gesture rather than firing on noise; the Scale.gg reference uses about `48px` of intent inside a `220ms` window. The destination is the previous chapter’s complete first card, with the horizontal direction reversed.

Direct tab navigation uses the same horizontal handoff. Direction is determined by the destination’s position in the chapter sequence. It must never swap content instantly on desktop while the homepage reference animates it.

### Within one product

- Pin the active card region while the reader advances through the five-card stack.
- Bring the next card forward cleanly.
- Keep previous and upcoming cards behind the active card.
- Never load all cards on top and cascade them away.
- Never flash previous cards in front during a product change.

### Between products and categories

- After card five, transition horizontally to card one of the next product.
- After the final product, continue to card one of the next category.
- Scrolling upward from card one returns horizontally to the complete first card of the previous product or category, matching the current Scale.gg homepage chapter reset.
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

On compact/coarse-pointer layouts and in reduced-motion mode, disable the sticky layering, depth transforms, automatic scroll-triggered chapter handoff, and fixed horizontal overlay. Render the active chapter’s five cards in normal document flow and keep an explicit next-chapter control. Tab navigation must still reset to a complete Card 1.

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

For the Scale.gg interaction model, “prefer one mounted product stack” is mandatory: keep one active five-card chapter in the animated DOM, plus only the temporary fixed clone used during a horizontal handoff.

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
- large bordered category pills replacing the compact Scale.gg tab treatment;
- all chapters rendered as one long page instead of one mounted five-card stack;
- sticky card interiors that scroll away independently instead of cards visibly layering in one viewport;
- a next chapter appearing without the right-to-left handoff, or a previous chapter appearing without the mirrored left-to-right handoff;
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
