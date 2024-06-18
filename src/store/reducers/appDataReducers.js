import { posts } from "../../../staticData/data";
import { ADD_TODO, ADD_LIKE, ADD_COMMENT } from "../action";

const initialState = {
  todos: [],
  posts: posts
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload
      return {
        ...state,
        todos: [...state.todos, { id, task }]
      };
    }
    case ADD_LIKE:
      return {
        ...state,
        posts: state.posts.map(val => {
          if (val.id === action.id) {
           
            return {
              ...val,
              likes: val.likes + 1
            }
          }
          return val
        })

      }
      case ADD_COMMENT: 
      return {
        ...state , 
        posts :state.posts.map(val => {
          if (val.id === action.data.id) {
            return {
              ...val,
              comments: [...val.comments , {
                id: val.comments.length + 1,
                profileImage: 'https://picsum.photos/200',
                name: 'John Doe',
                time: '0 minutes ago',
                content: action.comment,
                category: val.category,
                likes: '',
                dislikes: '',
                reply: [],
            myComment: true
              }]
              
            }
          }
          return val
        })

      }
    default:
      return state;
  }
}

export default todoReducer;