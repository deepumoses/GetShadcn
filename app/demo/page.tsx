"use client"

import React from "react"
import { motion } from "motion/react"
import { HyperText } from "@/registry/ui/hyper-text"
import { TypingAnimation } from "@/registry/ui/typing-animation"
import { TextReveal } from "@/registry/ui/text-reveal"
import { SparklesText } from "@/registry/ui/sparkles-text"
import { MorphingText } from "@/registry/ui/morphing-text"
import { SpinningText } from "@/registry/ui/spinning-text"
import { AnimatedGradientText } from "@/registry/ui/animated-gradient-text"
import { TextAnimate } from "@/registry/ui/text-animate"
import { WordRotate } from "@/registry/ui/word-rotate"
import { NumberTicker } from "@/registry/ui/number-ticker"
import { Meteors } from "@/registry/ui/meteors"
import { GridPattern } from "@/registry/ui/grid-pattern"
import { DotPattern } from "@/registry/ui/dot-pattern"
import { RetroGrid } from "@/registry/ui/retro-grid"
import { Ripple } from "@/registry/ui/ripple"
import { NeonGradientCard } from "@/registry/ui/neon-gradient-card"
import { MagicCard } from "@/registry/ui/magic-card"
import { Marquee } from "@/registry/ui/marquee"
import { TweetCard } from "@/registry/ui/tweet-card"
import { BentoGrid, BentoGridItem } from "@/registry/ui/bento-grid"
import { Dock, DockIcon } from "@/registry/ui/dock"
import { Globe } from "@/registry/ui/globe"
import { IconCloud } from "@/registry/ui/icon-cloud"
import { HeroVideoDialog } from "@/registry/ui/hero-video-dialog"
import { ScrollBasedVelocity } from "@/registry/ui/scroll-based-velocity"
import { Terminal, AnimatedSpan, TerminalTypingAnimation } from "@/registry/ui/terminal"
import { BlurFade } from "@/registry/ui/blur-fade"
import { BorderBeam } from "@/registry/ui/border-beam"
import { ShineBorder } from "@/registry/ui/shine-border"
import { RainbowButton } from "@/registry/ui/rainbow-button"
import { PulsatingButton } from "@/registry/ui/pulsating-button"
import { InteractiveHoverButton } from "@/registry/ui/interactive-hover-button"
import { AnimatedShinyText } from "@/registry/ui/animated-shiny-text"
import { Confetti } from "@/registry/ui/confetti"
import { Particles } from "@/registry/ui/particles"
import { Lens } from "@/registry/ui/lens"
import { Pointer } from "@/registry/ui/pointer"
import { SmoothCursor } from "@/registry/ui/smooth-cursor"
import { OrbitingCircles } from "@/registry/ui/orbiting-circles"
import { AvatarCircles } from "@/registry/ui/avatar-circles"
import { AnimatedBeam } from "@/registry/ui/animated-beam"
import { AnimatedList, AnimatedListItem } from "@/registry/ui/animated-list"
import { AnimatedCircularProgressBar } from "@/registry/ui/animated-circular-progress-bar"
import { Highlighter } from "@/registry/ui/highlighter"
import { CardSpotlight } from "@/registry/ui/card-spotlight"
import { HoverEffect } from "@/registry/ui/card-hover-effect"
import { DirectionAwareHover } from "@/registry/ui/direction-aware-hover"
import { InfiniteMovingCards } from "@/registry/ui/infinite-moving-cards"
import { StickyScroll } from "@/registry/ui/sticky-scroll-reveal"
import { CanvasRevealEffect } from "@/registry/ui/canvas-reveal-effect"
import { ContainerScroll } from "@/registry/ui/container-scroll-animation"
import { PinContainer } from "@/registry/ui/3d-pin"
import { TextGenerateEffect } from "@/registry/ui/text-generate-effect"
import { ImagesSlider } from "@/registry/ui/images-slider"
import { Tabs } from "@/registry/ui/animated-tabs"
import { TracingBeam } from "@/registry/ui/tracing-beam"
import { Button as MovingBorderButton } from "@/registry/ui/moving-border"
import { BackgroundGradient } from "@/registry/ui/background-gradient"
import { BackgroundGradientAnimation } from "@/registry/ui/background-gradient-animation"
import { BackgroundBeams } from "@/registry/ui/background-beams"
import { BackgroundBeamsWithCollision } from "@/registry/ui/background-beams-with-collision"
import { GoogleGeminiEffect } from "@/registry/ui/google-gemini-effect"
import { Vortex } from "@/registry/ui/vortex"
import { WavyBackground } from "@/registry/ui/wavy-background"
import { LampContainer } from "@/registry/ui/lamp"
import { SparklesCore } from "@/registry/ui/sparkles"
import { TextHoverEffect } from "@/registry/ui/text-hover-effect"
import { MultiStepLoader } from "@/registry/ui/multi-step-loader"
import { Sidebar, SidebarBody, SidebarLink } from "@/registry/ui/sidebar"
import { LayoutGrid } from "@/registry/ui/layout-grid"
import { ParallaxScroll } from "@/registry/ui/parallax-scroll"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

export default function DemoPage() {
  const [hovering, setHovering] = React.useState(false)

  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <div className="mx-auto max-w-7xl space-y-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">New Components Demo</h1>
          <p className="mt-4 text-muted-foreground">Showcasing 50 new MagicUI components</p>
        </header>

        {/* Text Animations */}
        <section>
          <h2 className="mb-8 text-2xl font-bold border-b pb-2">Text Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Hyper Text</h3>
              <HyperText>Hyper Text Animation</HyperText>
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Typing Animation</h3>
              <TypingAnimation>Typing Animation Demo</TypingAnimation>
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Sparkles Text</h3>
              <SparklesText>Sparkles Text</SparklesText>
            </div>
            <div className="space-y-2 border p-4 rounded-lg h-32 flex flex-col">
              <h3 className="font-semibold">Morphing Text</h3>
              <MorphingText texts={["Morphing", "Text", "Demo"]} />
            </div>
            <div className="space-y-2 border p-4 rounded-lg h-32 flex flex-col">
              <h3 className="font-semibold">Spinning Text</h3>
              <SpinningText>Spinning Text Demo •</SpinningText>
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Animated Gradient Text</h3>
              <AnimatedGradientText>Gradient Text</AnimatedGradientText>
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Text Animate</h3>
              <TextAnimate>Text Animate Demo</TextAnimate>
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Word Rotate</h3>
              <WordRotate words={["Word", "Rotate", "Demo"]} />
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Number Ticker</h3>
              <p className="text-4xl font-bold"><NumberTicker value={100} /></p>
            </div>
             <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Animated Shiny Text</h3>
              <AnimatedShinyText>Shiny Text</AnimatedShinyText>
            </div>
             <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Text Generate Effect</h3>
              <TextGenerateEffect words="Text Generate Effect Demo" />
            </div>
             <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Text Hover Effect</h3>
              <TextHoverEffect text="HOVER" />
            </div>
          </div>
        </section>

        {/* Visual Effects */}
        <section>
          <h2 className="mb-8 text-2xl font-bold border-b pb-2">Visual Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 w-full overflow-hidden rounded-lg border bg-slate-900 p-4">
              <h3 className="relative z-10 text-white font-semibold">Meteors</h3>
              <Meteors />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Grid Pattern</h3>
              <GridPattern />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Dot Pattern</h3>
              <DotPattern />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg border bg-slate-900 p-4">
              <h3 className="relative z-10 text-white font-semibold">Retro Grid</h3>
              <RetroGrid />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Ripple</h3>
              <Ripple />
            </div>
             <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Particles</h3>
              <Particles className="absolute inset-0" quantity={100} />
            </div>
             <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Background Beams</h3>
              <BackgroundBeams />
            </div>
             <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Background Gradient Animation</h3>
              <BackgroundGradientAnimation />
            </div>
             <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Wavy Background</h3>
              <WavyBackground className="max-w-4xl mx-auto pb-40">
                <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                  Wavy Background
                </p>
              </WavyBackground>
            </div>
             <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Lamp</h3>
              <LampContainer>
                <motion.h1
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                  Lamp Effect
                </motion.h1>
              </LampContainer>
            </div>
             <div className="relative h-64 w-full overflow-hidden rounded-lg border p-4">
              <h3 className="relative z-10 font-semibold">Sparkles Core</h3>
              <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#000000"
                />
            </div>
          </div>
        </section>

        {/* Buttons & Interactive */}
        <section>
          <h2 className="mb-8 text-2xl font-bold border-b pb-2">Buttons & Interactive</h2>
          <div className="flex flex-wrap gap-8">
            <RainbowButton>Rainbow Button</RainbowButton>
            <PulsatingButton>Pulsating Button</PulsatingButton>
            <InteractiveHoverButton text="Hover Me" />
            <MovingBorderButton>Moving Border</MovingBorderButton>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="mb-8 text-2xl font-bold border-b pb-2">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NeonGradientCard className="h-64 flex items-center justify-center">
              <span>Neon Gradient Card</span>
            </NeonGradientCard>
            <MagicCard className="h-64 flex items-center justify-center">
              <span>Magic Card</span>
            </MagicCard>
            <TweetCard id="1668408059125702661" />
            <CardSpotlight className="h-64 w-full">
               <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Card Spotlight
              </p>
            </CardSpotlight>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Background Gradient
              </p>
            </BackgroundGradient>
             <div className="h-[20rem] w-full flex items-center justify-center ">
                <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      Aceternity UI
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        Customizable Tailwind CSS and Framer Motion Components.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </div>
          </div>
        </section>

        {/* Complex Layouts */}
        <section>
          <h2 className="mb-8 text-2xl font-bold border-b pb-2">Complex Layouts</h2>
          <div className="space-y-12">
            <div className="border p-4 rounded-lg overflow-hidden">
                <h3 className="font-semibold mb-4">Marquee</h3>
                <Marquee>
                    {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item) => (
                        <div key={item} className="mx-4 p-4 border rounded bg-secondary">{item}</div>
                    ))}
                </Marquee>
            </div>

            <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Bento Grid</h3>
                <BentoGrid>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <BentoGridItem
                            key={i}
                            title={`Item ${i}`}
                            description="Description here"
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>

            <div className="border p-4 rounded-lg h-96 flex flex-col justify-end pb-8">
                <h3 className="font-semibold mb-auto">Dock</h3>
                <Dock>
                    <DockIcon>H</DockIcon>
                    <DockIcon>A</DockIcon>
                    <DockIcon>B</DockIcon>
                    <DockIcon>C</DockIcon>
                </Dock>
            </div>

            <div className="border p-4 rounded-lg h-[500px] relative overflow-hidden">
                <h3 className="font-semibold absolute top-4 left-4 z-10">Globe</h3>
                <Globe className="mt-20" />
            </div>

            <div className="border p-4 rounded-lg h-[500px] flex items-center justify-center">
                <IconCloud iconSlugs={slugs} />
            </div>

            <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Terminal</h3>
                <Terminal>
                    <TerminalTypingAnimation>npm install magic-ui</TerminalTypingAnimation>
                    <AnimatedSpan delay={1500}>Installing dependencies...</AnimatedSpan>
                    <AnimatedSpan delay={2500}>Success!</AnimatedSpan>
                </Terminal>
            </div>
             <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Hover Effect</h3>
                <HoverEffect items={[{ title: "Netflix", description: "A streaming service", link: "https://netflix.com" }, { title: "Google", description: "A search engine", link: "https://google.com" }, { title: "Meta", description: "A social media company", link: "https://meta.com" }]} />
            </div>
             <div className="border p-4 rounded-lg h-96">
                <h3 className="font-semibold mb-4">Infinite Moving Cards</h3>
                <InfiniteMovingCards items={[{ quote: "To be or not to be", name: "William Shakespeare", title: "Hamlet" }]} direction="right" speed="slow" />
            </div>
             <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Sticky Scroll Reveal</h3>
                <StickyScroll content={[{ title: "Collaboration", description: "Work together in real time.", content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">Collaboration</div> }]} />
            </div>
             <div className="border p-4 rounded-lg h-96">
                <h3 className="font-semibold mb-4">Canvas Reveal Effect</h3>
                <CanvasRevealEffect />
            </div>
             <div className="border p-4 rounded-lg h-[800px] overflow-hidden">
                <h3 className="font-semibold mb-4">Container Scroll Animation</h3>
                <ContainerScroll titleComponent={<h1 className="text-4xl font-semibold text-black dark:text-white">Unleash the power of <br /><span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">Scroll Animations</span></h1>}>
                  <div className="h-full w-full bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
                    Scroll to see animation
                  </div>
                </ContainerScroll>
            </div>
             <div className="border p-4 rounded-lg h-96">
                <h3 className="font-semibold mb-4">Images Slider</h3>
                <ImagesSlider images={["https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -80,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                  >
                    <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                      The hero section slideshow <br /> nobody asked for
                    </motion.p>
                    <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                      <span>Join now →</span>
                      <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button>
                  </motion.div>
                </ImagesSlider>
            </div>
             <div className="border p-4 rounded-lg h-96">
                <h3 className="font-semibold mb-4">Tabs</h3>
                <Tabs tabs={[{ title: "Product", value: "product", content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"><p>Product Tab</p></div> }, { title: "Services", value: "services", content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"><p>Services Tab</p></div> }]} />
            </div>
             <div className="border p-4 rounded-lg h-96 overflow-y-auto">
                <h3 className="font-semibold mb-4">Tracing Beam</h3>
                <TracingBeam className="px-6">
                  <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    <div className="mb-10">
                      <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">Badge</h2>
                      <p className="text-xl mb-4">Lorem ipsum dolor sit amet.</p>
                      <p className="text-sm prose prose-sm dark:prose-invert">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                    <div className="mb-10">
                      <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">Badge 2</h2>
                      <p className="text-xl mb-4">Lorem ipsum dolor sit amet.</p>
                      <p className="text-sm prose prose-sm dark:prose-invert">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                  </div>
                </TracingBeam>
            </div>
             <div className="border p-4 rounded-lg h-96">
                <h3 className="font-semibold mb-4">Google Gemini Effect</h3>
                <GoogleGeminiEffect pathLengths={[0, 0, 0, 0, 0]} />
            </div>
             <div className="border p-4 rounded-lg h-96">
                <h3 className="font-semibold mb-4">Vortex</h3>
                <Vortex>
                  <div className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                      The hell is this?
                    </h2>
                    <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                      This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
                      burned and you&apos;ll have a scar.
                    </p>
                  </div>
                </Vortex>
            </div>
             <div className="border p-4 rounded-lg h-96">
                <h3 className="font-semibold mb-4">Multi Step Loader</h3>
                <MultiStepLoader loadingStates={[{ text: "Buying a condo" }, { text: "Travelling in a flight" }, { text: "Meeting Tyler Durden" }]} loading={true} duration={2000} />
            </div>
             <div className="border p-4 rounded-lg h-[60vh]">
                <h3 className="font-semibold mb-4">Sidebar</h3>
                <Sidebar>
                  <div className="flex flex-col gap-2">
                    <SidebarLink link={{ label: "Dashboard", href: "#" }} />
                    <SidebarLink link={{ label: "Settings", href: "#" }} />
                  </div>
                </Sidebar>
            </div>
             <div className="border p-4 rounded-lg h-[600px]">
                <h3 className="font-semibold mb-4">Layout Grid</h3>
                <LayoutGrid cards={[{ id: 1, content: <p className="font-bold text-4xl text-white">House in the woods</p>, className: "md:col-span-2", thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, { id: 2, content: <p className="font-bold text-4xl text-white">House above the clouds</p>, className: "col-span-1", thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }]} />
            </div>
             <div className="border p-4 rounded-lg h-[600px]">
                <h3 className="font-semibold mb-4">Parallax Scroll</h3>
                <ParallaxScroll images={["https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80", "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80"]} />
            </div>
          </div>
        </section>

        {/* Other Utilities */}
        <section>
          <h2 className="mb-8 text-2xl font-bold border-b pb-2">Other Utilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2 border p-4 rounded-lg relative overflow-hidden">
              <h3 className="font-semibold">Blur Fade</h3>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                  <BlurFade key={i} delay={i * 0.1}>
                    <div className="h-20 w-20 bg-primary/20 rounded" />
                  </BlurFade>
                ))}
              </div>
            </div>
            <div className="space-y-2 border p-4 rounded-lg relative overflow-hidden h-40">
              <h3 className="font-semibold">Border Beam</h3>
              <BorderBeam />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Shine Border</h3>
              <ShineBorder className="bg-background">Shine Border</ShineBorder>
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Confetti</h3>
              <Confetti manualstart={true}>
                <button>Click for Confetti</button>
              </Confetti>
            </div>
            <div className="space-y-2 border p-4 rounded-lg relative h-40">
              <h3 className="font-semibold">Lens</h3>
              <Lens>
                <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white">
                  Hover to see lens effect
                </div>
              </Lens>
            </div>
            <div className="space-y-2 border p-4 rounded-lg relative h-40">
              <h3 className="font-semibold">Pointer</h3>
              <Pointer>
                <div className="h-full w-full bg-slate-100 rounded-lg p-4">
                  Hover for custom pointer
                </div>
              </Pointer>
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Smooth Cursor</h3>
              <SmoothCursor />
              <p>Move mouse to see custom cursor (might need to hide default cursor in CSS)</p>
            </div>
            <div className="space-y-2 border p-4 rounded-lg h-64 relative flex items-center justify-center overflow-hidden">
              <h3 className="font-semibold absolute top-4 left-4">Orbiting Circles</h3>
              <OrbitingCircles radius={80}>
                <div className="h-8 w-8 bg-blue-500 rounded-full" />
              </OrbitingCircles>
              <OrbitingCircles radius={40} reverse speed={2}>
                <div className="h-4 w-4 bg-red-500 rounded-full" />
              </OrbitingCircles>
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Avatar Circles</h3>
              <AvatarCircles numPeople={10} avatarUrls={["https://avatars.githubusercontent.com/u/16860528", "https://avatars.githubusercontent.com/u/20110627", "https://avatars.githubusercontent.com/u/106103625", "https://avatars.githubusercontent.com/u/59228569"]} />
            </div>
            <div className="space-y-2 border p-4 rounded-lg h-32 flex items-center justify-center">
              <h3 className="font-semibold mr-4">Animated Circular Progress</h3>
              <AnimatedCircularProgressBar value={75} />
            </div>
            <div className="space-y-2 border p-4 rounded-lg">
              <h3 className="font-semibold">Highlighter</h3>
              <p>
                This is a <Highlighter>highlighted</Highlighter> text example.
              </p>
            </div>
             <div className="space-y-2 border p-4 rounded-lg h-32 flex items-center justify-center relative overflow-hidden">
                <h3 className="font-semibold absolute top-4 left-4">Direction Aware Hover</h3>
                <DirectionAwareHover imageUrl="https://images.unsplash.com/photo-1663765970236-f2fc676869c6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                  <p className="font-bold text-xl">In the mountains</p>
                  <p className="font-normal text-sm">$1299 / night</p>
                </DirectionAwareHover>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
