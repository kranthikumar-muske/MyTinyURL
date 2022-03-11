import './App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

var textField1;
var textField2;
var textField3;
var textField4;

function App() {
  
  return (
    <div>
      <br></br>
      <br></br>
    create a short URL: 
    <TextField id="textField1" label="enter long URL" variant="outlined" onChange={(event)=>storeTextField1(event.target.value)}/>
    <Button variant="outlined" onClick={callCreateAPI}>Create</Button>
    <br></br>
    <br></br>
    <br></br>
 
    open a short URL:
    <TextField id="textField2" label="enter short URL" variant="outlined" onChange={(event)=>storeTextField2(event.target.value)}/>
    <Button variant="outlined" onClick={callOpenAPI}>Open</Button>
    <br></br>
    <br></br>
    <br></br>
 
    delete a short URL:
    <TextField id="textField3" label="enter short URL" variant="outlined" onChange={(event)=>storeTextField3(event.target.value)}/>
    <Button variant="outlined" onClick={callDeleteAPI}>Delete</Button>
    <br></br>
    <br></br>
    <br></br>

    get stats of a short URL:
    <TextField id="textField4" label="enter short URL" variant="outlined" onChange={(event)=>storeTextField4(event.target.value)}/>
    <Button variant="outlined" onClick={callStatsAPI}>Get Stats</Button>
    </div>

  );
}


function callCreateAPI(){
  fetch('https://w8pnbp6qkg.execute-api.us-east-2.amazonaws.com/Prod/createShortURL?'+ new URLSearchParams({
    longURL : textField1,
  }),
  { method: 'POST',
    headers:
             { accept: 'application/json'}
  })
  .then(data => data.json())
  .then(json => alert(JSON.stringify(json)))
}

function callOpenAPI(){
  fetch('https://w8pnbp6qkg.execute-api.us-east-2.amazonaws.com/Prod/getLongURL?'+ new URLSearchParams({
    shortURL : textField2,
  }), 
  { method: 'GET',
    headers: 
             { accept: 'application/json'}
  })
  .then(data => data.json())
  .then(json => alert(JSON.stringify(json)))
}
   
function callDeleteAPI(){ 
  fetch('https://w8pnbp6qkg.execute-api.us-east-2.amazonaws.com/Prod/deleteShortURL?'+ new URLSearchParams({
    shortURL : textField3,
  }),
  { method: 'DELETE',
    headers:
             { accept: 'application/json'}
  })
  .then(data => data.json())
  .then(json => alert(JSON.stringify(json)))
} 
 
function callStatsAPI(){
  fetch('https://w8pnbp6qkg.execute-api.us-east-2.amazonaws.com/Prod/getShortURLStats?'+ new URLSearchParams({
    shortURL : textField4,
  }),
  { method: 'GET',
    headers:
             { accept: 'application/json'}
  })
  .then(data => data.json())
  .then(json => alert(JSON.stringify(json)))
}


function storeTextField1(text1){
  textField1 = text1;
}

function storeTextField2(text2){
  textField2 = text2;
}

function storeTextField3(text3){
  textField3 = text3;
}

function storeTextField4(text4){
  textField4 = text4;
}

export default App;
