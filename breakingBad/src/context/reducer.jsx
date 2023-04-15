const reducer = (state,action)=>{
    switch (action.type){
        case 'fetch':
            const fetchItems = async (url) => {
                let res = await axios.get(
                  url +
                    import.meta.env.VITE_API_KEY
                );
                return res.data.results;
              };
            return fetchItems(action.payload);
        default:
            return state
    }
}

export default reducer