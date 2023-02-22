
const initState = {
    posts: [
        {id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto' },

       {id: 2, title: 'qui est esse', body: 'est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla' },

       {id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'}
     
    ]
}

const rooteReducer = (state = initState, action) => {

    // console.log(action);

    if(action.type === "delete_post"){
        let newPosts=state.posts.filter(post=>{
            return post.id !== action.id
        });

        return{
            ...state,
            posts:newPosts
        }
    }

    return state;

}

export default rooteReducer;