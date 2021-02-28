import React from 'react'
import {Link} from  'react-router-dom';
import {useSelector} from 'react-redux';
import { BsFillBagFill } from "react-icons/bs";

const Nav = () => {
    const{totalQuantities}=useSelector(state=>state.CartReducer)
    return (
        <div className="nav">
            <div className="container">
                <div className="nav_container">
                    <div className="nav_left">
                        <Link to="/" exact><img   src="/images/rsz_01.png" alt=""/></Link>
                        
                    </div>
                    <div className="nav_right">
                        <Link to="/cart" exact>
                            <div className="basket">
                                <BsFillBagFill className="cart-icon" />
                                <span>
                                    {totalQuantities}
                                </span>

                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
