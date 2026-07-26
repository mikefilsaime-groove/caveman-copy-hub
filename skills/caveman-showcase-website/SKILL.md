---
name: caveman-showcase-website
description: "Build or retrofit a product website with a message-first, scroll-driven showcase experience: one site-level opening card, product/category navigation, and five Caveman Product Showcase cards per product. Use when a user asks for a showcase website, a five-card product tour, a product-led homepage that intercepts or precedes a traditional site, or a reusable showcase system modeled on the Scale.gg experience."
---

# Caveman Showcase Website

Build the website experience that presents an entire product family as a guided, scroll-driven tour.

This is the site-level orchestrator. It does not replace the underlying copy or proof skills.

```text
Caveman Showcase Website
  ↓ reads DESIGN.md
  ↓ invokes Caveman Product Showcase for each product
      ↓ invokes Caveman Copy
          ↓ invokes Wordsmithing
      ↓ invokes Product Visual Proof
```

## Required dependencies

Read these skills completely before writing or implementing the showcase:

1. `caveman-product-showcase`
2. `caveman-copy`
3. `wordsmithing-skill`
4. `product-visual-proof`

Read [DESIGN.md](DESIGN.md) completely before designing the navigation, cards, motion, responsive behavior, or handoff into the rest of the site.

## Scope contract

Create a showcase website or showcase layer, not a generic long-form landing page.

- Preserve the host brand, verified product truth, and required global navigation.
- Treat the showcase as a product-tour mode that may lead into an existing deeper website.
- Build one site-level opening card only.
- Build exactly five cards per product unless the user explicitly changes the count.
- Use product categories and product tabs to prevent one undifferentiated page of dozens of cards.
- Keep the traditional/deep-dive site accessible through a clear, persistent mode switch when both experiences exist.
- Never rewrite protected pages or components without explicit permission.

## Workflow

### 1. Establish the source of truth

Inspect the current website, product repositories, user guides, screenshots, design system, and any preservation rules. Resolve legacy/current-app ambiguity before writing.

Create a source ledger for every product:

- product name and URL;
- one-sentence definition;
- four most commercially important features;
- verified advantage and buyer benefit for each feature;
- strongest available visual evidence;
- page/site destinations;
- category membership.

Do not invent missing product behavior. Mark genuine evidence gaps and continue with the strongest verified material.

### 2. Define the information architecture

Create:

- one home/opening state for the product family;
- product categories that match how buyers think;
- a product order within each category;
- a five-card story for every product;
- a continuation order from product to product and category to category;
- a clear route into the deeper website.

Avoid status labels, release dates, internal feature classifications, or coming-soon noise unless the user explicitly asks for them.

### 3. Write every product story

Invoke `caveman-product-showcase` once per product.

- Card 1: show the product name as the brand, then state what the product is in one plain sentence.
- Cards 2–5: sell the four strongest named features.
- Carry every feature through advantage, benefit, and promised land across the card.
- Use Wordsmithing only after the argument is correct.
- Make the copy readable at the actual card size. Never hide the message in eyebrow text or decorative fine print.

### 4. Prove every card visually

Invoke `product-visual-proof` for every card whose visual is in scope.

- Inspect the current product and relevant guide.
- Run the app locally and inspect the exact feature headlessly when possible.
- Capture a clean real screenshot when it communicates at card size.
- Rebuild the decisive product state faithfully in HTML/CSS when a raw screenshot is too dense.
- Use prominent supporting bullet copy only when a stronger product visual is unavailable.
- Reject generic dashboards, repeated template panels, tiny labeled boxes, abstract palette fillers, and visuals that merely repeat the headline.

### 5. Implement the showcase behavior

Follow `DESIGN.md` for card composition, navigation, motion, state resets, responsive behavior, accessibility, and the handoff between showcase and site modes.

Keep content data separate from rendering and motion logic. A new product should be addable without rewriting the interaction engine.

### 6. Verify the complete experience

Test:

- the full opening card;
- every category and product tab;
- all five cards for representative products;
- forward and backward scroll handoffs;
- direct tab changes resetting to a complete first card;
- mode-switch and mega-menu behavior;
- reduced-motion behavior;
- keyboard navigation and focus visibility;
- mobile widths of 320, 390, and 430 pixels;
- no horizontal overflow, card clipping, premature mobile advancement, cascade flash, or distorted proof visuals;
- build, lint, tests, console, and destination links.

## Completion standard

The showcase is finished only when a new visitor can answer:

1. What product family is this?
2. What does each product do?
3. What four capabilities make each product worth exploring?
4. Why should the buyer care?
5. What real product evidence proves each claim?
6. How do they move into the deeper site or product page?

If any answer requires interpretation, decorative copy, or tiny text, revise the card before delivery.
