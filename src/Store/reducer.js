const initialState = {
    user : {
      id : 1,
      authenticated : false,
      age : 25,
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
      ]
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGINATTEMPT':
            if (action.success === true) {
                console.log("User logged in");
                return {
                    ...state,
                    user : {
                        authenticated : true,
                    }
                }
            } else {
                console.log("Wrong Credentials, user not logged in")
            };

        case 'LOGOUTSUCCESS':
            console.log("Logging User Out");
            return {
                ...state,
                user : {
                    authenticated : false
                }
            }
        default:
            console.log("Unnamed action recieved");

        }
    return state;
};

export default reducer;
