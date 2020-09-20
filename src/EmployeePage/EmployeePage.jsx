import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmployee, addEmployee, editEmployee, deleteEmployee } from '../Action';
import EmployeeModal from './EmployeeModal';

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      employeeName: "",
      employeeCode: "",
      projectAssigned: "",
      technologyStack: ""
    };
  }

  componentDidMount() {
    this.props.getEmployee();
  }

  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployee: PropTypes.func.isRequired,
    addEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
  };

  submitData = () => {
    if (this.state.employeeName && this.state.employeeCode && this.state.projectAssigned && this.state.technologyStack && !this.state.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        employeeName: this.state.employeeName,
        employeeCode: this.state.employeeCode,
        projectAssigned: this.state.projectAssigned,
        technologyStack: this.state.technologyStack
      };

      this.props.addEmployee(newEmployee);

    } else if (this.state.employeeName && this.state.employeeCode && this.state.projectAssigned && this.state.technologyStack && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        employeeName: this.state.employeeName,
        employeeCode: this.state.employeeCode,
        projectAssigned: this.state.projectAssigned,
        technologyStack: this.state.technologyStack
      };

      this.props.editEmployee(updatedDetails);

    } else {

      alert('Enter Employee Details.');

    }

    this.clearData();
  }

  editDetails = (data) => {
    this.setState({
      id: data.id,
      employeeName: data.employeeName,
      employeeCode: data.employeeCode,
      projectAssigned: data.projectAssigned,
      technologyStack: data.technologyStack
    })
  }

  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteEmployee(id);
    }
  }

  handleNameChange = (e) => {
    this.setState({
      employeeName: e.target.value
    });
  }

  handleEmployeeCodeChange = (e) => {
    this.setState({
      employeeCode: e.target.value
    });
  }

  handleProjectAssignedChange = (e) => {
    this.setState({
      projectAssigned: e.target.value
    });
  }

  handleTechnologyStackChange = (e) => {
    this.setState({
      technologyStack: e.target.value
    });
  }

  clearData = () => {
    this.setState({
      id: 0,
      employeeName: "",
      employeeCode: "",
      projectAssigned: "",
      technologyStack: ""
    });
  }

  render() {
    return (
      <div >
        <h1>Employee list</h1>
        <div>
          Employee Name : <input onChange={this.handleNameChange} value={this.state.employeeName} type="text" placeholder="Employee Name" /> <br />
          Employee Code :  <input onChange={this.handleEmployeeCodeChange} value={this.state.employeeCode} type="text" placeholder="Employee Code" /><br />
          Project Assigned :  <input onChange={this.handleProjectAssignedChange} value={this.state.projectAssigned} type="text" placeholder="Project Assigned" /><br />
          Technology Stack :  <input onChange={this.handleTechnologyStackChange} value={this.state.technologyStack} type="text" placeholder="Technology Stack" /><br />
          {this.state.id ? <button type="button" className="btn btn-primary" onClick={this.submitData}>Edit</button> : <button type="button" className="btn btn-primary" onClick={this.submitData}>Add</button>}   <button type="button" className="btn btn-primary" onClick={this.clearData}>clear</button>
        </div>
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Employee Code</th>
                <th>Project Assigned</th>
                <th>Technology Stack</th>
                <th>Action(s)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.employees && this.props.employees.map((data, index) => {
                return <tr key={(index + 1)}>
                  <td>{(index + 1)}</td>
                  <td>{data.employeeName}</td>
                  <td>{data.employeeCode}</td>
                  <td>{data.projectAssigned}</td>
                  <td>{data.technologyStack}</td>
                  <td><button type="button" className="btn btn-primary" onClick={() => this.editDetails(data)}>EDIT</button> <button type="button" className="btn btn-primary" onClick={() => this.deleteEmployee(data.id)}>DELETE</button> </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
};


const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(mapStateToProps, { getEmployee, addEmployee, editEmployee, deleteEmployee })(EmployeePage);
