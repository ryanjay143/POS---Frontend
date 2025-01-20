import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';


function Charts() {
    const [isMounted, setIsMounted] = useState(false);

    const lineChartOptions = {
        chart: {
          id: 'basic-line',
        },
        colors: ['#f59e0b'],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
      };
    
      const lineChartSeries = [{
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      }];
    
      const barChartOptions = {
        chart: {
          id: 'basic-bar',
          type: 'bar',
        },
        colors: ['#f59e0b'],
        xaxis: {
          categories: ['Classic', 'Taro', 'Classic Brewed Coffee', 'Espresso Shot'],
        },
      };
    
      const barChartSeries = [
        {
          name: 'Top Rank',
          data: [1, 2, 3, 4],
        },
      ];
    
      // Monthly Earnings
      const earningsBarChartOptions = {
        chart: {
          id: 'basic-bar',
          type: 'bar',
        },
        colors: ['#f59e0b'],
        xaxis: {
          categories: ['Jan', 'Feb', 'March', 'Apr'],
        },
      };
    
      const earningsBarChartSeries = [
        {
          name: 'Monthly Earnings',
          data: [500, 1000, 5000, 10000],
        },
      ];
    
      // Monthly Profits
      const profitsBarChartOptions = {
        chart: {
          id: 'basic-bar',
          type: 'bar',
        },
        colors: ['#f59e0b'],
        xaxis: {
          categories: ['Jan', 'Feb', 'March', 'Apr'],
        },
      };
    
      const profitsBarChartSeries = [
        {
          name: 'Monthly Earnings',
          data: [200, 500, 1000, 3000],
        },
    
        
      ];

      useEffect(() => {
          setIsMounted(true);
        }, []);


  return (
    <div className='grid grid-cols-2 md:grid-cols-1 slg:grid-cols-1 gap-4 w-full'>

    {/* Sales Overview */}
    <Card className='border border-primary'>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {isMounted && (
          <ReactApexChart
            options={lineChartOptions}
            series={lineChartSeries}
            type='line'
            width='100%'
            height={350}
          />
        )}
      </CardContent>
    </Card>

    {/* Top Products */}
    <Card className='border border-primary'>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        {isMounted && (
          <ReactApexChart
            options={barChartOptions}
            series={barChartSeries}
            type='bar'
            width='100%'
            height={300}
          />
        )}
      </CardContent>
    </Card>

    {/* Monthly Earnings */}
    <Card className='border border-primary'>
      <CardHeader>
        <CardTitle>Monthly Earnings</CardTitle>
      </CardHeader>
      <CardContent>
        {isMounted && (
          <ReactApexChart
            options={earningsBarChartOptions}
            series={earningsBarChartSeries}
            type='bar'
            width='100%'
            height={300}
          />
        )}
      </CardContent>
    </Card>

    {/* Monthly Profit */}
    <Card className='border border-primary'>
      <CardHeader>
        <CardTitle>Monthly Profit</CardTitle>
      </CardHeader>
      <CardContent>
        {isMounted && (
          <ReactApexChart
            options={profitsBarChartOptions}
            series={profitsBarChartSeries}
            type='bar'
            width='100%'
            height={300}
          />
        )}
      </CardContent>
    </Card>
  </div>
  )
}

export default Charts