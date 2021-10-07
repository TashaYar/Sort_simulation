import React from "react";
import "../algorithms/algo.css";

import { swap, newTrace, addToTrace, lastSorted, createKey } from "./helpers";

const SelectionSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  for (let i = 0; i < nums.length - 1; i++) {
    // Internal Loop: Find index of min value
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      // Visualize: comparing A[j] to A[minIndex]
      addToTrace(trace, nums, lastSorted(trace), [minIndex, j]);
      if (nums[j] < nums[minIndex]) {
        // Visualize: discovered new minIndex
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
        minIndex = j;
        // Visualize: reassign new minIndex;
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
      }
    }

    // Visualize: i'th value to be swapped with min value
    addToTrace(trace, nums, lastSorted(trace), [], [i, minIndex]);

    swap(nums, i, minIndex);

    // Visualize: i'th value has been swapped with min value
    addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
  }

  // Visualize: Final item in the array is sorted
  addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1]);

  return trace;
};

export const SelectionSortKey = createKey("Comparing", "Swapping");

export const SelectionSortDesc = {
  title: "Selection Sort",
  description: (
    <div>
      <p>
        The selection sort algorithm sorts an array by repeatedly finding the
        minimum element (considering ascending order) from unsorted part and
        putting it at the beginning. The algorithm maintains two subarrays in a
        given array.
        <ol>
          <li>The subarray which is already sorted.</li>
          <li> Remaining subarray which is unsorted. </li>
        </ol>
        In every iteration of selection sort, the minimum element (considering
        ascending order) from the unsorted subarray is picked and moved to the
        sorted subarray.
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
              <td className="oo">
                O (n<sup>2</sup>)
              </td>
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
  bestCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  space: <span>O(1)</span>,
};

export default SelectionSort;
