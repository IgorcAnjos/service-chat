import './App.css';
import { io } from 'socket.io-client';

function App() {
	const socket = io('http://localhost:8080', {});
	socket.on('click', (event) => console.log(event));
	console.log(socket);

	return (
		<>
			<button onClick={() => socket.emit('click', { oi: 'oincisjdnfjnj' })}>Click</button>
			<button onClick={() => socket.emit('caguei', { caguei: 'caguei' })}>Caguei</button>
		</>
	);
}

export default App;
