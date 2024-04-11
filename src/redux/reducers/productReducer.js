let initialState = {
    productList : [],
    selectedItem : null,

}

function productReducer(state=initialState, action){
    let {type, payload} = action;
    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList : payload.data} //productList 초기값안에 productAction에 dispatch 매개변수로 넣은 payload data를 할당함.
        case "GET_SINGLE_PRODUCT_SUCCESS" :
            return {...state, selectedItem : payload.data }
            default :
            return {...state,};
    }
}

export default productReducer