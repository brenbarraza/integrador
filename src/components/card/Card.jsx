import { Link } from "react-router-dom";
import styled from "./Card.module.css";


export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props
   return (
      <div className= {styled.container}>
         <div className= {styled.buttonContainer}>
         <buttonClose onClick={() => onClose(id)}>X</buttonClose>
         </div>
         <h2>{id}</h2>
         <div className= {styled.imgContainer}>
         <img src={image} alt="character" />
         </div>
         <div className= {styled.info}>
      
         <Link to= {`/detail/${id}`}><h2 className={styled.name}>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         </div>
         
      </div>
   );
}
