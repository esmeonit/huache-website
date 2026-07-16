import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ContactBand from "@/components/ContactBand";
import PlatformMedia from "@/components/PlatformMedia";
import { platforms, products } from "@/lib/content";

export const metadata: Metadata = { title: "产品中心" };

export default function ProductsPage() {
  return <main>
    <PageHero eyebrow="PRODUCT CENTER" title="平台负责系统，产品负责交付。" copy="系统平台沉淀架构、接口和控制方法；核心产品则以控制器、配电、驱动和底盘等形式进入客户装备。" />

    <nav className="container page-subnav" aria-label="产品中心页面导航">
      <a href="#platforms">系统平台</a>
      <a href="#products">核心产品</a>
    </nav>

    <section className="container content-section" id="platforms">
      <SectionTitle eyebrow="SYSTEM PLATFORMS" title="系统平台" copy="平台不是固定整机，而是一套可复用、可适配的系统架构和工程方法。" />
      <div className="platform-page-grid">
        {platforms.map((item, index) => <Reveal key={item.title} delay={index * 0.05}>
          <article className={`platform-feature glass-panel${item.media ? " has-media" : ""}`}>
            {item.media && <PlatformMedia media={item.media} />}
            <div className="platform-feature-body">
              <span className="platform-code">{item.code}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="platform-diagram"><span>输入</span><i /><strong>控制平台</strong><i /><span>执行</span></div>
              <div className="chip-row">{item.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
            </div>
          </article>
        </Reveal>)}
      </div>
    </section>

    <section className="container content-section" id="products">
      <SectionTitle eyebrow="CORE PRODUCTS" title="核心产品" copy="产品可以单独交付，也可以作为完整解决方案的一部分进入整机系统。" />
      <div className="catalog-grid">
        {products.map((item, index) => <Reveal key={item.title} delay={(index % 3) * 0.04}>
          <article className="catalog-card glass-panel">
            <div className="product-visual"><span>{item.category}</span><div className="circuit-lines" aria-hidden="true" /></div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="chip-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        </Reveal>)}
      </div>
    </section>
    <ContactBand />
  </main>;
}
