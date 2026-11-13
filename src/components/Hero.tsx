import type { Profile } from "@app-types/typesPortfolio";
import { CmykText } from "@components/CmyText";
import { Tag } from "@components/Tag.tsx";

import "@styles/hero.css";
import { ImageFrame } from "./ImageFrame";

interface HeroProps {
  profile: Profile;
}

function Hero({ profile }: HeroProps) {
  return (
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero__text">
          <CmykText as="h1" text={profile.name} className="hero__title" />
        <p className="hero__role">{profile.role}</p>
        <p className="hero__location">{profile.location}</p>
        <p className="hero__summary">{profile.summary}</p>
        <ul className="hero__tools" aria-label="Herramientas">
          {profile.tools.map((t) => (
            <li key={t}>
              <Tag tone="accent">{t}</Tag>
            </li>
          ))}
        </ul>
        </div>
        <div className="hero__media">
        <ImageFrame image={profile.heroImage} />
      </div>
      </section>
  )
}

export default Hero