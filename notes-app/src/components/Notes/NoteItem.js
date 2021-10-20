import NoteDate from './NoteDate';
import PropTypes from 'prop-types';

const NoteItem = (props) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <div className="card-header">
          <h4 className="text-center">{props.title.toUpperCase()}</h4>
        </div>
        <div className="card-body">
          <p className="lead">Amount : ${props.amount}</p>
            <NoteDate createdAt = {props.createdAt}/>
        </div>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  title : PropTypes.string,
  amount : PropTypes.number,
  createdAt : PropTypes.instanceOf(Date)
}

export default NoteItem;

