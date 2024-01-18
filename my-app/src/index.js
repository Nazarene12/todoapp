import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error("Could not find container with id 'root'");

const root = createRoot(container);


root.render(<App />);
