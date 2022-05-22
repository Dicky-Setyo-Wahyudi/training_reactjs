import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:9090/product";

class ProductService {

    getProduct(){
        return axios.get(USER_API_BASE_URL);
    }

    getProductById(productId){
        return axios.get(USER_API_BASE_URL + productId);
    }

    createProduct(product){
        return axios.post(USER_API_BASE_URL, product);
    }

    updateProduct(product, productId){
        return axios.put(USER_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(USER_API_BASE_URL + '/' + productId);
    }
}

export default new ProductService()