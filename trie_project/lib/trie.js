class Node {
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor() {
       this.root = new Node();
   }
   insertRecur(word, root=this.root){
        let letter = word[0];
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter]);
        }
   }

   insertIter(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            
            if (!(word[i] in node.children)) {
                node.children[word[i]] = new Node();
            }

            node = node.children[word[i]];
        }

        node.isTerminal = true;
   }

   searchRecur(word, root=this.root) {
       if (word.length === 0) {
           if (root.isTerminal) {
               return true;
           } else {
               return false;
           }
       }
       let letter = word[0];
       if (letter in root.children) {
           return this.searchRecur(word.slice(1), root.children[letter])
       } else {
           return false;
       }
   }
   searchIter(word) {
        let node = this.root;

        for (let j = 0; j < word.length; j++) {
            let letter = word[j];
            if (!(letter in node.children)) {
                return false;
            }

            node = node.children[letter];
        }

       return node.isTerminal
   }
} 

module.exports = {
    Node,
    Trie
};