const initialState = {
    user : {
      id : 1,
      authenticated : false,
      age : 251,
      birthday : new Date(1990, 10, 20),
      expectedAge : 80,
      name : "Lennard",
      squares : [
        {title: "Title 1", text: "Text."},
        {title: "Title 2", text: "Text 2."},
        {title: "Title 3", text: "Text 3."},
        {title: "Title 4", text: "Text 4."},
        {title: "Title 5", text: "Text 5."},
        {title: "Title 6", text: "Text 6."},
        {title: "Title 7", text: "Text 7."},
        {title: "Title 8", text: "Text 8."},
        {title: "Title 9", text: "Text 9."},
        {title: "Title 10", text: "Text 10."},
        {title: "Title 11", text: "Text 11."},
        {title: "Title 12", text: "Text 12."},
        ],
      squareTopics : [
          {name: "All", squares: [
              {title: "Title 1", text: "All."},
              {title: "Title 2", text: "All 2."},
              {title: "Title 3", text: "All 3."},
              {title: "Title 4", text: "All 4."}
          ]}, {name: "Sports", squares: [
              {title: "Title 1", text: "Sports."},
              {title: "Title 2", text: "Sports 2."},
              {title: "Title 3", text: "Sports 3."},
              {title: "Title 4", text: "Sports 4."}
          ]}, {name: "Family", squares: [
              {title: "Family 1", text: "Family."},
              {title: "Family 2", text: "Family 2."},
              {title: "Family 3", text: "Family 3."},
              {title: "Family 4", text: "Family 4."}
          ]}
      ]
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGINATTEMPTSUCCESS':
                return {
                    ...state,
                    user : {
                        ...state.user,
                        authenticated : true,
                    }
                };
        case 'LOGINATTEMPTFAIL':
            console.log("Wrong Credentials, user not logged in");
            return state;
        case 'LOGOUTSUCCESS':
            console.log("Logging User Out");
            return {
                ...state,
                user : {
                    ...state.user,
                    authenticated : false
                }
            }
        default:
            console.log("Unnamed action recieved");
            return state;
        }
};

export default reducer;
