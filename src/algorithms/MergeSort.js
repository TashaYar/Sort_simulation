import React from "react";
import { newTrace, addToTrace, createKey } from "./helpers";
import "../algorithms/algo.css";
import merge from "../algorithms/merge.png";

const MergeSort = (nums) => {
  const trace = newTrace(nums);

  function merge(original, start, mid, end) {
    const left = original.slice(start, mid);
    const right = original.slice(mid, end);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        addToTrace(trace, original, [], [], [], [k + start]);
        original[k + start] = left[i];
        i++;
        addToTrace(trace, original, [], [], [], [k + start]);
      } else {
        addToTrace(trace, original, [], [], [], [k + start]);
        original[k + start] = right[j];
        j++;
        addToTrace(trace, original, [], [], [], [k + start]);
      }
      k++;
    }
    while (i < left.length) {
      addToTrace(trace, original, [], [], [], [k + start]);
      original[k + start] = left[i];
      i++;
      k++;
      addToTrace(trace, original, [], [], [], [k + start]);
    }
    while (j < right.length) {
      addToTrace(trace, original, [], [], [], [k + start]);
      original[k + start] = right[j];
      j++;
      k++;
      addToTrace(trace, original, [], [], [], [k + start]);
    }

    left.length = 0;
    right.length = 0;
  }

  function recursiveMergeSort(original, start, end) {
    const length = end - start;
    if (length < 2) {
      if (length < 1) return original;
      else return [original[start]];
    }

    const midPoint = Math.floor((start + end) / 2);
    addToTrace(
      trace,
      original,
      [],
      [...Array(midPoint - start).keys()].map((i) => i + start)
    );
    recursiveMergeSort(original, start, midPoint);
    addToTrace(
      trace,
      original,
      [],
      [...Array(end - midPoint).keys()].map((i) => i + midPoint)
    );
    recursiveMergeSort(original, midPoint, end);

    merge(original, start, midPoint, end);
  }

  recursiveMergeSort(nums, 0, nums.length);
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export const MergeSortKey = createKey(
  "Call Merge Sort",
  null,
  "Overwrite from axillary array"
);
export const MergeSortDesc = {
  title: "Merge Sort",
  description: (
    <div>
      <p>
        Merge Sort is an efficient, stable sorting algorith that makes use of
        the divide and conquer strategy. Conceptually the algorithm works as
        follows:
      </p>
      <ol>
        <li>
          Divide the unsorted list into <em>n</em> sublists, each containing one
          element(a list of one element is considered sorted)
        </li>
        <li>
          Repeatedly merge sublists to produce new sorted sublists until there
          is only one sublist remaining. This will be the sorted list.
        </li>
      </ol>
      <h3>Algorithm Analysis</h3>
      <div className="time_comp">
        <table>
          <tbody>
            <tr>
              <td>Worst-case time complexity</td>
              <td className="oo">O (n log n)</td>
            </tr>

            <tr>
              <td>Average time complexity</td>
              <td className="oo"> O (n log n)</td>
            </tr>

            <tr>
              <td>Best-case time complexity</td>
              <td className="oo">O (n log n)</td>
            </tr>

            <tr>
              <td>Space complexity </td>
              <td className="oo">O (n)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
  worstCase: (
    <span>
      <img
        src={merge}
        alt="merge"
        style={{ width: "-webkit-fill-available" }}
      />
    </span>
  ),
};
export default MergeSort;
