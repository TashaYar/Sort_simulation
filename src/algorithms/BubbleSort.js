import React from "react";
import { swap, newTrace, addToTrace, lastSorted, createKey } from "./helpers";
import "../algorithms/algo.css";
import bubble from "../algorithms/bubble1.png";
const BubbleSort = (nums) => {
  const trace = newTrace(nums);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
      }
    }
    addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1 - i]);
  }

  return trace;
};

export const BubbleSortKey = createKey("Comparing", "Swapping");
export const BubbleSortDesc = {
  title: "Bubble Sort",
  description: (
    <div>
      <p>
        Bubble Sort , also referred to as comparison sort, is a simple sorting
        algorithm that repeatedly goes through the list, compares adjacent
        elements and swaps them if they are in the wrong order. This is the most
        simplest algorithm and inefficient at the same time. Yet, it is very
        much necessary to learn about it as it represents the basic foundations
        of sorting.
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
      <img src={bubble} alt="bubble" />
    </span>
  ),
};
export default BubbleSort;
