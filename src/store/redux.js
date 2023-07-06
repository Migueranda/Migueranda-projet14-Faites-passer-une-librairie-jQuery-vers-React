import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk';
import logger from 'redux-logger'


// état initial qui permet la façon dont s'affichage l'employé crée dans la table
const initialState = {
    errorMessage : false,    
    employeeList: [
        {firstName: 'José', lastName:'Martinez', startDate: '04/05/2023',  birth: '10/04/1992', street: 'é Av la rose', city: 'toulouse', tate:'Alaska', zipCode: '23232', departement: 'Sales',},
     
        {firstName: 'José', lastName:'Martinez', startDate: '04/05/2023',  birth: '09/13/2024', street: '10 Av la rose', city: 'toulouse' , state:'Alabama',  zipCode: '23246',  departement: 'Sales',}, 
    ]
}
// employeesSlice permet d'ajouter un nouveau employé dans la table
const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers:{
        addEmployee: (state, action) => {            
            state.employeeList.push(action.payload) ;             
        }
    },
    // middleware: [thunk]
    
});

const initialStateFormValidation = {
    validation : 'NONE', // 'NONE' / 'SUCCESS' / 'ERROR' 
    err_lastname : false,
    err_firstname : false,
    err_street: false,
    err_city: false,
    err_state: false,
    err_zipCode: false,
    err_departement: false,
}

// validationFormSlice : gére la validation de chaque chaps du formulaire
const validationFormSlice = createSlice({
    name: 'formEmployees',
    initialState : initialStateFormValidation,
    reducers:{
        checkData: (state, action) => {
            // initialisation du state à chaque appel de checkData
            Object.assign(state, initialStateFormValidation)
            // init à success
            state.validation = 'SUCCESS'
            // vérification des différentes valeurs issues du formulaire
            if (action.payload.firstName.length === 0){
                state.err_firstname = true
                state.validation = 'ERROR'
            }
            if (action.payload.lastName.length === 0){
                state.err_lastname = true
                state.validation = 'ERROR'
            }
            if (action.payload.street.length === 0){
                state.err_street = true
            }
             if(action.payload.city.length === 0){
                state.err_city = true
                state.validation = 'ERROR'
            }   
            if(action.payload.state.length === 0){
                state.err_state = true
                state.validation = 'ERROR'
            } 
            if(action.payload.zipCode.length === 0){
                state.err_zipCode = true
                state.validation = 'ERROR'
            } 
            if(action.payload.departement.length === 0){
                state.err_departement = true
                state.validation = 'ERROR'
            } 
                    
        },
        setInit: (state, action) => {
            // initialisation du state à chaque appel de checkData
            Object.assign(state, initialStateFormValidation)
        }
    }, 
    
});

export const {addEmployee} = employeesSlice.actions
export const {checkData, setInit} = validationFormSlice.actions


// Mise en place de "Persist state with Redux Persist" pour la sauvagarde de donnés
const persistConfig = {
    key: 'root',
    whitelist: ['employees'], // seulement le reducer 'employees' est persistant
    storage,
}

const rootReducer = combineReducers({ 
    employees: employeesSlice.reducer,    
    formEmployees : validationFormSlice.reducer
})

const persistedReducer  = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
      
})

export const persistor = persistStore(store)
