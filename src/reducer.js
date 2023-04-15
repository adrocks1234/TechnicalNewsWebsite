const reducer=(state,action)=>{

    switch(action.type)
    {

        case "SET_LOADING":

            return{
                ...state,
                isLoading:true,
            };

        case "GET_STORIES":
            return {

                ...state,
                isLoading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,
            };

        case "REMOVE_POST":

            return {

                ...state,
                hits:state.hits.filter((curElem)=>{

                return curElem.objectID!==action.payload

                }),
            };

        case "SEARCH_QUERY":
            return {

                ...state,
                query:action.payload
            }

        case "NEXT_PAGE":

        let pageNum1=state.page;

           if(pageNum1>=state.nbPages)
           pageNum1=0;

           else
           pageNum1=pageNum1+1;

            return{

                ...state,
                page:pageNum1,
            };

        
         case "PREV_PAGE":

           let pageNum=state.page;

           if(pageNum<=0)
           pageNum=0;

           else
           pageNum=pageNum-1;

            return{
    
                ...state,
                page:pageNum,
            };
    
    }

    return state;

};

export default reducer