import React, { useState, useEffect } from 'react';



// const [optionsAcc, setOptionsAcc] = useState([]);
//     const [selectedAcc, setSelectedAcc] = useState('');
//     const [optionsPort, setOptions] = useState([]);
//     const [selectedPort, setSelected] = useState('');
//     const [subOptions1, setSubOptions] = useState([]);
//     const [subSelected1, setSubSelected] = useState('');
//     const [subOptions2, setSubOptions2] = useState([]);
//     const [subSelected2, setSubSelected2] = useState('');
//     const [subOptionsPort3, setSubOptionsPort3] = useState([]);
//     const [subOptionsPort3Selected, setsubOptionsPort3Selected] = useState('');

// const MyComponent = () => {
//     const [state, setState] = React.useState({
//         firstSelection: "",
//         secondSelection: "",
//         thirdSelection: "",
//         fourthSelection: ""
//     });

//     const handleChange = event => {
//         const { name, value } = event.target;
//         setState(prevState => {
//             const updatedState = { ...prevState, [name]: value };
//             if (name === 'firstSelection') {
//                 updatedState.secondSelection = "";
//                 updatedState.thirdSelection = "";
//                 updatedState.fourthSelection = "";
//             }
//             if (name === 'secondSelection') {
//                 updatedState.thirdSelection = "";
//                 updatedState.fourthSelection = "";
//             }
//             if (name === 'thirdSelection') {
//                 updatedState.fourthSelection = "";
//             }
//             return updatedState;
//         });
//     };

//     return (
//         <div>
//             <select name="firstSelection" onChange={handleChange} value={state.firstSelection}>
//                 <option value="">Select an option</option>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//             </select>
//             <br />
//             {state.firstSelection !== "" &&
//                 <select name="secondSelection" onChange={handleChange} value={state.secondSelection}>
//                     <option value="">Select an option</option>
//                     <option value="optionA">Option A</option>
//                     <option value="optionB">Option B</option>
//                 </select>}
//             <br />
//             {state.secondSelection !== "" &&
//                 <select name="thirdSelection" onChange={handleChange} value={state.thirdSelection}>
//                     <option value="">Select an option</option>
//                     <option value="optionX">Option X</option>
//                     <option value="optionY">Option Y</option>
//                 </select>}
//             <br />
//             {state.thirdSelection !== "" &&
//                 <select name="fourthSelection" onChange={handleChange} value={state.fourthSelection}>
//                     <option value="">Select an option</option>
//                     <option value="optionP">Option P</option>
//                     <option value="optionQ">Option Q</option>
//                 </select>}
//         </div>
//     );
// }


// export default MyComponent;