import { ErrorSingle, SuccessSingle, WarningSingle } from '@univerjs/icons';
import clsx from 'clsx';
import { createRoot } from 'react-dom/client';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './index.module.less';

export type MessageType = 'success' | 'warning' | 'error';

export interface IMessageProps {
    key: number;
    type: MessageType;
    content?: string;
}

const iconMap = {
    success: <SuccessSingle className={styles.messageIconSuccess} />,
    warning: <WarningSingle className={styles.messageIconWarning} />,
    error: <ErrorSingle className={styles.messageIconError} />,
};

/**
 * Message Component
 */
export const Message = (props: IMessageProps) => {
    const { type, content } = props;

    const className = clsx(styles.messageContent, type);

    const messageElement = (
        <div className={styles.messageItem}>
            <div className={className}>
                <span className={styles.messageIcon}>{iconMap[type]}</span>
                <span>{content}</span>
            </div>
        </div>
    );

    return messageElement;
};

const MessageContainer = (props: { messages: IMessageProps[] }) => {
    const { messages } = props;

    return (
        <TransitionGroup className={styles.message}>
            {messages.map((message) => (
                <CSSTransition
                    key={message.key}
                    timeout={200}
                    classNames={{
                        enterActive: styles.enterActive,
                        enterDone: styles.enterDone,
                        exitActive: styles.exit,
                        exitDone: styles.exitActive,
                    }}
                >
                    <Message {...message} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

class MessageInstance {
    div: HTMLDivElement;
    root: ReturnType<typeof createRoot>;

    messages: IMessageProps[] = [];

    constructor() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        this.root = createRoot(this.div);

        this.render();
    }

    append(type: MessageType, options: IMessageMethodOptions) {
        // eslint-disable-next-line no-magic-numbers
        const { content, delay = 3000 } = options;
        const key = Date.now();

        this.messages.push({
            key,
            type,
            content,
        });

        setTimeout(() => {
            this.teardown(key);
        }, delay);

        this.render();
    }

    teardown(key: number) {
        this.messages = this.messages.filter((message) => message.key !== key);

        this.render();
    }

    render() {
        this.root.render(<MessageContainer messages={this.messages} />);
    }
}

type IMessageMethodOptions = { content: string; delay?: number };

const instance = new MessageInstance();

export const message = {
    success: (options: IMessageMethodOptions) => instance.append('success', options),
    warning: (options: IMessageMethodOptions) => instance.append('warning', options),
    error: (options: IMessageMethodOptions) => instance.append('error', options),
};
