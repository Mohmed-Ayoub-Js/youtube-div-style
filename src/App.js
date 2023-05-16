import "./styles.css";
const name = prompt('Enter your name');
//check name 
if(name === ""){
  document.write(`
  <div> 
    <a href=''> Enter name </a>
  </div>
  `)
}
export default function App() {
  return (
  <center>
    <div class='header'> 
        <div class='element'>
         <h1> {name} </h1>  
        </div>
        <div>
          <h1>welcome {name} </h1>
         
        </div>
    </div>
  </center>
  );
}
