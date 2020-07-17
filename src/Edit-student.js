import React, { Component } from 'react'
import { connect } from 'react-redux'

export class EditStudent extends Component {
    state={
        id:"",
        name:"dd",
        score:""
    }

    kuy=(e)=>{
        alert("ss")
    }
    componentWillMount(){
        const userId = this.props.match.params.id
        const student = this.getCurrentStudent(userId)
        if(student){
            this.setState({
                id:student.id,
                name:student.name,
                score:student.score
            })
        }else{
            this.props.history.push('/')
        }

    }
    getCurrentStudent(id){
        const allStudents=this.props.stateFromStore

        const [student] = allStudents.filter(item=>{
            return item.id===id
        })

        return student
    }
    onSubmitStudentForm =(data,event)=>{
        event.preventDefault()
        const newEdit ={
            id:data.id,
            name:data.name,
            score:data.score
        }
        this.props.editStateAtStore(newEdit)
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="row mt-3 mb-5 mr-5 ml-5">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <div className="card-body">
                        <form onSubmit={this.onSubmitStudentForm.bind(this,this.state)}>
                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input type="text" className="form-control" value={this.state.name}  name="name" onChange={event=>{this.setState({name:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="score">Score:</label>
                                <input type="text" className="form-control" value={this.state.score} name="score" onChange={event=>{this.setState({score:event.target.value})}}/>
                            </div>
                            <div className="form-group text-center pt-3">
                                <button className="btn btn-outline-success text-center mr-1"  onClick={()=>{this.props.history.push('/')}}>ยกเลิก</button>
                                <button className="btn btn-primary ml-1">แก้ไข</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateFromStore :state.students
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        editStateAtStore :(id)=>{
            return dispatch({type:"Edit_STUDENT",playload:id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)
