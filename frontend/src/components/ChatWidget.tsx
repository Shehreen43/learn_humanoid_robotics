import React, { useState, useEffect } from 'react';
import styles from './ChatWidget.module.css';
import { useLocation } from '@docusaurus/router';

interface Message {
    role: 'user' | 'bot';
    content: string;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [selection, setSelection] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleSelection = () => {
            const text = window.getSelection()?.toString();
            if (text && text.length > 10) {
                setSelection(text);
            } else {
                setSelection('');
            }
        };

        document.addEventListener('mouseup', handleSelection);
        return () => document.removeEventListener('mouseup', handleSelection);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        const context = selection;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');
        setLoading(true);
        setSelection(''); // Clear selection after sending

        try {
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg, context }),
            });
            const data = await response.json();
            setMessages(prev => [...prev, { role: 'bot', content: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', content: "Error: Could not reach the robot brain." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.widgetContainer}>
            {!isOpen && (
                <button className={styles.toggleButton} onClick={() => setIsOpen(true)}>
                    🤖 Ask AI
                </button>
            )}

            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <h3>AI Robotics Assistant</h3>
                        <button onClick={() => setIsOpen(false)}>✖</button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map((m, i) => (
                            <div key={i} className={`${styles.message} ${m.role === 'user' ? styles.user : styles.bot}`}>
                                {m.content}
                            </div>
                        ))}
                        {loading && <div className={styles.message + ' ' + styles.bot}>Thinking...</div>}
                    </div>

                    {selection && (
                        <div className={styles.contextHint}>
                            Returning answer based on selection: "{selection.slice(0, 30)}..."
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className={styles.inputArea}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={selection ? "Ask about highlighted text..." : "Ask a question..."}
                        />
                        <button type="submit">➤</button>
                    </form>
                </div>
            )}
        </div>
    );
}
