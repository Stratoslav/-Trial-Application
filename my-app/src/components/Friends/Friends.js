import React, { Component } from 'react';
import { connect } from 'react-redux';

class Friends extends Component {
  render() {
    const { findUsers } = this.props;
    return (
      <section>
        <div>
          {findUsers.map(({ name, id, followed }) => {
            return <div key={id}>{followed ? <p>{name}</p> : null}</div>;
          })}
        </div>
      </section>
    );
  }
}

let mapStateToProps = state => ({
  findUsers: state.findUsers.findUsers,
});

export default connect(mapStateToProps, null)(Friends);
