import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import ProfileUser from "../components/ProfileUser";

class ProfileUserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: []
    };
  }
  componentDidMount() {
    Axios.get(`/api/order/${this.props.user.id}`).then(response =>
      this.setState({
        order: response.data
      })
    );
  }
  render() {
    
    return <ProfileUser user={this.props.user} order={this.state.order} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(ProfileUserContainer);
