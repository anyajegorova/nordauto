import React from 'react'
import { TEAM } from '../data/team'
import TeamCard from './TeamCard'
import './styles/teamSection.css'
import LargeText from './LargeText'

const TeamSection = () => {
  return (
    <section className="team-section">
      <LargeText>Meet Our Team</LargeText>
      <div className="team-section__grid">
        {TEAM.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
