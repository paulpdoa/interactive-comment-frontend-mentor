import Plus from '../components/Plus';
import Minus from '../components/Minus';
import IconReply from './IconReply';
import { useSelector,useDispatch } from 'react-redux';
import { addScore } from '../features/score';

const Card = ({ vote, profile, name, month, comment, data }) => {

  const dispatch = useDispatch();
  const plus = useSelector(state => state.score.value);
  
  return (
    <div className="card">
        <div className="card__button">
            <div onClick={() => dispatch(addScore({ add: 1 }))} className="pointer">
              <Plus id={data.id} />
            </div>
            <span className="card__vote">{vote}</span>
            <div className="pointer">
              <Minus />    
            </div>
        </div>
        <div className="card__contents">
            <div className="card__header">
              <div className="card__name">
                <img className="card__person" src={profile} alt={name} />
                <h1 className="card__person-name">{name}</h1>
                <span className="card__month">{month}</span>
              </div>
              <span className="card__reply reply--cursor">
                <IconReply />Reply
              </span>
            </div>
            <div className="card__comment-container">
                <p className="card__comment">{comment}</p>
            </div>
        </div>
    </div>
  )
}

export default Card