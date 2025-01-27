import { useNavigate } from "react-router-dom";


function CashierNav() {
    const navigate = useNavigate();


    return (
        <div className="mt-5 ml-72 slg:ml-0 w-xl flex justify-between mr-4 items-center px-5 bg-primary border-b border-primary h-10 md:w-full">
            <nav className="flex items-center text-sm font-medium">
                <ol className="flex items-center space-x-4">
                    <li>
                    <a
                        href="/admin/cashier"
                        onClick={(e) => {
                        e.preventDefault();
                        navigate('/admin/cashier'); 
                        }}
                        className="text-white hover:text-black"
                    >
                        List of Cashier
                    </a>
                    </li>
                    <li>
                    <span className="text-white">/</span>
                    </li>
                    <li>
                    <span className="text-white">Add cashier</span>
                    </li>
                </ol>
            </nav>
    </div>
    )
}

export default CashierNav