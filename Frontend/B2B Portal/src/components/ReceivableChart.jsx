import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ReceivableChart extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}

	toggleDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}

	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Aging-Account Receivable",
                fontSize: 24, 
				horizontalAlign: "left", 
				verticalAlign: "top",
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
				fontSize: 16,
				itemclick: this.toggleDataSeries
			},
			toolTip: {
				shared: true
			},
			data: [
				{
					type: "stackedColumn100",
					name: "Priority Dealers",
					showInLegend: true,
					color: "rgba(250,168,25,255)",
					dataPoints: [
						{ label: "0 - 30 Days", y: 890 },
						{ label: "31 - 60 Days", y: 550 },
						{ label: "61 - 90 Days", y: 300 },
						{ label: "91 - 120 Days", y: 480 },
						{ label: "121 - 150 Days", y: 383 },
						{ label: "151 - 180 Days", y: 300 },
						{ label: "181 - 365 Days", y: 233 }
					]
				},
                {
					type: "stackedColumn100",
					name: "Corporate Customers",
					showInLegend: true,
					color: "rgba(233,233,233,255)",
					dataPoints: [
						{ label: "0 - 30 Days", y: 110 },
						{ label: "31 - 60 Days", y: 490 },
						{ label: "61 - 90 Days", y: 490 },
						{ label: "91 - 120 Days", y: 900 },
						{ label: "121 - 150 Days", y: 972 },
						{ label: "151 - 180 Days", y: 390 },
						{ label: "181 - 365 Days", y: 900 }
					]
				}
			]
		};

		return (
			<div style={{width: '100%', maxWidth: '1020px', marginLeft:'2%', border:'1px solid rgba(210,210,210,255)', borderRadius: '4px', padding:'2% 4%', backgroundColor: 'white' }}>
				<CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
			</div>
		);
	}
}

export default ReceivableChart;
