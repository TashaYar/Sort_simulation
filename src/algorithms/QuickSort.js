import React from "react";
import "../algorithms/algo.css";
import quick from "../algorithms/quick.png";

import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey,
} from "./helpers";

const QuickSort = (nums) => {
  const trace = newTrace(nums);

  function choosePivot(array, start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  }

  function partition(array, start, end) {
    let i = start + 1;
    let j = start + 1;
    addToTrace(trace, array, lastSorted(trace), [start]);

    while (j <= end) {
      if (array[j] < array[start]) {
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        );

        swap(array, i, j);
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        );
        i += 1;
      }
      j += 1;
    }
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    swap(array, start, i - 1);
    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    );
    return i - 1;
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        addToTrace(trace, array, [...lastSorted(trace), start]);
      }
      return null;
    }

    let pivot = choosePivot(array, start, end);
    addToTrace(trace, array, lastSorted(trace), [pivot]);

    swap(array, start, pivot);
    addToTrace(trace, array, lastSorted(trace), [pivot]);

    pivot = partition(array, start, end);
    addToTrace(trace, array, [...lastSorted(trace), pivot]);

    recursiveQuickSort(array, start, pivot - 1);
    recursiveQuickSort(array, pivot + 1, end);
  }

  recursiveQuickSort(nums, 0, nums.length - 1);

  return trace;
};

export const QuickSortKey = createKey(
  "Comparing",
  "Swapping",
  null,
  "Less than pivot"
);

export const QuickSortDesc = {
  title: "Quick Sort",
  description: (
    <div>
      <p>
        Quick Sort is an efficient, in-place sorting algorith that in practice
        is faster than MergeSort and HeapSort. However, it is not a stable
        sorting algorithm, meaning that the relative positioning of equal sort
        items is not preserved.Quicksort is a divide and conquer algorithm.
        Quicksort first divides a large array into two smaller sub-arrays: the
        low elements and the high elements. Quicksort can then recursively sort
        the sub-arrays. The steps are:
      </p>
      <ol>
        <li>
          Pick an element, called a pivot, from the array. This is usually done
          at random.
        </li>
        <li>Move pivot element to the start of the array.</li>
        <li>
          <em>Partitioning:</em> reorder the array so that all elements with
          values less than the pivot come before the pivot, while all elements
          with values greater than the pivot come after it (equal values can go
          either way). After this partitioning, the pivot is in its final
          position. This is called the <em>partition</em> operation.
        </li>
        <li>
          Recursively apply the above steps to the sub-array of elements with
          smaller values and separately to the sub-array of elements with
          greater values.
        </li>
      </ol>
      <p>
        The base case of the recursion is an array of size zero or one, which
        are sorted by definition.
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
              <td className="oo"> O (n log n)</td>
            </tr>

            <tr>
              <td>Best-case time complexity</td>
              <td className="oo">O (n log n)</td>
            </tr>

            <tr>
              <td>Space complexity </td>
              <td className="oo">O (log n)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ),
  worstCase: (
    <span>
      <img
        src={quick}
        alt="quick"
        style={{ width: "-webkit-fill-available" }}
      />
    </span>
  ),
};

export default QuickSort;
