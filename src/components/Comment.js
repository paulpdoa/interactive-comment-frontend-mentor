
const Comment = () => {
  return (
    <div className="comment">
        <img className="comment__photo" src="/images/avatars/image-juliusomo.png" alt="juliusomo" />
        <div className="comment__action">
            <input className="comment__comment" type="text" placeholder="Add a comment..." />
            <button className="comment__send">SEND</button>
        </div>
    </div>
  )
}

export default Comment