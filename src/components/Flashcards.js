import React from 'react';
import Flashcard from './Flashcard';

class Flashcards extends React.Component {
  constructor(props){
    super(props);
    let flashcard = { id:1,
                      title: 'Card 1',
                      question: 'What is React?',
                      answer: 'A JavaScript Library'
                    };
    this.state = {flashcards: [flashcard] };
  }

  s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

guid() {
  return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
    this.s4() + '-' + this.s4() + this.s4() + this.s4();
}

handleSubmit = (e) => {
  e.preventDefault();
  let title = this.refs.title.value;
  let question = this.refs.question.value;
  let answer = this.refs.answer.value;
  console.log(title);
  let flashcard = {id: this.guid(), title, question, answer };
  this.setState({ flashcards: [...this.state.flashcards, flashcard] });
  this.refs.flashcardForm.reset();
  this.refs.title.focus();
}

editFlashcard = (id, updatedFlashcard) => {
  let flashcards = this.state.flashcards.map(flashcard => {
    if(flashcard.id === id)
      return updatedFlashcard
    else
      return flashcard
  });
  this.setState({ flashcards });
}

deleteFlashcard = (id) => {
  alert('Delete Flashcard');
  let flashcards =this.state.flashcards.filter( flashcard => {
  if(flashcard.id === id)
    return false
  else
    return true
});
this.setState({ flashcards });
}


displayFlashcards = () => {
  return this.state.flashcards.map( flashcard =>{
    return(<Flashcard key={flashcard.id} flashcard={flashcard}
           editFlashcard={this.editFlashcard} deleteFlashcard=
           {this.deleteFlashcard} />);
// going through all of the props above and passing the state down to
//child component as a property
  });
}

render () {
  return(
    <div>
      <h3>{this.props.title}</h3>
      <form ref='flashcardForm' onSubmit={ this.handleSubmit }>
        <input ref='title' type='text' required placeholder=' Card Title' />
        <br />
        <input ref='question' type='text' required placeholder='Question' />
        <br />
        <input ref='answer' type='text' required placeholder='Answer' />
        <br />
        <input type='submit' className='btn orange lighten-2' />
      </form>
      <hr/>
      <div className='row'>
      { this.displayFlashcards () }
      </div>
    </div>
   );
 }
}

export default Flashcards;
