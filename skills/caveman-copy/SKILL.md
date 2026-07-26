---
name: caveman-copy
description: Write or rewrite brutally clear product and marketing copy at the requested scope. Use for one hero, one feature block, one section, one product elevator pitch, a CTA, supporting copy, or a small group of explicitly requested sections. Explains what something is, why it is different, what the customer gains, and the promised land without creating extra cards, sections, or pages. Requires Wordsmithing for final copy and conditionally invokes Product Visual Proof when visual work is included.
---

# Caveman Copy

Make the value obvious to an outsider.

“Caveman” is a metaphor for ruthless clarity. It does not mean broken grammar, primitive language, or unsophisticated writing. Write polished, confident copy with no interpretive burden.

## Scope lock

Match the requested unit exactly.

- If asked for one hero, write one hero.
- If asked for one feature block, write one feature block.
- If asked to fix one paragraph, fix one paragraph.
- If asked for several named sections, write only those sections.

Never invent a five-card sequence, landing page, site architecture, extra feature, or additional section unless the user requests it. Use `caveman-product-showcase` for the strict five-card format. Use `caveman-website-copy` for landing pages and websites.

## Required and conditional sub-skills

Use the Wordsmithing Skill for every final draft.

1. Build the product truth and selling argument with Caveman Copy.
2. Read `/Users/mikefilsaime/.claude/skills/wordsmithing-skill/SKILL.md` completely.
3. Apply Wordsmithing without changing the verified meaning, scope, or claims.
4. Complete its read-aloud pass before delivering or implementing copy.

When the task creates, selects, replaces, audits, or materially changes a supporting visual:

1. Read `/Users/mikefilsaime/.claude/skills/product-visual-proof/SKILL.md` completely.
2. Apply Product Visual Proof to investigate the real product and create or select the strongest evidence for the copy.
3. Do not invoke it for copy-only work or when words are deliberately the only proof.

The flow is:

```text
Caveman Copy
   ├──→ Wordsmithing (always)
   └──→ Product Visual Proof (when visuals are in scope)
```

## Establish product truth

Before writing, identify only what the requested copy unit needs:

- the audience;
- the recognizable product or feature category;
- the job it performs;
- the mechanism or advantage;
- the customer outcome;
- the verified proof or constraints.

Inspect available product documentation, code, screenshots, approved claims, and existing copy. Never invent a feature, metric, integration, result, testimonial, or promise.

## Select the operating mode

### Hero or elevator pitch

Answer in seconds:

> “What is this, what does it do, and why should I care?”

Communicate the category, core job, and primary outcome. A useful internal structure is:

> `[Product] is a [recognizable category] that [core job or mechanism], so [primary outcome].`

Do not force that sentence pattern. Pass the five-second test: a new visitor should be able to repeat what the product does after seeing the hero once.

### Feature block

Build one complete value chain:

1. **Feature** — what it has or does.
2. **Advantage** — how its mechanism is different or stronger.
3. **Benefit** — what the customer can now do, gain, or avoid.
4. **Promised land** — the benefit of the benefit: the better situation, confidence, freedom, identity, feeling, or business outcome.

Do not print these labels in the final copy unless requested. Carry the argument across the headline, support, payoff, proof, and visual.

### Supporting section or paragraph

Identify the section’s one job in the sales argument. Advance that idea directly. Do not restart the entire product pitch unless the section is the hero.

## Bridge every feature to value

Never leave the customer to translate a capability into a reason to care. Make the causal bridge explicit with natural phrasing such as:

- “so you can…”;
- “so you can finally…”;
- “what that really means is…”;
- “which means…”;
- “without…”;
- “instead of…”.

Vary the language. The logical bridge is mandatory; the literal phrase is not.

## Shape the requested copy unit

Use only the elements the context needs:

- **Eyebrow:** product, feature, or argument label.
- **Headline:** one clear, commercially meaningful idea.
- **Support:** feature plus mechanism or advantage.
- **Payoff:** benefit and promised land.
- **Proof:** a concrete product fact, example, component, or short list.
- **CTA:** the natural next action and what the visitor gets.

Prefer one strong idea over several diluted ideas.

## Supporting visuals

When visuals are in scope, use Product Visual Proof. Give it the verified claim, nearby copy, destination dimensions, responsive constraints, and preservation rules. Its visual must prove and amplify the copy without changing the copy's meaning or scope.

## Final quality gate

Do not deliver until every relevant answer is “yes”:

- Did the output stay inside the requested scope?
- Can an outsider understand the central idea immediately?
- Does the copy explain why the customer should care?
- Does every feature reach an advantage, benefit, and promised land?
- Is the “so that you can” bridge present in meaning?
- Are all claims accurate and verified?
- Does any supporting visual prove the argument?
- When visuals were in scope, did Product Visual Proof complete its investigation and verification workflow?
- Is the copy concise enough to scan and natural enough to say aloud?
- Has Wordsmithing been applied?
