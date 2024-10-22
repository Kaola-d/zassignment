import Product from "./product"
import './Productlist.css'



const Productlist = () => {
    const Products = [
        {
            productName: 'Mini Exquisite Alloy Miniature',
            price: '36,024',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/2620133/1.jpg?7204',
            description: ' Light shooting and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is +/- 1-3cm.'
        },

        {
            productName: 'Glasses multi-function washing machine',
            price: '86,024',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/6114292/1.jpg?8693',
            description: ' Light shooting and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is +/- 1-3cm.'
        },

        {
            productName: 'Vegetable Cutter Multifunctional Slicer Fruit Potato Peeler',
            price: '34,024',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/2887713/1.jpg?4473',
            description: ' Light shooting and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is +/- 1-3cm.'
        },


        {
            productName: 'Garment Ironing Machine Steam Iron Clothes Steamer White EU',
            price: '65,024',
            imageUrl: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/4940292/1.jpg?0137',
            description: ' Light shooting and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is +/- 1-3cm.'
        },
    ]

    return(
        <div className="jjjj">
            {Products.map((product, index) =>(
                <Product
                
                key = {index}
                productName = {product.productName}
                price = {product.price}
                imageUrl = {product.imageUrl}
                description = {product.description}

                />
                
            ))}
        </div>
    )



    
}

export default Productlist