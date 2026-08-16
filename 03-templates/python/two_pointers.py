"""Two Pointers — opposite direction.
Invariant: elements outside [left, right] are already processed.
Time O(n), Space O(1).
"""


def two_sum_sorted(nums: list[int], target: int) -> list[int]:
    """Two Sum II (sorted): 1-based indices of a pair summing to target."""
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return [left + 1, right + 1]
        if s < target:
            left += 1
        else:
            right -= 1
    return [-1, -1]


def is_palindrome(s: str) -> bool:
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True


if __name__ == "__main__":
    assert two_sum_sorted([2, 7, 11, 15], 9) == [1, 2]
    assert is_palindrome("racecar") is True
    assert is_palindrome("hello") is False
    print("two_pointers: ok")
