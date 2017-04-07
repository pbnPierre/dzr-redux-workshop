import React, {Component} from 'react';

// Components
import Message from './Message';

class Messages extends Component {

	render() {
		const {messages, onMessageDelete} = this.props;

		return (
			<ol className="room list-unstyled">
				{!messages.length ? <li><i className="fa fa-exclamation-triangle" /> No messages :'(</li> : null}
				{messages.map((message, i) =>
					<li key={'message_' + i}>
						<Message {...message} index={i} onMessageDelete={onMessageDelete} />
					</li>
				)}
			</ol>
		)
	}
}

export default Messages;
