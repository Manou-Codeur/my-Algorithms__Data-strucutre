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
}

const facebook = new Graph();
facebook.addVertex("manou");
facebook.addVertex("said");
facebook.addVertex("kamel");

facebook.addEdge("manou", "kamel");
facebook.addEdge("manou", "said");

facebook.removeVertex("kamel");
