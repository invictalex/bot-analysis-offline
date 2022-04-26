$(function()
{
    //var botAPI = "https://cryptobot.vx1.uk/x_spikefish/metrics/x_get_spikefish_order_history.php?bot_id=25"
    
   // $.getJSON(botAPI).done(function(rawData)
   // {   

        var rawData = [{"idx":"2679","bot_id":"25","symbol_pair":"BNBGBP","order_id":"o638CSQMl3J6PCz2OiUCnu","order_side":"BUY","order_rate":"312.40000000","order_qty":"1.0200","start_time":"2022-04-20 09:35:02","end_time":"2022-04-21 20:43:02"},{"idx":"2651","bot_id":"25","symbol_pair":"BNBGBP","order_id":"yve1iN4W5CWuHOyYs50e8P","order_side":"SELL","order_rate":"328.10000000","order_qty":"1.0000","start_time":"2022-04-11 10:00:03","end_time":"2022-04-20 09:35:02"},{"idx":"2527","bot_id":"25","symbol_pair":"BNBGBP","order_id":"3hbncKi7cid5zpBwd4HF4e","order_side":"BUY","order_rate":"312.50000000","order_qty":"1.0200","start_time":"2022-03-28 00:34:03","end_time":"2022-04-11 10:00:03"},{"idx":"2491","bot_id":"25","symbol_pair":"BNBGBP","order_id":"RXWrqwE50HFS7e1Tn10Gp5","order_side":"SELL","order_rate":"328.30000000","order_qty":"1.0000","start_time":"2022-02-17 23:22:11","end_time":"2022-03-28 00:34:03"},{"idx":"2468","bot_id":"25","symbol_pair":"BNBGBP","order_id":"Rx9e1Z4naCxfY4OxXSgUG9","order_side":"SELL","order_rate":"312.60000000","order_qty":"1.0000","start_time":"2022-03-04 00:47:02","end_time":"2022-03-24 06:29:02"},{"idx":"2285","bot_id":"25","symbol_pair":"BNBGBP","order_id":"Qeahwr2tqxcIEO7Mn15IES","order_side":"SELL","order_rate":"297.40000000","order_qty":"1.0000","start_time":"2022-03-10 13:07:03","end_time":"2022-03-16 10:07:03"},{"idx":"2197","bot_id":"25","symbol_pair":"BNBGBP","order_id":"ZFtwOQCa7AE6O56Ay9bi5A","order_side":"BUY","order_rate":"283.20000000","order_qty":"1.0200","start_time":"2022-03-09 02:13:04","end_time":"2022-03-10 13:07:03"},{"idx":"2171","bot_id":"25","symbol_pair":"BNBGBP","order_id":"EcNi4NUovekdeKUp6tWNKg","order_side":"SELL","order_rate":"297.50000000","order_qty":"1.0000","start_time":"2022-03-04 22:20:02","end_time":"2022-03-09 02:13:04"},{"idx":"2135","bot_id":"25","symbol_pair":"BNBGBP","order_id":"7i0OkvrBMDofuIfoOlxjqj","order_side":"BUY","order_rate":"283.30000000","order_qty":"1.0200","start_time":"2022-03-01 00:47:02","end_time":"2022-03-04 22:20:02"},{"idx":"2127","bot_id":"25","symbol_pair":"BNBGBP","order_id":"THbidJbhDQmThbcgcThcYx","order_side":"BUY","order_rate":"297.70000000","order_qty":"1.0200","start_time":"2022-03-01 09:01:02","end_time":"2022-03-04 00:47:02"},{"idx":"2007","bot_id":"25","symbol_pair":"BNBGBP","order_id":"ndOkEd2SLu7ikz73i4inXR","order_side":"SELL","order_rate":"312.70000000","order_qty":"1.0000","start_time":"2022-02-17 23:22:11","end_time":"2022-03-01 09:01:02"},{"idx":"1979","bot_id":"25","symbol_pair":"BNBGBP","order_id":"FkffuFZ5XZwUIobP4NCYnR","order_side":"SELL","order_rate":"297.60000000","order_qty":"1.0000","start_time":"2022-02-20 05:02:01","end_time":"2022-03-01 00:47:02"},{"idx":"1587","bot_id":"25","symbol_pair":"BNBGBP","order_id":"ZIvTQpcA5SCAic9puqkDA6","order_side":"BUY","order_rate":"283.40000000","order_qty":"1.0200","start_time":"2022-02-19 01:44:02","end_time":"2022-02-20 05:02:01"},{"idx":"1583","bot_id":"25","symbol_pair":"BNBGBP","order_id":"u5OTMZh2sLQccPIs7BJ4Qv","order_side":"SELL","order_rate":"297.70000000","order_qty":"1.0000","start_time":"2022-02-18 18:18:48","end_time":"2022-02-19 01:44:02"}];
        var data = rawData.reverse();


        //-----------------DETERMINES INITIAL BOT CONDITIONS-----------    

        var aInitialQty = parseFloat(data[0]["order_qty"]);    
        if (data[0]["order_side"] === "BUY")
        {
            aInitialQty *= -1;
        }     
        var aInitialRate = parseFloat(data[0]["order_rate"]) / 1.05;    
        var bInitialQty = aInitialQty * aInitialRate * -1;
        var startDate = data[0]["start_time"].split(" ", 1).toString();
        var aFinalRate = parseFloat(data[data.length - 1]["order_rate"]);

        //------------CREATES VARIABLES USED IN THE LOOP-----------------

        var aQtyAgg = aInitialQty;
        var bQtyAgg = bInitialQty;
        var totalProfit = 0;

        //-----------CREATES DATA SETS POPULATED IN THE LOOP-------------    

        var generalDataSet = 
        [{
            x: startDate,
            y: Math.floor(aInitialRate*10)/10,
            orderNo: "n/a",
            side: "n/a",
            profitMarginal: 0,
            profitTotal: 0            
        }];
        var botProfitDataSet = [0];
        var dateDataSet = [startDate]
        var buyAndHoldDataSet = [0];
        var differenceDataSet = [0];
        var aFinalQty;
        var bFinalQty;


        //----------------ITERATES THROUGH DATA. DETERMINES PROFITS AT EACH ITERATION. POPULATES ANALYTICAL DATA SETS---------------------

        for (let i = 0; i < data.length; i++)
        {           
            //-----------ASSIGNING DATA TO VARIABLES-----------

            var orderNum = i + 1;
            var date = data[i]["end_time"].split(" ", 1).toString();
            var orderSide = data[i]["order_side"];
            var aRate = parseFloat(data[i]["order_rate"]);         
            var aQty = parseFloat(data[i]["order_qty"]);
            
            if (orderSide === "SELL") 
            {
                aQty *= -1;
            }
        
            var bQty = aQty * aRate * -1;

            //----------CALCULATING MARGINAL AND AGGREGATE PROFITS------------------

            aQtyAgg += aQty;
            bQtyAgg += bQty;                                  
            var bRate = 1;            
            var pastProfit = totalProfit;               
            var totalProfit = (aQtyAgg * aRate) + (bQtyAgg * bRate);
            var orderProfit = totalProfit - pastProfit;

            var totalProfitPounds = Math.floor(totalProfit*100)/100;
            var orderProfitPounds = Math.floor(orderProfit*100)/100;

            //-----------POPULATING GENERAL "ANALYTICS" DATA SET---------

            const generalDataPoint = 
            {
                x: date,
                y: aRate,
                orderNo: orderNum,
                side: orderSide,
                profitMarginal: orderProfitPounds,
                profitTotal: totalProfitPounds
            }

            generalDataSet.push(generalDataPoint);    


            //------------POPULATING FOCUSED DATA SETS: "BUY&HOLD, BOT PROFIT, DIFFERENCE"-----------------------------


            var buyAndHold = (aInitialQty*aRate) - (aInitialQty * aInitialRate);
            var buyAndHoldPounds = Math.floor(buyAndHold*100)/100;
            var difference = Math.floor((totalProfitPounds - buyAndHoldPounds)*100)/100;

            buyAndHoldDataSet.push(buyAndHoldPounds);      
            botProfitDataSet.push(totalProfitPounds);
            dateDataSet.push(date);
            differenceDataSet.push(difference);    
            aFinalQty = Math.floor(aQtyAgg*100)/100;
            bFinalQty = Math.floor(bQtyAgg*100)/100;
        }



        //------------CHART ONE: DISPLAYS BOT'S TRANSACTIONS WITH PROFIT ANALYTICS---------------------------------------------------
        


        var chartOne = 
        {
            series: 
            [{
                name: "Bot Transactions",
                data: generalDataSet,
            }],   
            xaxis:
            {
                type: "numeric",
                tickPlacement: "between",
                title: 
                {
                    text: "Orders by Date"
                }
            },
            yaxis: 
            {
                title: 
                {
                    text: "BNB/GBP Exchange Rate"
                }
            },
            chart: 
            {
                toolbar: 
                {
                    show: false
                },
                zoom:
                {
                    enabled: false
                },                      
                type: 'line',
                height: 350,        
            },     
            stroke: 
            {
                colors: "#2568fb",
                width: "2"
                
            },
            markers: 
            {
                size: 4,
                colors: "#2568fb",     
                hover: {
                size: undefined,
                sizeOffset: 3
                }
            },
            tooltip:
            {
                custom: function({series, seriesIndex, dataPointIndex, w}) 
                {
                    var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                    return '<ul>' +
                    '<li><b>Side</b>: ' + data.side + '</li>' +
                    '<li><b>Rate</b>: ' + data.y + '</li>' +
                    '<li><b>Order Profit</b>: ' + data.profitMarginal + '</li>' +    
                    '<li><b>Total Profit</b>: ' + data.profitTotal + '</li>' +                           
                    '</ul>';
                }
            },
            grid: 
            {
                borderColor: '#f1f1f1',
            },
            title:
            {
                text: "Bot's Transactions, showing Marginal & Total Profits",
                align: "center"
            }

        };

        var chart = new ApexCharts(document.querySelector("#data-chart"), chartOne);
        chart.render();



        //------------------CHART TWO: DISPLAYS BOT'S PERFORMANCE IN COMPARISON WITH BUY & HOLD----------------------------------


        
        var chartTwo = 
        {
            series: 
            [{
                name: "Bot Profit",
                data: botProfitDataSet,
            },
            {
                name: "Buy & Hold Profit",
                data: buyAndHoldDataSet,
            }],
            chart: 
            {
                height: 450,
                type: "line",            
                toolbar: 
                {
                    show: false
                },
                zoom:
                {
                    enabled: false
                }                    
            },
            dataLabels: 
            {
                enabled: true
            },
            stroke: 
            {
                width: 2,
                curve: "straight"        
            },
            title: 
            {
                text: "Bot Performance Compared with 'Buy & Hold' Strategy",
                align: "center"
            },      
            markers: 
            {
                size: 4,
                hover: 
                {
                    sizeOffset: 3
                }
            },
            xaxis: 
            {
                categories: dateDataSet,
                tickPlacement: "between"       
            },
            yaxis: 
            {
                title: 
                {
                    text: "Profits (£)"
                }
            },
            tooltip: 
            {
                custom: function({series, seriesIndex, dataPointIndex, w}) 
                {
                    return '<ul>' +
                    '<li><b>Difference</b>: ' + "£" + differenceDataSet[dataPointIndex] + '</li>' +                                        
                    '</ul>';
                }
                
            },
            grid: 
            {
                borderColor: '#f1f1f1',
            }
        };

        var charts = new ApexCharts(document.querySelector("#data-chart-2"), chartTwo);
        charts.render();


        //------------------POPULATES DATA TABLE--------------------

        document.getElementById("BNB-holdings").innerHTML = aFinalQty;
        document.getElementById("GBP-holdings").innerHTML = "£" + bFinalQty;
        document.getElementById("b-and-h").innerHTML = "£" + buyAndHoldDataSet[buyAndHoldDataSet.length - 1];
        document.getElementById("bot-profit").innerHTML = "£" + botProfitDataSet[botProfitDataSet.length -1];        
            
    
    //}).fail(function()
    //{
    //    alert("API call failed");
    //});  

});
