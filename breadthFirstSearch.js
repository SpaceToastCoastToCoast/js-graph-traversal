'use strict';

const Node = require('./graphGenerator');

const haveAllBeenVisited = (element, index, array) => {
  return element.visited === true;
}

const BFS = (start) => {
  let queue = [start];
  let visitedNodes = [start];

  queue[0].visited = true;

  while(queue.length > 0) {
    //if the first node in the queue has neighbors, add them all to the stack in order
    if(queue[0].neighbors.length > 0) {
      queue[0].neighbors.forEach((node) => {
        node.visited = true;
        queue.push(node);
        visitedNodes.push(node);
      })
    }
    if(queue.every(haveAllBeenVisited)) {
      queue.shift();
    }
  }
  return visitedNodes.toString();
}

module.exports = BFS;
