/* eslint-disable react/prop-types */
import maleProfile from "/images/maleProfile.jpg"
import femaleProfile from "/images/femaleProfile.jpg"
const EmployeeCard = ({ employees, selectedTeam, handleEmployeeCardClick }) => {
    return (
        <>
            <div className="card-collection">
                {employees.map((item) => (
                    <>
                        <div key={item.id} id={item.id} className={(item.teamName === selectedTeam ? "card m-2 standout" : "card m-2")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
                            <img src={item.gender === 'male' ? maleProfile : femaleProfile} className='card-img-top' />
                            <div id={item.id} className="card-body">
                                <h6 className='card-title'>Full Name: {item.fullName}</h6>
                                <h6 className='card-title'>Designation: {item.designation}</h6>
                            </div>

                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default EmployeeCard