import fs from 'fs';
import ApiFeatures from './apiFeatures.js';

const readData = () => {
    const data = fs.readFileSync('product.json');
    return JSON.parse(data);
};

const getProducts = (req, res) => {
    // const products = await Product.find({});
    const productCount = readData().products.length;
    const size = req.query.size || 10;
    const apiRes = new ApiFeatures(readData().products, req.query).pagination(size);
    const products = apiRes.query;
    res.status(200).json(
        {
            success: true,
            products,
            Total_products: productCount,
            Producs_per_page: size
        }
    );
};

const getProductDetails = (req, res, next) => {
    const allProducts = readData().products;
    const id = Number(req.params.id);
    const product = allProducts.find((product) => product.id === id);

    if(!product){
        const error = new Error("Product not found !");
        error.statusCode = 404;
        return next(error);
    }
    
    res.status(200).json({
        success: true,
        product
    })
};
export {getProducts, getProductDetails}