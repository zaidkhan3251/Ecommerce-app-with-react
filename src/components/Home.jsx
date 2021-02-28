import React from 'react'
import { Link } from 'react-router-dom';
import currencyFormatter from 'currency-formatter'
import Header from './Header'
import { useSelector } from 'react-redux'
const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer)
    console.log(products)
    return (
        <div>
            {/* <Header /> */}
            <div className="container ">
                <div className="row mt-71">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`/details/${product.id}`} exact ><img src={`/images/${product.id}.jpg `} alt="image" /></Link>

                                </div>
                                <div className="product__name">
                                    {product.name}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">
                                            <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                                            <span className="discount">{product.discount}%</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount__price">

                                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
