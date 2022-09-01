
const Container = ({ children, className }) => {

   return <>
      <div className={`container ${className}`}>
         <div className="row">
            <div className="col-md-6 offset-3">
               {children || null}
            </div>
         </div>
      </div>
   </>
}

export default Container;