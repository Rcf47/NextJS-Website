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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelComputer = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [renderer, setRenderer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [_camera, setCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-0.5, 1.2, 0));\n    const [initialCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)));\n    const [scene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_3__.Scene());\n    const [_controls, setControls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: container  } = refContainer;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    });\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container && !renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_3__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            setRenderer(renderer);\n            // 640 -> 240\n            // 8 -> 6\n            const scale = scH * 0.005 + 4.8;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, \"/computer.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-computer\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            280,\n            440\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size) / 2)\",\n                mt: \"calc(0px - var(--spinner-size))\"\n            }, void 0, false, {\n                fileName: \"/home/vadim/Education/myWebsite/components/voxel-computer.js\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, undefined),\n            \"Computer!\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vadim/Education/myWebsite/components/voxel-computer.js\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoxelComputer, \"LwPuwox8Xyvk4uS6pdTX/Og+eY8=\");\n_c = VoxelComputer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelComputer);\nvar _c;\n$RefreshReg$(_c, \"VoxelComputer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZveGVsLWNvbXB1dGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ2xCO0FBQ2pCO0FBQzJDO0FBQzVCO0FBQ2I7QUFFaEMsU0FBU1UsWUFBWUMsQ0FBQyxFQUFFO0lBQ3RCLE9BQU9DLEtBQUtDLElBQUksQ0FBQyxJQUFJRCxLQUFLRSxHQUFHLENBQUNILElBQUksR0FBRztBQUN2QztBQUVBLE1BQU1JLGdCQUFnQixJQUFNOztJQUMxQixNQUFNQyxlQUFlYiw2Q0FBTUE7SUFDM0IsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQTtJQUN4QyxNQUFNLENBQUNxQixTQUFTQyxVQUFVLEdBQUd0QiwrQ0FBUUE7SUFDckMsTUFBTSxDQUFDdUIsT0FBTyxHQUFHdkIsK0NBQVFBLENBQUMsSUFBSU0sMENBQWEsQ0FBQyxDQUFDLEtBQUssS0FBSztJQUN2RCxNQUFNLENBQUNtQixzQkFBc0IsR0FBR3pCLCtDQUFRQSxDQUN0QyxJQUFJTSwwQ0FBYSxDQUNmLEtBQUtNLEtBQUtjLEdBQUcsQ0FBQyxNQUFNZCxLQUFLZSxFQUFFLEdBQzNCLElBQ0EsS0FBS2YsS0FBS2dCLEdBQUcsQ0FBQyxNQUFNaEIsS0FBS2UsRUFBRTtJQUcvQixNQUFNLENBQUNFLE1BQU0sR0FBRzdCLCtDQUFRQSxDQUFDLElBQUlNLHdDQUFXO0lBQ3hDLE1BQU0sQ0FBQ3lCLFdBQVdDLFlBQVksR0FBR2hDLCtDQUFRQTtJQUV6QyxNQUFNaUMscUJBQXFCL0Isa0RBQVdBLENBQUMsSUFBTTtRQUMzQyxNQUFNLEVBQUVnQyxTQUFTQyxVQUFTLEVBQUUsR0FBR25CO1FBQy9CLElBQUltQixhQUFhaEIsVUFBVTtZQUN6QixNQUFNaUIsTUFBTUQsVUFBVUUsV0FBVztZQUNqQyxNQUFNQyxNQUFNSCxVQUFVSSxZQUFZO1lBRWxDcEIsU0FBU3FCLE9BQU8sQ0FBQ0osS0FBS0U7UUFDeEIsQ0FBQztJQUNIO0lBRUEsOENBQThDLEdBQzlDckMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU0sRUFBRWlDLFNBQVNDLFVBQVMsRUFBRSxHQUFHbkI7UUFDL0IsSUFBSW1CLGFBQWEsQ0FBQ2hCLFVBQVU7WUFDMUIsTUFBTWlCLE1BQU1ELFVBQVVFLFdBQVc7WUFDakMsTUFBTUMsTUFBTUgsVUFBVUksWUFBWTtZQUVsQyxNQUFNcEIsV0FBVyxJQUFJYixnREFBbUIsQ0FBQztnQkFDdkNvQyxXQUFXLElBQUk7Z0JBQ2ZDLE9BQU8sSUFBSTtZQUNiO1lBQ0F4QixTQUFTeUIsYUFBYSxDQUFDQyxPQUFPQyxnQkFBZ0I7WUFDOUMzQixTQUFTcUIsT0FBTyxDQUFDSixLQUFLRTtZQUN0Qm5CLFNBQVM0QixjQUFjLEdBQUd6QywrQ0FBa0I7WUFDNUM2QixVQUFVYyxXQUFXLENBQUM5QixTQUFTK0IsVUFBVTtZQUN6QzlCLFlBQVlEO1lBRVosYUFBYTtZQUNiLFNBQVM7WUFDVCxNQUFNZ0MsUUFBUWIsTUFBTSxRQUFRO1lBQzVCLE1BQU1jLFNBQVMsSUFBSTlDLHFEQUF3QixDQUN6QyxDQUFDNkMsT0FDREEsT0FDQUEsT0FDQSxDQUFDQSxPQUNELE1BQ0E7WUFFRkMsT0FBT0UsUUFBUSxDQUFDQyxJQUFJLENBQUM5QjtZQUNyQjJCLE9BQU9JLE1BQU0sQ0FBQ2pDO1lBQ2RELFVBQVU4QjtZQUVWLE1BQU1LLGVBQWUsSUFBSW5ELCtDQUFrQixDQUFDLFVBQVU7WUFDdER1QixNQUFNOEIsR0FBRyxDQUFDRjtZQUVWLE1BQU1HLFdBQVcsSUFBSXJELG9GQUFhQSxDQUFDNkMsUUFBUWpDLFNBQVMrQixVQUFVO1lBQzlEVSxTQUFTQyxVQUFVLEdBQUcsSUFBSTtZQUMxQkQsU0FBU3JDLE1BQU0sR0FBR0E7WUFDbEJTLFlBQVk0QjtZQUVacEQseURBQWFBLENBQUNxQixPQUFPLGlCQUFpQjtnQkFDcENpQyxlQUFlLEtBQUs7Z0JBQ3BCQyxZQUFZLEtBQUs7WUFDbkIsR0FBR0MsSUFBSSxDQUFDLElBQU07Z0JBQ1pDO2dCQUNBL0MsV0FBVyxLQUFLO1lBQ2xCO1lBRUEsSUFBSWdELE1BQU0sSUFBSTtZQUNkLElBQUlDLFFBQVE7WUFDWixNQUFNRixVQUFVLElBQU07Z0JBQ3BCQyxNQUFNRSxzQkFBc0JIO2dCQUU1QkUsUUFBUUEsU0FBUyxNQUFNQSxRQUFRLElBQUlBLEtBQUs7Z0JBRXhDLElBQUlBLFNBQVMsS0FBSztvQkFDaEIsTUFBTUUsSUFBSTVDO29CQUNWLE1BQU02QyxXQUFXLENBQUM1RCxZQUFZeUQsUUFBUSxPQUFPdkQsS0FBS2UsRUFBRSxHQUFHO29CQUV2RHlCLE9BQU9FLFFBQVEsQ0FBQ2lCLENBQUMsR0FBRztvQkFDcEJuQixPQUFPRSxRQUFRLENBQUMzQyxDQUFDLEdBQUcwRCxFQUFFMUQsQ0FBQyxHQUFHQyxLQUFLZ0IsR0FBRyxDQUFDMEMsWUFBWUQsRUFBRUcsQ0FBQyxHQUFHNUQsS0FBS2MsR0FBRyxDQUFDNEM7b0JBQzlEbEIsT0FBT0UsUUFBUSxDQUFDa0IsQ0FBQyxHQUFHSCxFQUFFRyxDQUFDLEdBQUc1RCxLQUFLZ0IsR0FBRyxDQUFDMEMsWUFBWUQsRUFBRTFELENBQUMsR0FBR0MsS0FBS2MsR0FBRyxDQUFDNEM7b0JBQzlEbEIsT0FBT0ksTUFBTSxDQUFDakM7Z0JBQ2hCLE9BQU87b0JBQ0xxQyxTQUFTYSxNQUFNO2dCQUNqQixDQUFDO2dCQUVEdEQsU0FBU3VELE1BQU0sQ0FBQzdDLE9BQU91QjtZQUN6QjtZQUVBLE9BQU8sSUFBTTtnQkFDWHVCLHFCQUFxQlQ7Z0JBQ3JCL0MsU0FBU3lELE9BQU87WUFDbEI7UUFDRixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwzRSxnREFBU0EsQ0FBQyxJQUFNO1FBQ2Q0QyxPQUFPZ0MsZ0JBQWdCLENBQUMsVUFBVTVDLG9CQUFvQixLQUFLO1FBQzNELE9BQU8sSUFBTTtZQUNYWSxPQUFPaUMsbUJBQW1CLENBQUMsVUFBVTdDLG9CQUFvQixLQUFLO1FBQ2hFO0lBQ0YsR0FBRztRQUFDZDtRQUFVYztLQUFtQjtJQUVqQyxxQkFDRSw4REFBQzdCLGlEQUFHQTtRQUFDMkUsS0FBSy9EO1FBQWNnRSxXQUFVO1FBQWlCQyxHQUFFO1FBQU9DLElBQUk7WUFBQztZQUFTO1lBQVM7U0FBUztRQUMxRkMsSUFBSTtZQUFDO1lBQVM7WUFBVTtTQUFTO1FBQ2pDQyxHQUFHO1lBQUM7WUFBSztZQUFLO1NBQUk7UUFDbEJDLEdBQUc7WUFBQztZQUFLO1lBQUs7U0FBSTtRQUNsQi9CLFVBQVM7O1lBRVJyQyx5QkFDQyw4REFBQ1oscURBQU9BO2dCQUFDaUYsTUFBSztnQkFBS2hDLFVBQVM7Z0JBQVdpQyxNQUFLO2dCQUFNQyxLQUFJO2dCQUFNQyxJQUFHO2dCQUFzQ0MsSUFBRzs7Ozs7O1lBQ3hHOzs7Ozs7O0FBSVI7R0EzSE0zRTtLQUFBQTtBQTZITiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWNvbXB1dGVyLmpzPzA3MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWIvbW9kZWxcIjtcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tIFwidGhyZWVcIjtcblxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpXG59XG5cbmNvbnN0IFZveGVsQ29tcHV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxuICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgIDEwLFxuICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgIClcbiAgKVxuICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXG4gIGNvbnN0IFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcblxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxuICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxuICAgIH1cbiAgfSlcblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXG4gICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxuICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG5cbiAgICAgIC8vIDY0MCAtPiAyNDBcbiAgICAgIC8vIDggLT4gNlxuICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgLXNjYWxlLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIC1zY2FsZSxcbiAgICAgICAgMC4wMSxcbiAgICAgICAgNTAwMDBcbiAgICAgIClcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcblxuICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywgMSlcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcvY29tcHV0ZXIuZ2xiJywge1xuICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcbiAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBhbmltYXRlKClcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG5cbiAgICAgIGxldCByZXEgPSBudWxsXG4gICAgICBsZXQgZnJhbWUgPSAwXG4gICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcblxuICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXG5cbiAgICAgICAgaWYgKGZyYW1lIDw9IDEwMCkge1xuICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cbiAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZSAvIDEyMCkgKiBNYXRoLlBJICogMjBcblxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udHJvbHMudXBkYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXG4gICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgfVxuICB9LCBbcmVuZGVyZXIsIGhhbmRsZVdpbmRvd1Jlc2l6ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHJlZj17cmVmQ29udGFpbmVyfSBjbGFzc05hbWU9XCJ2b3hlbC1jb21wdXRlclwiIG09XCJhdXRvXCIgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119XG4gICAgICBtYj17WyctNDBweCcsICctMTQwcHgnLCAnLTIwMHB4J119XG4gICAgICB3PXtbMjgwLCA0ODAsIDY0MF19XG4gICAgICBoPXtbMjgwLCAyODAsIDQ0MF19XG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICA+XG4gICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBsZWZ0PVwiNTAlXCIgdG9wPVwiNTAlXCIgbWw9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkgLyAyKVwiIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiIC8+XG4gICAgICApfVxuICAgICAgQ29tcHV0ZXIhXG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVm94ZWxDb21wdXRlclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsIk1hdHJpeDQiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsQ29tcHV0ZXIiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwidGFyZ2V0IiwiVmVjdG9yMyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsInNpbiIsIlBJIiwiY29zIiwic2NlbmUiLCJTY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY3VycmVudCIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwiYXQiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-computer.js\n"));

/***/ })

});