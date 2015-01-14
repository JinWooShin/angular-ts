/**
 * Created by jwshin on 1/14/2015.
 */
///<reference path="../../typings/tsd.d.ts" />
///<reference path="../service/panelService.ts"/>

module Application.Controllers {
    "use strict";
    import IPanel = Application.Services.IPanel;

    interface IPanelContainerCtrl {
        getPanels(): IPanel[];
        toggleLock(panel: IPanel):boolean;
        toggleCollapse(panel: IPanel, isCollapse:boolean, event?:ng.IAngularEvent):void;
        closePanel(panel: IPanel):boolean;
    }

    interface IPanelContainerScope extends ng.IScope {
        panels: IPanel[];
    }

    export class PanelContainerCtrl implements IPanelContainerCtrl{
        private PanelService:Application.Services.PanelService;
        private rootScope:ng.IRootScopeService;
        private scope:IPanelContainerScope;
        private element:ng.IRootElementService;
        private log:ng.ILogService;

        constructor($rootScope:ng.IRootScopeService, $scope:IPanelContainerScope, $element:JQuery, $log:ng.ILogService,
            PanelService:Application.Services.PanelService) {
            this.PanelService = PanelService;
            this.rootScope = $rootScope;
            this.scope = $scope;
            this.element = $element;
            this.log = $log;
            this.scope.panels = this.getPanels();
            this.scope.$on("panelChanged", function() {
                this.scope.panels = this.getPanels();
            })
        }
        public getPanels() {
            return this.PanelService.getPanels();
        }
        public toggleLock(panel:IPanel) {
            panel.lock = !panel.lock;
            return panel.lock;
        }
        public toggleCollapse(panel:IPanel, isCollapsing:boolean, event?:ng.IAngularEvent) {
            if(event) {
                event.stopPropagation();
            }
            if(!isCollapsing) {
                panel.collapse = false;
            } else {
                panel.collapse = !panel.collapse;
            }
            if(panel.collapse) {
                $(this.element[0].querySelector(".panelHeadTitle")).width(window.innerHeight-28);
            } else {
                $(this.element[0].querySelector(".panelHeadTitle")).width("auto");
            }
        }
        public closePanel(panel:IPanel) {
            if (!panel.lock) {
                this.PanelService.removePanel(panel);
                return true;
            } else {
                this.log.warn("Panel locked");
                return false;
            }
        }
    }
}