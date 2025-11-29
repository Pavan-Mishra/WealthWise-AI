(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/wealth-wise-ai-design (3)/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const navLinks = [
    {
        name: "Problem",
        href: "#problem"
    },
    {
        name: "Solution",
        href: "#about"
    },
    {
        name: "Features",
        href: "#features"
    },
    {
        name: "Innovation",
        href: "#innovation"
    },
    {
        name: "Roadmap",
        href: "#roadmap"
    },
    {
        name: "Team",
        href: "#team"
    }
];
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 20)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-foreground flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-background font-semibold text-sm",
                                    children: "W"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-foreground",
                                children: "WealthWise"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200",
                                children: link.name
                            }, link.name, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-sm px-4 py-2 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors",
                            children: "View on GitHub"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        className: "md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-0.5 bg-foreground transition-all", mobileOpen && "rotate-45 translate-y-2")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-0.5 bg-foreground transition-all", mobileOpen && "opacity-0")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-0.5 bg-foreground transition-all", mobileOpen && "-rotate-45 -translate-y-2")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden", mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 space-y-3",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>setMobileOpen(false),
                                className: "block py-2 text-muted-foreground hover:text-foreground transition-colors",
                                children: link.name
                            }, link.name, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block w-full text-center py-3 mt-4 rounded-full bg-foreground text-background font-medium",
                            children: "View on GitHub"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Navbar, "moUcU2J4YHazgmQMN2Ea+ACEGYM=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSection() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visualRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            setIsVisible(true);
            // GSAP text reveal animation
            if (textRef.current) {
                const words = textRef.current.querySelectorAll(".hero-word");
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(words, {
                    y: 100,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.out",
                    delay: 0.2
                });
            }
            // Visual elements animation
            if (visualRef.current) {
                const elements = visualRef.current.querySelectorAll(".visual-element");
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(elements, {
                    scale: 0.8,
                    opacity: 0,
                    y: 40
                }, {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.5
                });
            }
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-background"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-accent/[0.03] to-transparent"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px]"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/30 mb-8 opacity-0 ${isVisible ? "animate-fade-up" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-accent"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Introducing WealthWise AI"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: textRef,
                                className: "overflow-hidden mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-word inline-block",
                                            children: "Financial"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-word inline-block gradient-text-accent",
                                            children: "freedom"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-word inline-block",
                                            children: "for"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-word inline-block",
                                            children: "irregular"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-word inline-block",
                                            children: "income."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 ${isVisible ? "animate-fade-up delay-300" : ""}`,
                                children: "AI-powered money management that adapts to your cash flow. Built for freelancers, gig workers, and anyone with variable income."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col sm:flex-row gap-4 justify-center mb-20 opacity-0 ${isVisible ? "animate-fade-up delay-400" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            "View on GitHub",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-3 h-3 text-accent fill-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            "Watch demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: visualRef,
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "visual-element relative mx-auto max-w-4xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-accent/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-3 h-3 rounded-full bg-red-500/80"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-3 h-3 rounded-full bg-yellow-500/80"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-3 h-3 rounded-full bg-green-500/80"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground",
                                                            children: "wealthwise.ai"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 md:p-8 bg-gradient-to-b from-background to-card/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid md:grid-cols-3 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2 p-6 rounded-xl bg-secondary/30 border border-border",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground mb-2",
                                                                    children: "Total Balance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-baseline gap-3 mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-4xl md:text-5xl font-semibold",
                                                                            children: "₹1,24,560"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-accent font-medium",
                                                                            children: "+12.5%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-end gap-1 h-16 mt-4",
                                                                    children: [
                                                                        35,
                                                                        50,
                                                                        40,
                                                                        65,
                                                                        55,
                                                                        80,
                                                                        70,
                                                                        90,
                                                                        75,
                                                                        85,
                                                                        95,
                                                                        88
                                                                    ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 rounded-sm bg-gradient-to-t from-accent to-accent/50 transition-all duration-300 hover:from-accent hover:to-accent/70",
                                                                            style: {
                                                                                height: `${h}%`
                                                                            }
                                                                        }, i, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 152,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 rounded-xl bg-secondary/30 border border-border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground mb-1",
                                                                            children: "Income"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 164,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xl font-semibold",
                                                                            children: "₹45,000"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 165,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 rounded-xl bg-secondary/30 border border-border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground mb-1",
                                                                            children: "Expenses"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xl font-semibold",
                                                                            children: "₹28,340"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 169,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 rounded-xl bg-accent/10 border border-accent/20",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 mb-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs",
                                                                                    children: "✨"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                                    lineNumber: 173,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-accent font-medium",
                                                                                    children: "AI Insight"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                                    lineNumber: 174,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: "Save ₹5,000 this week"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                            lineNumber: 176,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 ${isVisible ? "animate-fade-in delay-700" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Scroll to explore"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1 h-2 bg-accent rounded-full animate-scroll-hint"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "2Y7PLC7s/6u/Fbva7szTi63EN8A=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const stats = [
    {
        value: 150,
        suffix: "M+",
        label: "Target Users"
    },
    {
        value: 24,
        suffix: "/7",
        label: "AI Support"
    },
    {
        value: 99,
        suffix: "%",
        label: "Accuracy"
    },
    {
        value: 100,
        suffix: "ms",
        label: "Response Time"
    }
];
const solutionPoints = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        text: "AI-powered predictions"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        text: "Secure & private"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        text: "Real-time insights"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        text: "Goal tracking"
    }
];
function AboutSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visualRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [counters, setCounters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stats.map({
        "AboutSection.useState": ()=>0
    }["AboutSection.useState"]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AboutSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["AboutSection.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "AboutSection.useEffect": ()=>observer.disconnect()
            })["AboutSection.useEffect"];
        }
    }["AboutSection.useEffect"], []);
    // Animate counters when visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSection.useEffect": ()=>{
            if (!isVisible) return;
            stats.forEach({
                "AboutSection.useEffect": (stat, index)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to({
                        value: 0
                    }, {
                        value: stat.value,
                        duration: 2,
                        delay: index * 0.1,
                        ease: "power2.out",
                        onUpdate: {
                            "AboutSection.useEffect": function() {
                                setCounters({
                                    "AboutSection.useEffect": (prev)=>{
                                        const newCounters = [
                                            ...prev
                                        ];
                                        newCounters[index] = Math.round(this.targets()[0].value);
                                        return newCounters;
                                    }
                                }["AboutSection.useEffect"]);
                            }
                        }["AboutSection.useEffect"]
                    });
                }
            }["AboutSection.useEffect"]);
            // Animate visual elements
            if (visualRef.current) {
                const elements = visualRef.current.querySelectorAll(".solution-card");
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(elements, {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.3
                });
            }
        }
    }["AboutSection.useEffect"], [
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: sectionRef,
        className: "relative py-32 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px]"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-20 opacity-0 ${isVisible ? "animate-fade-up" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-accent animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-accent uppercase tracking-wider",
                                        children: "The Solution"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6",
                                children: [
                                    "About ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text-accent",
                                        children: "WealthWise"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
                                children: "Built for real people with real income challenges. Our AI adapts to your unique financial patterns and helps you build lasting stability."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: visualRef,
                        className: `mb-16 opacity-0 ${isVisible ? "animate-fade-up delay-200" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative max-w-3xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative grid grid-cols-2 md:grid-cols-4 gap-6",
                                children: solutionPoints.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "solution-card flex flex-col items-center text-center group",
                                        style: {
                                            opacity: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(point.icon, {
                                                    className: "w-6 h-6 text-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground group-hover:text-foreground transition-colors",
                                                children: point.text
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, point.text, true, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: statsRef,
                        className: `grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 ${isVisible ? "animate-fade-up delay-300" : ""}`,
                        children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group p-8 rounded-2xl bg-secondary/20 border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-4xl md:text-5xl font-semibold text-accent mb-2 tabular-nums",
                                                style: {
                                                    textShadow: "0 0 40px rgba(34, 211, 238, 0.3)"
                                                },
                                                children: [
                                                    counters[index],
                                                    stat.suffix
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid md:grid-cols-2 gap-6 mt-12 opacity-0 ${isVisible ? "animate-fade-up delay-400" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-3",
                                        children: "Built for Variable Income"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground leading-relaxed",
                                        children: "Whether you're a freelancer, gig worker, or student with irregular earnings, WealthWise adapts to your unique cash flow patterns."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 rounded-2xl bg-secondary/30 border border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-3",
                                        children: "Powered by Advanced AI"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground leading-relaxed",
                                        children: "Our machine learning models analyze your spending habits and income patterns to provide personalized, actionable financial guidance."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "/V60FX1mpiCS/dmGqj1LqtDxBzY=");
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USPSection",
    ()=>USPSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        title: "AI Financial Coach",
        description: "Personalized, pattern-based guidance that adapts to your unique financial situation."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
        title: "Chat-Based Assistance",
        description: "24/7 conversational finance help whenever you need support or advice."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        title: "Smart Insights Dashboard",
        description: "Clear spending and forecast view with actionable intelligence."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        title: "Proactive Warnings",
        description: "Get alerts before financial issues start, not after."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: "Goal Automation",
        description: "Auto-saving and adaptive planning that works with your income flow."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
        title: "Gamified Savings",
        description: "Fun challenges, streaks, and rewards to keep you motivated."
    }
];
function USPSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "USPSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "USPSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["USPSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "USPSection.useEffect": ()=>observer.disconnect()
            })["USPSection.useEffect"];
        }
    }["USPSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "USPSection.useEffect": ()=>{
            if (!isVisible) return;
            cardsRef.current.forEach({
                "USPSection.useEffect": (card, index)=>{
                    if (!card) return;
                    // Staggered entrance animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(card, {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "power3.out"
                    });
                    // Magnetic hover effect
                    const handleMouseMove = {
                        "USPSection.useEffect.handleMouseMove": (e)=>{
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;
                            const deltaX = (x - centerX) / centerX;
                            const deltaY = (y - centerY) / centerY;
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                                x: deltaX * 5,
                                y: deltaY * 5,
                                rotateX: -deltaY * 3,
                                rotateY: deltaX * 3,
                                duration: 0.3,
                                ease: "power2.out"
                            });
                            // Update CSS variable for glow effect
                            card.style.setProperty("--mouse-x", `${x}px`);
                            card.style.setProperty("--mouse-y", `${y}px`);
                        }
                    }["USPSection.useEffect.handleMouseMove"];
                    const handleMouseLeave = {
                        "USPSection.useEffect.handleMouseLeave": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                                x: 0,
                                y: 0,
                                rotateX: 0,
                                rotateY: 0,
                                duration: 0.5,
                                ease: "power3.out"
                            });
                        }
                    }["USPSection.useEffect.handleMouseLeave"];
                    card.addEventListener("mousemove", handleMouseMove);
                    card.addEventListener("mouseleave", handleMouseLeave);
                    return ({
                        "USPSection.useEffect": ()=>{
                            card.removeEventListener("mousemove", handleMouseMove);
                            card.removeEventListener("mouseleave", handleMouseLeave);
                        }
                    })["USPSection.useEffect"];
                }
            }["USPSection.useEffect"]);
        }
    }["USPSection.useEffect"], [
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        ref: sectionRef,
        className: "relative py-32 bg-secondary/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-center mb-16 space-y-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-accent uppercase tracking-wider",
                            children: "Core Features"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight",
                            children: "Powered by intelligent features"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg max-w-xl mx-auto",
                            children: "Six core capabilities designed to transform how you manage irregular income."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    style: {
                        perspective: "1000px"
                    },
                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                cardsRef.current[index] = el;
                            },
                            className: "group p-6 rounded-2xl bg-background border border-border feature-card-glow cursor-pointer",
                            style: {
                                transformStyle: "preserve-3d",
                                opacity: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                        className: "w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground mb-2 relative inline-block",
                                    children: [
                                        feature.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Learn more"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, feature.title, true, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(USPSection, "f8l937nScUZdLhffu0Mke/FDKjA=");
_c = USPSection;
var _c;
__turbopack_context__.k.register(_c, "USPSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InnovationSection",
    ()=>InnovationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-client] (ecmascript) <export default as PiggyBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        title: "Income Volatility Predictor",
        description: "Real-time stability score based on your earning patterns."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        title: "Smart Adaptive Budget",
        description: "Expands and contracts dynamically with your income."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"],
        title: "Buffer Wallet Automation",
        description: "Save more on good weeks; get support on low ones."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        title: "Expense Guard Mode",
        description: "Intelligent spending restrictions when needed."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
        title: "Predictive Bill Alerts",
        description: "Know affordability early before bills are due."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        title: "Gig Income Planner",
        description: "Plan gigs with expected income patterns."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
        title: "Auto-Split Buckets",
        description: "Needs / Savings / Investments / Buffer automated."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"],
        title: "Financial Anxiety Mode",
        description: "Calm insights during uncertain times."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        title: "Scenario Simulator",
        description: 'Test "What If" financial plans safely.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
        title: "Cash Flow Calendar",
        description: "Visualize income highs and lows clearly."
    }
];
function InnovationSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InnovationSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "InnovationSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["InnovationSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "InnovationSection.useEffect": ()=>observer.disconnect()
            })["InnovationSection.useEffect"];
        }
    }["InnovationSection.useEffect"], []);
    // Update active index based on scroll position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InnovationSection.useEffect": ()=>{
            const container = scrollContainerRef.current;
            if (!container) return;
            const handleScroll = {
                "InnovationSection.useEffect.handleScroll": ()=>{
                    const scrollLeft = container.scrollLeft;
                    const cardWidth = 320 + 24 // card width + gap
                    ;
                    const newIndex = Math.round(scrollLeft / cardWidth);
                    setActiveIndex(Math.min(newIndex, features.length - 1));
                }
            }["InnovationSection.useEffect.handleScroll"];
            container.addEventListener("scroll", handleScroll);
            return ({
                "InnovationSection.useEffect": ()=>container.removeEventListener("scroll", handleScroll)
            })["InnovationSection.useEffect"];
        }
    }["InnovationSection.useEffect"], []);
    const scrollToIndex = (index)=>{
        if (!scrollContainerRef.current) return;
        const cardWidth = 320 + 24;
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(scrollContainerRef.current, {
            scrollLeft: index * cardWidth,
            duration: 0.6,
            ease: "power3.out"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "innovation",
        ref: sectionRef,
        className: "relative py-32 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col md:flex-row md:items-end md:justify-between gap-6 opacity-0 ${isVisible ? "animate-fade-up" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-8 h-px bg-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-accent uppercase tracking-wider",
                                                    children: "Innovation Hub"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight",
                                            children: [
                                                "The ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "gradient-text-accent",
                                                    children: '"wow"'
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                " features"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground max-w-md",
                                            children: "Cutting-edge tools designed to transform how you manage money."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground tabular-nums",
                                            children: [
                                                String(activeIndex + 1).padStart(2, "0"),
                                                " / ",
                                                String(features.length).padStart(2, "0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-32 h-1 bg-secondary rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-accent rounded-full transition-all duration-300",
                                                style: {
                                                    width: `${(activeIndex + 1) / features.length * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollContainerRef,
                        className: `flex gap-6 overflow-x-auto pb-8 px-6 md:px-[calc((100vw-1280px)/2+24px)] scrollbar-hide snap-x snap-mandatory opacity-0 ${isVisible ? "animate-fade-up delay-200" : ""}`,
                        children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-80 snap-start group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full p-6 rounded-2xl bg-secondary/20 border border-border hover:border-accent/30 hover:bg-secondary/40 transition-all duration-500 relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 text-5xl font-bold text-border/50 group-hover:text-accent/20 transition-colors duration-300",
                                                    children: String(index + 1).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                        className: "w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300",
                                                    children: feature.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground leading-relaxed mb-6",
                                                    children: feature.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Learn more"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            }, feature.title, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-2 mt-8",
                        children: features.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToIndex(index),
                                className: `w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-accent" : "bg-border hover:bg-muted-foreground"}`,
                                "aria-label": `Go to feature ${index + 1}`
                            }, index, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(InnovationSection, "1gDcBwc+LiI2Sfy9bR4STKB/XVk=");
_c = InnovationSection;
var _c;
__turbopack_context__.k.register(_c, "InnovationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoadmapSection",
    ()=>RoadmapSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const roadmapItems = [
    {
        title: "AI Coach",
        status: "completed",
        description: "Personalized financial guidance"
    },
    {
        title: "Dashboard",
        status: "completed",
        description: "Real-time financial overview"
    },
    {
        title: "Chat Assistant",
        status: "completed",
        description: "24/7 conversational support"
    },
    {
        title: "Spending Alerts",
        status: "completed",
        description: "Proactive notifications"
    },
    {
        title: "Volatility Score",
        status: "coming",
        description: "Income stability metrics"
    },
    {
        title: "Scenario Simulator",
        status: "coming",
        description: "What-if planning tools"
    },
    {
        title: "Guard Mode",
        status: "coming",
        description: "Smart spending limits"
    },
    {
        title: "Insights 2.0",
        status: "coming",
        description: "Advanced analytics"
    },
    {
        title: "Auto-Fill Buffer",
        status: "coming",
        description: "Automated savings"
    }
];
function RoadmapSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleNodes, setVisibleNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lineHeight, setLineHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoadmapSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "RoadmapSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        roadmapItems.forEach({
                            "RoadmapSection.useEffect": (_, index)=>{
                                setTimeout({
                                    "RoadmapSection.useEffect": ()=>{
                                        setVisibleNodes({
                                            "RoadmapSection.useEffect": (prev)=>[
                                                    ...prev,
                                                    index
                                                ]
                                        }["RoadmapSection.useEffect"]);
                                        setLineHeight((index + 1) / roadmapItems.length * 100);
                                    }
                                }["RoadmapSection.useEffect"], index * 150);
                            }
                        }["RoadmapSection.useEffect"]);
                    }
                }
            }["RoadmapSection.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "RoadmapSection.useEffect": ()=>observer.disconnect()
            })["RoadmapSection.useEffect"];
        }
    }["RoadmapSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "roadmap",
        ref: sectionRef,
        className: "relative py-32 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center mb-24 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-accent uppercase tracking-wider",
                                    children: "Product Roadmap"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground",
                                        children: "Our "
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "Journey"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground",
                                        children: " Forward"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                                children: "Track our progress as we build the future of personal finance."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-secondary rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-accent to-primary rounded-full transition-all duration-1000 ease-out",
                                        style: {
                                            height: `${lineHeight}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60",
                                        style: {
                                            animation: "line-grow 3s ease-out infinite",
                                            top: "-20px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-12",
                                children: roadmapItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative flex items-center gap-8 md:gap-0 transition-all duration-700 ${visibleNodes.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-8 md:left-1/2 -translate-x-1/2 z-10",
                                                children: [
                                                    visibleNodes.includes(index) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `absolute inset-0 rounded-full ${item.status === "completed" ? "bg-green-400/30" : "bg-primary/30"}`,
                                                        style: {
                                                            animation: "pulse-ring 2s ease-out infinite"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${visibleNodes.includes(index) ? "scale-100" : "scale-0"} ${item.status === "completed" ? "bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/40" : "bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40"}`,
                                                        children: item.status === "completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `group p-6 rounded-2xl glass transition-all duration-500 hover:-translate-y-1 ${item.status === "completed" ? "hover:border-green-500/40" : "hover:border-primary/40"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${item.status === "completed" ? "via-green-400" : "via-primary"} to-transparent`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 ${item.status === "completed" ? "bg-green-500/10 text-green-400" : "bg-primary/10 text-primary"}`,
                                                            children: item.status === "completed" ? "Completed" : "Coming Soon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-foreground mb-2",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: item.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.title, true, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(RoadmapSection, "yHIMQcKWyZQE5S04FwJP2bssz+M=");
_c = RoadmapSection;
var _c;
__turbopack_context__.k.register(_c, "RoadmapSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemSection",
    ()=>ProblemSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const stats = [
    {
        value: 150,
        suffix: "M+",
        label: "People with irregular income"
    },
    {
        value: 90,
        suffix: "M+",
        label: "Freelancers nationwide"
    },
    {
        value: 0,
        suffix: "",
        label: "Apps built for unstable earners",
        displayText: "Zero"
    }
];
function ProblemSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const numbersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0,
        0
    ]);
    const hasAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const animateCounter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProblemSection.useCallback[animateCounter]": (index, target, duration = 2)=>{
            const start = 0;
            const startTime = performance.now();
            const updateCount = {
                "ProblemSection.useCallback[animateCounter].updateCount": (currentTime)=>{
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / (duration * 1000), 1);
                    // Easing function for smooth deceleration
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const currentValue = Math.floor(start + (target - start) * easeOutQuart);
                    setCounts({
                        "ProblemSection.useCallback[animateCounter].updateCount": (prev)=>{
                            const newCounts = [
                                ...prev
                            ];
                            newCounts[index] = currentValue;
                            return newCounts;
                        }
                    }["ProblemSection.useCallback[animateCounter].updateCount"]);
                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    }
                }
            }["ProblemSection.useCallback[animateCounter].updateCount"];
            requestAnimationFrame(updateCount);
        }
    }["ProblemSection.useCallback[animateCounter]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProblemSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ProblemSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !hasAnimated.current) {
                        setIsVisible(true);
                        hasAnimated.current = true;
                        stats.forEach({
                            "ProblemSection.useEffect": (stat, index)=>{
                                setTimeout({
                                    "ProblemSection.useEffect": ()=>{
                                        animateCounter(index, stat.value, 2.5);
                                    }
                                }["ProblemSection.useEffect"], index * 300);
                            }
                        }["ProblemSection.useEffect"]);
                    }
                }
            }["ProblemSection.useEffect"], {
                threshold: 0.3
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "ProblemSection.useEffect": ()=>observer.disconnect()
            })["ProblemSection.useEffect"];
        }
    }["ProblemSection.useEffect"], [
        animateCounter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProblemSection.useEffect": ()=>{
            if (!isVisible) return;
            numbersRef.current.forEach({
                "ProblemSection.useEffect": (el, index)=>{
                    if (!el) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
                        scale: 0.5,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "back.out(1.7)"
                    });
                }
            }["ProblemSection.useEffect"]);
        }
    }["ProblemSection.useEffect"], [
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "problem",
        ref: sectionRef,
        className: "relative py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `space-y-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-red-500 uppercase tracking-wider flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-red-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        "The Problem"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `opacity-0 ${isVisible ? "animate-fade-up" : ""}`,
                                        style: {
                                            animationDelay: `${index * 100 + 100}ms`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                ref: (el)=>{
                                                    numbersRef.current[index] = el;
                                                },
                                                className: "text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2 number-glow tabular-nums",
                                                style: {
                                                    opacity: 0
                                                },
                                                children: stat.displayText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: stat.displayText
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: counts[index]
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400",
                                                            children: stat.suffix
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-lg",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, stat.label, true, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `space-y-8 opacity-0 ${isVisible ? "animate-fade-up delay-300" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-balance",
                                    children: [
                                        "Traditional tools assume ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "stable salaries"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                            lineNumber: 133,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground leading-relaxed",
                                    children: [
                                        "Traditional financial tools assume stable salaries, leaving",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-400 font-medium",
                                            children: "millions without clarity or control"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        ". WealthWise AI finally solves the financial instability problem by adapting to your unique income patterns."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-1 rounded-full bg-red-500/30 relative overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 w-1/3 bg-red-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-1 rounded-full bg-accent/30 relative overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 w-full bg-accent rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Current State"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "With WealthWise"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(ProblemSection, "ntZkdeqLa2QPxgDgzbV3jfg6zy8=");
_c = ProblemSection;
var _c;
__turbopack_context__.k.register(_c, "ProblemSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CTASection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CTASection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "CTASection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["CTASection.useEffect"], {
                threshold: 0.3
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "CTASection.useEffect": ()=>observer.disconnect()
            })["CTASection.useEffect"];
        }
    }["CTASection.useEffect"], []);
    const handleMouseMove = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative py-32 bg-secondary/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-center space-y-8 opacity-0 ${isVisible ? "animate-fade-up" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance",
                        children: "Ready to explore the future of money?"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-muted-foreground max-w-xl mx-auto",
                        children: "Join the revolution in personal finance. WealthWise AI is here to transform how you manage irregular income."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-[0.98]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    "View on GitHub"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary/50 transition-all hover:scale-[1.02] active:scale-[0.98] group",
                                children: [
                                    "View Demo",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(CTASection, "TF16k7UMAtxMazkGffeV9Nq8jgo=");
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamSection",
    ()=>TeamSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const teamMembers = [
    {
        name: "Pavan Mishra",
        role: "App Developer",
        initials: "PM",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        color: "from-cyan-500 to-blue-500",
        skills: [
            "React Native",
            "Flutter",
            "UI/UX"
        ],
        bio: "Building beautiful mobile experiences"
    },
    {
        name: "Ojas Lad",
        role: "Backend Lead",
        initials: "OL",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
        color: "from-emerald-500 to-teal-500",
        skills: [
            "Node.js",
            "Python",
            "AWS"
        ],
        bio: "Architecting scalable systems"
    },
    {
        name: "Vishal Patkal",
        role: "Security & Compliance",
        initials: "VP",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        color: "from-violet-500 to-purple-500",
        skills: [
            "Cybersecurity",
            "Compliance",
            "Audit"
        ],
        bio: "Keeping your data safe"
    }
];
function TeamSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "TeamSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["TeamSection.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "TeamSection.useEffect": ()=>observer.disconnect()
            })["TeamSection.useEffect"];
        }
    }["TeamSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamSection.useEffect": ()=>{
            if (!isVisible) return;
            cardsRef.current.forEach({
                "TeamSection.useEffect": (card, index)=>{
                    if (!card) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(card, {
                        y: 80,
                        opacity: 0,
                        rotateX: -15,
                        scale: 0.9
                    }, {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        scale: 1,
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: "power3.out"
                    });
                }
            }["TeamSection.useEffect"]);
        }
    }["TeamSection.useEffect"], [
        isVisible
    ]);
    const handleCardHover = (index, isEntering)=>{
        const card = cardsRef.current[index];
        if (!card) return;
        setHoveredIndex(isEntering ? index : null);
        if (isEntering) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.4,
                ease: "power2.out"
            });
            // Animate other cards to shrink slightly
            cardsRef.current.forEach((otherCard, i)=>{
                if (i !== index && otherCard) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(otherCard, {
                        scale: 0.98,
                        opacity: 0.7,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
            // Reset other cards
            cardsRef.current.forEach((otherCard, i)=>{
                if (i !== index && otherCard) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(otherCard, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "team",
        ref: sectionRef,
        className: "relative py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-center mb-16 space-y-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-accent uppercase tracking-wider",
                            children: "Our Team"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight",
                            children: "Meet the builders"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-md mx-auto",
                            children: "The passionate team behind WealthWise AI"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    style: {
                        perspective: "1000px"
                    },
                    children: teamMembers.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                cardsRef.current[index] = el;
                            },
                            className: "group relative",
                            style: {
                                opacity: 0,
                                transformStyle: "preserve-3d"
                            },
                            onMouseEnter: ()=>handleCardHover(index, true),
                            onMouseLeave: ()=>handleCardHover(index, false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[400px] w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute inset-0 p-8 rounded-2xl bg-secondary/30 border border-border transition-all duration-500 ${hoveredIndex === index ? "opacity-0 pointer-events-none" : "opacity-100"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex flex-col items-center justify-center text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative w-24 h-24 rounded-full bg-gradient-to-br ${member.color} p-[2px] mb-6`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full rounded-full bg-background flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl font-semibold gradient-text-accent",
                                                                children: member.initials
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-[-4px] rounded-full border-2 border-transparent border-t-accent opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300",
                                                            style: {
                                                                animationDuration: "3s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-foreground mb-1",
                                                    children: member.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-accent mb-4",
                                                    children: member.role
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(member.icon, {
                                                        className: "w-5 h-5 text-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute inset-0 p-8 rounded-2xl bg-gradient-to-br ${member.color} border border-white/10 transition-all duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full flex flex-col justify-between text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-full bg-white/20 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-lg font-semibold",
                                                                        children: member.initials
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold",
                                                                            children: member.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-white/70",
                                                                            children: member.role
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                                            lineNumber: 197,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/80 mb-6",
                                                            children: member.bio
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: member.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-3 py-1 text-xs rounded-full bg-white/20 text-white",
                                                                    children: skill
                                                                }, skill, false, {
                                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"]
                                                    ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        }, member.name, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(TeamSection, "ziSbMsvSkh1oI4PBCOCYRr5LHrA=");
_c = TeamSection;
var _c;
__turbopack_context__.k.register(_c, "TeamSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-12 border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-foreground flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-background font-semibold text-sm",
                                    children: "W"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-foreground",
                                children: "WealthWise"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-wrap items-center justify-center gap-6",
                        children: [
                            "About",
                            "Features",
                            "Roadmap",
                            "Team",
                            "GitHub"
                        ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link === "GitHub" ? "https://github.com" : `#${link.toLowerCase()}`,
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                target: link === "GitHub" ? "_blank" : undefined,
                                rel: link === "GitHub" ? "noopener noreferrer" : undefined,
                                children: link
                            }, link, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "© 2025 WealthWise AI"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LoadingScreen({ isLoading }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [shouldRender, setShouldRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            if (isLoading) {
                const interval = setInterval({
                    "LoadingScreen.useEffect.interval": ()=>{
                        setProgress({
                            "LoadingScreen.useEffect.interval": (prev)=>{
                                if (prev >= 100) {
                                    clearInterval(interval);
                                    return 100;
                                }
                                return prev + 2;
                            }
                        }["LoadingScreen.useEffect.interval"]);
                    }
                }["LoadingScreen.useEffect.interval"], 30);
                return ({
                    "LoadingScreen.useEffect": ()=>clearInterval(interval)
                })["LoadingScreen.useEffect"];
            }
        }
    }["LoadingScreen.useEffect"], [
        isLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            if (!isLoading && progress >= 100) {
                const timer = setTimeout({
                    "LoadingScreen.useEffect.timer": ()=>setShouldRender(false)
                }["LoadingScreen.useEffect.timer"], 700);
                return ({
                    "LoadingScreen.useEffect": ()=>clearTimeout(timer)
                })["LoadingScreen.useEffect"];
            }
        }
    }["LoadingScreen.useEffect"], [
        isLoading,
        progress
    ]);
    if (!shouldRender) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ${!isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-semibold text-background",
                                    children: "W"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-3 border border-border rounded-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-semibold text-foreground",
                            children: "WealthWise"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-48 space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-0.5 bg-border rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-accent rounded-full transition-all duration-300 ease-out",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(LoadingScreen, "og9u0scP7FeyQiY5V1JAJ3BZbR8=");
_c = LoadingScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/hero-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/about-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$usp$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/usp-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$innovation$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/innovation-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$roadmap$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/roadmap-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$problem$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/problem-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$cta$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/cta-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$team$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/team-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/wealth-wise-ai-design (3)/components/loading-screen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Short loading animation
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Home.useEffect.timer"], 2000);
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingScreen"], {
                isLoading: isLoading
            }, void 0, false, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `min-h-screen bg-background text-foreground overflow-x-hidden ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$problem$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProblemSection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$usp$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USPSection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$innovation$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InnovationSection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$roadmap$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoadmapSection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$cta$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTASection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$team$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamSection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$wealth$2d$wise$2d$ai$2d$design__$28$3$292f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/wealth-wise-ai-design (3)/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_wealth-wise-ai-design%20%283%29_51dd2703._.js.map