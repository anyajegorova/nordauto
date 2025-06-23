import React from 'react'
import { TeamMember } from '../data/team'
import './styles/teamCard.css'

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="team-card">
      <img
        className="team-card__photo"
        src={member.photo}
        alt={member.name}
      />
      <div className="team-card__info">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <p className="team-card__experience">Experience: {member.experience} years</p>
      </div>
    </div>
  )
}

export default TeamCard
