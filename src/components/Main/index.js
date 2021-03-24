import React, { Component } from "react";
import Api from "../../Utils/Api";
import Search from "../Search";
import DataTable from "../Table";

class Main extends Component {
    state = {
        users: [],
        filteredUsers: [],
        order: "descend",

    }
    headings = [
        {
            name: 'Image',
            width: '10%',
        },
        {
            name: 'Name',
            width: '10%',
        },
       
        {
            name: 'Email',
            width: '10%',
        },
        {
            name: 'Phone',
            width: '10%',
        }
    ];

    componentDidMount() {
        Api.getUsers().then(res => {
            this.setState({
                users: res.data.results,
                filteredUsers: res.data.results,
            }); console.log(this.state);
            });
    };

    handleInputChange = event => {
        console.log(event.target.value)
        const term = event.target.value;
        const filteredList = this.state.users.filter(userRow => {
            let values = Object.values(userRow).join('').toLowerCase();
            return values.indexOf(term.toLowerCase()) !== -1
        }); 
        this.setState({
            filteredUsers: filteredList
        })
    };

    handleSort = heading => {
        console.log(heading)
        if (this.state.order === 'descend') {
            this.setState({order:"ascend"})
            
        } else {
            this.setState({order:'descend'})
        }
        const compare = (a, b) => {
            console.log(a[heading])
            if (this.state.order === 'ascend') {
                if (a[heading] === undefined) {
                    return 1
                } else if (b[heading] === undefined) {
                    return -1
                } else if (heading === 'name') {
                    return a[heading].first.localeCompare(b[heading].first)
                } else {
                    return a[heading] - b[heading]
                }
            } else {
                if (a[heading] === undefined) {
                    return 1
                } else if (b[heading] === undefined) {
                    return -1
                } else if (heading === 'name') {
                    return b[heading].first.localeCompare(a[heading].first)
                } else {
                    return b[heading] - a[heading]
                }
            }
        }
        const sortedUsers = this.state.filteredUsers.sort(compare);
        console.log(sortedUsers);
        this.setState({filteredUsers:sortedUsers});
    };

    

    render() {
        return (
            <div>
            <Search 
                handleInputChange={this.handleInputChange}
                
            />
            <DataTable 
                users={this.state.filteredUsers}
                order={this.state.order}
                handleSort={this.handleSort}
                headings={this.headings}
            />

            </div>
        )
    }
}

export default Main;