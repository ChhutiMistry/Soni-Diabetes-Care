import React from "react";
import { createRoot } from 'react-dom/client';
import Routing from "./Routing";
const container = document.getElementById('rootofsdc');
const root = createRoot(container);
root.render(<Routing/>);