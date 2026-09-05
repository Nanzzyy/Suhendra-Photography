# Suhendra Photography design system audit

## Design read

Premium wedding photography portfolio for couples and planners, with a quiet editorial language and a monochrome gallery system with one muted terracotta accent.

Working dials: `DESIGN_VARIANCE 7`, `MOTION_INTENSITY 5`, `VISUAL_DENSITY 3`.

## Current-state audit

### What is working

- The single-page information architecture is clear: introduction, services, selected work, process, and contact.
- The photo-led composition is now the strongest brand asset, with curated real-photo references ready to be replaced by the studio's own work.
- The portfolio filter and lightbox provide useful interaction without needing a CMS yet.
- The Indonesian copy has a warm, attentive voice that fits wedding work.
- The page already uses local images, `next/image`, JSON-LD, metadata, skip navigation, focusable controls, and a responsive mobile menu.

### What is creating visual debt

- The page alternates between warm paper and large dark sections. That makes the brand feel like two separate systems instead of one gallery environment.
- Georgia, Helvetica, and several custom text treatments create a familiar luxury-template look. Typography needs a stronger, more deliberate pairing.
- Every major section uses a numbered eyebrow. The repeated `01 / 02 / 03` rhythm competes with the photographs and reads as decoration.
- The hero contains a vertical location note and an animated scroll cue. Both are ornamental and reduce the clarity of the first viewport.
- The previous portfolio tiles carried numbered circles, while the filter controls were rounded pills. The shape language was mixed and the numbered circles added gallery UI noise.
- The header listens to every scroll event to change state. The visual benefit is small, while the interaction is unnecessary for a simple one-page site.
- Visible copy contains em dashes and a few English production phrases that do not support the Indonesian brand voice.
- The contact and footer actions express the same contact intent with different labels. The primary action should be consistent.

## Proposed system

### Palette

Use a single dark gallery theme:

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#1f211d` | Page canvas and header |
| `--surface` | `#292c27` | Quiet section variation |
| `--paper` | `#f1efe9` | Primary text |
| `--muted` | `#aaa79f` | Secondary text |
| `--accent` | `#c87964` | One expressive accent for emphasis and actions |
| `--line` | `rgba(241, 239, 233, 0.16)` | Structural dividers |

The accent stays muted and appears consistently in the hero marker, service hover state, quote mark, and primary contact action. No gradients or extra status colors.

### Type

- `Manrope` for navigation, labels, body copy, and controls.
- `Cormorant Garamond` for large editorial headings and short reflective copy.
- Display type is expressive through scale and spacing, not mixed-font gimmicks.

### Shape and layout

- Sharp editorial geometry: `border-radius: 0` across controls, images, and panels.
- Content shell: `min(1380px, calc(100vw - 120px))`, with a 20px mobile gutter.
- Hero: asymmetric composition with text anchored left and a controlled line break for the long accent phrase.
- Services: an editorial card grid with real-photo placeholders; each card opens a focused pricelist dialog.
- Portfolio: three featured images followed by a horizontal story rail, not a standard masonry wall.
- Process: three quiet columns on desktop, a vertical list on mobile.
- Contact: split image and copy block, using the same dark theme as the rest of the page.

### Motion

- Keep the current entry reveals, but honor reduced motion and avoid scroll listeners.
- Use one restrained hero image scale-in and small transform feedback on links and buttons.
- No perpetual marquee, parallax, cursor replacement, or scroll hijacking.

## Implementation plan

### Pass 1: foundation and above-the-fold

- Lock the new tokens, font loading, page theme, header height, and hero composition.
- Remove decorative hero metadata and unify the primary contact label as `Konsultasi`.
- Replace the hand-drawn icon paths with one maintained icon family.

### Pass 2: content rhythm and gallery

- Remove repeated numbered section eyebrows.
- Rebuild services, selected work, process, and contact around the new spacing and shape rules.
- Keep the content, anchors, filter behavior, and lightbox behavior stable while moving imagery to curated internet sources.

### Pass 3: quality pass

- Test desktop and mobile layouts, keyboard focus, lightbox escape and arrow controls, and reduced motion.
- Run lint, typecheck, and production build.
- Confirm metadata, JSON-LD, alt text, and image loading remain intact.

## Acceptance criteria

- One visual theme with one accent color across the page.
- Hero headline and CTA fit the initial viewport on desktop and mobile.
- No visible em dashes, decorative scroll labels, or numbered section eyebrows.
- Primary contact action uses one label everywhere.
- No rounded control or gallery card mixed into the sharp editorial system.
- Existing portfolio filtering, lightbox navigation, mobile menu, and anchor links still work.
- Services are presented as photo cards and open their related pricelist in a keyboard-accessible dialog.
- Portfolio placeholders use real internet photo references and consistent tags such as `Wedding Bali`, `Wedding`, and `Pernikahan`.
- `npm run lint`, `npm run typecheck`, and `npm run build` pass.
