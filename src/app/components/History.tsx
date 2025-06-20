import React from 'react'
import './styles/footer.css'
import './styles/history.css'
import { autoMechanicsHistory } from '../data/history'
import LargeText from './LargeText'

const History = () => {
  return (
    <div className="history-container">
      <LargeText>{autoMechanicsHistory.title}</LargeText>
      <div className="history-content">
        <div className="history-text-signature">
          <div className="history-text">
            <p>{autoMechanicsHistory.content}</p>
          </div>
          <div className="history-signature">
            <img src="/signature.png" alt="Signature" />
          </div>
        </div>
        <div className="history-image">
          <img src="/auto-mechanic.jpg" alt="Auto Mechanics" />
        </div>
      </div>
    </div>
  )
}

export default History
