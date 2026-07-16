import Link from "next/link";

const footerGroups = [
  {
    title: "产品中心",
    links: [
      ["系统平台", "/products#platforms"],
      ["核心产品", "/products#products"],
    ],
  },
  {
    title: "解决方案",
    links: [
      ["任务解决方案", "/solutions#solutions"],
      ["行业应用", "/solutions#industries"],
    ],
  },
  {
    title: "服务与支持",
    links: [
      ["工程流程", "/support#process"],
      ["服务范围", "/support#services"],
      ["交付资料", "/support#deliverables"],
    ],
  },
  {
    title: "公司",
    links: [
      ["关于我们", "/about"],
      ["核心研发能力", "/about#capabilities"],
      ["联系我们", "/contact"],
    ],
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">华车时代</div>
          <p>为特种装备提供动力系统、智能底盘与核心控制系统。</p>
        </div>
        <div className="footer-groups">
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <strong>{group.title}</strong>
              {group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 北京华车时代科技有限公司</span>
        <span>硬件 · 软件 · 系统集成</span>
      </div>
    </footer>
  );
}
