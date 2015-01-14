/**
 * Created by jwshin on 1/14/2015.
 */
///<reference path="../../typings/tsd.d.ts" />

module Application.Services {
    "use strict";
    export interface IPanel {
        id:string;
        parent: string;
        children: string[];
        lock: boolean;
        collapse: boolean;
        content: {title:string; content:string};
        templateUrl: string;
    }

    interface IPanelService {
        clear():void;
        getPanels():IPanel[];
        addPanel(type:string):void;
        removePanel(panel:IPanel):boolean;
    }

    export class PanelService implements IPanelService{
        private panels:IPanel[];
        private rootScope:ng.IRootScopeService;
        private log:ng.ILogService;

        constructor($rootScope:ng.IRootScopeService, $log:ng.ILogService) {
            this.rootScope = $rootScope;
            this.log = $log;
            this.panels = [];
        }
        //private getPanel(id:string):IPanel[] {
        //    return this.panels.filter(_panel => {return _panel.id === id;});
        //}
        private initPanel(type:string):IPanel {
            var content = null;
            switch(type) {
                case "map":
                    content = {title: "Map", content:"Map goes here"};
                    break;
                case "search":
                    content = {title: "Search", content:"Search goes here"};
                    break;
                case "project":
                    content = {title: "Project", content:"Project goes here"};
                    break;
                default:
                    content = {title: "Whatever", content:"Whatever comes here"};
                    break;
            }
            var panel:IPanel = {
                id: "panel-"+content.title,
                content: content,
                parent: "root",
                children: [],
                templateUrl: "panel-"+type+".html",
                lock: false,
                collapse: false
            };
            return panel;
        }
        public clear() {
            this.panels.length=0;
        }
        public getPanels() {
            return this.panels;
        }
        public addPanel(type:string) {
            var panel = this.initPanel(type);
            var checkEx = this.panels.filter(_panel => {return panel.id === _panel.id;});
            if(checkEx.length>0) {
                this.log.info("Panel already added");
                return;
            }
            this.panels.push(panel);
            this.rootScope.$broadcast("panelChanged");
        }
        public removePanel(panel:IPanel) {
            var matchPanel = this.panels.filter(_panel => {return _panel.id===panel.id;});
            if(matchPanel.length>0) {
                this.log.debug("Removing panel: "+panel.content.title);
                this.panels.splice(this.panels.indexOf(matchPanel[0]), 1);
                this.rootScope.$broadcast("panelChanged");
                return true;
            } else {
                this.log.error("Cannot find panel to remove");
                return false;
            }
        }
    }
}