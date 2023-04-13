import React,{Component} from 'react';

class Department extends Component{
    render(){
        console.log(this.props.depts)
        let dep=[...this.props.depts];
        return(
            dep.map((dept,index)=>{
                return(<option value={dept.id} key={index}>{dept.name}</option>)
            })
        )
    }
}
export default Department;