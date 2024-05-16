import React, { createContext, useState } from 'react'
import DkvUseContext1 from './DkvUseContext1';
export const ThemeContext = createContext(); // tạo ngữ cảnh để chia sẻ

export default functionDkvUseContext() {
    //state
    const [theme,setTheme] = useState('red');

    //hàm thay đổi theme
    const ndkVandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value ={theme}>
    <div className='alert'>
        <h2>Demo useContext</h2>
        <DkvUseContext1/>
        <button onClick={ndkVandleChange}>Change bgColor</button>
    </div>
    </ThemeContext.Provider>
  )
}
