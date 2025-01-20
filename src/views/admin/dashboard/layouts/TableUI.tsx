import { useState, useEffect } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../plugin/axios';
import Charts from './Charts';

function TableUI() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [products, setProducts] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const getProducts = async () => {
    try {
      const response = await axios.get('getProducts', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = response.data;
      setProducts(data.products);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product: any) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toString().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, products]);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
    setIsSearchActive(e.target.value.length > 0);

    // Clear the search query when the "x" icon is clicked
    if (e.target.value.length === 0) {
      setSearchQuery('');
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  


  return (
    <>
      <div className='ml-72 md:ml-0 md:mr-0 md:p-5 justify-center items-start relative flex flex-col gap-4 w-xl m-4 rounded-md min-h-[80px]'>
        <Charts />
      </div>

      <div className='ml-72 md:ml-0 md:mr-0 md:p-5 justify-center items-start relative flex flex-col gap-4 m-4 rounded-md'>
        <Card className='border border-primary p-5 w-full'>
        <div className='flex justify-between items-center gap-4 md:flex-col'>
          <div className='flex-1'>
            <Label className='text-lg font-bold'>Pending Orders</Label>
          </div>
          <div className='flex justify-end items-center'>
            <Input
              placeholder='Search'
              className='border border-primary w-64 md:w-72 pr-2 pl-2'
              value={searchQuery}
              onChange={searchChange}
            />
            <FontAwesomeIcon 
                icon={isSearchActive ? faTimes : faSearch}
                className={`absolute right-7 md:right-20 xxs:right-20 top-7 md:top-24 text-muted-foreground ${isSearchActive ? 'text-black' : ''}`}
                onClick={() => {
                  setIsSearchActive(false); 
                  setSearchQuery(''); 
                }}
              />
          </div>
        </div>

        <Table className='border border-primary mt-4'>
          <TableCaption>
            {filteredData.length === 0 && (
              <Label className='text-center text-lg mt-4'>No sellers available.</Label>
            )}
          </TableCaption>
          <TableHeader>
            <TableRow className='border border-primary'>
              <TableHead className='border border-primary bg-primary text-center text-black text-base'>
                Product Name
              </TableHead>
              <TableHead className='border border-primary bg-primary text-center text-black text-base'>
                Price
              </TableHead>
              <TableHead className='border border-primary bg-primary text-center text-black text-base'>
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border border-primary">
            {currentItems?.map((product:any, index:any) => (
              <TableRow key={index} className='border border-primary text-center hover:bg-[#f3f4f6] transition-colors'>
                <TableCell className='border border-primary text-center hover:bg-[#f3f4f6] transition-colors'>{product?.name}</TableCell>
                <TableCell className='border border-primary text-center hover:bg-[#f3f4f6] transition-colors'>{`₱ ${product?.price}`}</TableCell>
                <TableCell className='border border-primary text-center hover:bg-[#f3f4f6] transition-colors'>{product?.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className='flex justify-end mt-4 items-center md:justify-center w-full gap-4'>
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
        </Card>
      </div>

      
    </>
  );
}

export default TableUI;