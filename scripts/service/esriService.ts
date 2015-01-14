/**
 * Created by jwshin on 1/12/2015.
 */
///<reference path="../../typings/tsd.d.ts" />

import esri = require("esri");
import Map = require("esri/map");
import Layer = require("esri/layers/layer");
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");
import FeatureLayer = require("esri/layers/FeatureLayer");
import GraphicsLayer = require("esri/layers/GraphicsLayer");
import Query = require("esri/tasks/query");
import QueryTask = require("esri/tasks/QueryTask");
import GeometryService = require("esri/tasks/GeometryService");
import Circle = require("esri/geometry/Circle");
import normalizeUtils = require("esri/geometry/normalizeUtils");
import Polygon = require("esri/geometry/Polygon");
import Symbol = require("esri/symbols/Symbol");
import SimpleMarkerSymbol = require("esri/symbols/SimpleMarkerSymbol");
import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");
import SimpleFillSymbol = require("esri/symbols/SimpleFillSymbol");
// import esriConfig = require("esri/config");
import Color = require("esri/Color");
import Draw = require("esri/toolbars/draw");

export module Esri {

    export function getMap(id:string, options: esri.MapOptions):Map {
        return new Map(id, options);
    }
}