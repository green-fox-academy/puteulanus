var car = {
    model:'Benz',
    color:'black',
    year:1886,
    doors:0,
    historical:true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower:{
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
};

var module1 = car.model;
var color1 = car.color;
var year1 = car.year;
var doors1 = car.doors;
var historical1 = car.historical;

var monitor_color1 = computer.monitor.color;
var tower_color1 = computer.tower.color;


let {model, color, year, doors, historical} = car;

let {
    monitor: {
        color: monitor_color
    },
    tower: {
        color: tower_color
    }
} = computer;

