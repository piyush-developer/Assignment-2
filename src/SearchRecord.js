import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
 
function SearchRecord() {
 
    const[search,setSearch]=useState([]);
    const[record,setRecord]=useState([]);
 
    var i =1; // For Serial no increment
 
    // For loading reacord on Windoe Load
    const loadRecords = async () => {
      axios.get("https://api.github.com/users")
        .then(response => {
          setSearch(response.data);
        });
       
    }
    useEffect(() => {
        loadRecords();
    }, []);
 
     
    // Search Item by Name
    const searchRecords = () =>
    {
        axios.get(`https://api.github.com/users?record=${record}`)
        .then(response => {
          setSearch(response.data);
          console.log(response.data);
        });
    }
     
 
  return (
  <div class="container">
  <h4 className="text-center text-success mt-5"><b>Search User by Name</b></h4>
    <div class="input-group mb-4 mt-3">
     <div class="form-outline">
        <input type="text" id="form1" onChange={(e)=>setRecord(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
   </div>
   <button type="button" onClick={searchRecords} class="btn btn-success">
       Search User
   </button>
  </div>                   
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>ID</th>
        <th>Login Name</th>
        <th>Node ID</th>
        <th>Type</th>

      </tr>
    </thead>
    <tbody>
      {search.map((name)=>
      <tr>
        <td>{i++}</td>  
        <td><h6>{name.id}</h6></td>  
        <td><h6>{name.login}</h6></td>  
        <td><h6>{name.node_id}</h6></td>  
        <td><h6>{name.type}</h6></td>  
        {/* <td><img class="img-fluid" src={"/images/" + name.MoviePath} style={{maxWidth:"10%"}}  alt=""/></td>   */}
      </tr>
      
      )}  
 
    </tbody>
  </table>
</div>
 
  );
}
 
export default SearchRecord;