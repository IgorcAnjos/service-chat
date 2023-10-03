import React, { createContext } from 'react';
import { Socket, io } from 'socket.io-client';
import { SERVER_SOCKET_URL } from '../../environment';
import { EventData } from '../../types/socket';

interface SocketProviderProps {
	children: React.ReactNode;
}

interface SocketContextProps {
	createSocketClient: () => Promise<Socket | undefined>;
	emitEvent: () => Promise<EventData | undefined>;
}

const initialSocketContextValue: SocketContextProps = {
	createSocketClient: async () => undefined,
	emitEvent: async () => undefined,
};

export const SocketContext = createContext<SocketContextProps>(initialSocketContextValue);

export class SocketProvider extends React.Component<SocketProviderProps> {
	constructor(props: SocketProviderProps) {
		super(props);

		this.state = {
			createSocketClient: this.createSocketClient,
			emitEvent: this.emitEvent,
		};
	}

	public async createSocketClient(): Promise<Socket | undefined> {
		const currentSocket = io(SERVER_SOCKET_URL).on('connect', (): void => {
			console.log(`Socket ${currentSocket.id} conectado`);

			currentSocket.on('disconnect', () => {
				console.log(`Socket ${currentSocket.id} desconectado`);
			});
		});

		if (currentSocket) {
			return currentSocket;
		}
	}

	public emitEvent(socket: Socket, eventData: EventData, eventName: string, EventId: string) {
		try {
			socket.emit(eventName, eventData);
			console.log(EventId);
		} catch (e) {
			console.log(e);
		}
	}

	// static listenEvents()

	render() {
		return <SocketContext.Provider value={this.state as SocketContextProps}>{this.props.children}</SocketContext.Provider>;
	}
}
