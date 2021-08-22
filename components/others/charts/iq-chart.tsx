import { useEffect } from "react"
import { IQChartPropsI } from "~/interfaces"

const IqChart = (props: IQChartPropsI) => {
    const {title, id} = props;
    useEffect(() => {
        IqChart.script(props)
    }, [])

    return (
        <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                    <h4 className="card-title">{title}</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                    <div className="dropdown">
                        <span className="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                            <i className="ri-more-2-fill"></i>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="iq-card-body">
                <div id={id} className="amcharts-chart-div" style={{ height: 400 }}></div>
            </div>
        </div>
    )
}

IqChart.script = ({id, chart}: IQChartPropsI) => {
    const {items, category, valueY} = chart

    //@ts-ignore
    let _am4core = am4core;
    //@ts-ignore
    let _am4themes_animated = am4themes_animated;
    //@ts-ignore
    let _am4charts = am4charts;

    _am4core.ready(function () {

        _am4core.useTheme(_am4themes_animated);

        let chart = _am4core.create(id, _am4charts.XYChart);
        let colors = [];

        items.forEach(item => colors.push(_am4core.color(item.color || "gray")))

        chart.colors.list = colors;
        chart.data = items;
        chart.padding(40, 40, 40, 40);

        let categoryAxis = chart.xAxes.push(new _am4charts.CategoryAxis());
        
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = category;
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;

        var valueAxis = chart.yAxes.push(new _am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;

        var series = chart.series.push(new _am4charts.ColumnSeries());
        series.dataFields.categoryX = category;
        series.dataFields.valueY = valueY;
        series.tooltipText = "{valueY.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        var labelBullet = series.bullets.push(new _am4charts.LabelBullet());
        labelBullet.label.verticalCenter = "bottom";
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

        chart.zoomOutButton.disabled = true;

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        setInterval(function () {
            _am4core.array.each(chart.data, function (item) {
                item.visits += Math.round(Math.random() * 200 - 100);
                item.visits = Math.abs(item.visits);
            })
            chart.invalidateRawData();
        }, 2000)

        categoryAxis.sortBySeries = series;

    });
}

export default IqChart;