# uselayouts

**A micro-interaction UI library for professionals.**

[uselayouts](https://uselayouts.com) provides free premium animated React components and micro-interactions built with Framer Motion and Tailwind CSS. Designed to integrate seamlessly with Shadcn UI, it helps you bring your interfaces to life with ease.
<br />
<br />
<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>

![uselayouts Banner](https://uselayouts.com/og.png)

## Why uselayouts?

People don’t fall in love with components. They fall in love with how something feels. uselayouts focuses on the fine details of interaction:

- **Premium Animations**: Built with Framer Motion for buttery smooth transitions.
- **Shadcn Compatible**: Designed to work with your existing Shadcn UI setup.
- **Micro-interactions**: Focused on the small details that make a big difference in UX.
- **Copy & Paste**: Easy to integrate into any React project.

## New: Sleek Animated Components Registry

We have expanded our registry with a comprehensive set of "Sleek" animated components and layout blocks, designed with a unified spring physics profile (Snappy, Smooth, Bouncy).

### Core Components (`registry/ui`)
- **AnimatedButton**: Magnetic, Shine, Loading Morph, Expandable Icon, 3D Press variants.
- **AnimatedInput**: OTP (Glow, Shake, Slide), Password Dot, Underline Draw, Theme Toggles.
- **SharedTabs**: Pill, Underline, Flipping, Staggered, Vertical Dock.
- **GooeyToast**: Stack, Swipe, Shrink, Pop, Dot variants.
- **BentoCard**: Glow, Expansion, Widget, Glass, Tilt variants.

### Layout Blocks (`registry/blocks`)
- **HeroReveal**: Text Mask, Parallax, Waitlist Morph, Video Split, Typewriter AI.
- **PricingSection**: Toggle, Tier Pop, Comparison Drop, Currency Slider, Staggered Entrance.
- **Sidebar**: Mac Dock, Glass Rail, Collapsible Accordion, User Profile Pop, Floating Command.
- **AuthMorph**: Transitioning Login/Sign-up block.

### Hooks (`registry/hooks`)
- **useMagnetic**: Physics logic for magnetic elements.
- **useMousePosition**: Mouse tracking for glow/parallax effects.

## Installation

You can add components to your project using the Shadcn CLI:

```bash
npx shadcn@latest add https://uselayouts.com/r/3d-book
```

Replace `3d-book` with any component name from our [documentation](https://uselayouts.com/docs/introduction).

## Development

If you'd like to run the documentation site locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/iurvish/uselayouts.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the static export and push it to the `gh-pages` branch.

## Registry Build

To build the component registry:

```bash
npm run build:registry
```

## Community

- **Website**: [uselayouts.com](https://uselayouts.com)
- **Twitter/X**: [@0xUrvish](https://x.com/0xUrvish)
- **GitHub**: [iurvish/uselayouts](https://github.com/iurvish/uselayouts)

## License

Built by [Urvish Mali](https://x.com/0xUrvish).
Licensed under the [MIT License](LICENSE).
