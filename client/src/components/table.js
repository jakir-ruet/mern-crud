import React from "react";

const Table = ({ data }) => {
   if (!data) {
      return null
   } else {
      return <>
         <div className="card mt-5">
            <div className="card-header text-white bg-primary">
               Student List
            </div>
            <div className="card-body table-responsive">
               <table className="table table-striped table-hover">
                  <thead>
                     <tr>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Age</th>
                        <th className='text-center'>Fathername</th>
                        <th className='text-end'>Email</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.map(user => {
                        let { name, age, fatherName, email } = user;
                        return <>
                           <tr>
                              <td className='text-center'>{name}</td>
                              <td className='text-center'>{age}</td>
                              <td className='text-center'>{fatherName}</td>
                              <td className='text-center'>{email}</td>
                              <td className='text-end'>
                                 <div className="btn-group" role="group" aria-label="groupbtn">
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                 </div>
                              </td>
                           </tr>
                        </>
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   }

};

export default Table;