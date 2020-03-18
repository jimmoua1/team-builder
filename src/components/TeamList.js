import React, {} from 'react';

import TemMemberDisplay from './TeamMemberDisplay';

const TeamList = (props) => {

    return(
        <main className="team-list">
            <table>
                <tbody>
                    {
                        props.teamMemberlist.map( (teamMember, i) => {
                            return (
                              <TeamMemberDisplay
                                teamMember={teamMember}
                                teamMemberList={props.teamMemberList}
                                key={"team-" + i.toString().padStart(2, "0")}
                              />
                            );
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}

export default TeamList.js