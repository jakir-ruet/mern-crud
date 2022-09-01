import React from 'react';

const CreateStudent = () => {
   return <>
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
                  required
               />
            </div>
            <div className='form-group pt-3'>
               <label>Age</label>
               <input
                  type="number"
                  className='form-control'
                  name='class'
                  placeholder='Enter your age'
                  required
               />
            </div>
            <div className='form-group pt-3'>
               <label>Email</label>
               <input
                  type="email"
                  className='form-control'
                  name='name'
                  placeholder='Enter your roll'
                  required
               />
            </div>
            <div className="form-group text-end pt-4">
               <button className='btn btn-primary'>Add Student</button>
            </div>
         </div>
      </div>
   </>
};

export default CreateStudent;