import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class RevenueChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Revenue",
                fontSize: 24, 
				horizontalAlign: "left", 
				verticalAlign: "top", 
			},
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name} {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Closed", y: 17.9 },
					{ name: "Open", y: 20 },
					{ name: "Reject", y: 9 },
					{ name: "Approve", y: 22.8 },
					{ name: "Pending", y: 30.3 }
				]
			}]
		}
		return (
			<div style={{width: '100%', maxWidth: '620px', marginLeft:'1%', marginRight: '1%', border:'1px solid rgba(210,210,210,255)', borderRadius:'4px', padding:'2.7% 4% 2.7% 4%', backgroundColor: 'white'}}>
				<CanvasJSChart options={options} />
			</div>
		);
	}
}

export default RevenueChart;
