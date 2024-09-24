// import logo from "./logo.svg";
// import "./App.css";
// import data from "./sortdata";
// import React, { useState } from "react";

// function App() {
//   let container=document.getElementsByClassName("diag");

//   let [arr,setarr]=useState([]);

//   const [count, setcount] = useState(4);
//   const [speed, setspeed] = useState(1);

//   const handleTypedArray = () => {};

//   function init() {            // init function

//     const def=(event)=>{
//       event.preventDefault();
//     }
//     setarr([]);
//     let n = count;
//     let newarr=[];
//     for (let i = 0; i < count; i++) {
//       let ele=(Math.floor(Math.random() * 100));
//       newarr.push(ele);
//     }
//     setarr(newarr);
//     // showbars(arr);
//     console.log(arr);

//   }


// //   function play(){                     // play function
// //     const copy=[...arr];
// //     const swaps= bubblesort(copy);
// //     animate(swaps);
// //     bar.style.backgroundColor="yellowGreen";
// // }

// // function animate(swaps){
// //   let array=[...arr];
// //     if(swaps.length==0){
// //         // showbars();
// //         setarr(array);

// //         return;
// //     }
// //     const [i,j]=swaps.shift();

// //     [array[i],array[j]]=[array[j],array[i]];

// //     // playNote(90+array[i]);

// //     setarr(array);
// //     setTimeout(() => {
// //         animate(swaps);
// //     }, 100);

// // }

// // function bubblesort(copy){
// //     const swaps=[];
    
// //     do{
// //         var swapped=false;
// //             for(let j=1;j<n;j++){
// //                 if(copy[j]<copy[j-1]){
// //                     swaps.push([j-1,j])
// //                     // console.log(swaps);
// //                     swapped=true;
// //                     let temp=copy[j];
// //                     copy[j]=copy[j-1];
// //                     copy[j-1]=temp;
// //                 }
// //               }
// //             }
// //             while(swapped);
            
            
// //             setarr(copy);
// //     // showbars();
// //     return swaps;
// // }


//   function play() {}

//   const handlesizeChange = (event) => {
//     event.preventDefault();
//     const newValue = parseInt(event.target.value, 10); // Parse input as an integer
//     if (!isNaN(newValue)) {
//       setcount(newValue); // Set value only if it's a valid number
//     }
//   };
//   const handlespeedChange = (event) => {
//     event.preventDefault();
//     const newValue = parseInt(event.target.value, 10); // Parse input as an integer
//     if (!isNaN(newValue)) {
//       setspeed(newValue); // Set value only if it's a valid number
//     }
//   };

//   const [index, setindex] = useState(0);

//   function allsort(i) {
//     setindex(i);
//   }
//   function copycode() {
//     if (index) navigator.clipboard.writeText(data[index].code);
//   }

//   return (                       // return starts from here
//     <div className="App">
//       <div className="navbar">
//         <div className="heading">
//           <h1>SORTING VISUALIZER</h1>
//         </div>

//         <div className="form">
//           <form>
//             <div className="btgen">
//               <div>Generate your new array</div>
//               <input title="Enter integer values" className="" type="number" />
//             </div>

//             <div className="btsize">
//               <div>
//                 Size Of Array :{" "}
//                 <input
//                   title="Enter integer values"
//                   value={count}
//                   onChange={handlesizeChange}
//                   type="number"
//                   min="4"
//                 />{" "}
//               </div>
//             </div>

//             <div className="btspeed">
//               <div>
//                 Speed :{" "}
//                 <input
//                   title="Enter integer values"
//                   className=""
//                   type="number"
//                   value={speed}
//                   onChange={handlespeedChange}
//                   min="1"
//                 />{" "}
//                 sec
//               </div>
//               {/* <div className="arrow">
//                 <button>&uarr;</button>
//                 <button>&darr;</button>
//               </div>           */}
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="content">
//         <div className="diagram">
//           <div className="diag">
//             {arr.map((height, index) => (
//               <div
//                 key={index}
//                 className="bar"
//                 style={{
//                   // width: '30px',
//                   height: `${height}%`,
//                   backgroundColor: 'red',
//                 }}
//               > {height}</div>
//             ))}
//           </div>
//           <div className="init">
//             <button onClick={init}>Init</button>
//             <button onclick={play}>Play</button>
//           </div>
//         </div>

//         <div className="sort">
//           <div>
//             <button className="btsort" onClick={() => allsort(0)}>
//               Bubble Sort
//             </button>
//           </div>
//           <div>
//             <button className="btsort" onClick={() => allsort(1)}>
//               Selection Sort
//             </button>
//           </div>
//           <div>
//             <button className="btsort" onClick={() => allsort(2)}>
//               Insertion Sort
//             </button>
//           </div>
//           <div>
//             <button className="btsort" onClick={() => allsort(3)}>
//               Merge Sort
//             </button>
//           </div>
//           <div>
//             <button className="btsort" onClick={() => allsort(4)}>
//               Quick Sort
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bottom">
//         <div className="code">
//           <h1>
//             Code in C++ <button onClick={() => copycode()}>Copy Code</button>
//           </h1>
//           <pre>{data[index].code}</pre>
//         </div>
//         <div className="complexity">
//           <div className="timecom">
//             <h1>Time Complexity</h1>
//             <pre>{data[index].time}</pre>
//           </div>
//           <div className="spacecom">
//             <h1>Space Complexity</h1>
//             <pre>{data[index].space}</pre>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// // second  modified







// import logo from "./logo.svg";
// import "./App.css";
// import data from "./sortdata";
// import React, { useState } from "react";

// function App() {
//   let [index, setindex] = useState(0);
//   let [showcase, setshow] = useState(true);
//   let [arr, setarr] = useState([12, 54, 24, 65]);
//   let [count, setcount] = useState(4);
//   let [speed, setspeed] = useState(1);

//   const handleTypedArray = () => {};

//   // const handleTypedArray = (event) => {

//   //   let s=event.target.value;
//   //   let arr1=s.split(",");
//   //   let arr2=arr1.map((x)=>x.trim());
//   //   let arr3=arr2.filter((x)=>x!=="");
//   //   let arr4=arr3.map((x)=>parseInt(x));

//   //   if(arr4.length!=0){
//   //     setarr(arr4);
//   //     setcount(arr.length);
//   //   }

//   // };

//   // const def = (event) => {
//   //   event.preventDefault();
//   // };
//   function init() {          // init function

//     setshow(true);

//     setarr([]);
//     let n = count;
//     let newarr = [];
//     for (let i = 0; i < count; i++) {
//       let ele = Math.floor(Math.random() * 100);
//       newarr.push(ele);
//     }
//     setarr(newarr);
//   }

//   function play() {
//     const copy = [...arr];
//     // const array = [...arr];
//     const swaps = bubblesort(copy);
//     // animate(swaps);

//     // backgroundColor="yellowGreen";
//   }

//   function bubblesort(copy) {
//     // setshow(false);
//     const swaps = [];

//     do {
//       var swapped = false;
//       for (let j = 1; j < copy.length; j++) {
//         if (copy[j] < copy[j - 1]) {
//           swaps.push([j - 1, j]);
//           // console.log(swaps);
//           swapped = true;
//           let temp = copy[j];
//           copy[j] = copy[j - 1];
//           copy[j - 1] = temp;
//         }
//       }
//     } while (swapped);

//     // showbars();
//     setarr(copy);
//     // setshow(true);
//     return swaps;
//   }

//   function animate(swaps) {
//     const array = [...arr];
    
//     if (swaps.length == 0) {
//       return;
//     }
//     // setshow(false);

//     const [i, j] = swaps.shift();

//     const temp=array[i];
//     array[i]=array[j];
//     array[j]=temp;
 
//     setarr([...array]);
//     // setshow(true);
//     setTimeout(() => {
//       animate(swaps);
//     }, 1000);

//   }

//   function allsort(i) {
//     setindex(i);
//   }
//   function copycode() {
//     if (index) navigator.clipboard.writeText(data[index].code);
//   }

//   return (                       // return starts from here
//     <div className="App">
//       <div className="navbar">
//         <div className="heading">
//           <h1>SORTING VISUALIZER</h1>
//         </div>

//         <div className="form">
//           <form>
//             <div className="btgen">
//               <div>Generate your new array</div>
//               <input
//                 title="Enter values ranging 0 to 100"
//                 className=""
//                 type="number"
//                 onChange={handleTypedArray}
//               />
//             </div>

//             <div className="btsize">
//               <div>
//                 Size Of Array :{" "}
//                 <input
//                   title="Enter integer values"
//                   value={count}
//                   onChange={(event) => {
//                     setcount(event.target.value);
//                   }}
//                   type="number"
//                   min="4"
//                 />{" "}
//               </div>
//             </div>

//             <div className="btspeed">
//               <div>
//                 Speed :{" "}
//                 <input
//                   title="Enter integer values"
//                   className=""
//                   type="number"
//                   value={speed}
//                   onChange={(event) => {
//                     setspeed(event.target.value);
//                   }}
//                   min="1"
//                 />{" "}
//                 sec
//               </div>
//               {/* <div className="arrow">
//                 <button>&uarr;</button>
//                 <button>&darr;</button>
//               </div>           */}
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="content">
//         <div className="diagram">
//           <div className="diag">
//             {
//             // showcass?
//              arr.map((height, index) => (
//                   <div
//                     key={index}
//                     className="bar"
//                     style={{
//                       // width: '30px',
//                       height: `${height}%`,
//                       backgroundColor: "yellowgreen",
//                     }}
//                   >
//                     {" "}
//                     {height}
//                   </div>
//                 ))
//               // : ""
//               }
//           </div>
//           <div className="init">
//             <button title="Click to take some random values" onClick={init}>
//               Init
//             </button>
//             <button title="Click to start sorting" onClick={play}>
//               Play
//             </button>
//           </div>
//         </div>

//         <div className="sort">
//           <div>
//             <button className="btsort" onClick={() => allsort(0)}>
//               Bubble Sort
//             </button>
//           </div>
//           <div>
//             <button className="btsort" onClick={() => allsort(1)}>
//               Selection Sort
//             </button>
//           </div>
//           <div>
//             <button className="btsort" onClick={() => allsort(2)}>
//               Insertion Sort
//             </button>
//           </div>
//           <div>
//             <button className="btsort" onClick={() => allsort(3)}>
//               Merge Sort
//             </button>
//           </div>
//           <div>
//             <button className="btsort" onClick={() => allsort(4)}>
//               Quick Sort
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bottom">
//         <div className="code">
//           <h1>
//             Code in C++ <button onClick={() => copycode()}>Copy Code</button>
//           </h1>
//           <pre>{data[index].code}</pre>
//         </div>
//         <div className="complexity">
//           <div className="timecom">
//             <h1>Time Complexity</h1>
//             <pre>{data[index].time}</pre>
//           </div>
//           <div className="spacecom">
//             <h1>Space Complexity</h1>
//             <pre>{data[index].space}</pre>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

