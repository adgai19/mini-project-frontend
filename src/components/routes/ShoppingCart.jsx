import React from "react";
import {useParams} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "../UI/ProductList";
import AddressDetails from "../UI/AddressDetails";
import PaymentDetails from "../UI/PaymentDetails";
import PriceDetails from "../UI/PriceDetails";
import UsersCartAPI from "../../data/UsersCartAPI"

function ShoppingCart() {
    const params = useParams() 
    const products = UsersCartAPI.getCartDataForUser(params.userId)
    return <div className="container-fluid">
        <div className="row">
            <div className="col-1"/>
            <div className="col-6">
                <ProductList productsList={products} userId={params.userId}/>
            </div>
            <div className="col-4">
                <AddressDetails userId={params.userId}/>
                <PaymentDetails/>
                <PriceDetails productsList={products} userId={params.userId}/>
            </div>
        </div>
    </div>
}

export default ShoppingCart;