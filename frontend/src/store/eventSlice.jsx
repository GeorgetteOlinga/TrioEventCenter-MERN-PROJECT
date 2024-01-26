// https://medium.com/@ishdagnesh/how-to-use-react-vite-js-with-redux-0aaf60835052
// things to be defined in here:
// initial state
// name - the name of the reducer 
// reducers - the functions that will affect the initialState.events

// initial state
// events matches up better than to do - but there isn't technically a complete/incomplete - that would be easy to update, though
// name of the reducer is events
const initialState = {
    events: [
        { id: 1, text: "finish event brainstoming"},
        { id: 2, text: "finish event"},
        { id: 3, text: "create a  more complex models"},
    ]
};

export const eventSlice = createSlice({

})

export const { } = eventSlice.actions;
