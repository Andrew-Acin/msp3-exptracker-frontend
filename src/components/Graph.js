import React, { useEffect, useRef, useContext } from 'react';
import Chart from 'chart.js/auto';
import { ExpenseContext } from './ExpenseContext';

const Graph = () => {
  const { expenses } = useContext(ExpenseContext);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

//   I would have loved to separate the chart with the types instead of amount but i just don't think we have time for that.
  useEffect(() => {
    if (expenses.length > 0) {
      const labels = expenses.map(expense => expense.expense);
      const values = expenses.map(expense => expense.amount);
      const colors = expenses.map((expense, index) => {
        const predefinedColors = ["red", "#4ae051", "blue", "orange", "#8e7bc9", "#ffe845", "pink", "#e79090"];
        return predefinedColors[index % predefinedColors.length];
      });

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            backgroundColor: colors,
            data: values
          }]
        },
        options: {
          plugins: {
            legend: { display: true },
            title: {
              display: true,
              text: "Finance Tracket Chart"
            }
          }
        }
      });

      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
      };
    }
  }, [expenses]);

  return <canvas ref={chartRef} style={{ width: "100%", maxWidth: "600px" }} />;
}

export default Graph;
