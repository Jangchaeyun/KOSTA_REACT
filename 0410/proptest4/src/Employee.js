import React,{Component} from 'react';

class Employee extends Component{
    render(){
        let emp=[...this.props.emps];
        console.log(emp);
        return(
            <table border="1">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>dept</th>
                </tr>
                <tbody>
                    {emp.map((e)=>{
                            return(
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.dept}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
        )
    }
    
}
export default Employee;