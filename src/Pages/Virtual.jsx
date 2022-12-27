import { useRef } from 'react';
import { useVirtualList } from 'ahooks';

const originList = Array.from(Array(9999).keys());

export default () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    const [list] = useVirtualList(originList, {
        containerTarget: containerRef,
        wrapperTarget: wrapperRef,
        itemHeight: 60,
        overscan: 10,
    });
    return (
        <div ref={containerRef} style={{ height: '300px', border: '1px solid' }}>
            <div ref={wrapperRef}>
                {
                    list.map(v => (
                        <div style={{ height: '58px', border: '1px solid' }}>{v.data}</div>
                    ))
                }
            </div>
        </div>
    );
};
