class Node{
    constructor(value) {
        this.value=value;
        this.nextNode=null;
    }
}

class linkedList{
    constructor(){
        this.listHead=null;
    }

    prepend(value){
        let tmp = null
        if(this.listHead!=null) {   tmp=this.listHead}
        this.listHead=new Node(value)
        this.listHead.nextNode=tmp
    }
    append(value){
        if(this.listHead==null){
            this.prepend(value);
        } else {
            let tmp=this.listHead;
            while(tmp.nextNode!=null){
                tmp=tmp.nextNode
            }
            tmp.nextNode=new Node(value);
        }
    }

    size() {
        let tmp = this.listHead;
        let counter = 1;

        while(tmp.nextNode!=null){
            tmp=tmp.nextNode;
            ++counter;
        }

        return counter

    }


    head(){
        return this.listHead
    }

    tail(){
        let tmp=this.listHead
        while(tmp.nextNode!=null){
            tmp=tmp.nextNode
        }
        return tmp
    }

    at(index) {
        let tmp = this.listHead
        for(let i=0; i<index; i++){
            tmp=tmp.nextNode
            if(tmp==null) { return 'there is no item for this index'}
        }
        return tmp
    }
    
    pop() {
        let cur = this.listHead
        let prev = null
        while(cur.nextNode!=null){
            prev=cur
            cur=cur.nextNode            
        }
        prev.nextNode=null
    }

    contains(value) {
        let tmp = this.listHead
        while(tmp!=null){
            if(tmp.value == value) {return true}
            tmp=tmp.nextNode
        }
        return false
    }

    find(value) {
        let tmp = this.listHead
        let index = 0

        while(tmp!=null) {
            if(tmp.value==value) return index
            tmp=tmp.nextNode
            index++            
        }
        return -1
    }

    toString(){
        let tmp = this.listHead;
        let stringList = "";
        while(tmp!=null) {
            stringList+=`(${tmp.value})-> `;
            tmp=tmp.nextNode;
        }
        return (stringList+='null')
    }

    insertAt(value, index) {
        if(this.listHead==null) {
            this.append(value)
        } else {
            let cur=this.listHead
            let prev=null
            for(let i=0;i<index; i++){
                prev=cur
                cur=cur.nextNode
                if(cur==null) {break}
            }
            const tmp = new Node(value)
            prev.nextNode=tmp
            tmp.nextNode=cur

        }

    }

    removeAt(index) {
        if(this.listHead==null) { return "List is EMPTY"}
        let prev = null
        let cur = this.listHead;
        
        for(let i=0; i<index; i++) {
            prev=cur
            cur=cur.nextNode
            if(cur==null) { return 'there is no item for this index'}
        }
        prev.nextNode=cur.nextNode

    }
}

let list1=new linkedList()

list1.append(5)
list1.append(7)
list1.prepend(888)
console.log(list1.toString())
console.log('list1.size(): ', list1.size())
console.log('list1.head(): ', list1.head())
console.log('list1.tail(): ', list1.tail())
console.log('list1.toString(): ', list1.toString())
console.log('list1.at(1): ', list1.at(1))
console.log('list1.pop(): ', list1.pop())
console.log('list1.toString(): ', list1.toString())
console.log('list1.contains(1): ', list1.contains(1))
console.log('list1.find(1): ', list1.find(1))
console.log(`list1.insertAt('hello',1): `, list1.insertAt('hello',1))
console.log('list1.head(): ', list1.head())
console.log('list1.removeAt(1): ', list1.removeAt(1))

console.log('list1.head(): ', list1.head())