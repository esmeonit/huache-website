"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="华车时代首页">
          <span className="brand-mark" aria-hidden="true">H</span>
          <span>华车时代</span>
        </Link>

        <nav className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="主导航">
          {navItems.map((item) => (
            <Link key={item.href} className={pathname === item.href ? "active" : ""} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="nav-cta" href="/contact#project-inquiry">提交项目需求</Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
