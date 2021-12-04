
// this action creator returns - 
// (1) an action object with a type of 'ADD_TODO' 
// (2) a todo payload taken from our local state. 

export const addTodo = (todo) => {
    return{
    type: "ADD_TODO",
    todo: todo
    }
}