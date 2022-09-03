
import CreateStudent from '../components/createStudent';
import Table from '../components/table.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '../components/container';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:5001/findAll', {
      method: 'GET'
    })
      .then(async (res) => setData(await res.json()))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <Container>
              <Table data={data} />
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
