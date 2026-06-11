import axios from "axios";
import { productSchemaArrary } from "../schemas/productSchema";
import type { Products } from "../types/types";
import { getProductsEndpoint } from "../constants/api";

export const fetchProducts = async (): Promise<Products[]> => {
  try {
    const apiUrl = getProductsEndpoint();
    
    const response = await axios.get(apiUrl);
    // if (!response) throw new Error("Error in fetching data");

    const validatingProducts = productSchemaArrary.safeParse(response.data);

    if (!validatingProducts.success) {
      throw new Error(validatingProducts.error.message);
    }
    return validatingProducts.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error; // rethrow original error
    }

    throw new Error("Unknown error occurred", {
      cause: error,
    });
  }
};
