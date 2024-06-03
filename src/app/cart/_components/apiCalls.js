import api from "../../../../lib/services/api";

export const getCustomerCart = async (setCartItems) => {
  try {
    const cartResponse = await api.post(`/cart/get-cart`, {
      customer_id: localStorage.getItem("customerId"),
    });

    setCartItems(cartResponse.data);
    // console.log(cartResponse.data.cart.cartItems);
  } catch (error) {
  
    console.error("Error fetching customer cart:", error);
  }
};


export const deleteItem=async(variantId)=>{

  try {
    const cartResponse= await api.post('/cart/remove-cart-item',{
      
        customer_id: localStorage.getItem('customerId'),
        variant_id: variantId
      
    })
  } catch (error) {
    console.error("Error fetching customer cart:", error);
  }

}