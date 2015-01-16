/**
 * Created by jwshin on 1/14/2015.
 */

///<reference path="../../typings/tsd.d.ts" />
module Application.Services {

    interface IResizeService {
        setHeight():void;
        resizePanelContainer():void;
    }

    export class ResizeService implements IResizeService{
        public setHeight() {
            var layoutContainer=$(document.querySelector(".layoutContainer"));
            var panels=$(document.querySelectorAll(".layoutPanel"));
            angular.forEach(layoutContainer.children(), child=>{$(child).children().height(window.innerHeight - 16-20);});
            angular.forEach(panels, panel=>{
                if(panel) {
                    $(panel).height(window.innerHeight-18-10);
                    if(panel.querySelector(".map")) {
                        $(panel.querySelector(".map")).height(window.innerHeight-93-10);
                    }
                    if(panel.classList.contains("minimize")) {
                        $(panel.querySelector(".headTitle")).width(window.innerHeight-20);
                    }
                }
            });
        }
        public resizePanelContainer() {
            var layoutContainer=$(document.querySelector(".layoutContainer"));
            var panels=$(document.querySelectorAll(".layoutPanel"));
            var totalWidth = 0;
            angular.forEach(layoutContainer.children(), child=> {
                if(child.tagName === "PANEL-CONTAINER") {
                    angular.forEach(child.children[0].children, panel=> {
                        totalWidth+=parseInt(window.getComputedStyle(panel).width+6);
                    });
                } else if(panels.length>0) {
                    totalWidth+=parseInt(window.getComputedStyle(child.children[0]).width+6);
                }
            });
            layoutContainer.width(totalWidth);
        }
    }
}