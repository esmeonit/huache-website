import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ContactBand from "@/components/ContactBand";
import { technologies } from "@/lib/content";

export const metadata: Metadata = { title: "关于我们" };

const technologyDetail = [
  ["需求与边界", "任务剖面、功率平衡、接口定义、故障策略"],
  ["能量与驱动", "发电、储能、配电、逆变、电机与热管理"],
  ["实时控制", "驱动层、通信层、应用层与诊断服务"],
  ["车辆运动", "纵向、横向、差速、履带与执行器协调"],
  ["验证与交付", "SIL/HIL、台架、样车、工况与生产一致性"],
] as const;

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="ABOUT HUACHE" title="我们做装备背后的关键系统。" copy="公司的价值不在某一台机器人或某一只控制器，而在长期积累的系统研发和工程交付能力。" />

    <nav className="container page-subnav" aria-label="关于我们页面导航">
      <a href="#positioning">公司定位</a>
      <a href="#principles">工作原则</a>
      <a href="#capabilities">核心研发能力</a>
    </nav>

    <section className="container about-grid content-section" id="positioning">
      <Reveal className="about-main glass-panel"><p className="eyebrow">POSITIONING</p><h2>为特种装备提供动力系统、智能底盘与核心控制系统的定制化解决方案。</h2><p>我们面向非标、复杂、小批量和高可靠需求工作。能使用成熟产品的地方，优先使用成熟产品；必须定制的部分，才投入专门开发。</p></Reveal>
      <Reveal className="about-side glass-panel" delay={0.08}><h3 id="principles">工作原则</h3><ul><li>先定义边界，再开始开发</li><li>先验证关键风险，再扩大投入</li><li>软硬件统一考虑，不互相甩锅</li><li>交付资料必须能够继续维护</li></ul></Reveal>
    </section>

    <section className="container value-row">
      <Reveal><span>01</span><h3>系统设计能力</h3><p>把动力、电气、控制、通信和任务设备组织成完整架构。</p></Reveal>
      <Reveal delay={0.05}><span>02</span><h3>核心控制能力</h3><p>完成控制器、底层软件、算法和车辆控制策略。</p></Reveal>
      <Reveal delay={0.1}><span>03</span><h3>工程交付能力</h3><p>从样机联调推进到测试、资料和小批量交付。</p></Reveal>
    </section>

    <section className="container content-section" id="capabilities">
      <SectionTitle eyebrow="CORE CAPABILITIES" title="核心研发能力" copy="技术能力必须落到接口、算法、测试和可维护的工程资料。" />
      <div className="tech-page-list">
        {technologies.map(([index, title, copy], i) => <Reveal key={title} delay={i * 0.04}>
          <article className="tech-feature">
            <span>{index}</span><div><h2>{title}</h2><p>{copy}</p></div>
            <dl><dt>{technologyDetail[i][0]}</dt><dd>{technologyDetail[i][1]}</dd></dl>
          </article>
        </Reveal>)}
      </div>
    </section>
    <ContactBand />
  </main>;
}
