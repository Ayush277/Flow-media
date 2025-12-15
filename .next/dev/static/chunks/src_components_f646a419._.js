(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/GlowCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowCard",
    ()=>GlowCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GlowCard({ children, className }) {
    _s();
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative border border-white/10 bg-gray-900/40 overflow-hidden", className),
        onMouseMove: handleMouseMove,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"]`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(124, 58, 237, 0.15),
              transparent 80%
            )
          `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/GlowCard.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/GlowCard.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/GlowCard.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(GlowCard, "NzNl97SSlf2IvdEBeMtxpcNETrU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = GlowCard;
var _c;
__turbopack_context__.k.register(_c, "GlowCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/feed/CreatePost.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreatePost",
    ()=>CreatePost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GlowCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/GlowCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-client] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CreatePost() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "9b10982dc6104adb7f73ea0c0181b21e5b588ed586aed7546f730b2e10b01ca5") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b10982dc6104adb7f73ea0c0181b21e5b588ed586aed7546f730b2e10b01ca5";
    }
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "CreatePost[handleImageSelect]": (e)=>{
                const file = e.target.files?.[0];
                if (file) {
                    const url = URL.createObjectURL(file);
                    setSelectedImage(url);
                }
            }
        })["CreatePost[handleImageSelect]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleImageSelect = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CreatePost[handlePost]": async ()=>{
                setIsUploading(true);
                await new Promise(_temp);
                setIsUploading(false);
                setContent("");
                setSelectedImage(null);
            }
        })["CreatePost[handlePost]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handlePost = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 ring-2 ring-black/50",
                children: "Y"
            }, void 0, false, {
                fileName: "[project]/src/components/feed/CreatePost.tsx",
                lineNumber: 54,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CreatePost[<textarea>.onChange]": (e_0)=>setContent(e_0.target.value)
        })["CreatePost[<textarea>.onChange]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== content) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            value: content,
            onChange: t3,
            placeholder: "What's your flow for today?",
            className: "w-full bg-transparent border-none focus:ring-0 text-lg placeholder:text-muted-foreground/50 resize-none min-h-[80px] p-0 mb-2 text-white font-light tracking-wide"
        }, void 0, false, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[5] = content;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== selectedImage) {
        t5 = selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                height: "auto",
                scale: 1
            },
            exit: {
                opacity: 0,
                height: 0,
                scale: 0.95
            },
            className: "relative rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: selectedImage,
                    alt: "Preview",
                    className: "w-full max-h-[300px] object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/CreatePost.tsx",
                    lineNumber: 90,
                    columnNumber: 96
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "CreatePost[<button>.onClick]": ()=>setSelectedImage(null)
                    }["CreatePost[<button>.onClick]"],
                    className: "absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/feed/CreatePost.tsx",
                        lineNumber: 92,
                        columnNumber: 172
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/CreatePost.tsx",
                    lineNumber: 90,
                    columnNumber: 183
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 78,
            columnNumber: 27
        }, this);
        $[7] = selectedImage;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "CreatePost[<button>.onClick]": ()=>fileInputRef.current?.click()
        })["CreatePost[<button>.onClick]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t7,
            className: "p-2.5 rounded-full hover:bg-primary/10 text-primary transition-colors group",
            title: "Add Image Proof",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                className: "h-5 w-5 group-hover:scale-110 transition-transform"
            }, void 0, false, {
                fileName: "[project]/src/components/feed/CreatePost.tsx",
                lineNumber: 118,
                columnNumber: 143
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            ref: fileInputRef,
            className: "hidden",
            accept: "image/*",
            onChange: handleImageSelect
        }, void 0, false, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[12] = t8;
        $[13] = t9;
    } else {
        t8 = $[12];
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1 -ml-2",
            children: [
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "p-2.5 rounded-full hover:bg-primary/10 text-primary transition-colors group",
                    title: "Add Task List",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"], {
                        className: "h-5 w-5 group-hover:scale-110 transition-transform"
                    }, void 0, false, {
                        fileName: "[project]/src/components/feed/CreatePost.tsx",
                        lineNumber: 128,
                        columnNumber: 171
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/CreatePost.tsx",
                    lineNumber: 128,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== content || $[16] !== isUploading || $[17] !== selectedImage) {
        t11 = !content.trim() && !selectedImage || isUploading;
        $[15] = content;
        $[16] = isUploading;
        $[17] = selectedImage;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== isUploading) {
        t12 = isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-4 w-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/CreatePost.tsx",
                    lineNumber: 145,
                    columnNumber: 27
                }, this),
                "Posting"
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Post Flow",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                    className: "h-3.5 w-3.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/CreatePost.tsx",
                    lineNumber: 145,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true);
        $[19] = isUploading;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t11 || $[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pt-4 border-t border-white/5",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handlePost,
                    disabled: t11,
                    className: "px-6 py-2 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg shadow-primary/25",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/CreatePost.tsx",
                    lineNumber: 153,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t13 || $[25] !== t4 || $[26] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 px-4 md:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$GlowCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowCard"], {
                className: "rounded-3xl backdrop-blur-xl border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 p-5",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                t4,
                                t6,
                                t13
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/feed/CreatePost.tsx",
                            lineNumber: 162,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/feed/CreatePost.tsx",
                    lineNumber: 162,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/feed/CreatePost.tsx",
                lineNumber: 162,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/CreatePost.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t4;
        $[26] = t6;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    return t14;
}
_s(CreatePost, "st81QbRjyjC8/G/tCL2EE9dS3tE=");
_c = CreatePost;
function _temp(resolve) {
    return setTimeout(resolve, 1500);
}
var _c;
__turbopack_context__.k.register(_c, "CreatePost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/feed/FeedPost.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeedPost",
    ()=>FeedPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FeedPost(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(65);
    if ($[0] !== "a83e6b4bce5d24d259aa2e8bb150d08cf8123849e2b2cbcfe3cfb45f6270c7e8") {
        for(let $i = 0; $i < 65; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a83e6b4bce5d24d259aa2e8bb150d08cf8123849e2b2cbcfe3cfb45f6270c7e8";
    }
    const { user, timestamp, content, tasks, image, stats } = t0;
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [likeCount, setLikeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stats.likes);
    let t1;
    if ($[1] !== isLiked) {
        t1 = ({
            "FeedPost[handleLike]": ()=>{
                if (isLiked) {
                    setLikeCount(_FeedPostHandleLikeSetLikeCount);
                } else {
                    setLikeCount(_FeedPostHandleLikeSetLikeCount2);
                }
                setIsLiked(!isLiked);
            }
        })["FeedPost[handleLike]"];
        $[1] = isLiked;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleLike = t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 20
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            scale: 1.005
        };
        t5 = {
            duration: 0.2
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-primary/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity"
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== user.name[0]) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 w-14 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-white font-bold shadow-lg relative overflow-hidden group/avatar cursor-pointer",
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10 text-lg",
                        children: user.name[0]
                    }, void 0, false, {
                        fileName: "[project]/src/components/feed/FeedPost.tsx",
                        lineNumber: 109,
                        columnNumber: 260
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/feed/FeedPost.tsx",
                lineNumber: 109,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[9] = user.name[0];
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== user.name) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-bold text-white text-lg leading-tight mb-0.5 hover:text-primary transition-colors cursor-pointer",
            children: user.name
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[11] = user.name;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== user.handle) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hover:text-white transition-colors cursor-pointer",
            children: [
                "@",
                user.handle
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[13] = user.handle;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-1 h-1 rounded-full bg-white/20"
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== timestamp) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: timestamp
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[16] = timestamp;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t10 || $[19] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-muted-foreground",
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t12;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t13 || $[22] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t9;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "text-muted-foreground hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/src/components/feed/FeedPost.tsx",
                lineNumber: 166,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start mb-3",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[25] = t14;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== content) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-200 mb-5 whitespace-pre-wrap text-[16px] leading-relaxed font-normal tracking-wide",
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[27] = content;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== tasks) {
        t18 = tasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 rounded-2xl border border-white/5 overflow-hidden mb-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 bg-white/5 border-b border-white/5 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "h-3.5 w-3.5 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/FeedPost.tsx",
                            lineNumber: 189,
                            columnNumber: 200
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                            children: "Flow Session"
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/FeedPost.tsx",
                            lineNumber: 189,
                            columnNumber: 244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/feed/FeedPost.tsx",
                    lineNumber: 189,
                    columnNumber: 114
                }, this),
                tasks.map({
                    "FeedPost[tasks.map()]": (task, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 p-3.5 transition-all duration-300 group/task cursor-default", i !== tasks.length - 1 && "border-b border-white/5", task.completed ? "bg-primary/5" : "hover:bg-white/5"),
                            children: [
                                task.completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3.5 w-3.5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/FeedPost.tsx",
                                        lineNumber: 190,
                                        columnNumber: 387
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/FeedPost.tsx",
                                    lineNumber: 190,
                                    columnNumber: 293
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-5 w-5 rounded-full border-2 border-white/20 group-hover/task:border-white/40 transition-colors shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/FeedPost.tsx",
                                    lineNumber: 190,
                                    columnNumber: 449
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors", task.completed ? "text-muted-foreground line-through decoration-primary/50" : "text-gray-200 group-hover/task:text-white"),
                                    children: task.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/FeedPost.tsx",
                                    lineNumber: 190,
                                    columnNumber: 575
                                }, this)
                            ]
                        }, task.id, true, {
                            fileName: "[project]/src/components/feed/FeedPost.tsx",
                            lineNumber: 190,
                            columnNumber: 47
                        }, this)
                }["FeedPost[tasks.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 189,
            columnNumber: 31
        }, this);
        $[29] = tasks;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== image) {
        t19 = image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl overflow-hidden mb-5 border border-white/10 shadow-2xl shadow-black/50 group/image cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/20 group-hover/image:bg-transparent transition-colors duration-500 z-10"
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/FeedPost.tsx",
                    lineNumber: 199,
                    columnNumber: 156
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image,
                    alt: "Work Proof",
                    className: "w-full h-auto max-h-[500px] object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/FeedPost.tsx",
                    lineNumber: 199,
                    columnNumber: 273
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 199,
            columnNumber: 20
        }, this);
        $[31] = image;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== handleLike) {
        t20 = ({
            "FeedPost[<button>.onClick]": (e)=>{
                e.stopPropagation();
                handleLike();
            }
        })["FeedPost[<button>.onClick]"];
        $[33] = handleLike;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    const t21 = isLiked ? "bg-pink-500/10 text-pink-500 border-pink-500/20" : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white hover:border-white/10";
    let t22;
    if ($[35] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 border border-transparent", t21);
        $[35] = t21;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            scale: 0.8
        };
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    const t24 = isLiked && "fill-current";
    let t25;
    if ($[38] !== t24) {
        t25 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform group-hover:scale-110", t24);
        $[38] = t24;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    let t26;
    if ($[40] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileTap: t23,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: t25
            }, void 0, false, {
                fileName: "[project]/src/components/feed/FeedPost.tsx",
                lineNumber: 247,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[40] = t25;
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    let t27;
    if ($[42] !== likeCount) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold",
            children: likeCount
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[42] = likeCount;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    let t28;
    if ($[44] !== t20 || $[45] !== t22 || $[46] !== t26 || $[47] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t20,
            className: t22,
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[44] = t20;
        $[45] = t22;
        $[46] = t26;
        $[47] = t27;
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
            className: "h-4 w-4 group-hover:scale-110 transition-transform"
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[49] = t29;
    } else {
        t29 = $[49];
    }
    let t30;
    if ($[50] !== stats.comments) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white transition-all duration-300 border border-transparent hover:border-white/10",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold",
                    children: stats.comments
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/FeedPost.tsx",
                    lineNumber: 281,
                    columnNumber: 233
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[50] = stats.comments;
        $[51] = t30;
    } else {
        t30 = $[51];
    }
    let t31;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-green-400 transition-all duration-300 border border-transparent hover:border-green-500/20 ml-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                className: "h-4 w-4 group-hover:scale-110 transition-transform"
            }, void 0, false, {
                fileName: "[project]/src/components/feed/FeedPost.tsx",
                lineNumber: 289,
                columnNumber: 244
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[52] = t31;
    } else {
        t31 = $[52];
    }
    let t32;
    if ($[53] !== t28 || $[54] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mt-2",
            children: [
                t28,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[53] = t28;
        $[54] = t30;
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    if ($[56] !== t16 || $[57] !== t17 || $[58] !== t18 || $[59] !== t19 || $[60] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t16,
                t17,
                t18,
                t19,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[56] = t16;
        $[57] = t17;
        $[58] = t18;
        $[59] = t19;
        $[60] = t32;
        $[61] = t33;
    } else {
        t33 = $[61];
    }
    let t34;
    if ($[62] !== t33 || $[63] !== t8) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            animate: t3,
            whileHover: t4,
            transition: t5,
            className: "mb-6 px-4 md:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group rounded-3xl bg-black/40 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.3)]",
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-5",
                            children: [
                                t8,
                                t33
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/feed/FeedPost.tsx",
                            lineNumber: 317,
                            columnNumber: 359
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/feed/FeedPost.tsx",
                        lineNumber: 317,
                        columnNumber: 329
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/feed/FeedPost.tsx",
                lineNumber: 317,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/FeedPost.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[62] = t33;
        $[63] = t8;
        $[64] = t34;
    } else {
        t34 = $[64];
    }
    return t34;
}
_s(FeedPost, "uwQIf1AEwRNge/6pHTROiD0x5mw=");
_c = FeedPost;
function _FeedPostHandleLikeSetLikeCount2(prev_0) {
    return prev_0 + 1;
}
function _FeedPostHandleLikeSetLikeCount(prev) {
    return prev - 1;
}
var _c;
__turbopack_context__.k.register(_c, "FeedPost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/feed/StoriesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoriesSection",
    ()=>StoriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Mock Data
const INITIAL_STORIES = [
    {
        userId: "currentUser",
        userName: "You",
        userAvatar: "https://github.com/shadcn.png",
        isCurrentUser: true,
        stories: []
    },
    {
        userId: "user1",
        userName: "Sarah Chen",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        stories: [
            {
                id: "s1",
                userId: "user1",
                userName: "Sarah Chen",
                userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
                content: "Just shipped the new feature! 🚀\n\nProductivity is at an all time high today.",
                type: "text",
                bgColor: "black",
                timestamp: "2h ago"
            },
            {
                id: "s2",
                userId: "user1",
                userName: "Sarah Chen",
                userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
                content: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
                type: "image",
                timestamp: "1h ago"
            }
        ]
    },
    {
        userId: "user2",
        userName: "Alex Design",
        userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
        stories: [
            {
                id: "s3",
                userId: "user2",
                userName: "Alex Design",
                userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
                content: "Working on the new design system. What do you think?",
                type: "text",
                bgColor: "white",
                timestamp: "5h ago"
            }
        ]
    }
];
function StoriesSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "4a8e939ff6ca7255f622ff88fd6791d335a46f79c252c3680c417cab4a34c907") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4a8e939ff6ca7255f622ff88fd6791d335a46f79c252c3680c417cab4a34c907";
    }
    const [stories, setStories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STORIES);
    const [selectedUserIndex, setSelectedUserIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentStoryIndex, setCurrentStoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createType, setCreateType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("text");
    const [textContent, setTextContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [textBg, setTextBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("black");
    const [, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== stories) {
        t0 = ({
            "StoriesSection[handleUserClick]": (index)=>{
                if (stories[index].isCurrentUser && stories[index].stories.length === 0) {
                    setIsCreating(true);
                } else {
                    setSelectedUserIndex(index);
                    setCurrentStoryIndex(0);
                }
            }
        })["StoriesSection[handleUserClick]"];
        $[1] = stories;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleUserClick = t0;
    let closeViewer;
    let handleNextStory;
    let handlePrevStory;
    if ($[3] !== currentStoryIndex || $[4] !== selectedUserIndex || $[5] !== stories) {
        handleNextStory = ({
            "StoriesSection[handleNextStory]": ()=>{
                if (selectedUserIndex === null) {
                    return;
                }
                const currentUserStories = stories[selectedUserIndex].stories;
                if (currentStoryIndex < currentUserStories.length - 1) {
                    setCurrentStoryIndex(_StoriesSectionHandleNextStorySetCurrentStoryIndex);
                } else {
                    if (selectedUserIndex < stories.length - 1) {
                        let nextIndex = selectedUserIndex + 1;
                        while(nextIndex < stories.length && stories[nextIndex].stories.length === 0){
                            nextIndex++;
                        }
                        if (nextIndex < stories.length) {
                            setSelectedUserIndex(nextIndex);
                            setCurrentStoryIndex(0);
                        } else {
                            closeViewer();
                        }
                    } else {
                        closeViewer();
                    }
                }
            }
        })["StoriesSection[handleNextStory]"];
        handlePrevStory = ({
            "StoriesSection[handlePrevStory]": ()=>{
                if (selectedUserIndex === null) {
                    return;
                }
                if (currentStoryIndex > 0) {
                    setCurrentStoryIndex(_StoriesSectionHandlePrevStorySetCurrentStoryIndex);
                } else {
                    if (selectedUserIndex > 0) {
                        let prevIndex = selectedUserIndex - 1;
                        while(prevIndex >= 0 && stories[prevIndex].stories.length === 0){
                            prevIndex--;
                        }
                        if (prevIndex >= 0) {
                            setSelectedUserIndex(prevIndex);
                            setCurrentStoryIndex(stories[prevIndex].stories.length - 1);
                        } else {
                            closeViewer();
                        }
                    } else {
                        closeViewer();
                    }
                }
            }
        })["StoriesSection[handlePrevStory]"];
        closeViewer = ({
            "StoriesSection[closeViewer]": ()=>{
                setSelectedUserIndex(null);
                setCurrentStoryIndex(0);
            }
        })["StoriesSection[closeViewer]"];
        $[3] = currentStoryIndex;
        $[4] = selectedUserIndex;
        $[5] = stories;
        $[6] = closeViewer;
        $[7] = handleNextStory;
        $[8] = handlePrevStory;
    } else {
        closeViewer = $[6];
        handleNextStory = $[7];
        handlePrevStory = $[8];
    }
    let t1;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "StoriesSection[handleImageUpload]": (e)=>{
                const file = e.target.files?.[0];
                if (file) {
                    setImageFile(file);
                    const reader = new FileReader();
                    reader.onloadend = ()=>{
                        setImagePreview(reader.result);
                    };
                    reader.readAsDataURL(file);
                }
            }
        })["StoriesSection[handleImageUpload]"];
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const handleImageUpload = t1;
    let handlePostStory;
    if ($[10] !== createType || $[11] !== imagePreview || $[12] !== stories || $[13] !== textBg || $[14] !== textContent) {
        handlePostStory = ({
            "StoriesSection[handlePostStory]": ()=>{
                const newStory = {
                    id: Math.random().toString(36).substr(2, 9),
                    userId: "currentUser",
                    userName: "You",
                    userAvatar: "https://github.com/shadcn.png",
                    content: createType === "text" ? textContent : imagePreview,
                    type: createType,
                    bgColor: createType === "text" ? textBg : undefined,
                    timestamp: "Just now"
                };
                const updatedStories = [
                    ...stories
                ];
                updatedStories[0].stories = [
                    newStory,
                    ...updatedStories[0].stories
                ];
                setStories(updatedStories);
                setIsCreating(false);
                resetCreation();
            }
        })["StoriesSection[handlePostStory]"];
        const resetCreation = {
            "StoriesSection[resetCreation]": ()=>{
                setTextContent("");
                setTextBg("black");
                setImageFile(null);
                setImagePreview(null);
                setCreateType("text");
            }
        }["StoriesSection[resetCreation]"];
        $[10] = createType;
        $[11] = imagePreview;
        $[12] = stories;
        $[13] = textBg;
        $[14] = textContent;
        $[15] = handlePostStory;
    } else {
        handlePostStory = $[15];
    }
    const currentUser = stories[selectedUserIndex || 0];
    const currentStory = currentUser?.stories[currentStoryIndex];
    let t2;
    if ($[16] !== handleUserClick) {
        t2 = ({
            "StoriesSection[<div>.onClick]": ()=>handleUserClick(0)
        })["StoriesSection[<div>.onClick]"];
        $[16] = handleUserClick;
        $[17] = t2;
    } else {
        t2 = $[17];
    }
    const t3 = `relative w-16 h-16 rounded-full p-[2px] ${stories[0].stories.length > 0 ? "bg-gradient-to-tr from-cyan-400 to-blue-600" : "border-2 border-dashed border-white/20"}`;
    let t4;
    if ($[18] !== stories[0].userAvatar) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: stories[0].userAvatar,
            alt: "You",
            className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        }, void 0, false, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 253,
            columnNumber: 10
        }, this);
        $[18] = stories[0].userAvatar;
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    let t5;
    if ($[20] !== stories[0].stories.length) {
        t5 = stories[0].stories.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center bg-black/40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                className: "w-6 h-6 text-white"
            }, void 0, false, {
                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                lineNumber: 261,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 261,
            columnNumber: 45
        }, this);
        $[20] = stories[0].stories.length;
        $[21] = t5;
    } else {
        t5 = $[21];
    }
    let t6;
    if ($[22] !== t4 || $[23] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full rounded-full overflow-hidden border-2 border-background relative",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 269,
            columnNumber: 10
        }, this);
        $[22] = t4;
        $[23] = t5;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    let t7;
    if ($[25] !== stories[0].stories.length) {
        t7 = stories[0].stories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                className: "w-3 h-3 text-white"
            }, void 0, false, {
                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                lineNumber: 278,
                columnNumber: 178
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 278,
            columnNumber: 43
        }, this);
        $[25] = stories[0].stories.length;
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    let t8;
    if ($[27] !== t3 || $[28] !== t6 || $[29] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 286,
            columnNumber: 10
        }, this);
        $[27] = t3;
        $[28] = t6;
        $[29] = t7;
        $[30] = t8;
    } else {
        t8 = $[30];
    }
    let t9;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-muted-foreground font-medium",
            children: "My Flow"
        }, void 0, false, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 296,
            columnNumber: 10
        }, this);
        $[31] = t9;
    } else {
        t9 = $[31];
    }
    let t10;
    if ($[32] !== t2 || $[33] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-2 cursor-pointer group",
            onClick: t2,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[32] = t2;
        $[33] = t8;
        $[34] = t10;
    } else {
        t10 = $[34];
    }
    let t11;
    if ($[35] !== handleUserClick || $[36] !== stories) {
        let t12;
        if ($[38] !== handleUserClick) {
            t12 = ({
                "StoriesSection[(anonymous)()]": (user, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2 cursor-pointer group",
                        onClick: {
                            "StoriesSection[(anonymous)() > <div>.onClick]": ()=>handleUserClick(index_0 + 1)
                        }["StoriesSection[(anonymous)() > <div>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 to-blue-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded-full overflow-hidden border-2 border-background",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user.userAvatar,
                                        alt: user.userName,
                                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                        lineNumber: 317,
                                        columnNumber: 249
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                    lineNumber: 317,
                                    columnNumber: 162
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 317,
                                columnNumber: 61
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground font-medium max-w-[70px] truncate",
                                children: user.userName
                            }, void 0, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 317,
                                columnNumber: 405
                            }, this)
                        ]
                    }, user.userId, true, {
                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                        lineNumber: 315,
                        columnNumber: 61
                    }, this)
            })["StoriesSection[(anonymous)()]"];
            $[38] = handleUserClick;
            $[39] = t12;
        } else {
            t12 = $[39];
        }
        t11 = stories.slice(1).map(t12);
        $[35] = handleUserClick;
        $[36] = stories;
        $[37] = t11;
    } else {
        t11 = $[37];
    }
    let t12;
    if ($[40] !== t10 || $[41] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 px-4 min-w-max",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t11;
        $[42] = t12;
    } else {
        t12 = $[42];
    }
    let t13;
    if ($[43] !== createType || $[44] !== handlePostStory || $[45] !== imagePreview || $[46] !== isCreating || $[47] !== textBg || $[48] !== textContent) {
        t13 = isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md bg-background rounded-2xl overflow-hidden border border-white/10 relative h-[80vh] flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex items-center justify-between border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: "Update Daily Flow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 348,
                                columnNumber: 298
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "StoriesSection[<button>.onClick]": ()=>setIsCreating(false)
                                }["StoriesSection[<button>.onClick]"],
                                className: "p-2 hover:bg-white/10 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                    lineNumber: 350,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 348,
                                columnNumber: 350
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                        lineNumber: 348,
                        columnNumber: 218
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 relative flex items-center justify-center bg-neutral-900 overflow-hidden",
                        children: createType === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full h-full flex items-center justify-center p-8 text-center ${textBg === "white" ? "bg-white text-black" : "bg-black text-white"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: textContent,
                                onChange: {
                                    "StoriesSection[<textarea>.onChange]": (e_0)=>setTextContent(e_0.target.value)
                                }["StoriesSection[<textarea>.onChange]"],
                                placeholder: "What's your main focus today?",
                                className: "w-full h-full bg-transparent border-none resize-none focus:ring-0 text-2xl font-bold text-center placeholder:text-gray-500/50",
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 350,
                                columnNumber: 411
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                            lineNumber: 350,
                            columnNumber: 259
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center bg-black",
                            children: imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imagePreview,
                                alt: "Preview",
                                className: "max-w-full max-h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 352,
                                columnNumber: 354
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col items-center gap-4 cursor-pointer p-8 rounded-xl hover:bg-white/5 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                        className: "w-12 h-12 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                        lineNumber: 352,
                                        columnNumber: 563
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Upload Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                        lineNumber: 352,
                                        columnNumber: 620
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        className: "hidden",
                                        onChange: handleImageUpload
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                        lineNumber: 352,
                                        columnNumber: 678
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 352,
                                columnNumber: 446
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                            lineNumber: 352,
                            columnNumber: 265
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                        lineNumber: 350,
                        columnNumber: 137
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-white/10 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "StoriesSection[<button>.onClick]": ()=>setCreateType("text")
                                        }["StoriesSection[<button>.onClick]"],
                                        className: `p-2 rounded-lg flex-1 flex items-center justify-center gap-2 ${createType === "text" ? "bg-primary text-white" : "bg-white/5"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                                lineNumber: 354,
                                                columnNumber: 193
                                            }, this),
                                            " Text"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                        lineNumber: 352,
                                        columnNumber: 885
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "StoriesSection[<button>.onClick]": ()=>setCreateType("image")
                                        }["StoriesSection[<button>.onClick]"],
                                        className: `p-2 rounded-lg flex-1 flex items-center justify-center gap-2 ${createType === "image" ? "bg-primary text-white" : "bg-white/5"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                                lineNumber: 356,
                                                columnNumber: 194
                                            }, this),
                                            " Image"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                        lineNumber: 354,
                                        columnNumber: 235
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 352,
                                columnNumber: 842
                            }, this),
                            createType === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "StoriesSection[<button>.onClick]": ()=>setTextBg("black")
                                        }["StoriesSection[<button>.onClick]"],
                                        className: `w-8 h-8 rounded-full bg-black border border-white/20 ${textBg === "black" ? "ring-2 ring-primary" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                        lineNumber: 356,
                                        columnNumber: 317
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "StoriesSection[<button>.onClick]": ()=>setTextBg("white")
                                        }["StoriesSection[<button>.onClick]"],
                                        className: `w-8 h-8 rounded-full bg-white border border-white/20 ${textBg === "white" ? "ring-2 ring-primary" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                        lineNumber: 358,
                                        columnNumber: 172
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 356,
                                columnNumber: 274
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePostStory,
                                disabled: createType === "text" ? !textContent : !imagePreview,
                                className: "w-full py-3 bg-primary text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
                                children: "Share to Flow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 360,
                                columnNumber: 179
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                        lineNumber: 352,
                        columnNumber: 786
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                lineNumber: 348,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 342,
            columnNumber: 25
        }, this);
        $[43] = createType;
        $[44] = handlePostStory;
        $[45] = imagePreview;
        $[46] = isCreating;
        $[47] = textBg;
        $[48] = textContent;
        $[49] = t13;
    } else {
        t13 = $[49];
    }
    let t14;
    if ($[50] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[50] = t13;
        $[51] = t14;
    } else {
        t14 = $[51];
    }
    let t15;
    if ($[52] !== closeViewer || $[53] !== currentStory || $[54] !== currentStoryIndex || $[55] !== currentUser || $[56] !== handleNextStory || $[57] !== handlePrevStory || $[58] !== selectedUserIndex) {
        t15 = selectedUserIndex !== null && currentStory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 bg-black flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 left-0 right-0 z-20 flex gap-1 px-4",
                    children: currentUser.stories.map({
                        "StoriesSection[currentUser.stories.map()]": (story, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 flex-1 bg-white/20 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: idx < currentStoryIndex ? "100%" : idx === currentStoryIndex ? "100%" : "0%"
                                    },
                                    transition: {
                                        duration: idx === currentStoryIndex ? 5 : 0,
                                        ease: "linear"
                                    },
                                    onAnimationComplete: {
                                        "StoriesSection[currentUser.stories.map() > <motion.div>.onAnimationComplete]": ()=>{
                                            if (idx === currentStoryIndex) {
                                                handleNextStory();
                                            }
                                        }
                                    }["StoriesSection[currentUser.stories.map() > <motion.div>.onAnimationComplete]"],
                                    className: "h-full bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                    lineNumber: 388,
                                    columnNumber: 156
                                }, this)
                            }, story.id, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 388,
                                columnNumber: 72
                            }, this)
                    }["StoriesSection[currentUser.stories.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                    lineNumber: 387,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-8 left-0 right-0 z-20 p-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: currentUser.userAvatar,
                                    alt: currentUser.userName,
                                    className: "w-10 h-10 rounded-full border border-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                    lineNumber: 402,
                                    columnNumber: 194
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-white",
                                            children: currentUser.userName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                            lineNumber: 402,
                                            columnNumber: 320
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/60",
                                            children: currentStory.timestamp
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                            lineNumber: 402,
                                            columnNumber: 386
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                    lineNumber: 402,
                                    columnNumber: 315
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                            lineNumber: 402,
                            columnNumber: 153
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeViewer,
                            className: "p-2 hover:bg-white/10 rounded-full text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/feed/StoriesSection.tsx",
                                lineNumber: 402,
                                columnNumber: 551
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                            lineNumber: 402,
                            columnNumber: 463
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                    lineNumber: 402,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-10 flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/3 h-full",
                            onClick: handlePrevStory
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                            lineNumber: 402,
                            columnNumber: 635
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/3 h-full",
                            onClick: handleNextStory
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                            lineNumber: 402,
                            columnNumber: 693
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/3 h-full",
                            onClick: handleNextStory
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                            lineNumber: 402,
                            columnNumber: 751
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                    lineNumber: 402,
                    columnNumber: 591
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: currentStory.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-full flex items-center justify-center p-8 text-center ${currentStory.bgColor === "white" ? "bg-white text-black" : "bg-black text-white"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl md:text-4xl font-bold whitespace-pre-wrap",
                            children: currentStory.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/feed/StoriesSection.tsx",
                            lineNumber: 402,
                            columnNumber: 1077
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                        lineNumber: 402,
                        columnNumber: 911
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: currentStory.content,
                        alt: "Flow",
                        className: "max-w-full max-h-full object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/components/feed/StoriesSection.tsx",
                        lineNumber: 402,
                        columnNumber: 1178
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/feed/StoriesSection.tsx",
                    lineNumber: 402,
                    columnNumber: 815
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 381,
            columnNumber: 57
        }, this);
        $[52] = closeViewer;
        $[53] = currentStory;
        $[54] = currentStoryIndex;
        $[55] = currentUser;
        $[56] = handleNextStory;
        $[57] = handlePrevStory;
        $[58] = selectedUserIndex;
        $[59] = t15;
    } else {
        t15 = $[59];
    }
    let t16;
    if ($[60] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[60] = t15;
        $[61] = t16;
    } else {
        t16 = $[61];
    }
    let t17;
    if ($[62] !== t12 || $[63] !== t14 || $[64] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full py-4 overflow-x-auto no-scrollbar",
            children: [
                t12,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/feed/StoriesSection.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[62] = t12;
        $[63] = t14;
        $[64] = t16;
        $[65] = t17;
    } else {
        t17 = $[65];
    }
    return t17;
}
_s(StoriesSection, "UlLv63GpRuYWZm+v+pCueYS5IlQ=");
_c = StoriesSection;
function _StoriesSectionHandlePrevStorySetCurrentStoryIndex(prev_0) {
    return prev_0 - 1;
}
function _StoriesSectionHandleNextStorySetCurrentStoryIndex(prev) {
    return prev + 1;
}
var _c;
__turbopack_context__.k.register(_c, "StoriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_f646a419._.js.map