import React from 'react';

class Flashcard extends React.Component {
  constructor(props){
  super(props);
  this.state = { editing: false, showanswer: false};
}

toggleAnswer = () => {
  this.setState({ showanswer: !this.state.showanswer});
}

toggleEdit = () => {
  this.setState({ editing: !this.state.editing });
}

display() {
  if(this.state.showanswer === false) {
    return (
      <div className ='col s12 m4'>
        <h3>{this.props.flashcard.title}</h3>
        <p>{this.props.flashcard.question}</p>
        <button onClick={ this.toggleAnswer } className='btn amber'>Show Answer</button>
        <br />
        <button onClick={ this.toggleEdit } className='btn color green lighten-2'>Edit</button>
        <button onClick={ () => this.props.deleteFlashcard(this.props.flashcard.id) }
           className='btn red lighten-1'>Delete</button>
      </div>
    );
  }
  else {
    return (
      <div className ='col s12 m4'>
        <h3>{this.props.flashcard.title}</h3>
        <p>{this.props.flashcard.answer}</p>
        <button onClick={ this.toggleAnswer } className='btn'>Show Answer</button>
        <button onClick={ this.toggleEdit } className='btn'>Edit</button>
        <button onClick={ () => this.props.deleteFlashcard(this.props.flashcard.id) }
           className='btn red'>Delete</button>
      </div>

    );
  }
}

handleSubmit = (e) => {
  e.preventDefault();
  let title = this.refs.title.value;
  let question = this.refs.question.value;
  let answer = this.refs.answer.value;

  let updatedFlashcard = { id: this.props.flashcard.id, title, question, answer }
  this.props.editFlashcard(this.props.flashcard.id, updatedFlashcard);
  this.toggleEdit();
}

edit () {
  return(
    <div className='col s12 m4'>
      <h3>Editing: {this.props.flashcard.title}</h3>
      <form onSubmit={this.handleSubmit } >
        <input ref='title' type='text' required defaultValue={this.props.flashcard.title}/>
        <br />
        <input ref='question' type='text' required defaultValue={this.props.flashcard.question}/>
        <br />
        <input ref='answer' type='text' required defaultValue={this.props.flashcard.answer}/>
        <br />
        <button type='button' className='btn green' onClick={this.toggleEdit}>Cancel</button>
        <input type='submit' className='btn' />
      </form>
      </div>
  )
}

render () {
  if(this.state.editing)
    return this.edit();
  else
    return this.display();
 }
}
export default Flashcard;
