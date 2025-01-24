import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { faBox, faChartLine, faCoins, faHourglassHalf, faMoneyBillWave, faPesoSign, faTruck, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../../components/css/card.css"
  

function Cards() {
  return (
    <div className='ml-72 md:ml-0 gap-4 w-xl mr-4 md:mr-0 md:p-5 mt-5 rounded-md min-h-[80px]'>
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2 md:gap-3 md:item-center gap-4 w-full">
            <Card className="border border-primary border-b-4 animation-fadeInLeft">
                <CardHeader>
                    <CardTitle>Total Sales</CardTitle>
                </CardHeader>
                
                
                <CardFooter>
                    <p>123.00</p>
                   
                </CardFooter>
                <FontAwesomeIcon className='ml-48 md:ml-24 slg:ml-24 md:w-16 md:h-16 mt-[-90px] bottom-5 relative h-20 w-20 text-[#fef9c3]' icon={faChartLine} />
            </Card>

            <Card className="border border-primary border-b-4 animation-fadeInLeft">
                <CardHeader>
                    <CardTitle>Total Suppliers</CardTitle>
                </CardHeader>
                <CardFooter>
                    <p>123.00</p>
                </CardFooter>
                <FontAwesomeIcon className='ml-48 md:ml-24 slg:ml-24 md:w-16 md:h-16 mt-[-90px] bottom-5 relative h-20 w-20 text-[#fef9c3]' icon={faTruck} />
            </Card>

            <Card className="border border-primary border-b-4 fadeInRight">
                <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                </CardHeader>
                <CardFooter>
                    <p>123.00</p>
                </CardFooter>
                <FontAwesomeIcon className='ml-48 md:ml-24 slg:ml-24 md:w-16 md:h-16 mt-[-90px] bottom-5 relative h-20 w-20 text-[#fef9c3]' icon={faBox} />
            </Card>

            <Card className="border border-primary border-b-4 fadeInRight">
                <CardHeader>
                    <CardTitle>Total Revenue</CardTitle>
                </CardHeader>
                <CardFooter>
                    <p>123.00</p>
                </CardFooter>
                <FontAwesomeIcon className='ml-48 md:ml-24 slg:ml-24 md:w-16 md:h-16 mt-[-90px] bottom-5 relative h-20 w-20 text-[#fef9c3]' icon={faPesoSign} />
            </Card>

            <Card className="border border-primary border-b-4 animation-fadeInLeft">
                <CardHeader>
                    <CardTitle>Pending Orders</CardTitle>
                </CardHeader>
                <CardFooter>
                    <p>123.00</p>
                </CardFooter>
                <FontAwesomeIcon className='ml-48 md:ml-24 slg:ml-24 md:w-16 md:h-16 mt-[-90px] bottom-5 relative h-20 w-20 text-[#fef9c3]' icon={faHourglassHalf} />
            </Card>

            <Card className="border border-primary border-b-4 animation-fadeInLeft">
                <CardHeader>
                    <CardTitle>Registered Customers</CardTitle>
                </CardHeader>
                <CardFooter>
                    <p>123.00</p>
                </CardFooter>
                <FontAwesomeIcon className='ml-48 md:ml-24 slg:ml-24 md:w-16 md:h-16 mt-[-90px] bottom-5 relative h-20 w-20 text-[#fef9c3]' icon={faUsers} />
            </Card>

            <Card className="border border-primary border-b-4 fadeInRight">
                <CardHeader>
                    <CardTitle>Monthly Earnings</CardTitle>
                </CardHeader>
                <CardFooter>
                    <p>123.00</p>
                </CardFooter>
                <FontAwesomeIcon className='ml-48 md:ml-24 slg:ml-24 md:w-16 md:h-16 mt-[-90px] bottom-5 relative h-20 w-20 text-[#fef9c3]' icon={faMoneyBillWave} />
            </Card>

            <Card className="border border-primary border-b-4 fadeInRight">
                <CardHeader>
                    <CardTitle>Monthly Profit</CardTitle>
                </CardHeader>
                <CardFooter>
                    <p>123.00</p>
                </CardFooter>
                <FontAwesomeIcon className='ml-48 md:ml-24 slg:ml-24 md:w-16 md:h-16 mt-[-90px] bottom-5 relative h-20 w-20 text-[#fef9c3]' icon={faCoins} />
            </Card>
        </div>
    </div>
  )
}

export default Cards