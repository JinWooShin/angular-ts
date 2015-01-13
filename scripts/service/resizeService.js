/**
 * Created by jwshin on 1/12/2015.
 */
///<reference path="../../typings/tsd.d.ts" />
///<reference path="mapService.ts" />
var Application;
(function (Application) {
    var Services;
    (function (Services) {
        var ResizeService = (function () {
            function ResizeService() {
            }
            ResizeService.prototype.setHeight = function () {
                var layoutContainers = $(document.querySelector(".layoutContainer"));
                var panels = $(document.querySelectorAll(".layoutPanel"));
                angular.forEach(layoutContainers.children(), function (child) {
                    $(child).children().height(window.innerHeight - 16 - 10);
                });
                angular.forEach(panels, function (panel) {
                    if (panel) {
                        $(panel).height(window.innerHeight - 18 - 10);
                        if (panel.querySelector(".map")) {
                            $(panel.querySelector(".map")).height(window.innerHeight - 93 - 10);
                        }
                        if (panel.classList.contains("minimize")) {
                            $(panel.querySelector(".headTitle")).width(window.innerHeight - 20);
                        }
                    }
                });
            };
            ResizeService.prototype.resizePanelContainer = function () {
                var layoutContainers = $(document.querySelector(".layoutContainer"));
                var panels = $(document.querySelectorAll(".layoutPanel"));
                var totalWidth = 0;
                angular.forEach(layoutContainers.children(), function (child) {
                    if (child.tagName === "PANEL-CONTAINER") {
                        angular.forEach(child.children[0].children, function (panel) {
                            totalWidth += parseInt(window.getComputedStyle(panel).width, 10) + 6;
                        });
                    }
                    else if (panels.length > 0) {
                        totalWidth += parseInt(window.getComputedStyle(child.children[0]).width + 6, 10);
                    }
                });
                layoutContainers.width(totalWidth);
            };
            return ResizeService;
        })();
        Services.ResizeService = ResizeService;
    })(Services = Application.Services || (Application.Services = {}));
})(Application || (Application = {}));
//# sourceMappingURL=resizeService.js.map