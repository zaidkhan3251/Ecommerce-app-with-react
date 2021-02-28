import React from 'react'
import { BsPlus, BsDash, BsFillXSquareFill } from "react-icons/bs";

import currencyFormatter from 'currency-formatter'
import { useSelector, useDispatch } from 'react-redux';
const Cart = () => {
    const { products, totalPrice, totalQuantities } = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    return (
        <div className="cart">
            <h3>your Cart</h3>
            {products.length > 0 ? <>
                <div className="row">
                    <div className="col-9">
                        <div className="cart__heading">
                            <div className="row">
                                <div className="col-2">Picture</div>
                                <div className="col-2">Name</div>
                                <div className="col-2">Price</div>
                                <div className="col-2">Inc/Dec</div>
                                <div className="col-2">Total Price</div>
                                <div className="col-2">Remove</div>
                            </div>

                        </div>
                        {products.map(product => (
                            <div className="row verticalAlign" key={product.id}>
                                <div className="col-2">
                                    <div className="cart__image">
                                        <img src={`/images/${product.id}.jpg `} alt="image" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="cart__name">
                                        {product.name}
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="cart__price">
                                        {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="details__info cart__incDec">
                                        <div className="incdec">
                                            <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })} ><BsDash /></span>
                                            <span className="quantity">{product.quantity}</span>
                                            <span className="inc" onClick={() => dispatch({ type: 'INC', payload: product.id })}><BsPlus /></span>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="cart__total text-center">
                                        {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="cart__remove text-center" onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                                        <BsFillXSquareFill />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-3 summary-col">
                        <div className="summary">
                            <div className="summary__heading">
                                Summary
                            </div>
                            <div className="summary__details">
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Items:
                                    </div>
                                    <div className="col-6">
                                        {totalQuantities}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        Total Price:
                                    </div>
                                    <div className="col-6">
                                    {currencyFormatter.format(totalPrice, { code: 'USD' })}
                                    </div>
                                </div>
                                <button type='button' className="checkout">CheckOut</button>
                            </div>

                        </div>
                    </div>
                </div></> : <h3 className='red'>Your Cart Is Empty</h3>
                }
        </div>
    )
}

export default Cart
