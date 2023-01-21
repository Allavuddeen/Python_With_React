// import React, { useState } from "react";

// function FormExample() {
//   // State to hold the form data
//   const [formData, setFormData] = useState({});

//   // Function to handle form submission
//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   // Function to handle input change
//   const handleChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" onChange={handleChange} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

// export default FormExample;
