import { toast } from "react-toastify";
import api from "../../../../lib/services/api";

export const getCustomerDetailsByToken = async (setCustomerID) => {
  await api
    .get("/auth/userData", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      setCustomerID(response.data.id);
      localStorage.setItem("customerId", response.data.id);
    })
    .catch((response) => console.log(response.response.data.message));
};

export const fetchItems = async (setItems) => {
  try {
    const response = await api.get("/menu/items");
    // setError(null);
    setItems(response.data);
  } catch (error) {
    console.error(error.message);
    // setError("Failed to fetch products");
  }
};

export const addtocart=async(payload)=>{
    try {
        const response = await api.post("/cart/update-cart",payload);
        if(response.data){
            toast.success("Item added successfully to cart");
        }
    } catch (error) {
        console.error(error.message);
    }
}