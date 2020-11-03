import React, { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Chart from 'chart.js';


export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    const chartRef = useRef()
    const amount = transactions.map(transacc => transacc.amount)

    const total = amount.reduce((acc, item) =>(acc += item), 0)
    const pu=[]
    const data = transactions.forEach(transaction => {
        total===transaction.amount ? pu.push(transaction.amount) : pu.push(transaction.amount)
    });
    
    const download = () => {
          
            document.title='';
            document.footer='';
            document.header='';
            window.print();
            }
  
    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d')
        var myChart = new Chart(myChartRef,{
            type: 'line',
            data: {
                //Bring in data
                

                labels: transactions.map(transaction => transaction.text ), 
                //[transactions.map((transaction) => {
                    // let counterr = 0
                    // for (let counter = 0; counter <= transaction.length; counter++ ){
                    //     counterr++
                    // }

                    // return 'Transaccion nº' + counterr
                    // var numberTransactions = 0;
                    // var quantityTransaction = numberTransactions++
            //    }})],
                datasets: [
                    {
                        // xAxisID: '0',
                        // yAxisID: '0',Historial de Transacciones
                        label: "Valores Positivos: Ingresos |  Valores Negativos: Egresos",
                        borderColor: 'blue',
                        borderWidth: 2,
                        backgroundColor: 'rgb(123, 149, 223)',
                        fillColor: '#c0392b',
                        strokeColor: 'rgb(123, 149, 223)',
                        pointColor: 'rgb(123, 149, 223)',
                        pointStrokeColor: 'rgb(158, 181, 245)',
                        pointHighlightFill:  'rgb(158, 181, 245)',
                        pointHighlightStroke:  'rgb(123, 149, 223)',
                        data: pu,
                        bezierCurve : true,
                        // scaleStartValue: 0
                    }
                ]
            },
            options: {
                responsive: true,
                //Customize chart options
                elements: {
                    line: {
                        borderWidth: 8,
                        fill: false
                    },
                    points:{
                        radius: 6,
                        borderWidth: 4,
                        backgroundColor: 'white',
                        hoverRadius: 8,
                        hoverBorderWidth: 4
                    }
                },
                scales: { 
                    yAxes: [{ 
                     ticks: { 
                        // suggestedMin: 0,
                        beginAtZero: true,
                     } 
                    }] 
                   } 
            }
            
            // defaults: {
            //     scale: {
            //       ticks: { min: 0 },
            //     }
            //   },
        })
    })
    
    return (
        <div>
            <h3>Historial de Transacciones</h3>
            <br/>
            <canvas id='myChart' width='400' height='400' ref={chartRef}></canvas>
            <button className='btn' onClick={download}>Desarga el pdf de tus transacciones!</button>
        </div>
    )
}
