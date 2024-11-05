async function fetchApi(method, params,id){
    try{
        const response =await fetch(API_URL,{
            method:"POST",
            headers:{"Content-Type":"application/json",},
            body:JSON.stringify({
                jsonrpc:"2.0",
                method:method,
                params:params,
                id:id,
            }),
        })
        const data=await response.json();
        if(data.error) throw new Error(data.error.message || ERROR);
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}

//Fetch Products
async function fetchProducts(filter){
   return await fetchApi("products.getAllProducts",filters, "siiCYawo");
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
        return productCode;
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
        const listCategoriesFilters = await fetchApi("products.getListCategoriesFilters",params,"3CZRL6Mp");
        return listCategoriesFilters;
    }
    catch(error){
        console.log("Error",error);
        return null;
    }
}



async function fetchProducts(params) {
    try{
        const response = await fetch(API_URL, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                jsonrpc:"2.0",
                method:"products.getAllProducts",
                params:params,
                id:"siiCYawo",
            }),
        });
        const data = await response.json();
        if(data.error) throw new Error(data.error.message || ERROR_LOADING_PRODUCT);
        return data.result;
    } catch(error){
        console.log("Error",error);
        return null;
    }
}

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

async function fetchProductDetails(productCode){
    try{
        const response = await fetch(API_URL, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                jsonrpc:"2.0",
                method:"products.getProductDetails",
                params:{
                    code:productCode,
                    sub_shopCode:SHOP_CODE,
                },
                id:"k1PQf2Rp",
            }),
        });
        const data = await response.json();
        if(data.error) throw new Error(data.error.message || ERROR_LOADING_PRODUCT);
        return data.result;
    } catch(error){
        console.log("Error",error);
        return null;
    }
}

function 