import { useState } from 'react';
import PropTypes from 'prop-types';

const Feedback = (props/* ={...props, onSubmit:function(){null}} */) => {
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.onSubmit) props.onSubmit(event);

    if (Number(score) < 5 && comment.length < 10) {
      alert('Please provide detailed feedback');
    } else {
      setComment('');
      setScore('10');
      console.log(score, comment);
    }
  };

  return (
    <div className="feedback">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Feedback</h1>
          <div>
            <label htmlFor="score">Score:{score}⭐️</label>
            <input
              type="range"
              min={0}
              max={10}
              value={score}
              onChange={(event) => setScore(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

Feedback.propTypes = {
  onSubmit: PropTypes.func}

export default Feedback;
