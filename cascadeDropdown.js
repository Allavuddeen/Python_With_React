// import React, { useState } from 'react';

// function Cascade() {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [secondOption, setSecondOption] = useState('');
//   const [thirdOption, setThirdOption] = useState('');

//   const firstOptions = ['Option 1', 'Option 2'];
//   const secondOptions = {
//     'Option 1': ['Suboption 1', 'Suboption 2'],
//     'Option 2': ['Suboption 3', 'Suboption 4'],
//   };
//   const thirdOptions = {
//     'Suboption 1': ['Subsuboption 1', 'Subsuboption 2'],
//     'Suboption 2': ['Subsuboption 3', 'Subsuboption 4'],
//   }

//   function handleFirstOptionChange(e) {
//     setSelectedOption(e.target.value);
//     setSecondOption('');
//     setThirdOption('');
//   }

//   function handleSecondOptionChange(e) {
//     setSecondOption(e.target.value);
//     setThirdOption('');
//   }

//   return (
//     <form>
//       <select value={selectedOption} onChange={handleFirstOptionChange}>
//         <option value="">Select an option</option>
//         {firstOptions.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       <select value={secondOption} onChange={handleSecondOptionChange}>
//         <option value="">Select an option</option>
//         {selectedOption &&
//           secondOptions[selectedOption].map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//       </select>
//       <select value={thirdOption}>
//         <option value="">Select an option</option>
//         {secondOption &&
//           thirdOptions[secondOption].map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//       </select>
//     </form>
//   );
// }

// export default Cascade;
