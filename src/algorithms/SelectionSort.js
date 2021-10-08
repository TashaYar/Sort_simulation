import React from "react";
import "../algorithms/algo.css";
import select from "../algorithms/selection.png";

import { swap, newTrace, addToTrace, lastSorted, createKey } from "./helpers";

const SelectionSort = (nums) => {
  const trace = newTrace(nums);
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      addToTrace(trace, nums, lastSorted(trace), [minIndex, j]);
      if (nums[j] < nums[minIndex]) {
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
        minIndex = j;
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
      }
    }
    addToTrace(trace, nums, lastSorted(trace), [], [i, minIndex]);

    swap(nums, i, minIndex);
    addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
  }
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
      <img
        src={select}
        alt="select"
        style={{ width: "-webkit-fill-available" }}
      />
    </span>
  ),
};

export default SelectionSort;
