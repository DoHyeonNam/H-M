import { type } from "@testing-library/user-event/dist/type";

function getProducts (searchQuery){
    return async(dispatch, getState)=>{
        let url= ` https://my-json-server.typicode.com/DoHyeonNam/H-M/products?q=${searchQuery}` // 쿼리값은 읽어오는데 상품을 못읽어옴;
        let response = await fetch(url)
        let data = await response.json()
        console.log("데이터다다닫다",data);
        dispatch({type:"GET_PRODUCT_SUCCESS", payload : {data}})
    }
}
function getProductDetail(id){
    return async(dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/DoHyeonNam/H-M/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type : "GET_SINGLE_PRODUCT_SUCCESS",payload : {data}})
    }
}

export const productAction={getProducts, getProductDetail}