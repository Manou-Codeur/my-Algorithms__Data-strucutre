//graph is a collection of connected nodes. nodes are named vertexes, the link between two
//vertexes is named edge.
//There is 4 different types of graphs;
// 1- Directed: the edge goes only in one dirrection  A --> B
// 2- Undirected: the edge goes in both dirrections A <--> B
// 3- Weighted: the edge has some specification that are represented in numbers for example
// 4- Unweighted: the edge has no specification
// uses of graphs; maps, socila networking

/*

    * Directed and undirected, unweighted
    SALIM --> KARIM <--> SARAH
    
    * Undirected, weighted
            200km              90km 
    ALGER <--------> BEJAIA <--------> jijel

*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return undefined;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      item => item !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      item => item !== vertex1
    );
  }

  removeVertex(vertex) {
    for (let els of this.adjacencyList[vertex]) {
      this.adjacencyList[els] = this.adjacencyList[els].filter(
        item => item !== vertex
      );
    }
    delete this.adjacencyList[vertex];
  }

  render() {
    console.log(this.adjacencyList);
  }

  DFS(vertex) {
    let finalArr = [];
    let visitedVertexes = {};

    const inner = start => {
      if (this.adjacencyList[start].length === 0) {
        finalArr.push(start);
        return undefined;
      }
      finalArr.push(start);
      visitedVertexes[start] = true;

      for (let els of this.adjacencyList[start]) {
        if (!visitedVertexes[els]) {
          inner(els);
        }
      }
    };
    inner(vertex);
    console.log(finalArr);
  }

  //visit neighboor first before going down
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log(result);
  }
}

const facebook = new Graph();
facebook.addVertex("A");
facebook.addVertex("B");
facebook.addVertex("C");
facebook.addVertex("D");
facebook.addVertex("E");
facebook.addVertex("F");

facebook.addEdge("A", "B");
facebook.addEdge("A", "C");
facebook.addEdge("B", "D");
facebook.addEdge("C", "E");
facebook.addEdge("D", "E");
facebook.addEdge("D", "F");
facebook.addEdge("E", "F");

facebook.BFS("A");
