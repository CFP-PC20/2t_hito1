import { EventEmitter, Component, ElementRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Chart from 'chart.js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIChart {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        this.onDataSelect = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this._data = val;
        this.reinit();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initChart();
        this.initialized = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCanvasClick(event) {
        if (this.chart) {
            /** @type {?} */
            let element = this.chart.getElementAtEvent(event);
            /** @type {?} */
            let dataset = this.chart.getDatasetAtEvent(event);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    }
    /**
     * @return {?}
     */
    initChart() {
        /** @type {?} */
        let opts = this.options || {};
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
    }
    /**
     * @return {?}
     */
    getCanvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    /**
     * @return {?}
     */
    getBase64Image() {
        return this.chart.toBase64Image();
    }
    /**
     * @return {?}
     */
    generateLegend() {
        if (this.chart) {
            return this.chart.generateLegend();
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this.chart) {
            this.chart.update();
        }
    }
    /**
     * @return {?}
     */
    reinit() {
        if (this.chart) {
            this.chart.destroy();
            this.initChart();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    }
}
UIChart.decorators = [
    { type: Component, args: [{
                selector: 'p-chart',
                template: `
        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">
            <canvas [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>
        </div>
    `
            }] }
];
/** @nocollapse */
UIChart.ctorParameters = () => [
    { type: ElementRef }
];
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
class ChartModule {
}
ChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [UIChart],
                declarations: [UIChart]
            },] }
];

export { ChartModule, UIChart };
//# sourceMappingURL=bit-chart.js.map
