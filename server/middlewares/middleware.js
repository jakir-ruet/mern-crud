

const middleware = ({ ip, method, url, body }, _, next) => {
   let date = new Date();

   try {
      console.log({
         ip,
         date,
         data: body,
         url,
         method
      });
   }
   catch (err) {
      next(err);
   }
};

module.exports = { middleware };