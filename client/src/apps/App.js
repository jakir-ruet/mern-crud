import './App.css';

function App() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-6 offset-3'>
          <div className="card">
            <div className="card-header text-white bg-primary">
              Add Student
            </div>
            <div className="card-body">
              <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className='form-control'
                  name='name'
                  placeholder='Enter your name'
                />
              </div>
              <div className='form-group pt-3'>
                <label htmlFor="name">Class</label>
                <input
                  type="text"
                  className='form-control'
                  name='class'
                  placeholder='Enter your class'
                />
              </div>
              <div className='form-group pt-3'>
                <label htmlFor="name">Roll</label>
                <input
                  type="text"
                  className='form-control'
                  name='name'
                  placeholder='Enter your roll'
                />
              </div>
              <div className="form-group text-end pt-4">
                <button className='btn btn-primary'>Add Student</button>
              </div>
            </div>
          </div>

          <div className="card mt-5">
            <div className="card-header text-white bg-primary">
              Student List
            </div>
            <div className="card-body table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className='text-center'>SL</th>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Class</th>
                    <th className='text-center'>Roll</th>
                    <th className='text-end'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>1</td>
                    <td className='text-center'>Tahmid</td>
                    <td className='text-center'>Five</td>
                    <td className='text-center'>39</td>
                    <td className='text-end'>
                      <div class="btn-group" role="group" aria-label="groupbtn">
                        <button type="button" class="btn btn-primary">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
}

export default App;
