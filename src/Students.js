import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
export class Students extends Component {
    render() {
        const deleteStudent = this.props.deleteStudentAtStore
        return (
            <div className="card">
                <div className="card-header">
                    Name : {this.props.data.name}
                    <button className="btn btn-outline-danger btn-sm float-right ml-1"
                    onClick={deleteStudent.bind(this,this.props.data.id)}>
                        ลบ
                    </button>
                    <Link to={`/edit/${this.props.data.id}`}>
                        <button className="btn btn-success btn-sm float-right ml-1">
                            แก้ไข
                        </button>
                    </Link>
                </div>
                <div className="card-body">
                    Score :{this.props.data.score}
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch=> {
    return {
        deleteStudentAtStore :(id)=>{
            return dispatch({type:"DEL_STUDENT",playload:id})
        }
    }
}

export default connect(null, mapDispatchToProps)(Students)
