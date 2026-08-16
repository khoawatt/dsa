"""Binary Search — exact + lower bound.
Invariant: target is inside [left, right]; while left <= right; discard half each step.
Time O(log n), Space O(1).
"""
import bisect


def binary_search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1


def lower_bound(nums: list[int], target: int) -> int:
    """First index where nums[i] >= target. Same as bisect.bisect_left."""
    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left


if __name__ == "__main__":
    assert binary_search([1, 3, 5, 6], 5) == 2
    assert binary_search([1, 3, 5, 6], 2) == -1
    assert lower_bound([1, 3, 5, 6], 2) == 1
    assert lower_bound([1, 3, 5, 6], 2) == bisect.bisect_left([1, 3, 5, 6], 2)
    print("binary_search: ok")
