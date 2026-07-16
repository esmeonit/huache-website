# 华车时代官网 · 五栏导航性能版

基于 v3 performance 调整的信息架构版本。保留轻量动画、动力流和性能优化，仅重组内容和导航。

## 一级导航

- 产品中心
- 解决方案
- 服务与支持
- 关于我们
- 联系我们

## 内容归并

- 系统平台 → 产品中心
- 行业应用 → 解决方案
- 工程服务 → 服务与支持
- 核心技术 → 关于我们 / 核心研发能力

旧路由仍保留，并使用永久重定向进入新页面，避免已有链接失效。

## 运行

```bash
npm install
npm run dev
```

生产检查：

```bash
npm run typecheck
npm run build
npm start
```


## 平台卡片三维媒体

首页和“产品中心 → 系统平台”现在支持为每个平台配置可选 GIF 或视频。
演示文件位于：

```text
public/media/electrified-powertrain-demo.gif
```

把你从 Blender 导出的 GIF 改成同名文件并覆盖它，即可直接显示，无需改代码。
建议尺寸为 16:9 或接近 16:10，文件尽量控制在 10 MB 以内。

媒体配置集中在 `lib/content.ts` 的 `platforms` 数据中。未来给其他平台添加素材时，复制 `media` 字段即可；视频可将 `kind` 改成 `video`。
