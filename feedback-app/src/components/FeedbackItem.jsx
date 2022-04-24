import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/Card'
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="#020202"/>
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
