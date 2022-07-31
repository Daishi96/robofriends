import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

//this is a smart comp, it can change
class App extends Component{

	constructor(){
		super();
		//something that can change, it lives in parent comp
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		//winodw obj method to make requests to servers
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
		console.log('check');
	}

//method to search
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
		//this now referes to input in searchBox, use = and => on method
		/*const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})*/

	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().startsWith(searchfield.toLowerCase());
		})

	return (
		<div className='tc'>
		<h1 className='f1'>RoboFriends </h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
			<CardList robots = {filteredRobots}/>
		</Scroll>
		</div>
		);	
	}

}

export default App;