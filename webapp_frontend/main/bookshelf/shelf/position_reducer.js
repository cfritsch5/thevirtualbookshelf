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
function CollisionException() {}


const PositionReducer = (state = {}, action) => {
  switch (action.type) {
    case "NEW_POSITION":
    // console.log('new position');
      Object.keys(action.position).forEach((id)=>{
        positions = {};
        //do shelves of zero for now, but propabaly need to refactor
        // shelves data structure
            newPos = merge({}, position, state[id], action.position[id]);
            merge(newPos,getCoords(newPos));
            merge(newPos,minMaxX(newPos));
            try {
              let i = 0;
              let flag = true;
              let keys = Object.keys(state.shelfList[newPos.shelf]);
                let id2;
                while (flag && i < keys.length){
                  id2 = keys[i];
                  i++;
                  if(newPos.id !== id2){ // acts as a skip this loop function
                    // console.log(newPos);
                    // console.log('???');
                    if(compareMINMAX(newPos,state[id2])){
                      // newPos = state[id];
                      console.log(true,id2);
                    }else{
                      console.log(false,id2);
                      flag = false;
                      throw new CollisionException;
                    }
                  }
                }
            } catch (e){
              console.log('catch');
              if (e instanceof CollisionException) {
                newPos = state[id];
                // console.log(newPos);
              }
            }
            // try {
            //   Object.keys(state.shelfList[newPos.shelf]).forEach((id2)=>{
            //     if(newPos.id !== id2){
            //       // console.log(newPos);
            //       // console.log('???');
            //       if(compareMINMAX(newPos,state[id2])){
            //         // newPos = state[id];
            //         console.log(true,id2);
            //       }else{
            //         console.log(false,id2);
            //         // throw new CollisionException;
            //       }
            //     }
            //   });
            //
            // } catch (e){
            //   // console.log('catch');
            //   // if (e instanceof CollisionException) {
            //     // newPos = state[id];
            //     // console.log(newPos);
            //   // }
            // }

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
