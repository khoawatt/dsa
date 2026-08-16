"""Sliding Window — fixed + variable.
Invariant: window [left, right] always satisfies the condition; shrink left when invalid.
Time O(n), Space O(k).
"""


def max_sum_fixed_window(nums: list[int], k: int) -> int:
    """Maximum sum of any contiguous subarray of length k."""
    window = sum(nums[:k])
    best = window
    for right in range(k, len(nums)):
        window += nums[right] - nums[right - k]
        best = max(best, window)
    return best


def length_of_longest_substring(s: str) -> int:
    """Longest substring without repeating characters."""
    seen = {}
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        seen[ch] = right
        best = max(best, right - left + 1)
    return best


if __name__ == "__main__":
    assert max_sum_fixed_window([1, 2, 3, 4, 5], 2) == 9
    assert length_of_longest_substring("abcabcbb") == 3
    print("sliding_window: ok")
