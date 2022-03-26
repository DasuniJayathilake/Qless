 import React, { Component } from 'react';

import axios from 'axios';


export default class VisitorDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      visitors:{}
    };
  }

  componentDidMount(){

    const id=this.props.match.params.id;

    axios.get(`/visitors/${id}`).then((res) => {
      if(res.data.success){
        this.setState({
          visitors: res.data.details, 
          Name: res.data.visitors.name,
          ContactNo: res.data.visitors.contact,
          Email: res.data.visitors.email,
          NIC: res.data.visitors.nic
        });

        console.log(this.state.details);
      }
    });
  }

  render() {
    return (
        <div>
            Visitor Details
        </div>
    );
  }
}

// import React, { Component } from 'react';

// export default class VisitorDetails extends Component {
//   render() {
//     return (
//       <div>
//         Visitor Details
//       </div>
//     );
//   }
// }

// codes related to tutorial video: 6 >>> check iit out later for solving errors