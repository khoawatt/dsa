// Union-Find (Disjoint Set) — path compression + union by size
// Time near O(1) amortized, Space O(n)

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.size = new Array(n).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(a, b) {
    let ra = this.find(a);
    let rb = this.find(b);
    if (ra === rb) return false;
    if (this.size[ra] < this.size[rb]) [ra, rb] = [rb, ra];
    this.parent[rb] = ra;
    this.size[ra] += this.size[rb];
    return true;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

module.exports = { UnionFind };

if (require.main === module) {
  const uf = new UnionFind(4);
  uf.union(0, 1);
  uf.union(2, 3);
  console.assert(uf.connected(0, 1) && !uf.connected(1, 2), "union-find");
  console.log("union-find: ok");
}
