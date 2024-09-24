import logo from "./logo.svg";
import "./App.css";
import data from "./sortdata";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [index, setindex] = useState(0);
  let [arr, setarr] = useState([12, 54, 24, 65]);
  let [count, setcount] = useState(4);
  let [speed, setspeed] = useState(0.1);
  let [barkey1, setbarkey1] = useState(null);
  let [barkey2, setbarkey2] = useState(null);
  let [geninp, setgeninp] = useState("");

  const notifyquick = () =>
    toast.info("Quick Sort -coming soon \nLearn its code, T.C. & S.C.");
  const notifymerge = () =>
    toast.info("Merge Sort -coming soon\nLearn its code, T.C. & S.C.");
  const notifygenarr = () =>
    toast.error("Please enter values separated by comma(,)");

  function allsort(i) {
    setindex(i);
  }
  const handleQuick = () => {
    allsort(4);
    notifyquick();
  };
  const handleMerge = () => {
    allsort(3);
    notifymerge();
  };

  const handlleInit = () => {
    init(); // make array arr
  };

  const handlePlay = () => {
    play(); // start the sorting
  };
  const handledelgen = (event) => {
    // let str=document.getElementsByClassName("");
    event.preventDefault();
    setgeninp("");
  };
  const handlegenstr = (event) => {
    event.preventDefault();
    let str = geninp;

    let newarr = str.split(",").map(Number);

    if (newarr.length < 4) {
      toast.error("Array must have at least 4 elements");
      return;
    }

    const array = newarr.filter((element) => typeof element === "number");

    if (array.length !== newarr.length) {
      toast.error("Invalid input. Please enter numbers only");
      return;
    }

    setcount(newarr.length);
    setarr(newarr);
    setgeninp("");

    // play();
  };

  function init() {
    // init function

    setarr([]);
    let n = count;
    let newarr = [];
    for (let i = 0; i < count; i++) {
      let ele = Math.floor(Math.random() * 100);
      newarr.push(ele);
    }
    setarr(newarr);
  }

  function play() {
    const copy = [...arr];
    let swaps = null;

    if (index == 0) {
      swaps = bubblesort(copy);
    } else if (index == 1) {
      swaps = selectionsort(copy);
    } else if (index == 2) {
      swaps = insertionsort(copy);
    } else if (index == 3) {
      // swaps = mergesort(copy);
      toast.info("Merge Sort - coming soon \n Please try other methods");
      return;
    } else if (index == 4) {
      // swaps = quicksort(copy);
      toast.info("Quick Sort - coming soon \n Please try other methods");
      return;
    }
    animate(swaps);
  }

  function bubblesort(copy) {
    const swaps = [];

    do {
      var swapped = false;
      for (let j = 1; j < copy.length; j++) {
        if (copy[j] < copy[j - 1]) {
          swaps.push([j - 1, j]);
          // console.log(swaps);
          swapped = true;
          let temp = copy[j];
          copy[j] = copy[j - 1];
          copy[j - 1] = temp;
        }
      }
    } while (swapped);

    return swaps;
  }

  function insertionsort(copy) {
    const swaps = [];

    for (let i = 1; i < copy.length; i++) {
      let j = i;
      while (j > 0 && copy[j] < copy[j - 1]) {
        swaps.push([j - 1, j]); // Log the swap

        // Perform the swap
        let temp = copy[j];
        copy[j] = copy[j - 1];
        copy[j - 1] = temp;

        j--;
      }
    }

    return swaps; // Return the swaps array for animation
  }

  function selectionsort(copy) {
    const swaps = [];

    for (let i = 0; i < copy.length - 1; i++) {
      let minIndex = i;

      // Find the minimum element in the unsorted part of the array
      for (let j = i + 1; j < copy.length; j++) {
        if (copy[j] < copy[minIndex]) {
          minIndex = j;
        }
      }

      // If minIndex has changed, swap the elements and record the swap
      if (minIndex !== i) {
        swaps.push([i, minIndex]); // Log the swap

        // Perform the swap
        let temp = copy[i];
        copy[i] = copy[minIndex];
        copy[minIndex] = temp;
      }
    }

    return swaps; // Return the swaps array for animation
  }

  const swap = (newarr, idx1, idx2) => {
    // let bar=document.getElementsByClassName(".bar")[0];
    // bar.style.backgroundColor="red";
    const array = [...newarr];
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
  };

  const showbar = (a, b) => {                  // to highlight bars during sorting
    setbarkey1(a);
    setbarkey2(b);
  };

  function animate(swaps) {
    if (swaps.length == 0) {
      setbarkey1(null);
      setbarkey2(null);
      return;
    }

    const [i, j] = swaps.shift();
    let a = i;
    let b = j;

    showbar(a, b);

    setTimeout(() => {
      setarr((prevarr) => {
        const swappedArr = swap(prevarr, a, b);
        return swappedArr;
      });
      animate(swaps);
    }, speed * 1000);
  }

  function copycode() {
    if (index) navigator.clipboard.writeText(data[index].code);
  }

  return (
    // return starts from here

    <div className="App">
      <ToastContainer />

      <div className="navbar">
        <div className="heading">
          <h1>SORTING VISUALIZER</h1>
        </div>

        <div className="form">
          <form>
            <div className="btgen">
              <div>Generate your new array</div>
              <div className="geninpdiv">
                <input
                  title="Enter array with values ranging 0 to 100"
                  value={geninp}
                  className="geninput"
                  type="text"
                  onChange={(event) => setgeninp(event.target.value)}
                />
                <button
                  className="delgenarr"
                  onClick={handledelgen}
                  disabled={geninp.length === 0 ? "Disabled" : ""}
                >
                  ❌
                </button>
                <button
                  onClick={handlegenstr}
                  disabled={geninp.length === 0 ? "Disabled" : ""}
                >
                  ✓
                </button>
              </div>
            </div>

            <div className="btsize">
              <div>
                Size Of Array :{" "}
                <input
                  title="Enter size of array"
                  value={count}
                  onChange={(event) => {
                    setcount(event.target.value);
                  }}
                  type="number"
                  min="4"
                />{" "}
              </div>
            </div>

            <div className="btspeed">
              <div>
                Speed :{" "}
                <input
                  title="Enter value to change sorting speed"
                  className=""
                  type="number"
                  value={speed}
                  onChange={(event) => {
                    setspeed(event.target.value);
                  }}
                  min="0.1"
                />{" "}
                sec
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="content">
        <div className="diagram">
          <div className="diag">
            {
              arr.map((height, index) => (
                <div
                  className="barback"
                  key={index}
                  style={{
                    height: "100%",
                    width: "30%",
                  }}
                >
                  <div
                    key={index}
                    className="bar"
                    style={{
                      // width: '30px',
                      // margin:"10px",
                      height: `${height}%`,
                      backgroundColor:
                        barkey1 === index || barkey2 === index
                          ? "red"
                          : "#cbeb3dcc",
                    }}
                  >
                    {" "}
                    {height}
                  </div>
                </div>
              ))
              // : ""
            }
          </div>
          <div className="init">
            <button
              title="Click to take some random values"
              onClick={handlleInit}
            >
              Init
            </button>
            <button title="Click to start sorting" onClick={handlePlay}>
              Play
            </button>
          </div>
        </div>

        <div className="sort">
          <div>
            <button
              className="btsort"
              onClick={() => allsort(0)}
              style={{
                // backgroundColor: index === 0 ? "orange" : "rgb(232, 237, 177)",
                transform: index === 0 ? "scale(1.2,1.35)" : "scale(1)",
              }}
            >
              Bubble Sort
            </button>
          </div>
          <div>
            <button
              className="btsort"
              onClick={() => allsort(1)}
              style={{
                // backgroundColor: index === 1 ? "orange" : "rgb(232, 237, 177)",
                transform: index === 1 ? "scale(1.2,1.35)" : "scale(1)",
              }}
            >
              Selection Sort
            </button>
          </div>
          <div>
            <button
              className="btsort"
              onClick={() => allsort(2)}
              style={{
                // backgroundColor: index === 2 ? "orange" : "rgb(232, 237, 177)",
                transform: index === 2 ? "scale(1.2,1.35)" : "scale(1)",
              }}
            >
              Insertion Sort
            </button>
          </div>
          <div>
            <button
              className="btsort"
              onClick={() => {
                allsort(3);
                notifymerge();
              }}
              style={{
                // backgroundColor: index === 3 ? "orange" : "rgb(232, 237, 177)",
                transform: index === 3 ? "scale(1.2,1.35)" : "scale(1)",
              }}
            >
              Merge Sort
            </button>
          </div>
          <div>
            <button
              className="btsort"
              onClick={() => {
                allsort(4);
                notifyquick();
              }}
              style={{
                // backgroundColor: index === 4 ? "orange" : "rgb(232, 237, 177)",
                transform: index === 4 ? "scale(1.2,1.35)" : "scale(1)",
              }}
            >
              Quick Sort
            </button>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="code">
          <h1>
            Code in C++{" "}
            <button title="Click to copy the code" onClick={() => copycode()}>
              Copy Code
            </button>
          </h1>
          <pre>{data[index].code}</pre>
        </div>
        <div className="complexity">
          <div className="timecom">
            <h1>Time Complexity</h1>
            <pre>{data[index].time}</pre>
          </div>
          <div className="spacecom">
            <h1>Space Complexity</h1>
            <pre>{data[index].space}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
