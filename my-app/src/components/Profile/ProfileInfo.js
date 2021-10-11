import React, { Component } from 'react';

class ProfileInfo extends Component {
  state = {
    editStatus: true,
  };

  changeStatus = () => {
      this.setState(prevState => {
          return ({editStatus: !prevState.editStatus })
      })
  }

  render() {
    const { status } = this.props;
    const { editStatus } = this.state;
    return (
      <>
        <div>
         Status: {editStatus ? (
            <span style={{'cursor': "pointer"}} onDoubleClick={ this.changeStatus}>{status}</span>
          ) : (
            <label htmlFor="status">
              <input autoFocus={true} onBlur={ this.changeStatus} name="status" value={status} type="text" />
            </label>
          )}
        </div>
        {/* <div>
            <label htmlFor="status">
               <input name="status" value={status} type="text" /> 

            </label>
            
        </div> */}
      </>
    );
  }
}
export default ProfileInfo;
