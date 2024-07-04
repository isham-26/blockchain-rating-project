import "./App.css";
import {Routes,Route} from "react-router-dom"
import Form from "./components/FormData";
import Data from "./pages/teacher_data/Data2.jsx"
import ABI from "./components/Abi.json"
import { useState } from "react";
import Web3 from "web3"

function App() {
  const [state,setState] = useState({account:null,contract:null})
  const connectWallet = async()=>{
    try{
  
      if(window.ethereum){
    
          const web3= new Web3(window.ethereum)
          const accounts= await window.ethereum.request({
          method:"eth_requestAccounts"
         
        })
        const contractAdress = "0x667f09f3bbb892b45E08706C283EdE737440EA18"
        const contract= new web3.eth.Contract(ABI,contractAdress)
        setState({
           account:accounts[0],
           contract:contract
        })
        
      }else{
         console.log("install metamask")
      }
    }catch(err){
       console.error(err);
    }
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Form state={state} connect={connectWallet}/>}/>
        <Route path="/Data" element={<Data state={state}/>}/>
      </Routes>
    </>
  );
}

export default App;
