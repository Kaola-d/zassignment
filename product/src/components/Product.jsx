import './Product.css'

const Product = (props) => {

    const {productName, price, imageUrl, description} = props

    return(
        <div className='desrcr'>
            <img src={imageUrl} alt="" />
            <h2>{productName}</h2>
            <p>#{price}</p>
            <p>{description}</p>

        </div>
    )
}

export default Product