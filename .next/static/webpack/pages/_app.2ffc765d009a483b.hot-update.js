"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/voxel-computer.js":
/*!**************************************!*\
  !*** ./components/voxel-computer.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelComputer = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [renderer, setRenderer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [_camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            setRenderer(renderer);\n            // 640 -> 240\n            // 8 -> 6\n            const scale = scH * 0.005 + 4.8;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/computer.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-computer\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(0px - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"/home/vadim/Education/myWebsite/components/voxel-computer.js\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, undefined),\n            \"Computer!\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vadim/Education/myWebsite/components/voxel-computer.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoxelComputer, \"pWRoUD06a0kyGEXD3D5YUaykw3A=\");\n_c = VoxelComputer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelComputer);\nvar _c;\n$RefreshReg$(_c, \"VoxelComputer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1jb21wdXRlci5qcz8wNzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tIFwiLi4vbGliL21vZGVsXCI7XG5pbXBvcnQgeyBNYXRyaXg0IH0gZnJvbSBcInRocmVlXCI7XG5cbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBWb3hlbENvbXB1dGVyID0gKCkgPT4ge1xuICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSlcbiAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcbiAgICBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXG4gICAgICAxMCxcbiAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICApXG4gIClcbiAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxuICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXG5cbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxuICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKSB7XG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgIH0pXG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcbiAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxuXG4gICAgICAvLyA2NDAgLT4gMjQwXG4gICAgICAvLyA4IC0+IDZcbiAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgIC1zY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICAtc2NhbGUsXG4gICAgICAgIDAuMDEsXG4gICAgICAgIDUwMDAwXG4gICAgICApXG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpXG4gICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxuXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXG4gICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxuXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCAnL2NvbXB1dGVyLmdsYicsIHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgYW5pbWF0ZSgpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuXG4gICAgICBsZXQgcmVxID0gbnVsbFxuICAgICAgbGV0IGZyYW1lID0gMFxuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxuXG4gICAgICAgIGlmIChmcmFtZSA8PSAxMDApIHtcbiAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXG5cbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIE1hdGguY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn0gY2xhc3NOYW1lPVwidm94ZWwtY29tcHV0ZXJcIiBtPVwiYXV0b1wiIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfVxuICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfVxuICAgICAgdz17WzI4MCwgNDgwLCA2NDBdfVxuICAgICAgaD17WzI4MCwgNDgwLCA2NDBdfVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgPlxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjUwJVwiIHRvcD1cIjUwJVwiIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIiBtdD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSlcIiAvPlxuICAgICAgKX1cbiAgICAgIENvbXB1dGVyIVxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZveGVsQ29tcHV0ZXJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJNYXRyaXg0IiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbENvbXB1dGVyIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsInRhcmdldCIsIlZlY3RvcjMiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJzaW4iLCJQSSIsImNvcyIsInNjZW5lIiwiU2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImN1cnJlbnQiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-computer.js\n"));

/***/ })

});