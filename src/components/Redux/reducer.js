const inicialState = {
  myFavourites: [],
  allCharacters: [],
};

const rootReducer =(state = inicialState, { type, payload}) => 

  (state = inicialState) =>
  ({ type, payload }) => {
    switch (type) {
      case "ADD_FAV":
        return {
          ...state,
          myFavourites: [...state.myFavourites, payload],
          allCharacters: [...state.allCharacters, payload],
        };
      case "REMOVE_FAV":
        let copy = state.myFavourites.filter((character) => {
          return parseInt(character.id) !== parseInt(payload);
        });
        return { myFavourites: copy };
     
      case "FILTER":
            let copy2= [ ...state.allCharacters ];
            let filterGender = copy2.filter((character) => {
                return character.gender === payload
            });
            return {
                ...state,
                myFavourites: filterGender
            };
       case "ORDER":
        let copy3= [ ...state.allCharacters ];
        return{
            ...state,
            myFavourites: copy3.sort((a,b) => {
                return payload === "A" ? a.id - b.id : b.id - a.id;
            })
        }

      default:
        return { ...state };
    }
  };

export default rootReducer;
