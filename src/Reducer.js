
const initialState ={
    students:[
        {id:"1",name:"Chanaphat",score:93},
        {id:"2",name:"Natcha",score:93},
        {id:"3",name:"Suzuki",score:93},
        {id:"4",name:"Ccccccccccccccc",score:93}
    ]
}


const reducer =(state=initialState,action)=>{
    const allstudent =[...state.students]
    switch (action.type) {
        case "DEL_STUDENT":
            const newState= {
                ...state,
                students:state.students.filter(item=>item.id!==action.playload)
            }
            return newState
        case "ADD_STUDENT":
            const newStudent={
                ...state,
                students:[action.playload,...state.students]
            }
            return newStudent

        case "Edit_STUDENT":
            const indexforedit = allstudent.findIndex(item=>{
                return item.id=== action.playload.id
            })
            allstudent[indexforedit]={
                id:action.playload.id,
                name:action.playload.name,
                score:action.playload.score
            }
            const editStudent={
                ...state,
                students:allstudent
            }
            return editStudent
        default:
            break;
    }
    return state
}


export default reducer
