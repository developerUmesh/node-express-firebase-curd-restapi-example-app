import firebase from "../db";
import { DATABASE } from "../config";
import { Product } from "../models";


//Setting collection 
const firestore = firebase.firestore().collection(DATABASE);

const productController = {
    //Add new product..
    async addProduct(req, res, nproductControllerext) {
        try {

            const data = req.body;

            await firestore.doc().set(data);

            return res.status(201).send("New product added..");

        } catch (error) {
            console.log(error.message);

        }
    }
    ,
    //get product
    async getProduct(req, res, next) {
        try {
            const doc = await firestore.doc(req.params.id);
            const data = await doc.get();
            if (!data.exists) {
                return res.status(404).send("Prodcut is not available for this Id");
            } else {

                return res.status(200).send(data.data());
            }
        }
        catch (error) {
            return res.status(400).send(error.message);
        }
    }
    ,
    //get all products
    async getProducts(req, res, rext) {

        try {
            //const products = await firestore.collection(DATABASE);
            const data = await firestore.get();
            const productArray = [];
            if (data.empty) {
                return res.status(404).send("Prodcuts are not available");
            } else {


                data.forEach(doc => {
                    const product = new Product(
                        doc.id,
                        doc.data().name,
                        doc.data().price,
                        doc.data().description,
                        doc.data().status
                    );

                    productArray.push(product);
                });
                return res.status(200).send(productArray);
            }
        }
        catch (error) {

            return res.status(404).send(error.message);
        }
    },
    //update product
    async updateProduct(req, res, next) {
        try {
            const doc = await firestore.doc(req.params.id);
            const updatedResult = await doc.update(req.body);
            return res.status(201).send("Product Updated successfully");
        }
        catch (error) {
            return res.status(404).send(error.message);
        }
    },
    //Delete  product...
    async deleteProduct(req, res, next) {
        try {
            await firestore.doc(req.params.id).delete();
            return res.status(201).send("Product is deleted .....");
        }
        catch (error) {
            return res.status(404).send(error.message);

        }
    }

}


export default productController;
