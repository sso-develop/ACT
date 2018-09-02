import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter as Router,
    Route
} from 'react-router-dom';


import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Definition from './component/Definition.jsx';
import Instance from './component/Instance.jsx';
import History from './component/History.jsx';
import Group from './component/Group.jsx';
import User from './component/User.jsx';
import InstanceApproval from './component/InstanceApproval.jsx';
const pageRoute = (
    <Router>
        <App>
             <Route exact path="/" component={Definition} />
             <Route exact path="/group" component={Group} />
             <Route exact path="/user" component={User} />
             <Route exact path="/definition" component={Definition} />
             <Route exact path="/instance" component={Instance} />
			 <Route exact path="/instance/instanceApproval/:taskId" component={InstanceApproval} />
             <Route exact path="/history" component={History} />
             
        </App>
    </Router>
);

ReactDOM.render(pageRoute, document.getElementById('root'));
registerServiceWorker();
