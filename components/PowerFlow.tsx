const stages = [
  ["01", "动力源", "柴油 / 电池"],
  ["02", "发电与储能", "Generator / ESS"],
  ["03", "电源分配", "PDU / Protection"],
  ["04", "电驱控制", "Motor / Inverter"],
  ["05", "移动底盘", "Wheel / Track"],
  ["06", "任务执行", "Mission"],
] as const;

export default function PowerFlow() {
  return (
    <div className="power-flow glass-panel" aria-label="动力流示意图">
      <div className="flow-header">
        <span>动力流</span>
        <span className="status-dot">系统在线</span>
      </div>
      <div className="flow-track">
        <div className="energy-pulse" aria-hidden="true" />
        {stages.map(([index, title, detail]) => (
          <div className="flow-stage" key={title}>
            <span className="flow-index">{index}</span>
            <strong>{title}</strong>
            <small>{detail}</small>
          </div>
        ))}
      </div>
      <div className="flow-footer">
        <span>能量可控</span><span>状态可见</span><span>故障可诊断</span>
      </div>
    </div>
  );
}
