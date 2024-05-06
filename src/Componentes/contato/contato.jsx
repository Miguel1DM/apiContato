
// Bibliotecas para Ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

export default function Contato(props){
  const removerUser = () => {
    console.log("Usuário Removido");
  }

  return(
    <div className="w-75 p-3 rounded bg-primary-subtle mt-4 me-auto ms-auto d-flex align-items-center justify-content-between " key={props.id}>
      <h5 className="fs-12 d-flex align-items-center"><FontAwesomeIcon icon={faUser} className="m-auto me-2"/>{props.nome}</h5>
      <h5 className="fs-12 d-flex align-items-center"><FontAwesomeIcon icon={faPhone} className="m-auto me-2"/>{props.numero}</h5>
      <h5 className="fs-12 d-flex align-items-center"><FontAwesomeIcon icon={faEnvelope} className="m-auto me-2"/>{props.email}</h5>
      <button className="bg-transparent btn" onClick={()=>{removerUser()}} ><FontAwesomeIcon icon={faTrash} className="me-2"/></button>
    </div>
  )
}