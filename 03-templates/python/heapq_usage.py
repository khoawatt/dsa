"""heapq — min-heap by default. Max-heap: negate values or wrap tuples.
All operations O(log n) except heapify O(n).
"""
import heapq


def top_k(nums: list[int], k: int) -> list[int]:
    """K largest elements using a min-heap of size k."""
    heap = []
    for x in nums:
        heapq.heappush(heap, x)
        if len(heap) > k:
            heapq.heappop(heap)
    return sorted(heap, reverse=True)


def top_k_largest_nlargest(nums: list[int], k: int) -> list[int]:
    return heapq.nlargest(k, nums)


if __name__ == "__main__":
    assert top_k([3, 1, 5, 12, 2, 11], 3) == [12, 11, 5]
    assert top_k_largest_nlargest([3, 1, 5, 12, 2, 11], 3) == [12, 11, 5]

    # max-heap trick
    heap = []
    for x in [3, 1, 5]:
        heapq.heappush(heap, -x)
    assert -heapq.heappop(heap) == 5
    print("heapq: ok")
