import React, { useState } from 'react'

const Header = ({text}) => {
  return(
    <>
    <h1>{text}</h1>
    </>
  )
}

const Button = ({funct, text}) => {
  return(
  <>
  <button onClick={funct}>{text}</button>
  </>
  )
}

const Votes = ({votes}) => {
  if (votes === 0){
    return(
      <>
      has no votes
      </>
    )
  }
  return(
    <>
    has {votes} votes
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  let copyVotes = [...votes]

  const onVoteButtonClick = () => {
    copyVotes[selected] = copyVotes[selected] + 1
    setVotes(copyVotes)
  }

  const determineMaxVotes = () => {
    var maxVotes = 0
    var anecdoteShown = anecdotes[0]
    for (let i=0; i < anecdotes.length; i++){
      if(votes[i] > maxVotes){
        maxVotes = votes[i]
        anecdoteShown = anecdotes[i]
        }
    }
    return (
      <>
      {anecdoteShown}
      <br/>
      has {maxVotes} votes
      </>
    )
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      {anecdotes[selected]}
      <br/>
      <Votes votes={votes[selected]}/>
      <br/>
      <Button funct={() => onVoteButtonClick()} text="vote"/>
      <Button funct={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote"/>
      <Header text="Anecdote with most votes"/>
      {determineMaxVotes()}
    </div>
  )
}

export default App