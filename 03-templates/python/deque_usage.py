"""deque — double-ended queue.
append / appendleft / pop / popleft all O(1).
Use for BFS queue, sliding window max (monotonic queue).
"""
from collections import deque


def sliding_window_max(nums: list[int], k: int) -> list[int]:
    """Monotonic decreasing deque: max of every window of size k."""
    dq = deque()  # stores indices
    result = []
    for i, x in enumerate(nums):
        while dq and nums[dq[-1]] < x:
            dq.pop()
        dq.append(i)
        if dq[0] <= i - k:
            dq.popleft()
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result


if __name__ == "__main__":
    assert sliding_window_max([1, 3, -1, -3, 5, 3, 6, 7], 3) == [3, 3, 5, 5, 6, 7]
    print("deque_usage: ok")
