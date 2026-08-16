// Trie (Prefix Tree)
// insert / search / startsWith: O(L), Space O(total chars)

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
    }
    node.isEnd = true;
  }

  search(word) {
    const node = this._walk(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix) {
    return this._walk(prefix) !== null;
  }

  _walk(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children.has(ch)) return null;
      node = node.children.get(ch);
    }
    return node;
  }
}

module.exports = { Trie };

if (require.main === module) {
  const t = new Trie();
  t.insert("apple");
  console.assert(t.search("apple") && t.startsWith("app") && !t.search("app"), "trie");
  console.log("trie: ok");
}
