

const Header = (props) => 

  <header>
  <h1>{props.title}</h1> 
  <span className="stats">Players : {props.totalPlayers}</span>
  </header>
;

 
class Player extends React.Component {
  render(){
   return (
    <div className="player">
    <span className="player-name">
    {this.props.name}
    </span>
    
    <Counter score={this.props.score}/>
    </div>
  );
  }
}

class Counter extends React.Component {
  
    state = {
      score:0};
add = () => {
   this.setState( prevState => ({
     
      score:prevState.score + 1
    
}))
}
minus = () => {
   this.setState( prevState => ({
      score:prevState.score - 1  
}))
}
    
  render(){
   return (
    <div className="counter">
    <button onClick={this.minus} className="counter-action decrement"> - </button>
    <span className="counter-score">{this.state.score}</span>
    <button onClick={this.add} className="counter-action increment"> + </button>
    </div>    
   );
  };
 
}

class App extends React.Component {
  state = {
      players:[
  {
    name: "Guil",    
    id:1
  },
  {
    name: "Treasure",    
    id:2
  },
  {
    name: "Ashley",    
    id:3
  },
  {
    name: "James",
    id:4
  }
  ]};
handleRemovePlayer = (id) => {
  this.setState (prevState => {
    players: this.state.players.filter()
  render(){
   return (
    <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={this.state.players.length} />
    
  
    
    {/* Players list */}
{this.state.players.map(player => <Player                           name={player.name} 
score={player.score}
key={player.id.toString()}                          
/>
                         )}
    
   
   
    </div>
    );
}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
