import { merge } from 'lodash';
import { getCoords, minMaxX, compareMINMAX } from './positions_calc_util.js';
let position = {
  x: 0,
  y: 0,
  angle: 0,
  width: 0,
  depth: 0,
  Ax: null,
  Bx: null,
  Cx: null,
  Dx: null,
  Az: null,
  Bz: null,
  Cz: null,
  Dz: null,
  minX: 0,
  maxX: 0,
  shelf: 0,
};
let shelves = [[]];
let shelfList = {};
let mapShelvesToBooks = {};
let mapBooksToShelves = {};
let positions = {};
let newPos = {};

const PositionReducer = (state = {}, action) => {
  switch (action.type) {
    case "NEW_POSITION":
      Object.keys(action.position).forEach((id)=>{
        positions = {};
        //do shelves of zero for now, but propabaly need to refactor
        // shelves data structure
            newPos = merge({}, position, state[id], action.position[id]);
            merge(newPos,getCoords(newPos));
            merge(newPos,minMaxX(newPos));
            Object.keys(state.shelfList[newPos.shelf]).forEach((id2)=>{
                if(newPos.id !== id2){
                  if(newPos.minX && state[id2].minX){

                    if(compareMINMAX(newPos,state[id2])){
                        // newPos = state[id];
                        // console.log(true);
                    }else{
                      console.log(false);
                    }
                  }
                }
            });

            positions = merge(positions,{[id]: newPos});
      });
      return merge({}, state, positions);
    case 'RECEIVE_BOOKS':
      let lastBookId = null;
      positions = {};

      Object.keys(action.books).map((id)=>{
        // shelfID = action.books.shelfID
        let shelfID = 0; //temp place holder

        newPos = merge({}, position);
        newPos.id = id;
        newPos.width = action.books[id].width;
        newPos.depth = action.books[id].depth;
        // newPos.shelfID = action.books[id].shelfID;
        positions[id] = newPos;
        mapBooksToShelves[id] = shelfID;
        shelfList[shelfID] = shelfList[shelfID] || {};
        shelfList[shelfID][id] = {id: id, next: null, prev: null};
        shelfList[shelfID][id].prev = lastBookId || null;
        if(lastBookId) {
          shelfList[shelfID][lastBookId].next = id;
        }
        lastBookId = id;
      });
      return merge({}, state, positions, {mapBooksToShelves},{shelfList});
    default:
      return state;
  }
};

export default PositionReducer;

/*
So Collision detection:
thoughts -
books are limited to being on a shelf - so they are always aligned on that axis
but they can change angle.
basically if the bounding box locations are not overlapping, and the angles dont
overlapp the books do not overlap

so if book 1 is at x:1 y:200 width:35 height:200 depth: 150 and angle 0
and book 2 is at x:50 y: 200 width: 50 height: 150 depth 150 and angle -45

*/
