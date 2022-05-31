export function fetchBoardGame (level) {
  let response;
  switch (level) {
    case 'start':
      response = {
        board:[
          ["c","a","t","s"],
          [null,"r",null,"a"],
          [null,"t",null,"p"],
          [null,"s",null,null]
        ],
        candidate:[{"row":3,"col":3,"letter":"s"}]
      };
      break;
    case 'out-of-bounds':
      response = {
        board:[
          ["c","a","t","s"],
          [null,"r",null,"a"],
          [null,"t",null,"p"],
          [null,"s",null,null]
        ],
        candidate:[
          {"row":1,"col":4,"letter":"t"},
          {"row":4,"col":1,"letter":"y"}
        ]
      };
      break;
    case 'rectangle':
      response = {
        board:[
          ["t","e","s","t"],
          ["o",null,null,"e"],
          [null,null,null,"n"]
        ],
        candidate:[{"row":2,"col":0,"letter":"p"}]
      };
      break;
    case 'overlap':
      response = {
        board:[
          ["c","a","t","s"],
          [null,"r",null,"a"],
          [null,"t",null,"p"],
          [null,"s",null,null]
        ],
        candidate:[{"row":0,"col":0,"letter":"y"}]
      };
      break;
    case 'large':
      response = {
        board:[
          ["m","o","m","e","n","t"],
          ["o",null,"a",null,"u",null],
          ["l","a",null,"e","l",null],
          ["e",null,"p","a","l",null],
          [null,"h","e","r",null,null],
          [null,null,"r",null,null,null]
        ],
        candidate:[{"row":2,"col":2,"letter":"p"}]
      };
      break;
  }
  return Promise.resolve(response);
}
