class Node {
    constructor(){
     this.children = {}
     this.isTerminal = false;
    }
}

class Trie {
   constructor() {
        this.root = new Node();
   }

   insertRecur(word, root=this.root){
    if (!word.length) return;
    const letter = word[0];
    const suffix = word.slice(1);

    if (!(letter in root.children)) root.children[letter] = new Node();
    if (!suffix.length) root.children[letter].isTerminal = true;

    this.insertRecur(suffix, root.children[letter]);
   }

   insertIter(word) {
    if (!word.length) return;
    let root = this.root;
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (!(letter in root.children)) root.children[letter] = new Node();
        if (i === word.length-1) root.children[letter].isTerminal = true;
        root = root.children[letter];
    }
    
   }

   searchRecur(word, root=this.root) {
        if (!word.length) return false;
        const letter = word[0];
        const suffix = word.slice(1);

        if (!(letter in root.children)) return false;
        if (root.children[letter].isTerminal) return true;
        
        return this.searchRecur(suffix, root.children[letter])
   }

   searchIter(word) {
        if (!word.length) return false;
        root = this.root;

        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!(letter in root.children)) return false;
            if (root.children[letter].isTerminal) return true;
            root = root.children[letter]
        }
        return false;
   }

   wordsWithPrefix(prefix = '', root=this.root) {
       let allWords = [];
       if (prefix === '') {
           if (root.isTerminal) allWords.push('');
           for(let letter in root.children) {
               let child = root.children[letter];
               let suffixes = this.wordsWithPrefix(prefix, child);
               let words = suffixes.map(chars => letter + chars);
               allWords.push(...words);
           }

       } else {
        let letter = prefix[0];
        let rest = prefix.slice(1);
        if (!(letter in root.children)) {
            return [];
        } else {
            let suffixes = this.wordsWithPrefix(rest, root.children[letter]);
            let words = suffixes.map(chars => letter + chars);
            allWords.push(...words)
        }
       }
       return allWords
    }
} 

let trie = new Trie();
trie.insertRecur('ten')
trie.insertRecur('tea')
trie.insertRecur('taco')
trie.insertRecur('tex')
trie.insertRecur('in')
trie.insertRecur('inn')
trie.insertRecur('inside')
trie.insertRecur('instructor')
console.log(trie.wordsWithPrefix('i'))

module.exports = {
    Node,
    Trie
};