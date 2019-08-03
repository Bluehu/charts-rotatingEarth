import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";
import * as echarts from "echarts";
import * as echartsgl from "echarts-gl";
@Directive({
    selector: "echart"
})
export class EChartOptionDirective implements OnInit {
    @Input("chartType") chartType: any;

    constructor(private el: ElementRef) {}

    public ngOnInit(): void {
        echarts.init(this.el.nativeElement).setOption(this.chartType);
        if(this.chartType == 'earthChart')
        echartsgl.init(this.el.nativeElement).setOption(this.chartType);
    }
}
