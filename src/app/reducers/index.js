import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import RiderTypeReducer from './riderTypeReducer'
import ticketfaretypesReducer from './ticketfaretypesReducer'
import vehicletierReducer from './vehicletiersReducer'
import stationsReducer from './stationsReducer'
import routesReducer from './routesReducer'
const allReducers=combineReducers({

    loginuser:LoginReducer,
    ridertypes:RiderTypeReducer,
    ticketfaretypes:ticketfaretypesReducer,
    vehicletier:vehicletierReducer,
    stations:stationsReducer,
    routes:routesReducer

});

export default allReducers; 