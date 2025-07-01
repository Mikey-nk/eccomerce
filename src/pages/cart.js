function  Cart({cart,clearCart}){
    const total=cart.reduce((sum,item)=>sum+item.price,0);
    return (

        <div>
            <h2>Your Cart</h2>
            {cart.length===0 ?(
                <p> Cart is empty</p>
            ):(
                <>
                <ul>
                    {cart.map((item,i)=>(
                      <li key={i}>{item.name} -KES {item.price}</li>
                    ))}
                </ul>
                <h3> Total: KSH {total}</h3>
                    <button onClick={clearCart}>Checkout</button>
                </>
            )}
        </div>
    );
}
export default Cart;