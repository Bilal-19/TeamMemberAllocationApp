/* eslint-disable react/prop-types */
import TeamMemberCategories from "./TeamMemberCategories"
import EmployeeCard from "./EmployeeCard"

const Employee = ({
    selectedTeam,
    handleTeamSelectionChange,
    handleEmployeeCardClick,
    employees
}) => {

    return (
        <>
            <main className="container">
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-6">
                        <TeamMemberCategories selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
                    </div>
                </div>
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-8">
                        <EmployeeCard employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} />
                    </div>
                </div>

            </main>
        </>
    )
}

export default Employee