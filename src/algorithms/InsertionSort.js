import React from "react";
import { newTrace, addToTrace, createKey } from "./helpers";
import "../algorithms/algo.css";
const InsertionSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let hole = i;
    // Visualize: Hole has been selected for comparison
    addToTrace(trace, nums, [], [i]);
    while (hole > 0 && nums[hole - 1] > value) {
      // Visualize: Compare hole to value
      addToTrace(trace, nums, [], [hole], [hole - 1]);
      nums[hole] = nums[hole - 1];
      hole -= 1;
      // Visualize: Overwrite hole with hole - 1
      addToTrace(trace, nums, [], [], [hole, hole + 1]);
    }
    // Visualize: Overwrite hole with value
    addToTrace(trace, nums, [], [], [], [hole]);
    nums[hole] = value;
    // Visualize: value is in sorted position
    addToTrace(trace, nums, [], [], [], [hole]);
  }

  // Visualize: Mark all elements as sorted
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
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>,
};

export default InsertionSort;
