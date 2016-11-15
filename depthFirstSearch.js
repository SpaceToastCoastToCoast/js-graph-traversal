'use strict';

const Node = require('./graphGenerator');

const haveAllBeenVisited = (element, index, array) => {
  return element.visited === true;
}

const filterUnvisited = (element, index, array) => {
  return element.visited !== true;
}

const DFS = (start, searchFor) => {
  let stack = [start];
  while(stack.length > 0) {
    //the first node is always visited
    stack[0].visited = true;

    //first, check if the last node in the stack is what we are looking for
    if(stack[stack.length - 1].value === searchFor) {
      return stack.pop();
    }

    //check if the most recent member of the stack has neighbors
    if(stack[stack.length - 1].neighbors.length > 0) {
      //if neighbors exist, check if they are visited
      if(stack[stack.length - 1].neighbors.every(haveAllBeenVisited)) {
        //if all have been visited, pop it off
        stack.pop();
      } else {
        //if not all have been visited
        let unvisited = stack[stack.length - 1].neighbors.filter(filterUnvisited);
        stack.push(unvisited[0]);
        stack[stack.length - 1].visited = true;
      }
    } else {
      //if no neighbors to most recent node, pop it off
      stack.pop();
    }
  }
  //if we can't find the search for and all nodes have been visited
  return false;
}

module.exports = DFS;
