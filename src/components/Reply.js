import Plus from '../components/Plus';
import Minus from '../components/Minus';
import IconReply from './IconReply';

const Reply = ({ vote,name,month,comment,profile,reply }) => {
  return (
    <div className="reply">
        <div className="reply__button">
            <Plus />
            <span className="reply__vote">{vote}</span>
            <Minus />          
        </div>
        <div className="reply__contents">
            <div className="reply__header">
              <div className="reply__name">
                <img className="reply__person" src={profile} alt={name} />
                <h1 className="reply__person-name">{name}</h1>
                { name === 'juliusomo' && <span className="reply__you">you</span> }
                <span className="reply__month">{month}</span>
              </div>
              { name === 'juliusomo' ?  
                <div className="btn__action">
                    <button className="btn__delete"><img src="/images/icon-delete.svg" alt="delete" />Delete</button>
                    <button className="btn__edit"><img src="/images/icon-edit.svg" alt="edit" />Edit</button>
                </div>
                :
                <span className="reply__reply reply--cursor">
                    <IconReply />Reply
                </span>
              }
            </div>
            <div className="reply__comment-container">
                <p className="reply__comment"><span className="reply__replyingTo">@{ reply.replyingTo }</span> {comment}</p>
            </div>
        </div>
    </div>
  )
}

export default Reply