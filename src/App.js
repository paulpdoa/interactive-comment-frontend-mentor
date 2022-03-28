import Card from "./components/Card";
import Reply from "./components/Reply";
import Comment from "./components/Comment";
import Datas from "./data.json";

function App() {
  return (
    <main>
      { Datas.comments.map((data) => (
        <>
        <Card 
          key={data.id}
          vote={data.score} 
          comment={data.content} 
          month={data.createdAt} 
          profile={data.user.image.png}
          name={data.user.username}
          replies={data.replies}
          data={data}
        />
        <div className="replies">
          { data.replies.map((reply) => (
            <Reply 
              key={reply.id}
              vote={reply.score} 
              comment={reply.content} 
              month={reply.createdAt} 
              profile={reply.user.image.png}
              name={reply.user.username}
              reply={reply}
            />
          )) }
        </div>
        </>
      )) }
      <Comment />
    </main>
  );
}

export default App;
