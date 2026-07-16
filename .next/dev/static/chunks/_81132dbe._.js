(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "engineeringSteps",
    ()=>engineeringSteps,
    "industries",
    ()=>industries,
    "navItems",
    ()=>navItems,
    "platforms",
    ()=>platforms,
    "products",
    ()=>products,
    "solutions",
    ()=>solutions,
    "supportServices",
    ()=>supportServices,
    "technologies",
    ()=>technologies
]);
const navItems = [
    {
        label: "产品中心",
        href: "/products"
    },
    {
        label: "解决方案",
        href: "/solutions"
    },
    {
        label: "服务与支持",
        href: "/support"
    },
    {
        label: "关于我们",
        href: "/about"
    },
    {
        label: "联系我们",
        href: "/contact"
    }
];
const solutions = [
    {
        index: "01",
        title: "特种车辆电动化",
        summary: "面向消防、应急、工程和保障车辆，完成动力架构、电驱控制与整车协同。",
        points: [
            "动力系统选型与匹配",
            "VCU 与底盘控制",
            "任务设备供电与联锁",
            "样车集成与标定"
        ]
    },
    {
        index: "02",
        title: "无人移动平台",
        summary: "为履带式、轮式和低速无人平台提供底盘、控制、通信与任务接口。",
        points: [
            "线控底盘",
            "远程驾驶与监控",
            "多传感器接入",
            "任务机构协同"
        ]
    },
    {
        index: "03",
        title: "混合动力与发电系统",
        summary: "围绕柴油发电、储能、电驱和外部负载，构建稳定、可控的能源链路。",
        points: [
            "发电控制",
            "母线与配电设计",
            "能量管理",
            "故障保护与降级"
        ]
    },
    {
        index: "04",
        title: "定制控制系统",
        summary: "当标准控制器无法满足接口、环境或算法需求时，提供软硬件一体化开发。",
        points: [
            "控制器硬件设计",
            "嵌入式软件",
            "CAN 与以太网通信",
            "测试与生产导入"
        ]
    }
];
const platforms = [
    {
        title: "电驱动力平台",
        code: "EP-Platform",
        description: "覆盖动力源、发电、储能、电机驱动和整车控制的系统平台。",
        metrics: [
            "柴油电混合",
            "纯电驱动",
            "多电机协调"
        ],
        media: {
            kind: "image",
            src: "/media/electrified-powertrain-demo.gif",
            alt: "电驱动力平台三维旋转模型演示"
        }
    },
    {
        title: "智能移动底盘平台",
        code: "MC-Platform",
        description: "支持轮式、履带式和差速转向平台的模块化底盘控制。",
        metrics: [
            "线控驱动",
            "线控制动",
            "运动控制"
        ]
    },
    {
        title: "智能配电平台",
        code: "PD-Platform",
        description: "面向多电压等级、多负载和复杂工况的配电、保护与状态管理。",
        metrics: [
            "PDU",
            "绝缘与保护",
            "负载管理"
        ]
    },
    {
        title: "无人系统平台",
        code: "AS-Platform",
        description: "将底盘控制、远程通信、定位感知和任务设备连接为统一系统。",
        metrics: [
            "远程控制",
            "导航接口",
            "任务编排"
        ]
    }
];
const products = [
    {
        category: "控制器",
        title: "VCU 整车控制器",
        description: "用于动力协调、模式管理、故障处理和整车通信。",
        tags: [
            "CAN/CAN FD",
            "状态机",
            "故障诊断"
        ]
    },
    {
        category: "配电",
        title: "PDU 电源分配单元",
        description: "完成多路电源分配、接触器控制、采样、保护与状态上报。",
        tags: [
            "高低压配电",
            "电流采样",
            "故障隔离"
        ]
    },
    {
        category: "驱动",
        title: "电机控制与驱动单元",
        description: "面向牵引、转向和作业机构的电机驱动与闭环控制。",
        tags: [
            "扭矩控制",
            "速度控制",
            "热保护"
        ]
    },
    {
        category: "嵌入式",
        title: "通用控制模块",
        description: "按接口、尺寸、环境和算法需求定制的嵌入式控制器。",
        tags: [
            "模拟量/数字量",
            "车载以太网",
            "升级接口预留"
        ]
    },
    {
        category: "监控",
        title: "远程监控终端",
        description: "采集车辆与任务设备数据，支持远程诊断、日志和状态查看。",
        tags: [
            "4G/5G",
            "GNSS",
            "数据记录"
        ]
    },
    {
        category: "底盘",
        title: "电驱底盘总成",
        description: "包含结构、电驱、控制和线束接口的轮式或履带式底盘模块。",
        tags: [
            "轮式",
            "履带式",
            "模块化"
        ]
    }
];
const technologies = [
    [
        "01",
        "系统架构",
        "从任务目标出发，确定动力、电气、控制、通信和安全边界。"
    ],
    [
        "02",
        "功率电子",
        "处理发电、整流、配电、逆变、电机驱动和电源保护。"
    ],
    [
        "03",
        "嵌入式控制",
        "完成控制器硬件、底层驱动、通信协议与实时控制软件。"
    ],
    [
        "04",
        "运动控制",
        "实现履带、轮式、转向和多执行机构的协调与稳定控制。"
    ],
    [
        "05",
        "整车集成",
        "通过台架、样车、道路与工况测试，将系统做到可交付。"
    ]
];
const industries = [
    [
        "消防救援",
        "高温、烟尘、远程作业和大功率任务设备。"
    ],
    [
        "应急保障",
        "复杂环境下的供电、通信、运输和快速部署。"
    ],
    [
        "工程机械",
        "低速大扭矩、重载、频繁启停与作业机构协同。"
    ],
    [
        "矿山装备",
        "粉尘、坡道、长时间运行与远程无人化需求。"
    ],
    [
        "机场港口",
        "牵引、巡检、运输和固定路线无人作业。"
    ],
    [
        "科研与试验",
        "无人靶车、试验平台和非标运动装备。"
    ],
    [
        "特种车辆",
        "面向特殊任务的底盘、动力与控制系统定制。"
    ],
    [
        "低空装备",
        "重载无人机、飞行汽车及地面保障系统接口。"
    ]
];
const engineeringSteps = [
    [
        "01",
        "需求定义",
        "明确任务、功率、接口、环境、法规和交付边界。"
    ],
    [
        "02",
        "系统方案",
        "完成架构、选型、接口、风险和验证计划。"
    ],
    [
        "03",
        "软硬件开发",
        "同步推进控制器、线束、软件、算法和机械接口。"
    ],
    [
        "04",
        "样机与测试",
        "开展台架测试、故障注入、整车联调和工况验证。"
    ],
    [
        "05",
        "交付与迭代",
        "形成图纸、BOM、软件版本、测试记录和生产资料。"
    ]
];
const supportServices = [
    {
        title: "定制研发服务",
        description: "针对标准产品无法覆盖的功率、接口、空间和控制需求，提供明确边界的专项开发。"
    },
    {
        title: "系统集成服务",
        description: "完成动力、电气、控制、通信与任务设备之间的接口设计和整机联调。"
    },
    {
        title: "测试与验证",
        description: "根据项目阶段开展台架、样机、故障和典型工况验证，并保留测试记录。"
    },
    {
        title: "技术支持",
        description: "围绕已交付系统提供问题定位、版本管理、参数调整和维护资料支持。"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SiteHeader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>setOpen(false)
    }["SiteHeader.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "site-header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "brand",
                    href: "/",
                    "aria-label": "华车时代首页",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "brand-mark",
                            "aria-hidden": "true",
                            children: "H"
                        }, void 0, false, {
                            fileName: "[project]/components/SiteHeader.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "华车时代"
                        }, void 0, false, {
                            fileName: "[project]/components/SiteHeader.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SiteHeader.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: `desktop-nav ${open ? "is-open" : ""}`,
                    "aria-label": "主导航",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: pathname === item.href ? "active" : "",
                            href: item.href,
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/components/SiteHeader.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/SiteHeader.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "nav-cta",
                    href: "/contact#project-inquiry",
                    children: "提交项目需求"
                }, void 0, false, {
                    fileName: "[project]/components/SiteHeader.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "menu-button",
                    type: "button",
                    "aria-label": open ? "关闭菜单" : "打开菜单",
                    "aria-expanded": open,
                    onClick: ()=>setOpen((value)=>!value),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/components/SiteHeader.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/components/SiteHeader.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SiteHeader.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/SiteHeader.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SiteHeader.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "SgV5YEpmaCGzPiUVKviC2McT0nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MotionController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MotionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MotionController() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MotionController.useEffect": ()=>{
            const root = document.documentElement;
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
            const compactViewport = window.matchMedia("(max-width: 840px)");
            const applyMotionMode = {
                "MotionController.useEffect.applyMotionMode": ()=>{
                    root.classList.toggle("lite-motion", reducedMotion.matches || compactViewport.matches);
                }
            }["MotionController.useEffect.applyMotionMode"];
            applyMotionMode();
            reducedMotion.addEventListener("change", applyMotionMode);
            compactViewport.addEventListener("change", applyMotionMode);
            let observer = null;
            /*
     * 等待新页面内容完成挂载，再查找 data-reveal 元素。
     */ const frame = window.requestAnimationFrame({
                "MotionController.useEffect.frame": ()=>{
                    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
                    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
                        elements.forEach({
                            "MotionController.useEffect.frame": (element)=>{
                                element.classList.add("is-visible");
                            }
                        }["MotionController.useEffect.frame"]);
                        return;
                    }
                    observer = new IntersectionObserver({
                        "MotionController.useEffect.frame": (entries)=>{
                            entries.forEach({
                                "MotionController.useEffect.frame": (entry)=>{
                                    if (!entry.isIntersecting) {
                                        return;
                                    }
                                    entry.target.classList.add("is-visible");
                                    observer?.unobserve(entry.target);
                                }
                            }["MotionController.useEffect.frame"]);
                        }
                    }["MotionController.useEffect.frame"], {
                        rootMargin: "0px 0px -8% 0px",
                        threshold: 0.08
                    });
                    elements.forEach({
                        "MotionController.useEffect.frame": (element)=>{
                            observer?.observe(element);
                        }
                    }["MotionController.useEffect.frame"]);
                }
            }["MotionController.useEffect.frame"]);
            const onVisibilityChange = {
                "MotionController.useEffect.onVisibilityChange": ()=>{
                    root.classList.toggle("motion-paused", document.hidden);
                }
            }["MotionController.useEffect.onVisibilityChange"];
            document.addEventListener("visibilitychange", onVisibilityChange);
            return ({
                "MotionController.useEffect": ()=>{
                    window.cancelAnimationFrame(frame);
                    observer?.disconnect();
                    reducedMotion.removeEventListener("change", applyMotionMode);
                    compactViewport.removeEventListener("change", applyMotionMode);
                    document.removeEventListener("visibilitychange", onVisibilityChange);
                }
            })["MotionController.useEffect"];
        }
    }["MotionController.useEffect"], [
        pathname
    ]);
    return null;
}
_s(MotionController, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MotionController;
var _c;
__turbopack_context__.k.register(_c, "MotionController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_81132dbe._.js.map