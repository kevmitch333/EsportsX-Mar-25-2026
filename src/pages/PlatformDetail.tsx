import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Handshake,
  Network,
  Sparkles,
} from 'lucide-react';
import { getPlatform, platforms } from '../platformData';

function SignalMedia({ accent, short, code, icon, bullets }: { accent: string; short: string; code: string; icon: React.ReactNode; bullets: string[] }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
      <div className="signal-grid absolute inset-0 opacity-[.2]" />
      <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute right-10 top-10 h-40 w-40 rounded-full border" style={{ borderColor: `${accent}55` }} />
      <div className="absolute bottom-[-20%] left-[-10%] h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: `${accent}18` }} />
      <div className="absolute left-8 top-8 font-mono text-[8px] uppercase tracking-[.28em] text-white/25">EsportsX / {code}</div>
      <div className="absolute right-8 top-8 rounded-xl border border-white/10 bg-black/35 p-3" style={{ color: accent }}>{icon}</div>

      <div className="absolute inset-x-8 bottom-8">
        <div className="font-display text-[clamp(4rem,8vw,7rem)] uppercase leading-[.8] tracking-tight" style={{ color: accent }}>{short}</div>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {bullets.slice(0, 4).map((item, index) => (
            <div key={item} className="flex items-center gap-2 border-t border-white/10 pt-2 font-mono text-[7px] uppercase tracking-[.15em] text-white/35">
              <span style={{ color: accent }}>0{index + 1}</span><span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PlatformDetail() {
  const { id } = useParams();
  const platform = getPlatform(id);

  useEffect(() => {
    if (platform) document.title = `${platform.name} — EsportsX`;
    window.scrollTo(0, 0);
  }, [platform]);

  if (!platform) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-brand-black px-6 text-center text-white">
        <div className="font-display text-5xl uppercase">Platform not found.</div>
        <Link to="/explore" className="mt-6 font-mono text-[10px] uppercase tracking-[.2em] text-brand-green">Return to the portfolio explorer</Link>
      </div>
    );
  }

  const others = platforms.filter((item) => item.id !== platform.id);

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white grain-overlay">
      <div className="scanline" />
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/90 px-6 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link to="/" className="font-display text-2xl tracking-wider">ESPORTS<span className="text-brand-green">X</span></Link>
          <div className="flex items-center gap-5">
            <Link to="/explore" className="hidden font-mono text-[9px] uppercase tracking-[.18em] text-white/40 transition hover:text-brand-green sm:block">Portfolio Explorer</Link>
            <Link to="/" className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-white/40 transition hover:text-brand-green"><ArrowLeft className="h-4 w-4" /> Home</Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden border-b border-white/5 px-6 py-16 md:px-10 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,.04),transparent_40%)]" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[.3em]" style={{ color: platform.accent }}>/ {platform.eyebrow}</div>
              <h1 className="mt-7 font-display text-[clamp(5rem,10vw,9.5rem)] uppercase leading-[.82] tracking-tight">{platform.name}</h1>
              <p className="mt-7 max-w-3xl text-2xl leading-tight text-white/80 md:text-3xl">{platform.hero}</p>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/50">{platform.description}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href={`mailto:info@esportsx.com?subject=${encodeURIComponent(platform.emailSubject)}`} className="inline-flex items-center gap-3 rounded-full px-7 py-3 font-mono text-[9px] font-bold uppercase tracking-[.18em] text-black transition hover:bg-white" style={{ backgroundColor: platform.accent }}>{platform.cta}<ArrowRight className="h-4 w-4" /></a>
                <Link to="/explore" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[9px] uppercase tracking-[.18em] text-white/60 transition hover:border-white/30 hover:text-white">Compare platforms<ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <SignalMedia accent={platform.accent} short={platform.short} code={platform.code} icon={platform.icon} bullets={platform.focus} />
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[.28em]" style={{ color: platform.accent }}>/ Strategic role</div>
                <h2 className="mt-5 font-display text-5xl uppercase leading-none md:text-7xl">What This Platform Is Built To Do.</h2>
                <p className="mt-7 border-l-2 pl-5 text-xl leading-relaxed text-white/65" style={{ borderColor: platform.accent }}>{platform.thesis}</p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {platform.focus.map((item, index) => (
                  <div key={item} className="bg-brand-black p-5">
                    <div className="flex items-center justify-between gap-4"><Check className="h-4 w-4" style={{ color: platform.accent }} /><span className="font-mono text-[8px] text-white/15">{String(index + 1).padStart(2, '0')}</span></div>
                    <div className="mt-6 font-display text-2xl uppercase">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[.018] px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_.55fr] lg:items-end">
              <div><div className="font-mono text-[9px] uppercase tracking-[.28em]" style={{ color: platform.accent }}>/ Program architecture</div><h2 className="mt-5 font-display text-5xl uppercase leading-none md:text-7xl">Ways This Can Come To Life.</h2></div>
              <p className="text-sm leading-relaxed text-white/40">The platform is designed as a flexible operating layer: programming can take the form of pilots, events, education, partnerships, market-entry initiatives, or other structured collaborations.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {platform.programs.map((program, index) => (
                <div key={program.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-black p-7 transition hover:-translate-y-1 hover:border-white/20">
                  <div className="absolute right-4 top-0 font-display text-8xl leading-none opacity-[.035]" style={{ color: platform.accent }}>0{index + 1}</div>
                  <Sparkles className="h-5 w-5" style={{ color: platform.accent }} />
                  <h3 className="mt-8 font-display text-3xl uppercase">{program.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/45">{program.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[.28em]" style={{ color: platform.accent }}>/ Who belongs here</div>
              <h2 className="mt-5 font-display text-5xl uppercase leading-none md:text-7xl">A Platform Built Around Multiple Stakeholders.</h2>
              <div className="mt-8 flex flex-wrap gap-2">{platform.audiences.map((item) => <span key={item} className="rounded-full border border-white/10 px-4 py-2 font-mono text-[8px] uppercase tracking-[.15em] text-white/45">{item}</span>)}</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[.02] p-7 md:p-9">
              <div className="flex items-center gap-3"><Network className="h-5 w-5" style={{ color: platform.accent }} /><div className="font-mono text-[8px] uppercase tracking-[.2em] text-white/30">How EsportsX works with the opportunity</div></div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[['01','Define the fit','Clarify the audience, opportunity, market, and desired outcome.'],['02','Shape the activation','Turn the opportunity into a pilot, program, event, partnership, or platform concept.'],['03','Build the path','Connect the work to partners, operating resources, and a commercialization pathway.']].map(([num,title,copy]) => <div key={num} className="border-t border-white/10 pt-5"><div className="font-mono text-[8px]" style={{ color: platform.accent }}>{num}</div><h3 className="mt-5 font-display text-2xl uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/40">{copy}</p></div>)}
              </div>
              <a href={`mailto:info@esportsx.com?subject=${encodeURIComponent(platform.emailSubject)}`} className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 font-mono text-[9px] uppercase tracking-[.18em] text-white/70 transition hover:text-white" style={{ borderColor: `${platform.accent}66` }}><Handshake className="h-4 w-4" /> Start a collaboration</a>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-5"><div><div className="font-mono text-[8px] uppercase tracking-[.22em] text-white/25">Explore the ecosystem</div><h2 className="mt-2 font-display text-4xl uppercase">Other EsportsX entry points</h2></div><Link to="/explore" className="hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[.16em] text-brand-green sm:flex">Open explorer <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((item) => <Link key={item.id} to={`/platform/${item.id}`} className="rounded-2xl border border-white/10 p-5 transition hover:-translate-y-1 hover:border-white/25"><div className="flex items-center justify-between"><div className="rounded-lg border border-white/10 p-2" style={{ color: item.accent }}>{item.icon}</div><span className="font-mono text-[8px] text-white/20">{item.code}</span></div><div className="mt-6 font-display text-2xl uppercase">{item.name}</div><div className="mt-2 font-mono text-[7px] uppercase tracking-[.14em] text-white/25">{item.eyebrow}</div></Link>)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
