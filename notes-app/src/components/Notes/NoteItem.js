import NoteDate from './NoteDate';

const NoteItem = (props) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">{props.title.toUpperCase()}</h4>
        </div>
        <div className="card-body">
          <p className="lead">Amount : {props.amount}</p>
            <NoteDate createdAt = {props.createdAt}/>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
