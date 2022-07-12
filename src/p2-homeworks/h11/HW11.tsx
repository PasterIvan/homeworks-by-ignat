import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const min = 0
    const max = 100

    const [value1, setValue1] = useState<number>(min)
    const [value2, setValue2] = useState<number>(max)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <SuperRange
                    onChangeRange={(value ) => {setValue1(value)}}
                    value={value1}
                />
            </div>

            <div>
                <SuperDoubleRange
                    min={min}
                    max={max}
                    onChange={({value1, value2}) => {setValue1(value1); setValue2(value2)}}
                    value1={value1}
                    value2={value2}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
