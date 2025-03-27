	const enum XbDirection {
    //% block="one"
    Forward = 0,
    //% block="two"
    Left = 1,
    Right = 2,
    Backward = 3,
}
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\f2db"
//% groups="['Motors', 'Ultrasonic']"
namespace Xb {
    /**
     * Make the car drive in a specified direction, at a specified speed
     * @param direction Specify direction for the car to drive towards, eg: XbDirection.Forward
     * @param speed Choose the speed of the motor (0-100), eg: 60%
     */
    //% speed.min=0 speed.max=100
    //% block="Go $direction at speed $speed% \\%"
    //%group="Motors" weight=99
    export function run(direction: XbDirection, speed: number): void {
        switch(direction){
            case XbDirection.Forward:
                kBit.run(KBitDir.RunForward, speed)
                break;
            case XbDirection.Left:
                kBit.run(KBitDir.TurnLeft, speed)
                break;
            case XbDirection.Right:
                kBit.run(KBitDir.TurnRight, speed)
                break;
            case XbDirection.Backward:
                kBit.run(KBitDir.RunBack, speed)
                break;
        }
    }
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="Stop car \\%"
    //% group="Motors" weight = 98
    export function stop(): void {
        kBit.carStop()
    }
    //%block="Ultrasonic value \\%"
    //%group="Ultrasonic" weigth = 99
    export function ultrasonic(): number{
        return kBit.ultra()
    }
}
