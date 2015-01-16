/**
 * Created by jwshin on 1/15/2015.
 */
///<reference path="../../typings/tsd.d.ts" />
///<reference path="../service/panelService.ts" />

module Application.Controllers {
    "use strict";

    import PanelService = Application.Services.PanelService;

    export class ToolbarCtrl {
        private rootScope: ng.IRootScopeService;
        private scope: ng.IScope;
        private PanelService: PanelService;

        constructor($rootScope:ng.IRootScopeService, $scope:ng.IScope, panelService:PanelService) {
            this.rootScope = $rootScope;
            this.scope = $scope;
            this.PanelService = panelService;
        }
        public goHome() {
            this.PanelService.clear();
        }
        public openPanel(type) {
            this.PanelService.addPanel(type);
        }
        public saveStatus() {
            console.log("Save");
        }
    }
}