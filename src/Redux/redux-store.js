import { configureStore } from '@reduxjs/toolkit';
import HolstReduser from './HolstReduser';


let store = configureStore({
    reducer: {
        Holst_State: HolstReduser,
    }
});

window.store = store;

export default store;