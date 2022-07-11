import './App.css';
import { Button, Card } from 'react-bootstrap';
import ProfilePic from "./component/profile/ProfilePic.jpg";
import FullName from './component/profile/FullName.js';
import Address from './component/profile/Address.js';
function App() {
  return (
    <div className="App">
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ProfilePic} alt='Pic'/>
      <Card.Body>
        <Card.Title> <FullName/> </Card.Title>
        <Card.Text className='txt'>
          <Address/> 
        </Card.Text>
        <a TARGET="_blank" href="https://www.facebook.com/islem.benamor.3"><Button class="btn btn-outline-primary" type="button" id="button-addon1"  >FB PROFILE</Button></a>
      </Card.Body>
    </Card>
      
    </div>
 ); }
 export default App;
