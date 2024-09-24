const options = {
    key: "snow",
    name: "Snow",
    particles: {
        number: {
            value: 800,
            density: {
                enable: true,
                area: 800
            },
        },
        color: {
            value: "#fff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: {
                min: 0.5,
                max: 1},
        },
        size: {
            value: {
                min: 3,
                max: 10
            },
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "bottom",
            straight: false,
        },
        wobble: {
            enable: true,
            distance: 10,
            speed: 10,
        },
        zIndex: {
            value: {
                min: 0,
                max: 100,
            },
            opacityRate: 10,
            sizeRate: 10,
            velocityRate: 10,
        },
    }
};

export default options;
