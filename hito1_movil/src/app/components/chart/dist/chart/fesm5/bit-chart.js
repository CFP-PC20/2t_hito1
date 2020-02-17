import { Component, ElementRef, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Chart from 'chart.js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UIChart = /** @class */ (function () {
    function UIChart(el) {
        this.el = el;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        this.onDataSelect = new EventEmitter();
    }
    Object.defineProperty(UIChart.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._data = val;
            this.reinit();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UIChart.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initChart();
        this.initialized = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UIChart.prototype.onCanvasClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.chart) {
            /** @type {?} */
            var element = this.chart.getElementAtEvent(event);
            /** @type {?} */
            var dataset = this.chart.getDatasetAtEvent(event);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    };
    /**
     * @return {?}
     */
    UIChart.prototype.initChart = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var opts = this.options || {};
        opts.responsive = this.responsive;
        // allows chart to resize in responsive mode
        if (opts.responsive && (this.height || this.width)) {
            opts.maintainAspectRatio = false;
        }
        //@ts-ignore
        this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
            type: this.type,
            data: this.data,
            options: this.options,
            plugins: this.plugins
        });
    };
    /**
     * @return {?}
     */
    UIChart.prototype.getCanvas = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement.children[0].children[0];
    };
    /**
     * @return {?}
     */
    UIChart.prototype.getBase64Image = /**
     * @return {?}
     */
    function () {
        return this.chart.toBase64Image();
    };
    /**
     * @return {?}
     */
    UIChart.prototype.generateLegend = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            return this.chart.generateLegend();
        }
    };
    /**
     * @return {?}
     */
    UIChart.prototype.refresh = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.update();
        }
    };
    /**
     * @return {?}
     */
    UIChart.prototype.reinit = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.initChart();
        }
    };
    /**
     * @return {?}
     */
    UIChart.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    };
    UIChart.decorators = [
        { type: Component, args: [{
                    selector: 'p-chart',
                    template: "\n        <div style=\"position:relative\" [style.width]=\"responsive && !width ? null : width\" [style.height]=\"responsive && !height ? null : height\">\n            <canvas [attr.width]=\"responsive && !width ? null : width\" [attr.height]=\"responsive && !height ? null : height\" (click)=\"onCanvasClick($event)\"></canvas>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    UIChart.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    UIChart.propDecorators = {
        type: [{ type: Input }],
        options: [{ type: Input }],
        plugins: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        responsive: [{ type: Input }],
        onDataSelect: [{ type: Output }],
        data: [{ type: Input }]
    };
    return UIChart;
}());
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [UIChart],
                    declarations: [UIChart]
                },] }
    ];
    return ChartModule;
}());

export { ChartModule, UIChart };
//# sourceMappingURL=bit-chart.js.map
