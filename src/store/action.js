export const ADD_TODO = "ADD_TODO";
export const ADD_LIKE = "ADD_LIKE";
export const ADD_COMMENT = "ADD_COMMENT"

let todoId = 0;

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: ++todoId,
    task
  }
});

export const addLikes = id => {
  return {
    type: ADD_LIKE,
    id: id
  }
};


export const addComments = (data,comment) => {
  return {
    type: ADD_COMMENT,
    data : data,
    comment:comment
  }
};