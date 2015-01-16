/**
 * Created by jwshin on 1/15/2015.
 */
///<reference path="../../typings/tsd.d.ts" />
///<reference path="../service/ResizeService.ts" />

module Application.Directives {
    "use strict";

    export class ToolbarDirective {
        private window:ng.IWindowService;
        private ResizeService: Application.Services.ResizeService;

        constructor(window:ng.IWindowService, resizeService:Application.Services.ResizeService) {
            this.window = window;
            this.ResizeService=resizeService;
            this.CreateDirective();
        }

        CreateDirective() {
            return {
                restrict: "EA",
                templateUrl: "template/html/toolbar.html",
                controller: "ToolbarCtrl",
                link: function() {
                    angular.element(this.window).bind("resize", ()=> {
                        this.resizeService.setHeight();
                    });
                    this.resizeService.setHeight();
                }
            }
        }
    }
}