import Header from './Components/Header'
import Footer from './Components/Footer'
import Employee from './Employee'

// importing hooks
import { useEffect, useState } from 'react'

import { employeeDB } from './EmployeeData' //importing data

// import routing for navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GroupedTeamMembers from './GroupedTeamMembers'
import Navigation from './Navigation'
import NotFound from './NotFound'

// import style sheet
import './App.css'

function App() {
  // JSON.parse - convert JSON string into object
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB")
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || employeeDB);

  function handleTeamSelectionChange(event) {
    console.log(event.target.value)
    setSelectedTeam(event.target.value)
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map(
      (value) => value.id === parseInt(event.currentTarget.id) ?
        (value.teamName === selectedTeam) ?
          { ...value, teamName: "" } :
          { ...value, teamName: selectedTeam } :
        value
    )
    setEmployees(transformedEmployees)
  }

  const countTeamMember = employees.filter(
    (value) => value.teamName === selectedTeam
  ).length

  useEffect(() => {
    // saving the employee array to local storage
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])


  useEffect(() => {
    // saving the selected team to local storage
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Header
          selectedTeam={selectedTeam}
          teamMemberCount={countTeamMember}
        />

        <Routes>
          <Route
            path='/'
            element={
              <Employee
                selectedTeam={selectedTeam}
                handleTeamSelectionChange={handleTeamSelectionChange}
                handleEmployeeCardClick={handleEmployeeCardClick}
                employees={employees}
              />
            }>
          </Route>

          <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setSelectedTeam} />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
