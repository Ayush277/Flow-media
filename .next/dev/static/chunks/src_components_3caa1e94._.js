(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/profile/ExternalAwards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalAwards",
    ()=>ExternalAwards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/medal.js [app-client] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// --- Custom Badge Components ---
function ArcticCodeVaultBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "arcticGrad",
                x1: "0",
                y1: "0",
                x2: "100",
                y2: "100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "0%",
                        stopColor: "#E1F5FE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 29,
                        columnNumber: 80
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "100%",
                        stopColor: "#81D4FA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 29,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                lineNumber: 29,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "url(#arcticGrad)",
            stroke: "#4FC3F7",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M30 50 L50 70 L80 30",
            stroke: "#0277BD",
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M35 35 L65 35",
            stroke: "#0277BD",
            strokeWidth: "4",
            strokeLinecap: "round",
            opacity: "0.5"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M40 80 L60 80",
            stroke: "#0277BD",
            strokeWidth: "4",
            strokeLinecap: "round",
            opacity: "0.5"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] !== className) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: className,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t1,
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[6] = className;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = ArcticCodeVaultBadge;
function PullSharkBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "sharkGrad",
                x1: "50",
                y1: "0",
                x2: "50",
                y2: "100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "0%",
                        stopColor: "#42A5F5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 74,
                        columnNumber: 79
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "100%",
                        stopColor: "#1565C0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 74,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                lineNumber: 74,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "#E3F2FD",
            stroke: "#1E88E5",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M50 20 C50 20 80 50 80 70 C80 85 65 85 50 85 C35 85 20 85 20 70 C20 50 50 20 50 20 Z",
            fill: "url(#sharkGrad)"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "40",
            cy: "60",
            r: "3",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "60",
            cy: "60",
            r: "3",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M45 75 Q50 80 55 75",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] !== className) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: className,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t1,
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[7] = className;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_c1 = PullSharkBadge;
function LeetCodeGuardianBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "guardianGrad",
                x1: "0",
                y1: "0",
                x2: "100",
                y2: "100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "0%",
                        stopColor: "#FFA726"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 120,
                        columnNumber: 82
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "100%",
                        stopColor: "#EF6C00"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 120,
                        columnNumber: 122
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                lineNumber: 120,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M50 10 L90 25 V55 C90 75 50 95 50 95 C50 95 10 75 10 55 V25 L50 10 Z",
            fill: "url(#guardianGrad)",
            stroke: "#E65100",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M35 45 L50 60 L70 35",
            stroke: "white",
            strokeWidth: "6",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "50",
            cy: "30",
            r: "5",
            fill: "white",
            opacity: "0.8"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    if ($[5] !== className) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: className,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t1,
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[5] = className;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c2 = LeetCodeGuardianBadge;
function LeetCode100Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "fireGrad",
                x1: "50",
                y1: "100",
                x2: "50",
                y2: "0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "0%",
                        stopColor: "#D84315"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 159,
                        columnNumber: 78
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "50%",
                        stopColor: "#F4511E"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 159,
                        columnNumber: 118
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "100%",
                        stopColor: "#FFAB91"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 159,
                        columnNumber: 159
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                lineNumber: 159,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M50 95 C50 95 20 80 20 55 C20 35 35 20 50 5 C65 20 80 35 80 55 C80 80 50 95 50 95 Z",
            fill: "url(#fireGrad)"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: "50",
            y: "65",
            textAnchor: "middle",
            fill: "white",
            fontSize: "24",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            children: "100"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: className,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[4] = className;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c3 = LeetCode100Badge;
function WakaTimeBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "403328e887dba1f07019b9cb33e39a03b269cf3a03e22930d5d33b7cf903b18a";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "#263238",
            stroke: "#37474F",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "50",
            cy: "50",
            r: "35",
            fill: "none",
            stroke: "#4DB6AC",
            strokeWidth: "8",
            strokeDasharray: "160 220",
            transform: "rotate(-90 50 50)"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 196,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: "50",
            y: "55",
            textAnchor: "middle",
            fill: "#4DB6AC",
            fontSize: "20",
            fontWeight: "bold",
            fontFamily: "monospace",
            children: "1%"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 197,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: className,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[4] = className;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c4 = WakaTimeBadge;
const BADGE_COMPONENTS = {
    'arctic-code-vault': ArcticCodeVaultBadge,
    'pull-shark': PullSharkBadge,
    'leetcode-guardian': LeetCodeGuardianBadge,
    'leetcode-100': LeetCode100Badge,
    'wakatime-top-1': WakaTimeBadge
};
const MOCK_AWARDS = [
    {
        id: "gh-1",
        platform: "github",
        title: "Arctic Code Vault",
        description: "Contributed code to the 2020 GitHub Archive Program",
        BadgeComponent: ArcticCodeVaultBadge,
        date: "2020",
        color: "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20"
    },
    {
        id: "gh-2",
        platform: "github",
        title: "Pull Shark",
        description: "Opened pull requests that were merged",
        BadgeComponent: PullSharkBadge,
        date: "2023",
        color: "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20"
    },
    {
        id: "lc-1",
        platform: "leetcode",
        title: "Guardian",
        description: "Top 5% in Weekly Contest Rating",
        BadgeComponent: LeetCodeGuardianBadge,
        date: "2024",
        color: "bg-orange-500/5 hover:bg-orange-500/10 border-orange-500/20"
    },
    {
        id: "lc-2",
        platform: "leetcode",
        title: "100 Days Badge",
        description: "Solved a problem for 100 consecutive days",
        BadgeComponent: LeetCode100Badge,
        date: "2024",
        color: "bg-red-500/5 hover:bg-red-500/10 border-red-500/20"
    },
    {
        id: "wt-1",
        platform: "wakatime",
        title: "Top 1% Developer",
        description: "Coded for 50+ hours in a single week",
        BadgeComponent: WakaTimeBadge,
        date: "Dec 2024",
        color: "bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20"
    }
];
function ExternalAwards() {
    _s();
    const [awards, setAwards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExternalAwards.useEffect": ()=>{
            const fetchAwards = {
                "ExternalAwards.useEffect.fetchAwards": async ()=>{
                    try {
                        const { data: { user } } = await supabase.auth.getUser();
                        if (!user) {
                            // Fallback to mock data if not logged in
                            setAwards(MOCK_AWARDS);
                            return;
                        }
                        // In a real app, we would fetch from a 'user_awards' table
                        // const { data, error } = await supabase.from('user_awards').select('*').eq('user_id', user.id);
                        // Simulating API call delay
                        await new Promise({
                            "ExternalAwards.useEffect.fetchAwards": (resolve)=>setTimeout(resolve, 1000)
                        }["ExternalAwards.useEffect.fetchAwards"]);
                        // For now, we'll use the mock data as the "fetched" data
                        setAwards(MOCK_AWARDS);
                    } catch (error) {
                        console.error("Error fetching awards:", error);
                        setAwards(MOCK_AWARDS); // Fallback
                    } finally{
                        setLoading(false);
                    }
                }
            }["ExternalAwards.useEffect.fetchAwards"];
            fetchAwards();
        }
    }["ExternalAwards.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 flex justify-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-8 w-8 animate-spin text-primary"
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                lineNumber: 313,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ExternalAwards.tsx",
            lineNumber: 312,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                        className: "h-5 w-5 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, this),
                    "External Awards"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: awards.map((award, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: i * 0.1
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border rounded-xl p-4 flex items-center gap-4 transition-all duration-300 group", award.color),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16 w-16 shrink-0 drop-shadow-lg transition-transform group-hover:scale-110 duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(award.BadgeComponent, {
                                    className: "w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                    lineNumber: 334,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                lineNumber: 333,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-base truncate pr-2",
                                                children: award.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                                lineNumber: 339,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider opacity-60 bg-white/10 px-2 py-0.5 rounded-full border border-white/10",
                                                children: award.platform
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                                lineNumber: 340,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                        lineNumber: 338,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground line-clamp-2 mb-2 leading-relaxed",
                                        children: award.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                        lineNumber: 344,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 text-[10px] text-muted-foreground font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"], {
                                                className: "h-3 w-3 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                                lineNumber: 348,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Earned ",
                                                    award.date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                                lineNumber: 349,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                        lineNumber: 347,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                                lineNumber: 337,
                                columnNumber: 25
                            }, this)
                        ]
                    }, award.id, true, {
                        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                        lineNumber: 323,
                        columnNumber: 43
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ExternalAwards.tsx",
                lineNumber: 322,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profile/ExternalAwards.tsx",
        lineNumber: 316,
        columnNumber: 10
    }, this);
}
_s(ExternalAwards, "eaJA6rqWzXFyX67+JyJWR0wyU/M=");
_c5 = ExternalAwards;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ArcticCodeVaultBadge");
__turbopack_context__.k.register(_c1, "PullSharkBadge");
__turbopack_context__.k.register(_c2, "LeetCodeGuardianBadge");
__turbopack_context__.k.register(_c3, "LeetCode100Badge");
__turbopack_context__.k.register(_c4, "WakaTimeBadge");
__turbopack_context__.k.register(_c5, "ExternalAwards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/profile/ProductivityHeatmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductivityHeatmap",
    ()=>ProductivityHeatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
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
// Mock Data Generators
const generateData = (type)=>{
    const data = [];
    const today = new Date();
    for(let i = 0; i < 364; i++){
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        let intensity = 0;
        let value = 0;
        if (type === 'flow') {
            // Flow: Hours focused (0-12h)
            if (Math.random() > 0.3) {
                value = Math.floor(Math.random() * 8) + 1;
                intensity = Math.min(Math.ceil(value / 2), 4);
            }
        } else if (type === 'github') {
            // GitHub: Commits (0-15)
            if (Math.random() > 0.4) {
                value = Math.floor(Math.random() * 10) + 1;
                intensity = Math.min(Math.ceil(value / 3), 4);
            }
        } else {
            // LeetCode: Problems (0-5)
            if (Math.random() > 0.6) {
                value = Math.floor(Math.random() * 4) + 1;
                intensity = value;
            }
        }
        data.push({
            date,
            intensity,
            value
        });
    }
    return data.reverse();
};
const DATA_CONFIG = {
    flow: {
        label: "Flow Focus",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: "bg-primary",
        text: "text-primary",
        unit: "h",
        stats: {
            streak: "12 Days",
            total: "1,240h",
            best: "8h"
        }
    },
    github: {
        label: "GitHub",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        color: "bg-green-500",
        text: "text-green-500",
        unit: " commits",
        stats: {
            streak: "128 Days",
            total: "2,450",
            best: "15"
        }
    },
    leetcode: {
        label: "LeetCode",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        color: "bg-orange-500",
        text: "text-orange-500",
        unit: " problems",
        stats: {
            streak: "45 Days",
            total: "450",
            best: "5"
        }
    }
};
function ProductivityHeatmap() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(100);
    if ($[0] !== "1625277b09f114eba7ce3d8a2e26a33c4a23f775a74d7575e736d45173316e0a") {
        for(let $i = 0; $i < 100; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1625277b09f114eba7ce3d8a2e26a33c4a23f775a74d7575e736d45173316e0a";
    }
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("flow");
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredDay, setHoveredDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let config;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== hoveredDay || $[2] !== isDropdownOpen || $[3] !== source) {
        const data = generateData(source);
        config = DATA_CONFIG[source];
        let t5;
        if ($[10] !== source) {
            t5 = ({
                "ProductivityHeatmap[getIntensityColor]": (intensity)=>{
                    if (intensity === 0) {
                        return "bg-white/5";
                    }
                    if (source === "github") {
                        return [
                            "bg-white/5",
                            "bg-green-900/40",
                            "bg-green-700/60",
                            "bg-green-500/80",
                            "bg-green-500"
                        ][intensity];
                    }
                    if (source === "leetcode") {
                        return [
                            "bg-white/5",
                            "bg-orange-900/40",
                            "bg-orange-700/60",
                            "bg-orange-500/80",
                            "bg-orange-500"
                        ][intensity];
                    }
                    return [
                        "bg-white/5",
                        "bg-primary/20",
                        "bg-primary/40",
                        "bg-primary/70",
                        "bg-primary"
                    ][intensity];
                }
            })["ProductivityHeatmap[getIntensityColor]"];
            $[10] = source;
            $[11] = t5;
        } else {
            t5 = $[11];
        }
        const getIntensityColor = t5;
        t3 = "bg-card/30 border border-white/5 rounded-2xl p-6 mb-6";
        let t6;
        if ($[12] !== isDropdownOpen) {
            t6 = ({
                "ProductivityHeatmap[<button>.onClick]": ()=>setIsDropdownOpen(!isDropdownOpen)
            })["ProductivityHeatmap[<button>.onClick]"];
            $[12] = isDropdownOpen;
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        const T0 = config.icon;
        let t7;
        if ($[14] !== config.text) {
            t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 w-6", config.text);
            $[14] = config.text;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        let t8;
        if ($[16] !== config.icon || $[17] !== t7) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
                className: t7
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 153,
                columnNumber: 12
            }, this);
            $[16] = config.icon;
            $[17] = t7;
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        const t9 = `h-5 w-5 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`;
        let t10;
        if ($[19] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: t9
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 163,
                columnNumber: 13
            }, this);
            $[19] = t9;
            $[20] = t10;
        } else {
            t10 = $[20];
        }
        let t11;
        if ($[21] !== config.label || $[22] !== t10 || $[23] !== t6 || $[24] !== t8) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t6,
                className: "flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity",
                children: [
                    t8,
                    config.label,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 171,
                columnNumber: 13
            }, this);
            $[21] = config.label;
            $[22] = t10;
            $[23] = t6;
            $[24] = t8;
            $[25] = t11;
        } else {
            t11 = $[25];
        }
        let t12;
        if ($[26] !== isDropdownOpen) {
            t12 = isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 10
                },
                className: "absolute top-full left-0 mt-2 w-48 bg-card border border-white/10 rounded-xl shadow-xl z-20 overflow-hidden",
                children: Object.keys(DATA_CONFIG).map({
                    "ProductivityHeatmap[(anonymous)()]": (key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ProductivityHeatmap[(anonymous)() > <button>.onClick]": ()=>{
                                    setSource(key);
                                    setIsDropdownOpen(false);
                                }
                            }["ProductivityHeatmap[(anonymous)() > <button>.onClick]"],
                            className: "w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left",
                            children: DATA_CONFIG[key].label
                        }, key, false, {
                            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                            lineNumber: 192,
                            columnNumber: 56
                        }, this)
                }["ProductivityHeatmap[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 182,
                columnNumber: 31
            }, this);
            $[26] = isDropdownOpen;
            $[27] = t12;
        } else {
            t12 = $[27];
        }
        let t13;
        if ($[28] !== t12) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 206,
                columnNumber: 13
            }, this);
            $[28] = t12;
            $[29] = t13;
        } else {
            t13 = $[29];
        }
        let t14;
        if ($[30] !== t11 || $[31] !== t13) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    t11,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 214,
                columnNumber: 13
            }, this);
            $[30] = t11;
            $[31] = t13;
            $[32] = t14;
        } else {
            t14 = $[32];
        }
        let t15;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Less"
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this);
            $[33] = t15;
        } else {
            t15 = $[33];
        }
        let t16;
        if ($[34] !== getIntensityColor) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: [
                    0,
                    1,
                    2,
                    3,
                    4
                ].map({
                    "ProductivityHeatmap[(anonymous)()]": (i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-sm", getIntensityColor(i))
                        }, i, false, {
                            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                            lineNumber: 231,
                            columnNumber: 54
                        }, this)
                }["ProductivityHeatmap[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this);
            $[34] = getIntensityColor;
            $[35] = t16;
        } else {
            t16 = $[35];
        }
        let t17;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "More"
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, this);
            $[36] = t17;
        } else {
            t17 = $[36];
        }
        let t18;
        if ($[37] !== t16) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-muted-foreground",
                children: [
                    t15,
                    t16,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 247,
                columnNumber: 13
            }, this);
            $[37] = t16;
            $[38] = t18;
        } else {
            t18 = $[38];
        }
        if ($[39] !== t14 || $[40] !== t18) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    t14,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                lineNumber: 254,
                columnNumber: 12
            }, this);
            $[39] = t14;
            $[40] = t18;
            $[41] = t4;
        } else {
            t4 = $[41];
        }
        t2 = "w-full overflow-x-auto pb-4 no-scrollbar";
        t0 = "min-w-[800px] flex gap-1 flex-wrap h-[140px] content-start";
        let t19;
        if ($[42] !== config.unit || $[43] !== getIntensityColor || $[44] !== hoveredDay) {
            t19 = ({
                "ProductivityHeatmap[data.map()]": (day, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: i_0 * 0.0005
                        },
                        onMouseEnter: {
                            "ProductivityHeatmap[data.map() > <motion.div>.onMouseEnter]": ()=>setHoveredDay(day)
                        }["ProductivityHeatmap[data.map() > <motion.div>.onMouseEnter]"],
                        onMouseLeave: {
                            "ProductivityHeatmap[data.map() > <motion.div>.onMouseLeave]": ()=>setHoveredDay(null)
                        }["ProductivityHeatmap[data.map() > <motion.div>.onMouseLeave]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-sm transition-all hover:ring-1 hover:ring-white/50 cursor-pointer relative", getIntensityColor(day.intensity)),
                        children: hoveredDay === day && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded-md border border-white/10 pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold",
                                    children: [
                                        day.value,
                                        config.unit
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                                    lineNumber: 276,
                                    columnNumber: 425
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/50",
                                    children: day.date.toDateString()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                                    lineNumber: 276,
                                    columnNumber: 478
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                            lineNumber: 276,
                            columnNumber: 241
                        }, this)
                    }, i_0, false, {
                        fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
                        lineNumber: 266,
                        columnNumber: 58
                    }, this)
            })["ProductivityHeatmap[data.map()]"];
            $[42] = config.unit;
            $[43] = getIntensityColor;
            $[44] = hoveredDay;
            $[45] = t19;
        } else {
            t19 = $[45];
        }
        t1 = data.map(t19);
        $[1] = hoveredDay;
        $[2] = isDropdownOpen;
        $[3] = source;
        $[4] = config;
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        config = $[4];
        t0 = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
    }
    let t5;
    if ($[46] !== t0 || $[47] !== t1) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        $[46] = t0;
        $[47] = t1;
        $[48] = t5;
    } else {
        t5 = $[48];
    }
    let t6;
    if ($[49] !== t2 || $[50] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 314,
            columnNumber: 10
        }, this);
        $[49] = t2;
        $[50] = t5;
        $[51] = t6;
    } else {
        t6 = $[51];
    }
    let t7;
    if ($[52] !== config.text) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", config.text);
        $[52] = config.text;
        $[53] = t7;
    } else {
        t7 = $[53];
    }
    let t8;
    if ($[54] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
            className: t7
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 331,
            columnNumber: 10
        }, this);
        $[54] = t7;
        $[55] = t8;
    } else {
        t8 = $[55];
    }
    let t9;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium uppercase tracking-wider",
            children: "Current Streak"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 339,
            columnNumber: 10
        }, this);
        $[56] = t9;
    } else {
        t9 = $[56];
    }
    let t10;
    if ($[57] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-muted-foreground mb-1",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[57] = t8;
        $[58] = t10;
    } else {
        t10 = $[58];
    }
    let t11;
    if ($[59] !== config.stats.streak) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-white",
            children: config.stats.streak
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[59] = config.stats.streak;
        $[60] = t11;
    } else {
        t11 = $[60];
    }
    let t12;
    if ($[61] !== t10 || $[62] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/20 rounded-xl p-4 border border-white/5",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[61] = t10;
        $[62] = t11;
        $[63] = t12;
    } else {
        t12 = $[63];
    }
    let t13;
    if ($[64] !== config.text) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", config.text);
        $[64] = config.text;
        $[65] = t13;
    } else {
        t13 = $[65];
    }
    let t14;
    if ($[66] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: t13
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[66] = t13;
        $[67] = t14;
    } else {
        t14 = $[67];
    }
    const t15 = source === "flow" ? "Time" : "Count";
    let t16;
    if ($[68] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium uppercase tracking-wider",
            children: [
                "Total ",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[68] = t15;
        $[69] = t16;
    } else {
        t16 = $[69];
    }
    let t17;
    if ($[70] !== t14 || $[71] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-muted-foreground mb-1",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[70] = t14;
        $[71] = t16;
        $[72] = t17;
    } else {
        t17 = $[72];
    }
    let t18;
    if ($[73] !== config.stats.total) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-white",
            children: config.stats.total
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[73] = config.stats.total;
        $[74] = t18;
    } else {
        t18 = $[74];
    }
    let t19;
    if ($[75] !== t17 || $[76] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/20 rounded-xl p-4 border border-white/5",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[75] = t17;
        $[76] = t18;
        $[77] = t19;
    } else {
        t19 = $[77];
    }
    let t20;
    if ($[78] !== config.text) {
        t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", config.text);
        $[78] = config.text;
        $[79] = t20;
    } else {
        t20 = $[79];
    }
    let t21;
    if ($[80] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
            className: t20
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[80] = t20;
        $[81] = t21;
    } else {
        t21 = $[81];
    }
    let t22;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium uppercase tracking-wider",
            children: "Best Day"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[82] = t22;
    } else {
        t22 = $[82];
    }
    let t23;
    if ($[83] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-muted-foreground mb-1",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[83] = t21;
        $[84] = t23;
    } else {
        t23 = $[84];
    }
    let t24;
    if ($[85] !== config.stats.best || $[86] !== config.unit) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-bold text-white",
            children: [
                config.stats.best,
                config.unit
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, this);
        $[85] = config.stats.best;
        $[86] = config.unit;
        $[87] = t24;
    } else {
        t24 = $[87];
    }
    let t25;
    if ($[88] !== t23 || $[89] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/20 rounded-xl p-4 border border-white/5",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 462,
            columnNumber: 11
        }, this);
        $[88] = t23;
        $[89] = t24;
        $[90] = t25;
    } else {
        t25 = $[90];
    }
    let t26;
    if ($[91] !== t12 || $[92] !== t19 || $[93] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 grid grid-cols-3 gap-4",
            children: [
                t12,
                t19,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[91] = t12;
        $[92] = t19;
        $[93] = t25;
        $[94] = t26;
    } else {
        t26 = $[94];
    }
    let t27;
    if ($[95] !== t26 || $[96] !== t3 || $[97] !== t4 || $[98] !== t6) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProductivityHeatmap.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[95] = t26;
        $[96] = t3;
        $[97] = t4;
        $[98] = t6;
        $[99] = t27;
    } else {
        t27 = $[99];
    }
    return t27;
}
_s(ProductivityHeatmap, "8Wzgmb557UR9YrZlYRQdl36o0Y0=");
_c = ProductivityHeatmap;
var _c;
__turbopack_context__.k.register(_c, "ProductivityHeatmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/profile/ProfileBadges.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileBadges",
    ()=>ProfileBadges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
"use client";
;
;
;
;
;
const MILESTONES = [
    {
        id: "m1",
        label: "Early Bird",
        description: "Complete 5 sessions before 8 AM",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
        progress: 100,
        isUnlocked: true,
        color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
    },
    {
        id: "m2",
        label: "Deep Diver",
        description: "Reach 100 total focus hours",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        progress: 100,
        isUnlocked: true,
        color: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    },
    {
        id: "m3",
        label: "Streak Master",
        description: "Maintain a 30-day flow streak",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        progress: 65,
        isUnlocked: false,
        color: "text-orange-400 bg-orange-400/10 border-orange-400/20"
    },
    {
        id: "m4",
        label: "Night Owl",
        description: "Complete 10 sessions after 10 PM",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
        progress: 100,
        isUnlocked: true,
        color: "text-purple-400 bg-purple-400/10 border-purple-400/20"
    },
    {
        id: "m5",
        label: "Flow State",
        description: "Complete a 4-hour continuous session",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        progress: 40,
        isUnlocked: false,
        color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
    },
    {
        id: "m6",
        label: "Legend",
        description: "Reach top 1% of global users",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        progress: 10,
        isUnlocked: false,
        color: "text-pink-400 bg-pink-400/10 border-pink-400/20"
    }
];
function ProfileBadges() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "ea77f4e90804313bf3428e28f063c43cdec257079c0bd296996d8efa935f8f0c") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea77f4e90804313bf3428e28f063c43cdec257079c0bd296996d8efa935f8f0c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold mb-4 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                    className: "h-5 w-5 text-primary"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                    lineNumber: 75,
                    columnNumber: 73
                }, this),
                "Milestones"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileBadges.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                    children: MILESTONES.map(_ProfileBadgesMILESTONESMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                    lineNumber: 82,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileBadges.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = ProfileBadges;
function _ProfileBadgesMILESTONESMap(milestone, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: i * 0.1
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative p-4 rounded-2xl border transition-all duration-300 overflow-hidden group", milestone.isUnlocked ? `${milestone.color} hover:shadow-lg hover:scale-[1.02]` : "bg-card/30 border-white/5 opacity-60 grayscale hover:opacity-80"),
        children: [
            !milestone.isUnlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 h-1 bg-primary/50 transition-all duration-1000",
                style: {
                    width: `${milestone.progress}%`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                lineNumber: 98,
                columnNumber: 280
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-xl", milestone.isUnlocked ? "bg-black/20" : "bg-white/5"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(milestone.icon, {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                            lineNumber: 100,
                            columnNumber: 157
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                        lineNumber: 100,
                        columnNumber: 66
                    }, this),
                    !milestone.isUnlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                        className: "h-4 w-4 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                        lineNumber: 100,
                        columnNumber: 227
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                lineNumber: 100,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-bold text-sm mb-1",
                children: milestone.label
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                lineNumber: 100,
                columnNumber: 284
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs opacity-80 leading-relaxed",
                children: milestone.description
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                lineNumber: 100,
                columnNumber: 345
            }, this),
            milestone.isUnlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[10px] font-bold uppercase tracking-wider bg-black/20 px-2 py-1 rounded-full",
                    children: "Unlocked"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                    lineNumber: 100,
                    columnNumber: 544
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProfileBadges.tsx",
                lineNumber: 100,
                columnNumber: 447
            }, this)
        ]
    }, milestone.id, true, {
        fileName: "[project]/src/components/profile/ProfileBadges.tsx",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProfileBadges");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/profile/ProfileHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileHeader",
    ()=>ProfileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Frame Definitions
const FRAMES = [
    {
        id: 'default',
        name: 'Flow Gradient',
        class: 'bg-gradient-to-r from-primary via-purple-500 to-blue-500',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: 'text-blue-400'
    },
    {
        id: 'gold',
        name: 'Golden Legend',
        class: 'bg-gradient-to-tr from-yellow-300 via-yellow-500 to-yellow-700',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: 'text-yellow-400'
    },
    {
        id: 'fire',
        name: 'Dragon Fire',
        class: 'bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        color: 'text-orange-500'
    },
    {
        id: 'neon',
        name: 'Cyber Neon',
        class: 'bg-gradient-to-r from-green-400 to-emerald-600 shadow-[0_0_20px_rgba(52,211,153,0.5)]',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        color: 'text-green-400'
    }
];
function ProfileHeader() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "f25bb994eec5e62080791b0e1fe465c8fe3f210c6069b85dd07e68b3d066eea4") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f25bb994eec5e62080791b0e1fe465c8fe3f210c6069b85dd07e68b3d066eea4";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const supabase = t0;
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("profile");
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Building the future of productivity. \uD83D\uDE80 | Level 42 Visionary | Shipping code & hitting PRs.");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Ayush Kumar");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("San Francisco, CA");
    const [website, setWebsite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ayush.dev");
    const [selectedFrame, setSelectedFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("default");
    let t1;
    if ($[2] !== router) {
        t1 = ({
            "ProfileHeader[handleSignOut]": async ()=>{
                await supabase.auth.signOut();
                router.push("/login");
            }
        })["ProfileHeader[handleSignOut]"];
        $[2] = router;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleSignOut = t1;
    let t2;
    if ($[4] !== selectedFrame) {
        t2 = FRAMES.find({
            "ProfileHeader[FRAMES.find()]": (f)=>f.id === selectedFrame
        }["ProfileHeader[FRAMES.find()]"]) || FRAMES[0];
        $[4] = selectedFrame;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const currentFrame = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/10"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-48 w-full bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl overflow-hidden relative group",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                        lineNumber: 94,
                        columnNumber: 290
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 94,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const t5 = `absolute -inset-1.5 rounded-full opacity-75 blur animate-pulse group-hover:opacity-100 transition-opacity duration-500 ${currentFrame.class}`;
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            scale: 0.9,
            opacity: 0
        };
        t8 = {
            scale: 1,
            opacity: 1
        };
        $[10] = t7;
        $[11] = t8;
    } else {
        t7 = $[10];
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                className: "h-6 w-6 text-white"
            }, void 0, false, {
                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                lineNumber: 127,
                columnNumber: 149
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== name[0]) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t7,
            animate: t8,
            className: "h-32 w-32 rounded-full bg-black border-4 border-black p-1 relative z-10 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-4xl font-bold text-white relative group/avatar cursor-pointer",
                children: [
                    name[0],
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                lineNumber: 134,
                columnNumber: 149
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[13] = name[0];
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-2 right-2 h-6 w-6 rounded-full bg-green-500 border-4 border-black z-20",
            title: "Online"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t10 || $[17] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t6,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t6;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs border border-primary/20",
            children: "PRO"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== name) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-white flex items-center gap-2",
            children: [
                name,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[20] = name;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground",
            children: "@ayush_builds"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "ProfileHeader[<button>.onClick]": ()=>{
                setActiveTab("profile");
                setIsEditing(true);
            }
        })["ProfileHeader[<button>.onClick]"];
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    let t19;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t17,
            className: "px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium text-sm flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 201,
                    columnNumber: 182
                }, this),
                "Edit Profile"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        t19 = ({
            "ProfileHeader[<button>.onClick]": ()=>{
                setActiveTab("account");
                setIsEditing(true);
            }
        })["ProfileHeader[<button>.onClick]"];
        $[26] = t18;
        $[27] = t19;
    } else {
        t18 = $[26];
        t19 = $[27];
    }
    let t20;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t19,
                    className: "p-2 rounded-full hover:bg-white/10 transition-colors border border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        className: "h-5 w-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                        lineNumber: 216,
                        columnNumber: 154
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 216,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== t16) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t16,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[29] = t16;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== bio) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-gray-300 max-w-2xl leading-relaxed",
            children: bio
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[31] = bio;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] !== location) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: location
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 246,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[34] = location;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] !== website) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 hover:text-primary transition-colors cursor-pointer",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: website
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 261,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[37] = website;
        $[38] = t26;
    } else {
        t26 = $[38];
    }
    let t27;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 269,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Joined December 2025"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 269,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[39] = t27;
    } else {
        t27 = $[39];
    }
    let t28;
    if ($[40] !== t24 || $[41] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground",
            children: [
                t24,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[40] = t24;
        $[41] = t26;
        $[42] = t28;
    } else {
        t28 = $[42];
    }
    let t29;
    if ($[43] !== t21 || $[44] !== t22 || $[45] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 mb-2 w-full",
            children: [
                t21,
                t22,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[43] = t21;
        $[44] = t22;
        $[45] = t28;
        $[46] = t29;
    } else {
        t29 = $[46];
    }
    let t30;
    if ($[47] !== t12 || $[48] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row items-start md:items-end gap-6 -mt-12",
            children: [
                t12,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[47] = t12;
        $[48] = t29;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    let t31;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 px-3 py-2 rounded-xl bg-black/20 border border-white/5 min-w-fit",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                    className: "h-5 w-5 text-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 304,
                    columnNumber: 117
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: "GitHub Streak"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                            lineNumber: 304,
                            columnNumber: 163
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold text-green-400",
                            children: "128 Days 🔥"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                            lineNumber: 304,
                            columnNumber: 225
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 304,
                    columnNumber: 158
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[50] = t31;
    } else {
        t31 = $[50];
    }
    let t32;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 px-3 py-2 rounded-xl bg-black/20 border border-white/5 min-w-fit",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                    className: "h-5 w-5 text-orange-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 311,
                    columnNumber: 117
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: "LeetCode"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                            lineNumber: 311,
                            columnNumber: 167
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold text-orange-400",
                            children: "450 Solved"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                            lineNumber: 311,
                            columnNumber: 224
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 311,
                    columnNumber: 162
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[51] = t32;
    } else {
        t32 = $[51];
    }
    let t33;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card/30 border border-white/5 rounded-2xl p-4 flex items-center gap-4 overflow-x-auto no-scrollbar",
            children: [
                t31,
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 px-3 py-2 rounded-xl bg-black/20 border border-white/5 min-w-fit",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                            className: "h-5 w-5 text-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                            lineNumber: 318,
                            columnNumber: 246
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "WakaTime"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                    lineNumber: 318,
                                    columnNumber: 297
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-blue-400",
                                    children: "45h / week"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                    lineNumber: 318,
                                    columnNumber: 354
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                            lineNumber: 318,
                            columnNumber: 292
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 318,
                    columnNumber: 140
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[52] = t33;
    } else {
        t33 = $[52];
    }
    let t34;
    let t35;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-white",
                    children: "1,240"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 326,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground uppercase tracking-wider",
                    children: "Hours Focused"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 326,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-8 bg-white/10"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[53] = t34;
        $[54] = t35;
    } else {
        t34 = $[53];
        t35 = $[54];
    }
    let t36;
    let t37;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-white",
                    children: "856"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 337,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground uppercase tracking-wider",
                    children: "Flows Done"
                }, void 0, false, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 337,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-8 bg-white/10"
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[55] = t36;
        $[56] = t37;
    } else {
        t36 = $[55];
        t37 = $[56];
    }
    let t38;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card/30 border border-white/5 rounded-2xl p-4 flex items-center justify-around",
                    children: [
                        t34,
                        t35,
                        t36,
                        t37,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-white",
                                    children: "Top 1%"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                    lineNumber: 347,
                                    columnNumber: 224
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground uppercase tracking-wider",
                                    children: "Rank"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                    lineNumber: 347,
                                    columnNumber: 279
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                            lineNumber: 347,
                            columnNumber: 195
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                    lineNumber: 347,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[57] = t38;
    } else {
        t38 = $[57];
    }
    let t39;
    if ($[58] !== t30) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 relative",
            children: [
                t30,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[58] = t30;
        $[59] = t39;
    } else {
        t39 = $[59];
    }
    let t40;
    if ($[60] !== activeTab || $[61] !== bio || $[62] !== handleSignOut || $[63] !== isEditing || $[64] !== location || $[65] !== name || $[66] !== selectedFrame || $[67] !== website) {
        t40 = isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",
            onClick: {
                "ProfileHeader[<motion.div>.onClick]": ()=>setIsEditing(false)
            }["ProfileHeader[<motion.div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.95,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.95,
                    opacity: 0
                },
                onClick: _ProfileHeaderMotionDivOnClick,
                className: "bg-card border border-white/10 rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[80vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-64 bg-black/20 border-r border-white/5 p-4 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg px-2 mb-2",
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                lineNumber: 379,
                                columnNumber: 281
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ProfileHeader[<button>.onClick]": ()=>setActiveTab("profile")
                                }["ProfileHeader[<button>.onClick]"],
                                className: `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "profile" ? "bg-primary text-white" : "hover:bg-white/5 text-muted-foreground"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 381,
                                        columnNumber: 242
                                    }, this),
                                    " Edit Profile"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                lineNumber: 379,
                                columnNumber: 338
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ProfileHeader[<button>.onClick]": ()=>setActiveTab("frames")
                                }["ProfileHeader[<button>.onClick]"],
                                className: `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "frames" ? "bg-primary text-white" : "hover:bg-white/5 text-muted-foreground"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 383,
                                        columnNumber: 241
                                    }, this),
                                    " Frames & Decor"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                lineNumber: 381,
                                columnNumber: 292
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ProfileHeader[<button>.onClick]": ()=>setActiveTab("account")
                                }["ProfileHeader[<button>.onClick]"],
                                className: `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "account" ? "bg-primary text-white" : "hover:bg-white/5 text-muted-foreground"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 385,
                                        columnNumber: 242
                                    }, this),
                                    " Account"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                lineNumber: 383,
                                columnNumber: 301
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                        lineNumber: 379,
                        columnNumber: 189
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-6 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold",
                                        children: [
                                            activeTab === "profile" && "Edit Profile",
                                            activeTab === "frames" && "Customize Appearance",
                                            activeTab === "account" && "Account Settings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 385,
                                        columnNumber: 395
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProfileHeader[<button>.onClick]": ()=>setIsEditing(false)
                                        }["ProfileHeader[<button>.onClick]"],
                                        className: "p-2 hover:bg-white/10 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                            lineNumber: 387,
                                            columnNumber: 98
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 385,
                                        columnNumber: 574
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                lineNumber: 385,
                                columnNumber: 339
                            }, this),
                            activeTab === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm text-muted-foreground mb-1 block",
                                                children: "Display Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                lineNumber: 387,
                                                columnNumber: 198
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: name,
                                                onChange: {
                                                    "ProfileHeader[<input>.onChange]": (e_0)=>setName(e_0.target.value)
                                                }["ProfileHeader[<input>.onChange]"],
                                                className: "w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary/50 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                lineNumber: 387,
                                                columnNumber: 278
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 387,
                                        columnNumber: 193
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm text-muted-foreground mb-1 block",
                                                children: "Bio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                lineNumber: 389,
                                                columnNumber: 183
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: bio,
                                                onChange: {
                                                    "ProfileHeader[<textarea>.onChange]": (e_1)=>setBio(e_1.target.value)
                                                }["ProfileHeader[<textarea>.onChange]"],
                                                className: "w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary/50 outline-none h-24 resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                lineNumber: 389,
                                                columnNumber: 254
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 389,
                                        columnNumber: 178
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm text-muted-foreground mb-1 block",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 243
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: location,
                                                        onChange: {
                                                            "ProfileHeader[<input>.onChange]": (e_2)=>setLocation(e_2.target.value)
                                                        }["ProfileHeader[<input>.onChange]"],
                                                        className: "w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary/50 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 319
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                lineNumber: 391,
                                                columnNumber: 238
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm text-muted-foreground mb-1 block",
                                                        children: "Website"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 185
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: website,
                                                        onChange: {
                                                            "ProfileHeader[<input>.onChange]": (e_3)=>setWebsite(e_3.target.value)
                                                        }["ProfileHeader[<input>.onChange]"],
                                                        className: "w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary/50 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 260
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                lineNumber: 393,
                                                columnNumber: 180
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 391,
                                        columnNumber: 198
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProfileHeader[<button>.onClick]": ()=>setIsEditing(false)
                                        }["ProfileHeader[<button>.onClick]"],
                                        className: "w-full py-3 bg-primary text-white rounded-xl font-bold mt-4 hover:bg-primary/90 transition-colors",
                                        children: "Save Changes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                        lineNumber: 395,
                                        columnNumber: 186
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                lineNumber: 387,
                                columnNumber: 166
                            }, this),
                            activeTab === "frames" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: FRAMES.map({
                                    "ProfileHeader[FRAMES.map()]": (frame)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: {
                                                "ProfileHeader[FRAMES.map() > <div>.onClick]": ()=>setSelectedFrame(frame.id)
                                            }["ProfileHeader[FRAMES.map() > <div>.onClick]"],
                                            className: `cursor-pointer rounded-xl border p-4 flex flex-col items-center gap-3 transition-all ${selectedFrame === frame.id ? "bg-primary/10 border-primary" : "bg-black/20 border-white/5 hover:border-white/20"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `absolute -inset-1 rounded-full opacity-75 blur ${frame.class}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 306
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-16 w-16 rounded-full bg-black border-2 border-black relative z-10 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(frame.icon, {
                                                                className: `h-6 w-6 ${frame.color}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                                lineNumber: 400,
                                                                columnNumber: 507
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 389
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 280
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-sm",
                                                            children: frame.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 599
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Unlocked"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 648
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 570
                                                }, this)
                                            ]
                                        }, frame.id, true, {
                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                            lineNumber: 398,
                                            columnNumber: 55
                                        }, this)
                                }["ProfileHeader[FRAMES.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                lineNumber: 397,
                                columnNumber: 216
                            }, this),
                            activeTab === "account" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl bg-red-500/10 border border-red-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-red-400 mb-2",
                                            children: "Danger Zone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                            lineNumber: 401,
                                            columnNumber: 180
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mb-4",
                                            children: "Sign out of your account on this device."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                            lineNumber: 401,
                                            columnNumber: 240
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSignOut,
                                            className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 492
                                                }, this),
                                                "Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                            lineNumber: 401,
                                            columnNumber: 334
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                    lineNumber: 401,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                                lineNumber: 401,
                                columnNumber: 82
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                        lineNumber: 385,
                        columnNumber: 295
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile/ProfileHeader.tsx",
                lineNumber: 370,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 362,
            columnNumber: 24
        }, this);
        $[60] = activeTab;
        $[61] = bio;
        $[62] = handleSignOut;
        $[63] = isEditing;
        $[64] = location;
        $[65] = name;
        $[66] = selectedFrame;
        $[67] = website;
        $[68] = t40;
    } else {
        t40 = $[68];
    }
    let t41;
    if ($[69] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t40
        }, void 0, false, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[69] = t40;
        $[70] = t41;
    } else {
        t41 = $[70];
    }
    let t42;
    if ($[71] !== t39 || $[72] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-8",
            children: [
                t4,
                t39,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile/ProfileHeader.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[71] = t39;
        $[72] = t41;
        $[73] = t42;
    } else {
        t42 = $[73];
    }
    return t42;
}
_s(ProfileHeader, "2ToK8tsfjPOB5wyKMbMC7vHRQ8I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfileHeader;
function _ProfileHeaderMotionDivOnClick(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "ProfileHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_3caa1e94._.js.map