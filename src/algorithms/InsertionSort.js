import React from "react";
import { newTrace, addToTrace, createKey } from "./helpers";
import "../algorithms/algo.css";
import insert from "../algorithms/insertion.png";
const InsertionSort = (nums) => {
  const trace = newTrace(nums);
  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let hole = i;
    addToTrace(trace, nums, [], [i]);
    while (hole > 0 && nums[hole - 1] > value) {
      addToTrace(trace, nums, [], [hole], [hole - 1]);
      nums[hole] = nums[hole - 1];
      hole -= 1;
      addToTrace(trace, nums, [], [], [hole, hole + 1]);
    }
    addToTrace(trace, nums, [], [], [], [hole]);
    nums[hole] = value;
    addToTrace(trace, nums, [], [], [], [hole]);
  }
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export const InsertionSortKey = createKey(
  "Comparing",
  "Swapping",
  "Overwrite from memory"
);
export const InsertionSortDesc = {
  title: "Insertion Sort",
  description: (
    <div>
      <p>
        Insertion sort is the sorting mechanism where the sorted array is built
        having one item at a time. The array elements are compared with each
        other sequentially and then arranged simultaneously in some particular
        order. The analogy can be understood from the style we arrange a deck of
        cards. This sort works on the principle of inserting an element at a
        particular position, hence the name Insertion Sort.
      </p>
      <h3>Algorithm Analysis</h3>
      <div className="time_comp">
        <table>
          <tbody>
            <tr>
              <td>Worst-case time complexity</td>
              <td className="oo">
                O (n<sup>2</sup>)
              </td>
            </tr>

            <tr>
              <td>Average time complexity</td>
              <td className="oo">
                {" "}
                O (n<sup>2</sup>)
              </td>
            </tr>

            <tr>
              <td>Best-case time complexity</td>
              <td className="oo">O (n)</td>
            </tr>

            <tr>
              <td>Space complexity </td>
              <td className="oo">O (1)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
  worstCase: (
    <span>
      <img src={insert} alt="insertion" />
    </span>
  ),
};

export default InsertionSort;
