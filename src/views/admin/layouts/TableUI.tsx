import { useState, useEffect } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ReactApexChart from 'react-apexcharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

function TableUI() {
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const data = [
      { product: 'Classic', category: 'Classic', purchased: 100, rank: 1 },
      { product: 'Taro', category: 'Taro', purchased: 150, rank: 2 },
      { product: 'Classic Brewed Coffee', category: 'Classic Brewed Coffee', purchased: 200, rank: 3 },
      { product: 'Espresso Shot', category: 'Espresso Shot', purchased: 250, rank: 4 },
      { product: 'Classic', category: 'Classic', purchased: 100, rank: 1 },
      { product: 'Taro', category: 'Taro', purchased: 150, rank: 2 },
      { product: 'Classic Brewed Coffee', category: 'Classic Brewed Coffee', purchased: 200, rank: 3 },
      { product: 'Espresso Shot', category: 'Espresso Shot', purchased: 250, rank: 4 },
      { product: 'Classic', category: 'Classic', purchased: 100, rank: 1 },
      { product: 'Taro', category: 'Taro', purchased: 150, rank: 2 },
      { product: 'Classic Brewed Coffee', category: 'Classic Brewed Coffee', purchased: 200, rank: 3 },
      { product: 'Espresso Shot', category: 'Espresso Shot', purchased: 250, rank: 4 },
    ];

    const filtered = data.filter((item) =>
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredData(filtered);
  }, [searchQuery]);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className='ml-72 justify-center items-start relative flex flex-col gap-4 w-xl m-4 rounded-md min-h-[80px]'>
        <div className='grid grid-cols-2 gap-4 w-full'>
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

          <Card className='border border-primary'>
            <CardHeader>
              <CardTitle>Top Rank</CardTitle>
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
        </div>
      </div>

      <div className='ml-72 justify-center items-start relative flex flex-col border border-primary p-5 gap-4 w-xl m-4 rounded-md min-h-[80px]'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex-1'>
            <Label className='text-lg font-bold'>Top Sellers of the Week</Label>
          </div>
          <div className='flex justify-end items-center'>
            <Input
            
              placeholder='Search'
              className='border border-primary w-64 pr-2 pl-2'
              value={searchQuery}
              onChange={(e) => {
                console.log(e.target.value),
                setSearchQuery(e.target.value)
              }}
              
            />
            <FontAwesomeIcon icon={faSearch} className='absolute right-8 top-8 text-muted-foreground' />
          </div>
        </div>

        <Table>
          <TableCaption>
              {filteredData.length === 0 && (
                  <Label className='text-center text-lg font-bold mt-4'>No sellers available.</Label>
              )}
          </TableCaption>
          <TableHeader>
            <TableRow className='border border-primary'>
              <TableHead className='border border-primary bg-primary text-center text-black text-base font-bold'>
                Product
              </TableHead>
              <TableHead className='border border-primary bg-primary text-center text-black text-base font-bold'>
                Category
              </TableHead>
              <TableHead className='border border-primary bg-primary text-center text-black text-base font-bold'>
                Customer's Purchased
              </TableHead>
              <TableHead className='border border-primary bg-primary text-center text-black text-base font-bold'>
                Rank
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='border border-primary'>
            {currentItems?.map((item:any, index) => (
              <TableRow key={index} className='border border-primary text-center hover:bg-muted/10'>
                <TableCell className='border border-primary text-center'>{item?.product}</TableCell>
                <TableCell className='border border-primary text-center'>{item?.category}</TableCell>
                <TableCell className='border border-primary text-center'>{item?.purchased}</TableCell>
                <TableCell className='border border-primary text-center'>{item?.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        

        <div className='flex justify-end mt-4 items-center w-full gap-4'>
          <Button
            disabled={currentPage === 1 || filteredData.length === 0}
            onClick={() => paginate(currentPage - 1)}
              >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
            <span>
              Page {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
            </span>
            <Button
              disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage) || filteredData.length === 0}
              onClick={() => paginate(currentPage + 1)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </div>
      </div>
    </>
  );
}

export default TableUI;