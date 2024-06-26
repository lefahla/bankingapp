'use client'
import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import { Doughnut } from "react-chartjs-2" 

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ( {accounts}: DoughnutChartProps) => {
const data = {
        
        datasets: [
          {
            label: 'Banks',
            data: [123, 23419, 6663],
            backgroundColor: [
              '#0747b6',
              '#2265d8',
              '#2f91fa',
            ],
            borderColor: [
                '#0747b6',
                '#2265d8',
                '#2f91fa',
            ], 
            borderWidth: 2,
          },
        ],
        labels: ['Bank 1','Bank2','Bank3'],
      };

  return(
    <Doughnut 
        data={data}
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
     />  
 )
}
export default DoughnutChart