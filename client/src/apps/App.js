
import CreateStudent from '../components/createStudent';
import Table from '../components/table.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '../components/container';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <Container>
              <Table data={[
                {
                  name: "Tahmid",
                  age: 9,
                  fatherName: "Jakir",
                  email: "tm.ahad.bd@gmail.com"
                }
              ]} />
            </Container>
          } />
          <Route />
          <Route path='/create' element={
            <Container className={"mt-5"}>
              <CreateStudent />
            </Container>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
