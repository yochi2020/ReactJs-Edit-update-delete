import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AddStudent extends Component {
    state={
        name:"",
        score:""
    }
    render() {
        const onSubmitStudent=(data,event)=>{
            event.preventDefault()
            const newData = {
                id:new Date().getTime().toString(),
                name:data.name,
                score:data.score
            }
            this.props.addStudent(newData)
            this.props.history.push('/')
        }
        return (
            <div className="row mt-3 mb-5 ml-5 mr-5">
            <div className="card col-12 col-sm-8 col-lg-6 mx-auto">
                <div className="card-body">
                    <form onSubmit={onSubmitStudent.bind(this,this.state)}>
                        <div className="block-4 text-center">
                            <img className="img img-thumbnail" src="http://lorempixel.com/150/150/sports/" alt=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text"   className="form-control"   name="name" onChange={event=>{this.setState({name:event.target.value})}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Score</label>
                            <input type="text" className="form-control"   name="score" onChange={event=>{this.setState({score:event.target.value})}}  />
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-outline-success mr-1" onClick={()=>window.location.href='/'}>ยกเลิก</button>
                            <button className="btn btn-primary ml-1">เพิ่ม</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        addStudent :(data)=>{
            return dispatch({type:"ADD_STUDENT",playload:data})
        }
    }
}

export default connect(null, mapDispatchToProps)(AddStudent)
