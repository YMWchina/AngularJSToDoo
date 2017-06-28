// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 cordova-simulate 或 Android 设备/仿真器上在页面加载时调试代码: 启动应用，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。
(function () {
    'use strict';
    angular.module('xPlat', ['xPlat.services', 'xPlat.controllers', 'xPlat.directives']);
    angular.module('xPlat.directives', []);
    angular.module('xPlat.controllers', []);
    angular.module('xPlat.services', ['ngResource']);
})();