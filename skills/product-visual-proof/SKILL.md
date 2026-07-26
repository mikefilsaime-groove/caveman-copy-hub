---
name: product-visual-proof
description: Investigate a real software product or feature and create the strongest message-first supporting visual for a hero, feature block, proof section, product card, landing page, or website. Use when selecting or capturing product UI, running an app headlessly, deciding whether a screenshot will work, rebuilding dense UI as faithful HTML/CSS, creating verified before-and-after or workflow demonstrations, fixing weak generic supporting panels, or auditing whether a visual actually proves nearby copy. Can be invoked directly or conditionally by Caveman Copy, Caveman Product Showcase, and Caveman Website Copy.
---

# Product Visual Proof

Make the product claim visible.

The visual is sales evidence. It must make the nearby claim more concrete, understandable, memorable, believable, and desirable—not merely complete the layout.

This skill is independently callable. When another skill invokes it, preserve that skill's scope, message, structure, and claims.

## Scope lock

Work only on the requested visual, component, screenshot, or visual system.

- Read the nearby copy to identify the claim the visual must prove.
- Do not rewrite the copy, add sections, change page architecture, or invent features unless explicitly requested.
- Do not force a visual where words are the clearest proof.
- Preserve explicit component, navigation, branding, and product-fidelity rules.

## Define the proof job

Before opening the product, record:

- the exact claim to prove;
- what the user sees, creates, changes, or receives;
- the destination size, aspect ratio, and responsive constraints;
- the one thing a stranger must understand within three to five seconds;
- the product truth that would make the claim believable.

If the claim is vague or unsupported, resolve it from product evidence before designing.

## Investigate the real product

Do not visualize a software feature from its name alone.

1. Locate the correct current application repository. Confirm it is not a legacy app, obsolete frontend, or similarly named project.
2. Read the relevant user guide, product docs, approved sales pages, screenshots, and source code needed to understand the feature.
3. Identify the exact route, state, input, and output that best demonstrate the claim.
4. Find the documented local start command from package scripts or repository instructions.
5. Run the application locally. Preserve existing processes and use a non-conflicting port when necessary.
6. Use the available headless browser to navigate to the exact feature. For local unauthenticated web apps, default to `playwright-cli` and follow the global browser-testing instructions.
7. Use only configured development access, normal login, or an existing authenticated state. Never bypass authentication or access controls.
8. Dismiss tutorial, onboarding, help, demo, God Mode, developer, or accordion overlays that are not part of the feature being sold.
9. Put the feature into a meaningful, representative state. Avoid empty dashboards, placeholder data, and incidental browser chrome.
10. Capture the real interface or output at a viewport and crop appropriate to the destination.

If the product cannot be run or the feature cannot be accessed, use verified documentation and source evidence. Never imply that an unobserved reconstruction is a literal screenshot.

## Choose the strongest evidence

Evaluate the real capture at the destination's actual display size. Choose the first option that communicates clearly:

1. **Hero-quality result** — show the recognizable thing the product creates or improves: a page, email, funnel, deck, campaign, image, report, document, or other output.
2. **Real product state** — use a screenshot or existing component when its action and result remain obvious, attractive, and legible.
3. **Faithful simplified reconstruction** — rebuild the real component in HTML/CSS when the screenshot is too dense, sparse, distorted, or context-dependent.
4. **Verified explanatory scene** — create a before/after, transformation, workflow, comparison, or animation grounded in confirmed product behavior.
5. **Bold proof copy** — use large, specific bullets or evidence only when words communicate better than imagery.

Prefer showing the result over labeling the mechanism. For example:

- Show a recognizable website, email, webinar deck, or funnel with review and version controls—not boxes labeled “Editable artifact” and “Version history.”
- Show approved brand context transforming recognizable outputs—not boxes labeled “Approved source” and “Connected workflows.”
- Show a builder creating or transforming a page, an automation producing its result, or an insight changing a decision.

## Reconstruct faithfully

When rebuilding UI as HTML/CSS:

- preserve the real product's visual language, terminology, relationships, and behavior;
- simplify secondary chrome and detail, not the feature's meaning;
- make the claim's decisive action or output dominant;
- use representative content grounded in the product;
- avoid inventing controls, capabilities, states, metrics, integrations, or results;
- label a conceptual reconstruction appropriately when literal fidelity would be misleading.

The reconstruction should feel like a focused demonstration of the real product, not a generic dashboard wearing its colors.

## Message-first composition

- Give the visual one dominant idea.
- Make essential words readable at normal viewing size.
- Never hide the core explanation in eyebrow text, fine print, tiny labels, or low contrast.
- Use whitespace to focus attention, not to create dead zones while shrinking the message.
- Make the product result unmistakable before adding secondary detail.
- Use visual polish to increase comprehension and desire, never to replace them.
- Use a distinct structure when the claim requires it. Do not force every feature into the same panel.
- Use supporting bullets only when they are prominent, specific, and persuasive enough to earn the space.

A generic dashboard, abstract grid, repeated headline panel, decorative UI, or collection of tiny labeled boxes is never an acceptable fallback.

## Responsive proof

Adapt the evidence without changing its meaning.

- Preserve the decisive result on small screens.
- Remove secondary chrome before shrinking essential content.
- Prevent clipping, distortion, unreadable labels, and horizontal overflow.
- Do not advance a scroll-driven section before the complete visual and message can be understood.
- Verify the intended desktop width and common mobile widths.

## Verification

Compare the finished visual with the real feature and nearby claim.

Do not deliver until every relevant answer is “yes”:

- Was the correct current product inspected rather than a legacy app?
- Were the user guide and relevant product evidence reviewed?
- Was the exact feature inspected headlessly when access was available?
- Were irrelevant onboarding and developer overlays removed?
- Does the visual show what the feature produces, changes, or makes possible?
- Does it amplify the nearby copy instead of repeating it?
- Is the critical message legible at the actual destination size?
- Is whitespace focusing attention rather than hiding the explanation?
- Is the final visual faithful to verified product behavior?
- Is this the strongest use of the available visual space?

Use the showstopper test: if this were the only visual shown to a room of prospective buyers, would they understand the feature, believe the claim, and want the outcome? If not, investigate further and choose stronger evidence.
