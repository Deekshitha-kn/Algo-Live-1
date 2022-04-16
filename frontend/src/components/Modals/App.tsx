import { stack } from '@mui/material'
import './App.css'
import { muiButton } from './components/Modals/MuiButton'
import { MuiTextField } from './components/Modals/MuiTextFields'



function App() {
    return (
        <div className='App'>
            <MuiButton />
            <MuiTextField />
        </div>
    )
}

export default App