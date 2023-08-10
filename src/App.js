import './App.css';
import GameTable from './Components/GameTable/GameTable';
export default function App() {
	const board = [
		['X', null, null],
		['O', 'O', 'X'],
		['X', null, null]
	];
	return (
		<div className="App">
			<header className="App-header">
				<h1>Tic Tac Toe</h1>
				<GameTable />
			</header>
		</div>
	);
}


