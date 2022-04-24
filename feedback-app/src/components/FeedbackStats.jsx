import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  
  /* Calculate Ratings Average */
  let average = feedback.reduce((acc, curr)=>{
    return acc + curr.rating;
  }, 0) / feedback.length;


  /* Lo que hace esta funcion toFixed() es forzar que el numero siempre tenga un decimal, y luego con .replace lo que hacemos es decirle que si el numero tiene un .0 o ,0 lo reemplace por espacio en blanco, entonces tener 9 no mostrara 9.0, y tener 8.5 si mostrara 8.5 */
  average = average.toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
