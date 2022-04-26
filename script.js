$(function()
{

    $(".bot-list").hide();

    $(".bot-list-link").click(function()
    {
        $(".bot-list").slideToggle();
    });
    
    //-------------------------------------------------------------

    var bot25 = [{"idx":"2651","bot_id":"25","symbol_pair":"BNBGBP","order_id":"yve1iN4W5CWuHOyYs50e8P","order_side":"SELL","order_rate":"328.10000000","order_qty":"1.0000","start_time":"2022-04-11 10:00:03","end_time":"2022-04-20 09:35:02"},{"idx":"2527","bot_id":"25","symbol_pair":"BNBGBP","order_id":"3hbncKi7cid5zpBwd4HF4e","order_side":"BUY","order_rate":"312.50000000","order_qty":"1.0200","start_time":"2022-03-28 00:34:03","end_time":"2022-04-11 10:00:03"},{"idx":"2491","bot_id":"25","symbol_pair":"BNBGBP","order_id":"RXWrqwE50HFS7e1Tn10Gp5","order_side":"SELL","order_rate":"328.30000000","order_qty":"1.0000","start_time":"2022-02-17 23:22:11","end_time":"2022-03-28 00:34:03"},{"idx":"2468","bot_id":"25","symbol_pair":"BNBGBP","order_id":"Rx9e1Z4naCxfY4OxXSgUG9","order_side":"SELL","order_rate":"312.60000000","order_qty":"1.0000","start_time":"2022-03-04 00:47:02","end_time":"2022-03-24 06:29:02"},{"idx":"2285","bot_id":"25","symbol_pair":"BNBGBP","order_id":"Qeahwr2tqxcIEO7Mn15IES","order_side":"SELL","order_rate":"297.40000000","order_qty":"1.0000","start_time":"2022-03-10 13:07:03","end_time":"2022-03-16 10:07:03"},{"idx":"2197","bot_id":"25","symbol_pair":"BNBGBP","order_id":"ZFtwOQCa7AE6O56Ay9bi5A","order_side":"BUY","order_rate":"283.20000000","order_qty":"1.0200","start_time":"2022-03-09 02:13:04","end_time":"2022-03-10 13:07:03"},{"idx":"2171","bot_id":"25","symbol_pair":"BNBGBP","order_id":"EcNi4NUovekdeKUp6tWNKg","order_side":"SELL","order_rate":"297.50000000","order_qty":"1.0000","start_time":"2022-03-04 22:20:02","end_time":"2022-03-09 02:13:04"},{"idx":"2135","bot_id":"25","symbol_pair":"BNBGBP","order_id":"7i0OkvrBMDofuIfoOlxjqj","order_side":"BUY","order_rate":"283.30000000","order_qty":"1.0200","start_time":"2022-03-01 00:47:02","end_time":"2022-03-04 22:20:02"},{"idx":"2127","bot_id":"25","symbol_pair":"BNBGBP","order_id":"THbidJbhDQmThbcgcThcYx","order_side":"BUY","order_rate":"297.70000000","order_qty":"1.0200","start_time":"2022-03-01 09:01:02","end_time":"2022-03-04 00:47:02"},{"idx":"2007","bot_id":"25","symbol_pair":"BNBGBP","order_id":"ndOkEd2SLu7ikz73i4inXR","order_side":"SELL","order_rate":"312.70000000","order_qty":"1.0000","start_time":"2022-02-17 23:22:11","end_time":"2022-03-01 09:01:02"},{"idx":"1979","bot_id":"25","symbol_pair":"BNBGBP","order_id":"FkffuFZ5XZwUIobP4NCYnR","order_side":"SELL","order_rate":"297.60000000","order_qty":"1.0000","start_time":"2022-02-20 05:02:01","end_time":"2022-03-01 00:47:02"},{"idx":"1587","bot_id":"25","symbol_pair":"BNBGBP","order_id":"ZIvTQpcA5SCAic9puqkDA6","order_side":"BUY","order_rate":"283.40000000","order_qty":"1.0200","start_time":"2022-02-19 01:44:02","end_time":"2022-02-20 05:02:01"},{"idx":"1583","bot_id":"25","symbol_pair":"BNBGBP","order_id":"u5OTMZh2sLQccPIs7BJ4Qv","order_side":"SELL","order_rate":"297.70000000","order_qty":"1.0000","start_time":"2022-02-18 18:18:48","end_time":"2022-02-19 01:44:02"}];

    var bot15 = [{"idx":"954","bot_id":"15","symbol_pair":"BNBBTC","order_id":"zibudZJvKtfexMj32Qp59X","order_side":"BUY","order_rate":"0.01046800","order_qty":"1.0170","start_time":"2022-01-27 22:22:04","end_time":"2022-01-28 01:30:02"},{"idx":"927","bot_id":"15","symbol_pair":"BNBBTC","order_id":"zlHrlXPcglkhzeKrvDZ3ZA","order_side":"SELL","order_rate":"0.01082600","order_qty":"1.0000","start_time":"2022-01-23 20:33:02","end_time":"2022-01-27 22:22:04"},{"idx":"892","bot_id":"15","symbol_pair":"BNBBTC","order_id":"EGdbSx8Sl1wXkTRMmOzsmR","order_side":"BUY","order_rate":"0.01046000","order_qty":"1.0170","start_time":"2022-01-23 11:02:02","end_time":"2022-01-23 20:33:02"},{"idx":"868","bot_id":"15","symbol_pair":"BNBBTC","order_id":"Bs8XrimG13HL7ZbD0ZEjvW","order_side":"SELL","order_rate":"0.01081800","order_qty":"1.0000","start_time":"2022-01-21 21:48:03","end_time":"2022-01-23 11:02:02"},{"idx":"814","bot_id":"15","symbol_pair":"BNBBTC","order_id":"Acvncs3cW8cnc0x5IxYtb3","order_side":"BUY","order_rate":"0.01045200","order_qty":"1.0170","start_time":"2022-01-11 13:20:02","end_time":"2022-01-21 21:48:03"},{"idx":"753","bot_id":"15","symbol_pair":"BNBBTC","order_id":"eLaIahJUSSyJsJBsdhkRzC","order_side":"BUY","order_rate":"0.01080400","order_qty":"1.0170","start_time":"2022-01-13 19:46:02","end_time":"2022-01-20 19:28:03"},{"idx":"713","bot_id":"15","symbol_pair":"BNBBTC","order_id":"rld5mSKXQvb28gajaNqXra","order_side":"SELL","order_rate":"0.01117400","order_qty":"1.0000","start_time":"2022-01-05 22:35:04","end_time":"2022-01-13 19:46:02"},{"idx":"652","bot_id":"15","symbol_pair":"BNBBTC","order_id":"HComrYJaClebienZvGbAyW","order_side":"SELL","order_rate":"0.01081000","order_qty":"1.0000","start_time":"2022-01-08 18:13:04","end_time":"2022-01-11 13:20:02"},{"idx":"567","bot_id":"15","symbol_pair":"BNBBTC","order_id":"WmYFbxfo2EnChCFMTAQUf2","order_side":"BUY","order_rate":"0.01044400","order_qty":"1.0170","start_time":"2021-12-24 00:31:08","end_time":"2022-01-08 18:13:04"},{"idx":"405","bot_id":"15","symbol_pair":"BNBBTC","order_id":"AcgAMSog1OOy4Ldl5IbIq9","order_side":"BUY","order_rate":"0.01079600","order_qty":"1.0170","start_time":"2021-12-27 22:23:02","end_time":"2022-01-05 22:35:04"},{"idx":"137","bot_id":"15","symbol_pair":"BNBBTC","order_id":"a9TFIXG0c0fCoLrkgB0gfN","order_side":"SELL","order_rate":"0.01116600","order_qty":"1.0000","start_time":"2021-12-24 00:23:35","end_time":"2021-12-27 22:23:02"}];

    var data = bot15.reverse();


    //-----------------DETERMINS INITIAL BOT CONDITIONS-----------    

    var aInitialQty = parseFloat(data[0]["order_qty"]);    
    if (data[0]["order_side"] === "BUY")
    {
        aInitialQty *= -1;
    }     
    var aInitialRate = parseFloat(data[0]["order_rate"]) / 1.035;    //CHANGED
    var aInitialValue = aInitialQty * aInitialRate; //VALUE IN TERMS OF B
    var bInitialQty = aInitialValue * -1;
    var initialInvestment = Math.abs(bInitialQty);
    
    var startDate = data[0]["start_time"].split(" ", 1).toString();
    var aFinalRate = parseFloat(data[data.length - 1]["order_rate"]);

    //------------CREATES VARIABLES USED IN THE LOOP-----------------

    var aQtyAgg = aInitialQty;
    var bQtyAgg = bInitialQty;
    var totalProfit = 0;
    var totalROI = 0;

    //-----------CREATES DATA SETS POPULATED IN THE LOOP-------------    

    var generalDataSet = 
    [{
        x: startDate,
        y: aInitialRate, //CHANGED
        orderNo: "n/a",
        side: "n/a",
        profitMarginal: 0,
        profitTotal: 0,
        ROImarginal: 0,
        ROItotal: 0            
    }];
    var botProfitDataSet = [0];
    var dateDataSet = [startDate]
    var buyAndHoldDataSet = [0];
    var differenceDataSet = [0];
    var aFinalQty;
    var bFinalQty;


    //----------------ITERATES THROUGH ORIGINAL DATA. DETERMINES PROFITS AT EACH ITERATION. CREATES ANALYTICAL DATA SETS FOR DISPLAY---------------------

    for (let i = 0; i < data.length; i++)
    {           
        //-----------ITERATING THROUGH DATA AND ASSIGNING TO VARIABLES-----------

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

        

        var aValue = aQtyAgg * aRate;
        var bValue = bQtyAgg;
        var totalValue = aValue + bValue;

        var pastROI = totalROI;
        var totalROI = Math.floor((totalValue/initialInvestment)*10000)/100;
        var marginalROI = Math.floor(100*(totalROI - pastROI))/100;
        

        console.log("this orders roi is " + marginalROI);
        console.log("total roi is " + totalROI);
        console.log("-------------");
        
     
;
        
        //-----------POPULATING GENERAL "ANALYTICS" DATA SET---------

        const generalDataPoint = 
        {
            x: date,
            y: aRate,
            orderNo: orderNum,
            side: orderSide,
            profitMarginal: orderProfit, //CHANGED
            profitTotal: totalProfit, //CHANGED
            ROImarginal: marginalROI,
            ROItotal: totalROI
        }

        generalDataSet.push(generalDataPoint);    


        //------------POPULATING FOCUSED DATA SETS: BUY&HOLD, BOT PROFIT, DIFFERENCE-----------------------------


        var buyAndHold = Math.floor(aRate/aInitialRate*10000)/100;
        buyAndHold -= 100;
        
        
        
        var difference = totalROI - buyAndHold;

        buyAndHoldDataSet.push(buyAndHold);      
        botProfitDataSet.push(totalROI);
        dateDataSet.push(date);
        differenceDataSet.push(difference);    
        aFinalQty = aQtyAgg;
        bFinalQty = bQtyAgg;
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

                if (data.side === "n/a")
                {
                    return '<ul>' +
                    '<li>Initial Rate<b> ' + data.y + '</b></li>' +               
                                                                
                    '</ul>';
                }
                
                if (data.side === "SELL")
                {
                        return '<ul>' +
                    '<li><b style="color:red"> ' + data.side + '</b></li>' +                
                    '<li>Marginal ROI <b> ' + data.ROImarginal + '%</b></li>' +
                    '<li>Total ROI <b> ' + data.ROItotal + '%</b></li>' +                                              
                    '</ul>';
                } else if (data.side ==="BUY")
                {
                        return '<ul>' +
                    '<li>Side <b style="color:green"> ' + data.side + '</b></li>' +                
                    '<li>Marginal ROI <b> ' + data.ROImarginal + '%</b></li>' +
                    '<li>Total ROI <b> ' + data.ROItotal + '%</b></li>' +                                              
                    '</ul>';
                }
                
                
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

});
