import React from 'react'
import './styles/footer.css'
import './styles/history.css'
import { autoMechanicsHistory } from '../data/history'
import LargeText from './LargeText'

const highlightWords = [
  { word: '1998', key: 'year' },
  { word: 'family-run garage', key: 'family' },
  { word: 'quality workmanship', key: 'quality' },
  { word: 'transparency', key: 'transparency' },
  { word: 'customer care', key: 'care' },
  { word: 'advanced diagnostics', key: 'diagnostics' },
  { word: 'modern repair techniques', key: 'repair' },
  { word: 'customer lounge', key: 'lounge' },
  { word: 'training', key: 'training' },
  { word: 'reliability', key: 'reliability' },
  { word: 'expertise', key: 'expertise' },
  { word: 'automobiles', key: 'automobiles' },
];

function highlightText(text: string) {
  let result = text;
  highlightWords.forEach(({ word, key }) => {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(regex, `<span class='history-highlight'>$1</span>`);
  });
  return result;
}

const History = () => {
  return (
    <div className="history-container">
      <LargeText>{autoMechanicsHistory.title}</LargeText>
      <div className="history-content">
        <div className="history-text-signature">
          <div className="history-text">
            <p dangerouslySetInnerHTML={{ __html: highlightText(autoMechanicsHistory.content) }} />
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
