import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      // dont have do worry about state imutability by destructuring the state and copying to a new object
      // because immer takes care about that under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    //decrement
    decrementOne(state) {
      state.value--;
    },
    amountDecremented(state, action: PayloadAction<number>) {
      state.value -= action.payload
    },
    reset(state) {
      state.value = 0
    }
    //reset
  }
});

export const { incremented, amountAdded, decrementOne, amountDecremented, reset } = counterSlice.actions;

export default counterSlice.reducer;
