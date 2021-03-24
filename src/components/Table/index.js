import React from "react";
import {Table} from "react-bootstrap";
import {FaCaretDown} from "react-icons/fa";
import {FaCaretUp} from "react-icons/fa"

function DataTable(props) {
    return (
        
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {props.headings.map(({name, width}) => {
                            return (
                                <th key={name} style={{width}}onClick={()=>{props.handleSort(name.toLowerCase())}}>{name}</th>
                            )
                        })}
                        {/* <th>image</th>
                        <th>First Name{props.order==='descend'?<FaCaretDown onClick= {props.handleSort}/>:<FaCaretUp/>}</th>
                        <th>Last Name{props.order==='descend'?<FaCaretDown onClick= {props.handleSort}/>:<FaCaretUp/>}</th>
                        <th>Email{props.order==='descend'?<FaCaretDown onClick= {props.handleSort}/>:<FaCaretUp/>}</th>
                        <th>Phone</th>
                        <th>Date of Birth</th> */}
                    </tr>
                </thead>
                <tbody>
                  {props.users.map(user => {
                      return (
                        <tr key={user.login.uuid}>
                            <td>
                                <img src={user.picture.medium}></img>
                            </td>
                            <td>
                                <h4>{user.name.first} {user.name.last}</h4>
                            </td>
                          
                            <td>
                                <h4>{user.email}</h4>
                            </td>
                            <td>
                                <h4>{user.phone}</h4>
                            </td>
                            {/* <td>
                                <h4>{user.dob}</h4>
                            </td> */}
                        </tr>
                      )
                  })}
                </tbody>
            </Table>       
    )
}

export default DataTable;