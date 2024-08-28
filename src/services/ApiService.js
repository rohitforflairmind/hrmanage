import axios from 'axios';
 
class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://uat.hrms.flairminds.com/', // Base URL for the API
      timeout: 10000,
    });
  }
 
  // General GET request method
  async get(endpoint) {
    return this.api.get(endpoint, { headers: this._getHeaders() });
  }
 
  // General POST request method
  async post(endpoint, data) {
    return this.api.post(endpoint, data, { headers: this._getHeaders() });
  }
 
  // General PATCH request method
  async patch(endpoint, data) {
    return this.api.patch(endpoint, data, { headers: this._getHeaders() });
  }
 
  // Method to get headers (no auth token needed)
  _getHeaders() {
    return {
      'Content-Type': 'application/json',
      accept: '*/*',
    };
  }
 
  // Specific methods for each endpoint based on your examples
 
  // Login method
  async login(username, password) {
    const data = {
      username: username,
      password: password,
    };
    return this.post('api/Account/Login', data);
  }
 
  // Get employee details
  async getEmployeeDetails(employeeId) {
    return this.get(`api/EmployeesDetails/${employeeId}`);
  }
 
  // Get leave details
  async getLeaveDetails(employeeId) {
    return this.get(`api/Leave/GetLeaveDetails/${employeeId}`);
  }
 
  // Cancel leave
  async cancelLeave(leaveTranId, leaveStatus) {
    const data = {
      leaveTranId: leaveTranId,
      leaveStatus: leaveStatus,
    };
    return this.patch('api/EmployeesDetails/CancelLeave', data);
  }
 
  // Get holidays
  async getHolidays() {
    return this.get('api/Leave/GetHolidays');
  }
 
  // Get leaves card
  async getLeavesCard(employeeId) {
    return this.get(`api/Leave/LeavesCard/${employeeId}`);
  }
 
  // Insert leave transaction
  async insertLeaveTransaction(leaveData) {
    return this.post('api/Leave/InsertLeaveTransaction', leaveData);
  }
}
 
export default ApiService;