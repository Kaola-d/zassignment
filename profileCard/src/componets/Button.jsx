import './Button.css'

const Button = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt="" />
            <p>Name: {props.fname}</p>
            <p>Age:{props.age}</p>
            <p>Address:{props.address}</p>
        </div> 
    )
}

export default Button