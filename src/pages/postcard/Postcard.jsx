 
import { Link } from 'react-router-dom'
import { postcardImage, postcardImageWrapper, postcardLink, postHeader, postPara } from '../../style'

const Postcard = ({title}) => {
  return (
    <Link className={postcardLink} to={`/singlepage/${title.id}`} >
        <div className={postcardImageWrapper} >
            <img className={postcardImage}  src={title.image} alt="" />
        </div>
       <div className="text">
       <h1 className={postHeader}> {title.title.substring(0, 22)}</h1>
        <p className={postPara} >{title.description.substring(0, 60)} </p>
       </div>

    </Link>
  )
}

export default Postcard