import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [
    { id: 1, name: 'Phòng 101', price: 3000000, area: 25, status: 'Available' },
    { id: 2, name: 'Phòng 102', price: 3500000, area: 30, status: 'Rented' },
  ],
  selectedRoom: null,
  loading: false,
};

const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    selectRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
    },
  },
});

export const { setRooms, selectRoom, addRoom } = roomSlice.actions;
export default roomSlice.reducer;