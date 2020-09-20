// import React, { Component } from 'react';

// class EmployeeModal extends Component {
//   constructor(props) {
//     super(props);

//     this.handleSave = this.handleSave.bind(this);
//     this.state = {
//       id: 0,
//       employeeName: "",
//       employeeCode: "",
//       projectAssigned: "",
//       technologyStack: ""
//     };


//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.employee) {
//       this.setState(
//         {
//           id: nextProps.employee.id,
//           employeeName: nextProps.employee.employeeName,
//           employeeCode: nextProps.employee.employeeCode,
//           projectAssigned: nextProps.employee.projectAssigned,
//           technologyStack: nextProps.employee.technologyStack,
//         }
//       )
//     }
//   }

//   handleNameChange = (e) => {
//     this.setState({
//       employeeName: e.target.value
//     });
//   }

//   handleEmployeeCodeChange = (e) => {
//     this.setState({
//       employeeCode: e.target.value
//     });
//   }

//   handleProjectAssignedChange = (e) => {
//     this.setState({
//       projectAssigned: e.target.value
//     });
//   }

//   handleTechnologyStackChange = (e) => {
//     this.setState({
//       technologyStack: e.target.value
//     });
//   }

//   // clearData = () => {
//   //   this.setState({
//   //     id: 0,
//   //     employeeName: "",
//   //     employeeCode: "",
//   //     projectAssigned: "",
//   //     technologyStack: ""
//   //   });
//   // }


//   handleSave() {
//     if (this.state.employeeName && this.state.employeeCode && this.state.projectAssigned && this.state.technologyStack) {

//       const item = this.state;
//       this.props.saveModalDetails(item)

//     } else {

//       alert('Enter Employee Details.');

//     }

//   }

//   render() {
//     return (
//       <div>
//         <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p><span className="modal-lable">Employee Name :</span><input value={this.state.employeeName} onChange={(e) => this.handleNameChange(e)} type="text" placeholder="Employee Name" /></p>
//                 <p><span className="modal-lable">Employee Code :</span><input value={this.state.employeeCode} onChange={(e) => this.handleEmployeeCodeChange(e)} type="text" placeholder="Employee Code" /></p>
//                 <p><span className="modal-lable">Project Assigned:</span><input value={this.state.projectAssigned} onChange={(e) => this.handleProjectAssignedChange(e)} type="text" placeholder="Project Assigned" /></p>
//                 <p><span className="modal-lable">Technology Stack:</span><input value={this.state.technologyStack} onChange={(e) => this.handleTechnologyStackChange(e)} type="text" placeholder="Technology Stack" /></p>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>{this.state.id ? 'Edit' : 'Add'}</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default EmployeeModal;
