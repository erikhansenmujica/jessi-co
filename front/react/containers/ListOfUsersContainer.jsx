import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../store/actions/getUsers";
import ListOfUsers from "../components/ListOfUsers";

class ListOfUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick=this.onClick.bind(this)
  }
  componentDidMount(){
    this.props.giveMeAllUsers()
  }
  onClick(name){
    this.props.fetchPbyCat(name)
    
    this.props.history.push(`/category/${name}`)
  }
  render() {
    return (
      <div>
        <ListOfUsers users={this.props.users} onClick={this.onClick}/>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => {
  return {
    users: users.all
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    giveMeAllUsers: (name)=>dispatch(fetchUsers(name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfUsersContainer);
