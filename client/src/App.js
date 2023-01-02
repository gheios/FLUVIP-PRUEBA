import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

function App() {
  const [personas, setPersonas] = useState([]);
  const [formulario, setFormulario] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    age: "",
    cedula: "",
    direccion: "",
  });

  const getPersonas = async () => {
    try {
      const url = "http://localhost:3001/api/personas";
      const result = await axios.get(url);
      setPersonas(result.data);
    } catch (error) {
      console.log(error.message);
    }
    };
  const handleChange = async (e)=>{
    await setInfo({
      ...info,[e.target.name]:e.target.value
      });
    };

    const postPersonas = () => {
      const url = "http://localhost:3001/api/personas";
       axios.post(url,info).then(response=>{
        setFormulario(false);
        getPersonas();
       }).catch( error=>{
        console.log(error.message)
       })
    };

     const deletePersonas=(e)=>{
      const url="http://localhost:3001/api/personas"
      axios.delete(url+"/"+e.id).then(response=>{
        getPersonas()
      })
     }


  useEffect(() => {
    getPersonas();
  }, []);

  
  return (
    <div className="App">
      <Container>
        <Button color="primary" onClick={() => setFormulario(true)}>
          {" "}
          Insertar Nueva Persona
        </Button>
        <Table  className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Cedula</th>
              <th>Direccion</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {personas?.map((e) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.cedula}</td>
                <td>{e.direccion}</td>
                <td>
                  <Button color="danger" onClick={()=>deletePersonas(e)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={formulario}  >
        <ModalHeader>
          <div>
            <h3>Insertar Persona</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Nombre</label>
            <input className="form-control" type="text" name="name" id="name"  onChange={(e)=>handleChange(e)}  />
          </FormGroup> 
          <FormGroup>
            <label>Edad</label>
            <input className="form-control" type="text" name="age" id="age" onChange={(e)=>handleChange(e)} />
          </FormGroup>
          <FormGroup>
            <label>Cedula</label>
            <input className="form-control" type="text" name="cedula" id="cedula" onChange={(e)=>handleChange(e)} />
          </FormGroup>
          <FormGroup>
            <label>Direccion</label>
            <input className="form-control" type="text" name="direccion" id="direccion" onChange={(e)=>handleChange(e)} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={()=>postPersonas()}>Crear</Button>
          <Button color="danger" onClick={() => setFormulario(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
