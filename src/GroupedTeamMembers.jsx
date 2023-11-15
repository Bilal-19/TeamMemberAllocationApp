import { useState } from "react"

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())

    function groupTeamMembers() {
        var teams = []

        var teamAMembers = employees.filter((value) => value.teamName === 'TeamA')
        var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true }
        teams.push(teamA)

        var teamBMembers = employees.filter((value) => value.teamName === 'TeamB')
        var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
        teams.push(teamB)

        var teamCMembers = employees.filter((value) => value.teamName === 'TeamC')
        var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
        teams.push(teamC)

        var teamDMembers = employees.filter((value) => value.teamName === 'TeamD')
        var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true }
        teams.push(teamD)

        return teams
    }

    function handleTeamClick(event) {
        var newGroupData = groupedEmployees.map(
            (groupValues) => groupValues.team === event.currentTarget.id ? { ...groupValues, collapsed: !groupValues.collapsed } : groupValues
        )
        setGroupedData(newGroupData)
        setTeam(event.currentTarget.id)
    }
    return (
        <>
            <main className="container">
                {
                    groupedEmployees.map(
                        item => {
                            return (
                                <>
                                    <div key={item.team} className="card mt-2 text-center" style={{ cursor: "pointer" }}>
                                        <h4 id={item.team} className="card-header text-secondary bg-white fw-bold" onClick={handleTeamClick}>
                                            Team Name: {item.team}
                                        </h4>

                                        <div id={'collapse_' + item.team} className={item.collapsed === true ? "collapse" : ""}>
                                            <hr />
                                            {
                                                item.members.map(member => {
                                                    return (
                                                        <>
                                                            <div className="mt-2 mx-2">
                                                                <h5 className="card-title mt-2">
                                                                    <span className="text-dark">Full Name: {member.fullName}</span>
                                                                </h5>
                                                                <p>Designation: {member.designation}</p>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    )
                }
            </main>
        </>
    )
}

export default GroupedTeamMembers