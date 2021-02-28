import React,{useEffect,useState} from 'react'
import currencyFormatter from 'currency-formatter'
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { BsPlus,BsDash } from "react-icons/bs";

const Details = () => {
    const [quantity, setQuantity] = useState(1)
    const {id}=useParams();
    const dispatch=useDispatch();
    const {product}=useSelector(state=>state.ProductsReducer)
    console.log(product ,"new")
    useEffect(()=>{
        dispatch({type: 'PRODUCT',id})
    },[id])
    const decQuantity=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__img">
                    <img src={`/images/${product.image} `} alt="image" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {product.name}
                    </div>
                    <div className="details__prices">
                        <span className="details__actual">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                        <span className="details__discount">{currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>

                    </div>
                    <div className="details__info">
                        <div className="incdec">
                            <span className="dec" onClick={decQuantity}><BsDash/></span>
                        <span className="quantity">{quantity}</span>
                        <span className="inc" onClick={()=>setQuantity(quantity+1)}><BsPlus/></span>
                        <button className="addto_cart" onClick={()=> dispatch({type:"ADD_TO_CART",payload:{product,quantity}})}>Add To Cart</button>
                        </div>
                        
                    </div>
                    <div className="details__p">
                        <h4>Details</h4>
                        {product.desc}
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Details
