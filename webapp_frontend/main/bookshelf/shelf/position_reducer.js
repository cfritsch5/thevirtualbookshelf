import {merge} from 'lodash';

// let position = {
//   x: 0,
//   y: 0,
//   angle: 0,
//   width: 0,
//   depth: 0,
//   Ax: null,
//   Bx: null,
//   Cx: null,
//   Dx: null,
//   Az: null,
//   Bz: null,
//   Cz: null,
//   Dz: null,
// };
let position = {
  x: 0,
  y: 0,
  angle: 0,
  width: 0,
  depth: 0,
  shelf: 0,
};
let shelves = [[]];
let shelfList = {};
let mapShelvesToBooks = {};
let mapBooksToShelves = {};
let positions = {};
let newPos = {};

const PositionReducer = (state = {}, action) => {
  // console.log("POSITION REDUCER");
  switch (action.type) {
    case "NEW_POSITION":
    // positions = {};
    //   Object.keys(action.position).forEach((id)=>{
    //     //do shelves of zero for now, but propabaly need to refactor
    //     // shelves data structure
    //         newPos = merge({}, position, state[id], action.position[id]);
    //
    //         positions[id] = newPos;
    //     shelves[0].forEach((idx2)=>{
    //
    //     });
    //   });
      return merge({}, state, positions);
    // case "NEW_POSITION":
    //   let positions = {};
    //   Object.keys(action.position).forEach((id)=>{
    //     let newPos = merge({}, position, state[id], action.position[id]);
    //     let {x, angle, width, depth} = newPos;
    //     angle = angle+90;
    //     newPos.Ax = x;
    //     newPos.Bx = (width*Math.cos(angle*Math.PI/180)).toFixed(3);
    //     newPos.Bz = ((width/2)*Math.sin( -angle*Math.PI/180)).toFixed(3);
    //     newPos.Cx = (depth*Math.sin(angle*Math.PI/180)).toFixed(3);
    //     newPos.Cz = (depth*Math.cos(angle*Math.PI/180)).toFixed(3);
    //     newPos.Dx = (+newPos.Cx + +newPos.Bx);
    //     newPos.Dz = (+newPos.Cz + +newPos.Bz);
    //     newPos.Az = -newPos.Bz;
    //
    //     newPos.Cz = newPos.Cz  - newPos.Bz;
    //     newPos.Bx = newPos.Bx + x;
    //     newPos.Cx = newPos.Cx + x;
    //     newPos.Dx = newPos.Dx + x;
    //
    //     positions[id] = newPos;
    //
    //   });
      // return merge({}, state, positions);
    case 'RECEIVE_BOOKS':
      let lastBookId = null;
      positions = {};

      Object.keys(action.books).map((id)=>{
        // shelfID = action.books.shelfID
        let shelfID = 0; //temp place holder
        // shelves[shelfID].push(id);

        newPos = merge({}, position);
        newPos.width = action.books[id].width;
        newPos.depth = action.books[id].depth;
        // newPos.shelfID = action.books[id].shelfID;
        positions[id] = newPos;

        mapBooksToShelves[id] = shelfID;
        shelfList[shelfID] = shelfList[shelfID] || {};
        shelfList[shelfID][id] = {next: null, prev: null};
        shelfList[shelfID][id].prev = lastBookId || null;
        if(lastBookId) {
          shelfList[shelfID][lastBookId].next = id;
        }
        lastBookId = id;
      });
      // console.log("in shelf reducer action, state", action, state);
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
