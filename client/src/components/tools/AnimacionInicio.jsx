import { useEffect, useRef } from "react";
import KUTE from "kute.js";

export const AnimacionInicio = () => {
    let refBlob1 = useRef(null),
        refBlob2 = useRef(null);
    useEffect(() => {
        KUTE.fromTo(
            refBlob1.current,
            { path: refBlob1.current },
            { path: refBlob2.current },
            { repeat: 999, duration: 3000, yoyo: true }
        ).start();
    }, [refBlob1, refBlob2]);

    return (
        <svg
            className="blob-motion"
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
        >
            <g transform="translate(437.5940594979618 283.7733414069437)">
                <path
                    ref={refBlob1}
                    d="M177.8 -176.8C214.1 -141.4 216 -70.7 208.7 -7.3C201.4 56.1 184.9 112.2 148.5 160.5C112.2 208.9 56.1 249.4 10.4 239.1C-35.4 228.7 -70.7 167.4 -105.7 119C-140.7 70.7 -175.4 35.4 -184.7 -9.3C-194 -54 -178 -108 -143 -143.3C-108 -178.6 -54 -195.3 8.4 -203.7C70.7 -212 141.4 -212.1 177.8 -176.8"
                    fill="#E84616"
                ></path>
            </g>
            <g transform="translate(444.19801427686446 315.9711062412756)">
                <path
                    ref={refBlob2}
                    style={{ visibility: "hidden" }}
                    d="M146.1 -145.3C187.1 -105.1 216.6 -52.6 225.6 9.1C234.7 70.7 223.4 141.4 182.4 166.9C141.4 192.4 70.7 172.7 17.7 155C-35.4 137.4 -70.7 121.7 -114.4 96.2C-158 70.7 -210 35.4 -216.3 -6.2C-222.5 -47.8 -183 -95.7 -139.4 -135.9C-95.7 -176 -47.8 -208.5 2.4 -210.9C52.6 -213.2 105.1 -185.5 146.1 -145.3"
                    fill="#E84616"
                ></path>
            </g>
        </svg>
    );
};
