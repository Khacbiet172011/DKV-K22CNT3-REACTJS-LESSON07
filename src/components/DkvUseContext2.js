import React, { useContext } from 'react'
import { ThemeContext } from '.DkvUseContext/'

export default function DkvUseContext2() {
    const theme = useContext(ThemeContext);
    return (
    <div className={theme}>
        <h2>DkvUseContext2</h2>
        <p>
            <b>2210900137</b>
            <b>Đỗ Khắc Việt</b>
            <i>K22CNT3</i>
        </p>
    </div>
  )
}
