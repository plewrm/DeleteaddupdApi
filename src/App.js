import React, { Fragment } from 'react';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import './App.css';
import { Table, TableHead, TableRow, TableCell } from '@mui/material';


const AddUsers = () => {
  const [fullname, setFullName] = useState("")
  const [address, setAddress] = useState("")
  const [mobile, setMobile] = useState("")
  const [emailid, setEmailId] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [uLevel, setULevel] = useState("")
  const [roleId, setRoleId] = useState("")
  const [bm, setBm] = useState(true)
  const [creditLimit, setCreditLimit] = useState("")
  const [ASOId, setASOId] = useState("")
  const [yardId, setYardId] = useState("")
  const [BMId, setBMId] = useState("")
  const [yardList, setYardList] = useState("")
  const [employeeJoiningDate, setEmployeeJoiningDate] = useState("")
  const [status, setStatus] = useState("")
  const [reportingManager, setReportingManager] = useState("")
  const [password, setPassword] = useState("")
  const [id, setId] = useState("")
  const [users, setUsers] = useState([]);


  function GetUsers() {
    fetch("http://localhost:3000/Data").then((result) => {
      result.json().then((resp) => {
        console.log("data>", resp);
        setUsers(resp);
      })
    })
  }
  useEffect(() => {
    GetUsers();
  }, []);

  function DeleteUser(id) {
    fetch(`http://localhost:3000/Data/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        GetUsers();
        alert("Data Deleted")
      })
    })
  }

  const AddData = () => {
    fetch("http://localhost:3000/data", {
      method: "POST",
      "status": 200,
      "code": 1,
      "message": "Employee Created Successfully",
      body: JSON.stringify({
        fullname: fullname,
        address: address,
        mobile: mobile,
        emailid: emailid,
        state: state,
        city: city,
        uLevel: uLevel,
        roleId: roleId,
        creditLimit: creditLimit,
        ASOId: ASOId,
        yardId: yardId,
        BMId: BMId,
        yardList: yardList,
        employeeJoiningDate: employeeJoiningDate,
        status: status,
        reportingManager: reportingManager,
        password: password
      }),
      headers: {
        Action: "Application/json",
        "content-type": "Application/json"
      }
    })
      .then((res) => res.json())
      .then((Data) => console.log(Data))
    alert("Data Added");
    GetUsers();
  };


  const editRecord = (id) => {
    fetch("http://localhost:3000/data/" + id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("result",result);
        setId(id);
        setFullName(result.fullname);
        setAddress(result.address);
        setMobile(result.mobile);
        setEmailId(result.emailid);
        setState(result.state);
        setCity(result.city);
        setULevel(result.uLevel);
        setRoleId(result.roleId);
        setCreditLimit(result.creditLimit);
        setASOId(result.ASOId);
        setYardId(result.yardId);
        setBMId(result.BMId);
        setYardList(result.yardList);
        setEmployeeJoiningDate(result.employeeJoiningDate);
        setStatus(result.status);
        setReportingManager(result.reportingManager);
        setPassword(result.password);
        GetUsers();
      })
      .catch((error) => console.log("error", error));
  }
  const UpdateData = () => {
    fetch("http://localhost:3000/data/" + id, {
      method: "PUT",
        body: JSON.stringify({
        fullname: fullname,
        address: address,
        mobile: mobile,
        emailid: emailid,
        state: state,
        city: city,
        uLevel: uLevel,
        roleId: roleId,
        creditLimit: creditLimit,
        ASOId: ASOId,
        yardId: yardId,
        BMId: BMId,
        yardList: yardList,
        employeeJoiningDate: employeeJoiningDate,
        status: status,
        reportingManager: reportingManager,
        password: password
      }),
      headers: {
        Action: "Application/json",
        "content-type": "Application/json"
      }
    })
      .then((res) => res.json())
      .then((Data) => console.log("Updated Data", Data))
    alert("Data Updated");
    GetUsers();
  };

  return (
    <Fragment>
      <div className="App">
        <h1 className="Emp">Employee Form</h1>
        <form className="form">
          <label>Full Name:</label>
          <input type='text' value={fullname} name='fullname' className='txt' onChange={(e) => setFullName(e.target.value)} /><br /> <br />
          <label>Address:</label>
          <input type='text' value={address} name='address' className='txt' onChange={(e) => setAddress(e.target.value)} /><br /> <br />
          <label>Mobile:</label>
          <input type='text' value={mobile} name='mobile' className='txt' onChange={(e) => setMobile(e.target.value)} /><br /> <br />
          <label>Email Id:</label>
          <input type='text' value={emailid} name='email id' className='txt' onChange={(e) => setEmailId(e.target.value)} /><br /> <br />
          <label>State:</label>
          <input type='text' value={state} name='about' className='txt' onChange={(e) => setState(e.target.value)} /><br /> <br />
          <label>City:</label>
          <input type='text' value={city} name='city' className='txt' onChange={(e) => setCity(e.target.value)} /><br /> <br />

          <lable>Select user Level</lable>&nbsp;
          <select className="info1" value={uLevel} name="Ulevel" onChange={(e) => setULevel(e.target.value)} >
            <option value="Select User Level">Select User Level</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </select>
          <br></br><br></br>

          <lable> Select Role</lable>&nbsp;
          <select className="info1" value={roleId} name="Role Id" onChange={(e) => setRoleId(e.target.value)} onSelect={() => setBm(!bm)} >
            <option value="Select Role">Select Role</option>
            <option value="ASO">ASO</option>
            <option value="BM"  >BM</option>

            <option value="Yard Person">Yard Person</option>
            <option value="Account Team">Account Team</option>
            <option value="Logistic Team">Logistic Team</option>
            <option value="Credit Team">Credit Team</option>
          </select>
          <br></br><br></br>


          <div className='credit-limit' id='mycredit'>
            <lable>Credit Limit</lable>&nbsp;
            {bm ? <select className="info1" value={creditLimit} name="Credit Limit" onChange={(e) => setCreditLimit(e.target.value)}  >

              <option value="Select Credit Limit">Select Credit Limit</option>
              <option value="10000">10000</option>
              <option value="30000">30000</option>
              <option value="50000">50000</option>

            </select> : null}
            <br></br><br></br>
          </div>

          <lable>ASO</lable>&nbsp;
          <select className="info1" value={ASOId} name="ASO Id" onChange={(e) => setASOId(e.target.value)} >
            <option value="Select ASO">Select ASO</option>
            <option value="Dropdown">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </select>
          <br></br><br></br>

          <lable>Yard</lable>&nbsp;
          <select className="info1" value={yardId} name="Yard Id" onChange={(e) => setYardId(e.target.value)}>
            <option value="Select Yard">Select Yard</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </select>
          <br></br><br></br>

          <lable>BM</lable>&nbsp;
          <select className="info1" value={BMId} name="BM" onChange={(e) => setBMId(e.target.value)}>
            <option value="Select BM">Select BM</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </select>
          <br></br><br></br>

          <lable>Yard List</lable>&nbsp;
          <select className="info1" value={yardList} name="BM" onChange={(e) => setYardList(e.target.value)}>
            <option value="Select Yard Lis">Select Yard List</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </select>
          <br></br><br></br>
          <label>Employee Joining Date :</label>
          <input type='date' value={employeeJoiningDate} name='EmployeeJoiningDate' className='txt' onChange={(e) => setEmployeeJoiningDate(e.target.value)} /><br /> <br />

          <label>Status :</label>
          <input type='text' value={status} name='Status' placeholder='Joinded, Notice, Left' className='txt' onChange={(e) => setStatus(e.target.value)} /><br /> <br />

          <label>Reporting Manager :</label>
          <input type='text' value={reportingManager} name='Reporting Manager' className='txt' onChange={(e) => setReportingManager(e.target.value)} /><br /> <br />

          <label>Password :</label>
          <input type='password' value={password} name='Password' className='txt' onChange={(e) => setPassword(e.target.value)} /><br /> <br />
          <Button color='secondary' variant='contained' onClick={AddData}>Add User</Button>&nbsp;
          {/* <Button color='secondary' variant='contained' onClick={DeleteData}>Delete User</Button>&nbsp; */}
          <Button color='secondary' variant='contained' onClick={UpdateData}>Update User</Button>&nbsp;
        </form>
        <br></br>

        <Table className='table-data'>
          <TableHead>
            <TableRow>
              <TableCell> Sr.No.</TableCell>
              <TableCell> fullname</TableCell>
              <TableCell> address</TableCell>
              <TableCell>mobile </TableCell>
              <TableCell>emailid </TableCell>
              <TableCell>state </TableCell>
              <TableCell>city </TableCell>
              <TableCell>uLevel </TableCell>
              <TableCell> roleId</TableCell>
              <TableCell> creditLimit</TableCell>
              <TableCell> ASOId</TableCell>
              <TableCell>yardId </TableCell>
              <TableCell> BMId</TableCell>
              <TableCell> yardList</TableCell>
              <TableCell>employeeJoiningDate </TableCell>
              <TableCell>status </TableCell>
              <TableCell> reportingManager</TableCell>
              <TableCell> password</TableCell>
              <TableCell> Action</TableCell>
              
            </TableRow>
            {
              users && users.map((DataList, id) => (
                <TableRow key={id}>
                  <TableCell className='Table-Data'>{id + 1}</TableCell>
                  <TableCell className='Table-Data'>{DataList.fullname}</TableCell>
                  <TableCell className='Table-Data'>{DataList.address}</TableCell>
                  <TableCell className='Table-Data'>{DataList.mobile}</TableCell>
                  <TableCell className='Table-Data'>{DataList.emailid}</TableCell>
                  <TableCell className='Table-Data'>{DataList.state}</TableCell>
                  <TableCell className='Table-Data'>{DataList.city}</TableCell>
                  <TableCell className='Table-Data'>{DataList.uLevel}</TableCell>
                  <TableCell className='Table-Data'>{DataList.roleId}</TableCell>
                  <TableCell className='Table-Data'>{DataList.creditLimit}</TableCell>
                  <TableCell className='Table-Data'>{DataList.ASOId}</TableCell>
                  <TableCell className='Table-Data'>{DataList.yardId}</TableCell>
                  <TableCell className='Table-Data'>{DataList.BMId}</TableCell>
                  <TableCell className='Table-Data'>{DataList.yardList}</TableCell>
                  <TableCell className='Table-Data'>{DataList.employeeJoiningDate}</TableCell>
                  <TableCell className='Table-Data'>{DataList.status}</TableCell>
                  <TableCell className='Table-Data'>{DataList.reportingManager}</TableCell>
                  <TableCell className='Table-Data'>{DataList.password}</TableCell>
                  <TableCell className='Table-Data'> <button onClick={() => DeleteUser(DataList.id)}>Delete</button>
                    &nbsp; <button onClick={() => editRecord(DataList.id)}>Update</button>
                  </TableCell>
                </TableRow>
              ))

            }
          </TableHead>
        </Table>
      </div>
    </Fragment>
  )
}
export default AddUsers;;