import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './slices/orderSlice'
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'
import messageReducer from './slices/messageSlice'

const store = configureStore({
    reducer: {
        order: orderReducer,
        auth: authReducer,
        user: userReducer,
        messages: messageReducer
    }
})

export default store