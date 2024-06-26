import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                key: 1,
                isVisited: true,
                title: "Lago",
                imgUrl: "https://images.unsplash.com/photo-1708876954270-8fad10609e53?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quod?"
            },
            {
                key: 2,
                isVisited: false,
                title: "Oceano",
                imgUrl: "https://images.unsplash.com/photo-1695770169767-9bd2ca14a3c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolores eum assumenda, id eius quo ipsam deleniti natus saepe ea!"
            },
            {
                key: 3,
                isVisited: true,
                title: "Persone",
                imgUrl: "https://images.unsplash.com/photo-1697397380024-01fb8332cc82?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo aliquid eaque nostrum quibusdam tempora!"
            },
            {
                key: 4,
                isVisited: false,
                title: "Spiaggia",
                imgUrl: "https://plus.unsplash.com/premium_photo-1673002094359-6e2de18bf37b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sint asperiores distinctio possimus temporibus cumque assumenda officiis ullam eaque doloribus sequi eos perferendis vel aspernatur, a magnam beatae, voluptas sapiente?"
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer