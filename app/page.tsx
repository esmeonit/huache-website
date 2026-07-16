import Link from "next/link";
import PowerFlow from "@/components/PowerFlow";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ContactBand from "@/components/ContactBand";
import PlatformMedia from "@/components/PlatformMedia";
import { engineeringSteps, industries, platforms, products, solutions, technologies } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="home-hero container">
        <Reveal className="hero-copy">
          <p className="eyebrow">CORE SYSTEMS FOR SPECIAL-PURPOSE EQUIPMENT</p>
          <h1>特种装备<br /><span>核心系统。</span></h1>
          <p className="hero-lead">我们设计动力系统、嵌入式控制和智能移动平台，让非标装备可靠地完成任务。</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/products">查看产品与平台</Link>
            <Link className="text-button" href="/contact#project-inquiry">联系工程师 <span>↗</span></Link>
          </div>
          <div className="hero-proof">
            <span>硬件开发</span><span>嵌入式软件</span><span>系统集成</span>
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.08}><PowerFlow /></Reveal>
      </section>

      <section className="statement-section container">
        <Reveal>
          <p className="eyebrow">WHAT WE BUILD</p>
          <h2>不靠概念交付。<br />靠系统把设备做出来。</h2>
          <p>从需求定义、架构设计、控制器开发，到样机联调和工程资料，我们负责关键系统，也尊重明确的项目边界。</p>
        </Reveal>
      </section>

      <section className="content-section container">
        <SectionTitle eyebrow="SOLUTIONS" title="先解决任务，再选择产品。" copy="按客户最终要实现的目标组织方案，而不是把零散部件堆在一起。" />
        <div className="solution-grid">
          {solutions.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Link className="solution-card glass-panel" href="/solutions">
                <span className="card-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className="card-link">了解方案 ↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-section container">
        <SectionTitle eyebrow="PLATFORMS" title="可复用的平台，缩短定制开发。" copy="平台不是固定整机，而是一套经过沉淀的架构、模块、接口和工程方法。" />
        <div className="platform-grid">
          {platforms.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Link className={`platform-card glass-panel${item.media ? " has-media" : ""}`} href="/products#platforms">
                {item.media && <PlatformMedia media={item.media} compact />}
                <div className="platform-card-body">
                  <span className="platform-code">{item.code}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="chip-row">{item.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link className="section-link" href="/products#platforms">查看全部系统平台 <span>→</span></Link>
      </section>

      <section className="content-section container">
        <SectionTitle eyebrow="PRODUCT CENTER" title="可以单独交付，也可以进入系统。" copy="控制器、配电、驱动与底盘产品围绕同一套系统架构设计。" />
        <div className="product-strip">
          {products.slice(0, 4).map((item) => (
            <article className="product-mini" key={item.title}>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <Link className="section-link" href="/products#products">进入产品中心 <span>→</span></Link>
      </section>

      <section className="content-section container stack-section">
        <SectionTitle eyebrow="TECHNOLOGY STACK" title="软硬件协同的工程技术栈。" />
        <div className="stack-list">
          {technologies.map(([index, title, copy], position) => (
            <Reveal key={title} delay={position * 0.04}>
              <Link className="stack-row" href="/about#capabilities">
                <span>{index}</span><h3>{title}</h3><p>{copy}</p><b>↗</b>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link className="section-link" href="/about#capabilities">查看核心研发能力 <span>→</span></Link>
      </section>

      <section className="content-section container">
        <SectionTitle eyebrow="INDUSTRIES" title="同一套能力，服务不同任务。" />
        <div className="industry-grid">
          {industries.map(([title, copy], index) => (
            <Reveal key={title} delay={(index % 4) * 0.04}>
              <article className="industry-card glass-panel"><h3>{title}</h3><p>{copy}</p></article>
            </Reveal>
          ))}
        </div>
        <Link className="section-link" href="/solutions#industries">查看全部行业应用 <span>→</span></Link>
      </section>

      <section className="content-section container">
        <SectionTitle eyebrow="ENGINEERING SERVICE" title="从需求到交付，过程必须可检查。" />
        <ol className="process-line">
          {engineeringSteps.map(([index, title, copy]) => (
            <li key={title}><span>{index}</span><h3>{title}</h3><p>{copy}</p></li>
          ))}
        </ol>
        <Link className="section-link" href="/support">查看服务与支持 <span>→</span></Link>
      </section>

      <ContactBand />
    </main>
  );
}
