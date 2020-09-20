const initialstate = {
  employees: [
    { id: 1, employeeName: "Employee 1", employeeCode: "101", projectAssigned: "banking", technologyStack: "angular" },
    { id: 2, employeeName: "Employee 2", employeeCode: "102", projectAssigned: "IOT", technologyStack: "java" },
    { id: 3, employeeName: "Employee 3", employeeCode: "103", projectAssigned: "travel", technologyStack: "react" }
  ]
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEE':
      return {
        ...state
      };
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.concat(action.payload)
      };
    case 'EDIT_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map(
          (content, i) => content.id === action.payload.id ? { ...content, employeeName: action.payload.employeeName, employeeCode: action.payload.employeeCode, projectAssigned: action.payload.projectAssigned, technologyStack: action.payload.technologyStack }
            : content)
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
