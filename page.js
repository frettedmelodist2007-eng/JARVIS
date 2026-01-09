'use client';

import { useState } from 'react';

export default function Home() {
    const [thoughts, setThoughts] = useState('');
    const [leaveType, setLeaveType] = useState('School / College Leave');
    const [generatedLetter, setGeneratedLetter] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!thoughts.trim()) return;

        setLoading(true);
        setGeneratedLetter('');

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ thoughts, leaveType }),
            });

            const data = await response.json();

            if (response.ok) {
                setGeneratedLetter(data.letter);
            } else {
                setGeneratedLetter('Error: ' + (data.error || 'Failed to generate letter.'));
            }
        } catch (error) {
            setGeneratedLetter('Error: Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLetter);
        alert('Copied to clipboard!');
    };

    return (
        <main className="jarvis-container">
            <div className="jarvis-card">
                <h1 className="jarvis-title">JARVIS</h1>

                <div style={{ marginBottom: '20px' }}>
                    <label className="jarvis-label">Select Leave Type</label>
                    <select
                        className="jarvis-select"
                        value={leaveType}
                        onChange={(e) => setLeaveType(e.target.value)}
                    >
                        <option>School / College Leave</option>
                        <option>Office Leave</option>
                        <option>Medical Leave</option>
                        <option>Emergency Leave</option>
                    </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label className="jarvis-label">Dump your thoughts here</label>
                    <textarea
                        className="jarvis-input"
                        rows="4"
                        placeholder="e.g., tomorrow fever need 2 days leave dept cs sem 3 inform sir"
                        value={thoughts}
                        onChange={(e) => setThoughts(e.target.value)}
                    />
                </div>

                <button
                    className="jarvis-button"
                    onClick={handleGenerate}
                    disabled={loading || !thoughts.trim()}
                >
                    {loading ? (
                        <span><div className="loading-spinner"></div>PROCESSING...</span>
                    ) : (
                        'GENERATE LEAVE LETTER'
                    )}
                </button>

                {generatedLetter && (
                    <div className="jarvis-output">
                        <button className="copy-btn" onClick={copyToClipboard}>COPY</button>
                        <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                            {generatedLetter}
                        </div>
                    </div>
                )}

            </div>
            <footer>
                JARVIS &bull; LEAVE APPLICATION GENERATOR &bull; SYSTEM ONLINE
            </footer>
        </main>
    );
}
