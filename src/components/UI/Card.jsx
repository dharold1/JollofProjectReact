import React, { useContext, Fragment } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Card.module.css'
import MealItemForm from './MealItemForm';
import food from "../../assets/images/order/food2.jpg"

const Card = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = quantity =>{
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            image: props.imagesrc,
            quantity: quantity,
            price: props.price
        })
    }
   
    return (
        <Fragment>
            <div className={classes.card}>
                <img src={food} alt={props.title}/>
                <div className={classes['card-body']}>
                    <h5 className={classes['card-title']}>{props.title}</h5>
                    <p className={classes['card-text']}>₦{props.price}</p>
                </div>
                <hr/>
                <MealItemForm onAddtoCart={addToCartHandler}/>
               
            </div>
        </Fragment>
    );
}

export default Card;
