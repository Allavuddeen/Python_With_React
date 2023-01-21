// import React, { useState, useEffect } from 'react';

// function DynamicDropdown({ url }) {
//   const styl = {
//     marginRight:20,
//     padding:5,
    
// }
//   const [options, setOptions] = useState([]);
//   const [selected, setSelected] = useState('');
//   const [subOptions, setSubOptions] = useState([]);
//   const [subSelected, setSubSelected] = useState('');
//   const [subOptions2, setSubOptions2] = useState([]);
//   const [subSelected2, setSubSelected2] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:5000/get_unique_id");
//       const data = await res.json();
//       setOptions(data);
//     }
//     fetchData();
//   }, [url]);
// // ---------------------
//   useEffect(() => {
//     async function fetchSubData() {
//       const res = await fetch("http://localhost:5000/get_unique_id2");
//       const data = await res.json();
//       setSubOptions(data);
//     }
//     if (selected == 1) {
//       fetchSubData();
//     }
//   }, [selected]);
//   // ---
//   useEffect(() => {
//     async function fetchSubData() {
//       const res = await fetch("http://localhost:5000/get_unique_id2");
//       const data = await res.json();
//       setSubOptions2(data);
//     }
//     if (subSelected == 2) {
//       fetchSubData();
//     }
//   }, [subSelected]);

//   return (
//     <>
//       <select value={selected} onChange={e => setSelected(e.target.value)}  style={styl}>
//         {options.map(option => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       {/* <h2>You selected: {selected}</h2> */}
//       { (selected == 1) && <select value={subSelected} onChange={e => setSubSelected(e.target.value)} style={styl}>
//         {subOptions.map(subOption => (
//           <option key={subOption} value={subOption}>
//             {subOption}
//           </option>
//         ))}
//       </select>}
//       {/* <h2>You selected: {subSelected}</h2> */}
      
//       { (selected ==1 && subSelected == 2) && <select value={subSelected2} onChange={e => setSubSelected2(e.target.value)} style={styl}>
//         {subOptions2.map(subOption2 => (
//           <option key={subOption2} value={subOption2}>
//             {subOption2}
//           </option>
//         ))}
//       </select>}
//     </>
//   );
// }

// export default DynamicDropdown;
