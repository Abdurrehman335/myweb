
import { useState } from 'react'

function App() {

  const[data,setData] = useState('');
  const[value,setValue] = useState('');
   
 

 

  const onClick= (e) => {
    
    if(data.trim().length >0 ){
      alert(data);
    }
     else{
     if(value.trim().length > 0){
      alert(value);
     }
  }
  

  }
  
  

  
  return (
    <div>
      
      
      <input type='text'
      
      value={data}
      onChange={(e)=>setData(e.target.value)}
      
      
      />
      <input  type="text" value={value} onChange={(e) =>setValue (e.target.value)} />

      <buttn onClick={onClick}>  submit</buttn>
      
      
      
      
    </div>
  )
}
  
export default App;





