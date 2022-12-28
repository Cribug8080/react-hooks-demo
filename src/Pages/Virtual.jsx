import { useRef } from 'react';
import { useVirtualList } from 'ahooks';
import { Select, InputNumber } from 'antd';

const originList = Array.from(Array(9999).keys());
const options = new Array(5).fill(1).map((v, i) => ({
    label: i,
    value: i
}));

export default () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    const [list, scrollTo] = useVirtualList(originList, {
        containerTarget: containerRef,
        wrapperTarget: wrapperRef,
        itemHeight: 60,
        overscan: 10,
    });
    return (
        <div>
            <div style={{ textAlign: 'right' }}>
                scroll to2 <InputNumber onChange={scrollTo} />
            </div>
            <div ref={containerRef} style={{ height: '300px', border: '1px solid', overflow: 'auto' }}>
                <div ref={wrapperRef}>
                    {
                        list.map(v => (
                            <div style={{ height: '58px', border: '1px solid' }}>
                                {v.data}
                                <Select options={options} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};