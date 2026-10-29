import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CirclePlay,
  Globe2,
  Heart,
  Instagram,
  Menu,
  Moon,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fitness-hero.jpg";
import fitnessMoments from "@/assets/fitness-moments.jpg";

const navigation = [
  { label: "Meet Sehat", href: "#experience" },
  { label: "The method", href: "#method" },
  { label: "Client stories", href: "#client-stories" },
  { label: "Programmes", href: "#membership" },
];

const pillars = [
  {
    name: "Strength",
    icon: Sparkles,
    detail:
      "Build strength for real life, one thoughtful movement at a time. Each day brings a fresh session you can follow from home.",
  },
  {
    name: "Calm",
    icon: Heart,
    detail:
      "Training should support your day, not add to its pressure. Move at your own pace, with room to find your rhythm again.",
  },
  {
    name: "Energy",
    icon: Zap,
    detail:
      "Your energy changes through the week. Flexible daily sessions help you choose a movement that feels right for today.",
  },
  {
    name: "Sleep",
    icon: Moon,
    detail:
      "Gentle movement and regular routines can create more space to unwind and recharge between workouts.",
  },
  {
    name: "Mindset",
    icon: ShieldCheck,
    detail:
      "Progress isn't all-or-nothing. Leave the ego at the door, come back for today's workout, celebrate the small wins, and build consistency at your pace.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your plan",
    copy: "Choose between direct one-to-one coaching and community-based guidance.",
  },
  {
    number: "02",
    title: "Get your daily workout",
    copy: "Get started with the programme details, support format and next steps clearly explained.",
  },
  {
    number: "03",
    title: "Show up tomorrow",
    copy: "Build consistency with the level of guidance and accountability you choose.",
  },
];

const storyCards = [
  { name: "Set a goal that matters to you", position: "story-frame--one" },
  { name: "Build habits you can repeat", position: "story-frame--two" },
  { name: "Track progress with purpose", position: "story-frame--three" },
  { name: "Keep learning and adjusting", position: "story-frame--four" },
];

const faqs = [
  {
    question: "What is the difference between the two programmes?",
    answer:
      "Personal Coaching is designed for individual guidance, WhatsApp coaching support and progress tracking. The Community programme offers shared learning, access to ask questions and the support included in its membership details.",
  },
  {
    question: "Do I need to be fit before I start?",
    answer:
      "No. Begin where you are and move at a pace that feels manageable for you. If you have health concerns or an injury, check with your healthcare professional before beginning a new routine.",
  },
  {
    question: "Do I need a gym or special equipment?",
    answer:
      "The sessions are designed to follow from home. Any equipment you'll need for a particular workout can be checked in the workout instructions.",
  },
  {
    question: "How does support work in each programme?",
    answer:
      "Personal Coaching includes individual progress tracking and WhatsApp support as agreed during onboarding. Community support is delivered through the programme format; it does not include the same level of one-to-one tracking.",
  },
  {
    question: "How much does the Community programme cost?",
    answer:
      "The current Community offer is shown as a one-time ₹2,999 payment for three months. Confirm the latest price, inclusions, payment process and cancellation terms before joining.",
  },
  {
    question: "Can everyone take part?",
    answer:
      "This program may not suit every body or health situation. Please read the full participation and health guidance before joining, and talk to your healthcare professional if you're unsure.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sehat Singh | Personal Fitness Coaching" },
      {
        name: "description",
        content:
          "Personal fitness coaching and a supportive fitness community with Sehat Singh. Choose the level of guidance that fits your goals.",
      },
      { property: "og:title", content: "Sehat Singh | Personal Fitness Coaching" },
      {
        property: "og:description",
        content:
          "Personal coaching, progress accountability and community-led fitness guidance from Sehat Singh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell" id="top">
      <div className="announcement">
        <div className="announcement__inner">
          <a className="announcement__label" href="#membership">
            <span className="announcement__dot" aria-hidden="true" />
            <span>COACHING THAT FITS YOUR GOALS</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <span className="announcement__note">Personal guidance or community support</span>
        </div>
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src={heroImage}
          alt="Sehat Singh, CA and fitness coach, speaking on stage"
          width={1920}
          height={1200}
          fetchPriority="high"
        />
        <div className="hero__veil" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Sehat Singh, home">
            <span className="wordmark__symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="wordmark__type">
              <span className="wordmark__name">sehat<span>singh</span></span>
              <span className="wordmark__sub">CA &amp; FITNESS COACH</span>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="nav__join" href="#membership" onClick={() => setMenuOpen(false)}>
              Join the movement <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>

          <Button
            className="menu-toggle"
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </header>

        <div className="hero__content">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__rule" />
            PERSONAL BRAND. REAL GUIDANCE.
          </span>
          <h1 id="hero-title">
            Your transformation
            <br />
            <em>starts with guidance.</em>
          </h1>
          <p className="hero__copy">
            Build better habits, train with purpose and stay consistent with a plan that fits your life.
            <br />
            Choose personal coaching or join the Sehat Singh Community.
          </p>
          <div className="hero__actions">
            <Button className="button-gold button-gold--large" asChild>
              <a href="#membership">
                Choose your coaching plan <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Button>
            <a className="text-link text-link--light" href="#experience">
              <span className="text-link__play"><CirclePlay size={33} aria-hidden="true" /></span>
              Meet Sehat Singh
            </a>
          </div>
          <a className="hero__scroll" href="#experience" aria-label="Scroll to discover Sehat Singh">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="hero__aside" aria-label="Your movement, your pace">
          <span className="hero__aside-line" />
          <span className="hero__aside-text">ONE HABIT<br />AT A TIME</span>
        </div>
      </section>

      <section className="intro section-wrap" id="experience" aria-labelledby="intro-title">
        <div className="section-heading">
          <span className="eyebrow"><span className="eyebrow__rule" />MEET YOUR COACH</span>
          <h2 id="intro-title">More than fitness advice.<br /><em>A coach in your corner.</em></h2>
          <p>Sehat Singh combines practical guidance, accountability and a community-minded approach to help you work towards your fitness goals.</p>
        </div>

        <div className="intro__grid">
          <article className="stat-panel">
            <div className="stat-panel__head">
              <span className="eyebrow eyebrow--light">A growing fitness community</span>
              <Globe2 size={20} aria-hidden="true" />
            </div>
            <div className="stat-panel__main">
              <span className="stat-panel__number">209K<span>+</span></span>
              <span className="stat-panel__label">Instagram followers</span>
            </div>
            <div className="stat-panel__foot">
              <div className="stat-mini">
                <span className="stat-mini__number">20</span>
                <span className="stat-mini__label">years of coaching<br />experience</span>
              </div>
              <div className="stat-mini">
                <span className="stat-mini__number">2,409</span>
                <span className="stat-mini__label">posts on habits,<br />ego &amp; health</span>
              </div>
            </div>
            <a className="stat-panel__link" href="#membership">
              Find the support that fits you <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>

          <div className="daily-panel">
            <div className="daily-panel__title">
              <span className="eyebrow eyebrow--light">Small steps. No app required.</span>
              <h3>Guidance that meets you where you are.</h3>
            </div>
            <ul className="daily-list">
              <li>
                <span className="daily-list__icon"><ArrowRight size={15} aria-hidden="true" /></span>
                <span><strong>Choose your programme</strong>Start with the level of support that suits your goals.</span>
              </li>
              <li>
                <span className="daily-list__icon"><CirclePlay size={15} aria-hidden="true" /></span>
                <span><strong>Get a practical plan</strong>Know what to focus on and how to keep moving forward.</span>
              </li>
              <li>
                <span className="daily-list__icon"><Heart size={15} aria-hidden="true" /></span>
                <span><strong>Build consistency</strong>Use guidance, accountability and community to stay on track.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits section-wrap" aria-labelledby="benefits-title">
        <div className="benefits__lead">
          <span className="eyebrow"><span className="eyebrow__rule" />YOUR KIND OF PROGRESS</span>
          <h2 id="benefits-title">Progress with<br /><em>the right support.</em></h2>
          <p>Your goals are personal. Your coaching should help you build realistic routines, understand the process and keep showing up.</p>
          <a className="text-link" href="#method">Explore the coaching approach <ArrowRight size={16} aria-hidden="true" /></a>
        </div>

        <div className="benefit-grid">
          <article className="benefit-card benefit-card--one">
            <span className="benefit-card__index">01 / MOVE</span>
            <div><h3>Find your strength</h3><p>Small, thoughtful steps toward a stronger you.</p></div>
          </article>
          <article className="benefit-card benefit-card--two">
            <span className="benefit-card__index">02 / BUILD</span>
            <div><h3>Move with confidence</h3><p>Build a practice that fits your life, right at home.</p></div>
          </article>
          <article className="benefit-card benefit-card--three">
            <span className="benefit-card__index">03 / RESTORE</span>
            <div><h3>Make room to move</h3><p>Gentle mobility to help you feel good in your body.</p></div>
          </article>
          <article className="benefit-card benefit-card--four">
            <span className="benefit-card__index">04 / REPEAT</span>
            <div><h3>Honor your recovery</h3><p>Rest and recovery are part of progress too.</p></div>
          </article>
        </div>
      </section>

      <section className="coach-band" aria-label="Daily live sessions and coaching">
        <div className="coach-band__inner">
          <div className="coach-band__quote">
            <span className="eyebrow eyebrow--light">GUIDANCE THAT GOES BEYOND A WORKOUT</span>
            <p>“You don’t need random advice. You need a plan you can follow.”</p>
            <span className="coach-band__byline">Sehat Singh <span>·</span> Fitness Coach</span>
          </div>
          <div className="coach-stats">
            <div className="coach-stat"><span className="coach-stat__number">1:1</span><span>personal guidance</span></div>
            <div className="coach-stat"><span className="coach-stat__number">Daily</span><span>progress accountability</span></div>
            <div className="coach-stat"><span className="coach-stat__number">Community</span><span>shared learning</span></div>
          </div>
        </div>
      </section>

      <section className="method section-wrap" id="method" aria-labelledby="method-title">
        <div className="method__intro">
          <span className="eyebrow"><span className="eyebrow__rule" />A MORE THOUGHTFUL PRACTICE</span>
          <h2 id="method-title">No one-size-fits-all advice.<br /><em>A more personal approach.</em></h2>
          <p>Good coaching starts with your goals, realistic habits and a plan you can sustain. These principles shape the way you approach progress.</p>
        </div>
        <div className="pillar-list">
          {pillars.map(({ name, icon: Icon, detail }) => (
            <details className="pillar-item" key={name}>
              <summary>
                <span className="pillar-item__icon"><Icon size={19} aria-hidden="true" /></span>
                <span className="pillar-item__name">{name}</span>
                <ChevronDown className="pillar-item__chevron" size={19} aria-hidden="true" />
              </summary>
              <p>{detail}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="join-steps section-wrap" aria-labelledby="steps-title">
        <div className="section-heading section-heading--center">
          <span className="eyebrow"><span className="eyebrow__rule" />MADE EASY TO BEGIN</span>
          <h2 id="steps-title">How to join?<br /><em>Just three steps.</em></h2>
          <p>Make one choice. Then we'll help you keep moving.</p>
        </div>
        <div className="steps-list">
          {steps.map((step, index) => (
            <article className={`step-card step-card--${index + 1}`} key={step.number}>
              <span className="step-card__number">{step.number}</span>
              <div className="step-card__body">
                <span className="eyebrow eyebrow--light">THE SEHAT SINGH WAY</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
              <ArrowUpRight className="step-card__arrow" size={21} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="stories section-wrap" aria-labelledby="stories-title">
        <div className="stories__heading">
          <div>
            <span className="eyebrow"><span className="eyebrow__rule" />YOUR JOURNEY, YOUR GOALS</span>
            <h2 id="stories-title">Your goals.<br /><em>Your next chapter.</em></h2>
          </div>
          <p>A stronger coaching experience starts by understanding where you are and what you want to work towards.</p>
        </div>
        <div className="stories__grid">
          {storyCards.map((story, index) => (
            <figure className={`story-frame ${story.position}`} key={story.name}>
              <img
                src={fitnessMoments}
                alt=""
                loading="lazy"
                width={1920}
                height={1408}
              />
              <figcaption><span>0{index + 1}</span>{story.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="client-proof section-wrap" id="client-stories" aria-labelledby="client-proof-title">
        <div className="section-heading">
          <span className="eyebrow"><span className="eyebrow__rule" />PROOF THAT BUILDS TRUST</span>
          <h2 id="client-proof-title">Real people.<br /><em>Real progress.</em></h2>
          <p>Every result has a person and a story behind it. This section is ready for client-approved transformations and testimonials—without inventing results or reviews.</p>
        </div>
        <div className="proof-grid">
          <article className="proof-card">
            <span className="proof-card__number">01 / TRANSFORMATION</span>
            <h3>Add an approved client story</h3>
            <p>Use a client-approved before-and-after photo, their starting goal, the journey duration and verified progress.</p>
            <span className="proof-card__note">Client photo and details required</span>
          </article>
          <article className="proof-card">
            <span className="proof-card__number">02 / TESTIMONIAL</span>
            <h3>Let clients share their experience</h3>
            <p>Add a real written or video testimonial describing what changed and what support helped them stay consistent.</p>
            <span className="proof-card__note">Approved client quote required</span>
          </article>
          <article className="proof-card">
            <span className="proof-card__number">03 / THE JOURNEY</span>
            <h3>Show progress beyond the scale</h3>
            <p>Highlight relevant habits, strength, consistency or other outcomes the client agrees to share. Avoid promising identical results.</p>
            <span className="proof-card__note">Verified details required</span>
          </article>
        </div>
      </section>

      <section className="membership" id="membership" aria-labelledby="membership-title">
        <div className="membership__inner membership__inner--programmes">
          <div className="membership__intro">
            <span className="eyebrow eyebrow--light"><span className="eyebrow__rule" />TWO WAYS TO WORK TOGETHER</span>
            <h2 id="membership-title">Choose the level of <em>guidance you need.</em></h2>
            <p>Want personal accountability or a supportive place to learn and ask questions? Choose the programme that fits your goals, schedule and preferred level of support.</p>
            <div className="membership__note"><span className="membership__note-dot" /> CLEAR SUPPORT LEVELS <span>·</span> YOUR GOALS FIRST</div>
          </div>

          <div className="programme-grid">
            <article className="offer-card offer-card--personal">
              <div className="offer-card__ribbon">PERSONAL ATTENTION</div>
              <span className="offer-card__duration">Programme 01 · One-to-one</span>
              <h3 className="programme-title">Sehat Singh Personal Coaching</h3>
              <p className="programme-summary">Personal guidance. Individual accountability. A plan built around you.</p>
              <ul className="offer-benefits">
                <li><Check size={16} aria-hidden="true" />Individual guidance based on your goals</li>
                <li><Check size={16} aria-hidden="true" />WhatsApp support for coaching questions</li>
                <li><Check size={16} aria-hidden="true" />Daily achievement and progress tracking</li>
                <li><Check size={16} aria-hidden="true" />Progress reviews and next-step guidance</li>
                <li><Check size={16} aria-hidden="true" />Nutrition and workout deliverables confirmed during onboarding</li>
              </ul>
              <p className="programme-best"><strong>Best for:</strong> People who value personal attention, structure and accountability.</p>
              <a className="button-gold button-gold--offer programme-cta" href="https://www.instagram.com/sehatsingh/" target="_blank" rel="noopener noreferrer">
                Ask about personal coaching <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="offer-card__details" href="#faq">Review common questions <MoveUpRight size={14} aria-hidden="true" /></a>
            </article>

            <article className="offer-card offer-card--community">
              <div className="offer-card__ribbon">LEARN TOGETHER</div>
              <span className="offer-card__duration">Programme 02 · Community access</span>
              <h3 className="programme-title">Sehat Singh Community</h3>
              <p className="programme-summary">Learn together. Ask questions. Keep moving forward.</p>
              <p className="offer-card__price" aria-label="₹2,999 rupees"><span>₹</span>2,999</p>
              <span className="offer-card__once">three-month pass · one-time payment</span>
              <ul className="offer-benefits">
                <li><Check size={16} aria-hidden="true" />Access to the Sehat Singh fitness community</li>
                <li><Check size={16} aria-hidden="true" />Ask questions in the programme's support format</li>
                <li><Check size={16} aria-hidden="true" />Learn from shared discussions and common challenges</li>
                <li><Check size={16} aria-hidden="true" />Daily workout links shared on WhatsApp</li>
                <li><Check size={16} aria-hidden="true" />Live sessions, as described in membership details</li>
              </ul>
              <p className="programme-best"><strong>Best for:</strong> People who want accessible guidance and community support rather than one-to-one tracking.</p>
              <Button className="button-gold button-gold--offer" asChild>
                <a href="#faq">Review membership details <ArrowRight size={17} aria-hidden="true" /></a>
              </Button>
              <a className="offer-card__details" href="#faq">Read membership FAQs <MoveUpRight size={14} aria-hidden="true" /></a>
            </article>
          </div>
        </div>
        <div className="membership__footer">
          <span>Start where you are. Build from there.</span>
          <span>Stay curious, <strong>Sehat Singh</strong></span>
        </div>
      </section>

      <section className="faq section-wrap" id="faq" aria-labelledby="faq-title">
        <div className="faq__intro">
          <span className="eyebrow"><span className="eyebrow__rule" />A FEW THINGS TO KNOW</span>
          <h2 id="faq-title">Good questions.<br /><em>Honest answers.</em></h2>
          <p>Everything you need to know before you make a little more room to move.</p>
          <span className="faq__seal"><Heart size={16} aria-hidden="true" /> Start where you are.</span>
        </div>
        <div className="faq__list">
          {faqs.map((item, index) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span className="faq-item__number">0{index + 1}</span>
                <span className="faq-item__question">{item.question}</span>
                <span className="faq-item__toggle" aria-hidden="true"><ChevronDown size={18} /></span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-cta">
          <span className="eyebrow eyebrow--light"><span className="eyebrow__rule" />YOUR NEXT STEP STARTS HERE</span>
          <h2>Choose the support<br /><em>that moves you forward.</em></h2>
          <Button className="button-gold button-gold--large" asChild>
            <a href="#membership">Choose your coaching plan <ArrowRight size={18} aria-hidden="true" /></a>
          </Button>
          <a
            className="footer-cta__social"
            href="https://www.instagram.com/sehatsingh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} aria-hidden="true" /> Follow @sehatsingh
          </a>
        </div>
        <div className="footer-bottom">
          <a className="wordmark wordmark--footer" href="#top" aria-label="Sehat Singh, back to top">
            <span className="wordmark__symbol" aria-hidden="true"><span /><span /><span /></span>
            <span className="wordmark__type">
              <span className="wordmark__name">sehat<span>singh</span></span>
              <span className="wordmark__sub">CA &amp; FITNESS COACH</span>
            </span>
          </a>
          <span className="footer-bottom__copyright">© {new Date().getFullYear()} SEHAT SINGH</span>
          <a className="footer-bottom__top" href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}