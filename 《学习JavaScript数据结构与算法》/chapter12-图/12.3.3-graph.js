'use strict';

function defaultToString(item) {
    if (item === null) {
        return "NULL";
    }
    if (item === undefined) {
        return "UNDEFINED";
    }
    if (typeof item === "string" || item instanceof String) {
        return `${item}`;
    }
    return item.toString(); // {1}
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }
    keyValues() {
        return Object.values(this.table);
    }
    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return Object.keys(this.table).length;
    }
    clear() {
        this.table = {};
    }
    toString() {
        if (this.isEmpty()) {
            return "";
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }
}

// - Graph 类
class Graph {
    // - isDirected 表示图是否是有向, 默认情况下图是无向的.
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        // - 我们使用一个数组来存储图中所有顶点的名字;
        this.vertices = [];
        // - adjacent [ə'dʒeɪs(ə)nt] --adj.相邻的, 邻边的
        // - adjacent list 邻边
        // - 使用字典来存储邻接表. 字典将会使用顶点的名字作为键, 邻接点列表作为值.
        this.adjList = new Dictionary();
    }
    // - 添加顶点 Vertex
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
            // console.log("this.adjList: ", this.adjList);
        }
    }
    // - 添加边 edge/adjacent 顶点之间的边.
    addEdge(a, b) {
        if (!this.adjList.get(a)) {
            this.addVertex(a);
        }
        if (!this.adjList.get(b)) {
            this.addVertex(b);
        }
        this.adjList.get(a).push(b);
        console.log("this.adjList.get(a)", this.adjList.get(a));
        if (this.isDirected !== true) {
            this.adjList.get(b).push(a);
            console.log("this.adjList.get(b):", this.adjList.get(b));
        }
    }
    // - 取得顶点
    getVertices() {
        return this.vertices;
    }
    // - 取得邻边
    getAdjList() {
        return this.adjList;
    }
    // - 字符串化, 以便在控制台输出图.
    toString() {
        let s = "";
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }
            s += "\n";
        }
        return s;
    }
}