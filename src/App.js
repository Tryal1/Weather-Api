import {useState } from "react";
import getData from "./component/api";
import Data from "./component/data";
import {Centrar,SearchBar} from "./component/styled";

function App() {
  const [search, setSearch] = useState('')
  const [clima, setClima] = useState([])
  const getClima = async () =>{
    const data = await getData(search)
    let newClima = clima?.filter(clima=>clima.id === data.id)
   
    if(!newClima.length && data.cod !== '404'){
      setClima([...clima,data])
    }
    //Aguanta pedro
  }


  const onChange = (e) =>{
    setSearch(e.target.value)
  }
  return (
    <Centrar>
    <SearchBar>
      <span>
        <input onChange={onChange} placeholder='Search...'/>
        <button onClick={getClima}><img src="lupa.png" alt="lupa"/></button>
      </span>
    </SearchBar>
    <Data clima={clima} setClima={setClima}/>
    </Centrar>
  );
}

export default App;