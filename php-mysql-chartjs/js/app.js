//$(document).ready(function(){
var chartUpdate = function(value) {
	$.ajax({
		url: "http://192.168.1.118:3001/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var COUNT_100 = [], COUNT_180 = [], COUNT_183 = [], COUNT_200 = [], ACK_COUNT = [],
				BYE_COUNT = [], INVITE_COUNT = [], NOTIFY_COUNT = [], PUBLISH_COUNT = [],
				REGISTER_COUNT = [], SUBSCRIBE_COUNT = [];
//			var TITLE = ['100_COUNT-', '180_COUNT', '183_COUNT', '200_COUNT', 'ACK_COUNT', 'BYE_COUNT', 'INVITE_COUNT', 
//				'NOTIFY_COUNT', 'PUBLISH_COUNT', 'REGISTER_COUNT', 'SUBSCRIBE_COUNT'];
			var TITLE = [];
			var COUNT_100_TITLE = ['100_COUNT'], COUNT_180_TITLE = [], COUNT_183_TITLE = [], COUNT_200_TITLE = [], 
				ACK_COUNT_TITLE = [], BYE_COUNT0_TITLE = [], INVITE_COUNT_TITLE = [], NOTIFY_COUNT_TITLE = [],
				PUBLISH_COUNT_TITLE = [], REGISTER_COUNT_TITLE = [], SUBSCRIBE_COUNT_TITLE = [];
			var COUNT = [];
			for(var i in data) {

				TITLE.push("COUNT_"+data[i].trace_type);
				COUNT.push(data[i].count);

/*				COUNT.push("100_COUNT: "+data[i].COUNT_100);
				COUNT.push("180_COUNT: "+data[i].COUNT_180);
				COUNT.push("183_COUNT: "+data[i].COUNT_183);
				COUNT.push("200_COUNT: "+data[i].COUNT_200);
				COUNT.push("ACK_COUNT: "+data[i].ACK_COUNT);
                                COUNT.push("BYE_COUNT: "+data[i].BYE_COUNT);
                                COUNT.push("INVITE_COUNT: "+data[i].INVITE_COUNT);
                                COUNT.push("NOTIFY_COUNT: "+data[i].NOTIFY_COUNT);
				COUNT.push("PUBLISH_COUNT: "+data[i].PUBLISH_COUNT);
                                COUNT.push("REGISTER_COUNT: "+data[i].REGISTER_COUNT);
                                COUNT.push("SUBSCRIBE_COUNT: "+data[i].SUBSCRIBE_COUNT);		

				COUNT_100.push(data[i].COUNT_100);
                                COUNT_180.push(data[i].COUNT_180);
                                COUNT_183.push(data[i].COUNT_183);
                                COUNT_200.push(data[i].COUNT_200);
                                ACK_COUNT.push(data[i].ACK_COUNT);
                                BYE_COUNT.push(data[i].BYE_COUNT);
                                INVITE_COUNT.push(data[i].INVITE_COUNT);
                                NOTIFY_COUNT.push(data[i].NOTIFY_COUNT);
                                PUBLISH_COUNT.push(data[i].PUBLISH_COUNT);
                                REGISTER_COUNT.push(data[i].REGISTER_COUNT);
                                SUBSCRIBE_COUNT.push(data[i].SUBSCRIBE_COUNT);
				TITLE.push("100_COUNT");
				TITLE.push("180_COUNT");
				TITLE.push("183_COUNT");
                                TITLE.push("200_COUNT");
                                TITLE.push("ACK_COUNT");
                                TITLE.push("BYE_COUNT");
                                TITLE.push("INVITE_COUNT");
                                TITLE.push("NOTIFY_COUNT");
                                TITLE.push("PUBLISH_COUNT");
                                TITLE.push("REGISTER_COUNT");
                                TITLE.push("SUBSCRIBE_COUNT");
                                
		
				COUNT.push("100_COUNT: ");
                                COUNT.push("180_COUNT: ");
                                COUNT.push("183_COUNT: ");
                                COUNT.push("200_COUNT: ");
                                COUNT.push("ACK_COUNT: ");
                                COUNT.push("BYE_COUNT: ");
                                COUNT.push("INVITE_COUNT: ");
                                COUNT.push("NOTIFY_COUNT: ");
                                COUNT.push("PUBLISH_COUNT: ");
                                COUNT.push("REGISTER_COUNT: ");
                                COUNT.push("SUBSCRIBE_COUNT: ");
*/
			}

			var chartdata1 = [
				
					{
						labels: COUNT_100_TITLE,
                                		datasets : [
                                        		{
                                                		label: "100_COUNT",
                                                		backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                		borderColor: 'rgba(255, 100, 100, 0.75)',
                                                		hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                		hoverBorderColor: 'rgba(255, 200, 200, 1)',
                                                		data: COUNT_100
                                        		}
						]
					},
					{
                                                labels: COUNT_200_TITLE,
                                                datasets : [
                                                        {
                                                                label: "200_COUNT",
                                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                                data: COUNT_200
                                                        }
                                                ]
                                        }		

					]

			var chartdata = {
//				labels: TITLE,
/*				labels: [
						{
//							label: "100_COUNT",
							data: COUNT_100_TITLE
						},
						{
//                                                      label: "100_COUNT",
                                                        data: COUNT_100_TITLE
                                                }
					],
*/
				labels: TITLE,
				datasets : [
					{
/*                                                label: "Counts",
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(255, 100, 100, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(255, 100, 100, 1)',
						fillColor: 'rgba(151, 187, 205, 0.5)',
						strokeColor: 'rgba(151, 187, 205, 1)',
*/						backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2",
							"#3cba9f","#e8c3b9","#c45850","#3e95cd"],
                                                data: COUNT
                                        }
/*
					{
                                                label: "180_COUNT",
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: COUNT_180
                                        },
					{
                                                label: '183_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: COUNT_183
                                        },
                                        {
                                                label: '200_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: COUNT_200
                                        }

					{
                                                label: 'ACK_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: ACK_COUNT
                                        },
                                        {
                                                label: 'BYE_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: BYE_COUNT
                                        },
					{
                                                label: 'INVITE_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: INVITE_COUNT
                                        },
                                        {
                                                label: 'NOTIFY_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: NOTIFY_COUNT
                                        },
					{
                                                label: 'PUBLISH_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: PUBLISH_COUNT
                                        },
                                        {
                                                label: 'REGISTER_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: REGISTER_COUNT
                                        },
					{
                                                label: 'SUBSCRIBE_COUNT',
                                                backgroundColor: 'rgba(200, 200, 200, 0.75)',
                                                borderColor: 'rgba(200, 200, 200, 0.75)',
                                                hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                                                hoverBorderColor: 'rgba(200, 200, 200, 1)',
                                                data: SUBSCRIBE_COUNT
                                        }
*/					
				]
			};
/*
			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata
//				datasets: chartdata1
			});
*/
		
			var chartOptions = {
				title: {
       					display: true,
				        text: 'Predicted world population (millions) in 2050'
				},
				animation: false
/*				legend: {
					display: true,
					position: 'top',
					labels: {
						boxWidth: 80,
						fontColor: 'black'
					}    
				}
*/			};
		
//                        var chartUpdate = function(value) {
                                var ctx = $("#mycanvas");

                                var barGraph = new Chart(ctx, {
                                        type: 'bar',
                                        data: chartdata,
					options: {animation: false,
						responsive: true,
						legend: { display: false },
						title: {
        						display: true,
						        text: 'Live updating record every 5 secs'
      						}}
                                });
/*                               setTimeout (function() { chartUpdate(value - 1); }, 3000);
                        }
                        $(document).ready(function() {
                                setTimeout (function() { chartUpdate(99); }, 1000);
                        })

*/		},
		error: function(data) {
			console.log(data);
		}
	});
	setTimeout (function() { chartUpdate(value - 1); }, 5000);
}
//});
$(document).ready(function() {
	setTimeout (function() { chartUpdate(99); }, 1000);
})
