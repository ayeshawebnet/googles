async function fetchApi(method, params,id){
    try{
        const response = await fetch(API_URL,{
            method:"POST",
            body:JSON.stringify({
                jsonrpc:"2.0",
                method:method,
                params:params,
                id:id,
            }),
        });
        const data=await response.json();
        if(data.error) throw new Error(data.error.message || ERROR);
        return data.result;
    }
    catch(error){
        console.log("Error",method,error);
        return null;
    }
}

//Fetch Products
async function fetchProducts(filter){
    const params= new ProductFilters(filter);
    try{
        const products = await fetchApi("products.getAllProducts",params, "siiCYawo");
        return products;
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}

//Fetch Product Details
async function fetchProductDetails(productCode){
    const params={code:productCode,sub_shopCode:SHOP_CODE};
    try{
        const productDetails = await fetchApi("products.getProductDetails",params,"k1PQf2Rp");
        return productDetails;
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}

//Fetch Product Model Filters
async function fetchProductModelFilters(productCode){
    const params={productCode:productCode};
    try{
        const productModelFilters = await fetchApi("products.getProductModelFilters",params,"R7c1DXiJ");
        return productModelFilters;
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}

//Fetch Product Code by Tag
async function fetchProductCodeByTag(tag_value, setCode, tag_key, product_model){
    const params={
        tag_value:tag_value,
        setCode:setCode,
        tag_key:tag_key,
        product_model:product_model,
    }
    try{
        const productCode = await fetchApi("products.getProductCodeByTag",params,"eZMq1h53");
        //call fetchProductDetails(productCode) to get product details
        const productDetails = await getProductDetails(productCode);
        return productDetails;   
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}

//Fetch List Categories Filters
async function fetchListCategoriesFilters(selectedCategory){
    const params={
        catCode:selectedCategory,
        sub_shopCode:SHOP_CODE,
    }
    try{
        const listCategoriesFilters = await fetchApi("products.ListCategoryFilters",params,"3CZRL6Mp");
        return listCategoriesFilters;
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}

//Fetch List Products By Category
async function fetchListProductsByCategory(){
    try{
        const listProductsByCategory = await fetchApi("home.listProductCategories",{}, "5tX3sJl4");
        return listProductsByCategory;
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}

//Fetch Menu Items
async function fetchMenuItems(){
    try{
        const response = await fetch(MENU_URL);
        const data = await response.json();
        return data;
    } catch(error){
        console.log("Error",error);
        return null;
    }
}

//Fetch Footer
async function fetchFooter(){
    try{
        const response = await fetch(FOOTER_URL);
        const data = await response.text();
        return data;
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}



// async function fetchProducts(params) {
//     try{
//         const response = await fetch(API_URL, {
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify({
//                 jsonrpc:"2.0",
//                 method:"products.getAllProducts",
//                 params:params,
//                 id:"siiCYawo",
//             }),
//         });
//         const data = await response.json();
//         if(data.error) throw new Error(data.error.message || ERROR_LOADING_PRODUCT);
//         return data.result;
//     } catch(error){
//         console.log("Error",error);
//         return null;
//     }
// }



// async function fetchProductDetails(productCode){
//     try{
//         const response = await fetch(API_URL, {
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify({
//                 jsonrpc:"2.0",
//                 method:"products.getProductDetails",
//                 params:{
//                     code:productCode,
//                     sub_shopCode:SHOP_CODE,
//                 },
//                 id:"k1PQf2Rp",
//             }),
//         });
//         const data = await response.json();
//         if(data.error) throw new Error(data.error.message || ERROR_LOADING_PRODUCT);
//         return data.result;
//     } catch(error){
//         console.log("Error",error);
//         return null;
//     }
// }

// function 