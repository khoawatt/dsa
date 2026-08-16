"""Prefix Sum.
prefix[i] = sum(nums[0..i-1]); range sum [l, r] = prefix[r+1] - prefix[l].
Time O(n) build, O(1) query, Space O(n).
"""
from itertools import accumulate


def build_prefix(nums: list[int]) -> list[int]:
    prefix = [0] * (len(nums) + 1)
    for i, x in enumerate(nums):
        prefix[i + 1] = prefix[i] + x
    return prefix


def range_sum(prefix: list[int], l: int, r: int) -> int:
    return prefix[r + 1] - prefix[l]


if __name__ == "__main__":
    p = build_prefix([1, 2, 3, 4])
    assert range_sum(p, 1, 2) == 5
    assert list(accumulate([1, 2, 3, 4])) == [1, 3, 6, 10]
    print("prefix_sum: ok")
