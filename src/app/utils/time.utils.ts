export class TimeUtils {
    static getTimeFromSeconds(seconds: number): string {
        const hours: number = Math.floor(seconds / (60 * 60));
        seconds -= hours * 60 * 60;
        const minutes: number = Math.floor(seconds / 60);
        seconds -= minutes * 60;

        return TimeUtils.formatWithZeros(hours, 2) + ':' +
            TimeUtils.formatWithZeros(minutes, 2) + ':' +
            TimeUtils.formatWithZeros(seconds, 2);
    }

    static getSecondsFromTime(time: string): number{
        const timeFragments: string[] = time.split(':');
        const hours: number = +timeFragments[0];
        const minutes: number = +timeFragments[1];
        const seconds: number = +timeFragments[2];
        
        return (hours * 60 * 60) + (minutes * 60) + seconds;
    }

    private static formatWithZeros(value: number, requiredPositions: number): string {
        let valueString: string = value.toString();
        let integerFragment: string = valueString.split('.')[0];
        let decimalFragment: string = valueString.split('.')[1] ? valueString.split('.')[1] : '';

        while(integerFragment.length < requiredPositions) {
            integerFragment = '0' + integerFragment;
        }

        if (decimalFragment) {
            decimalFragment = '.' + decimalFragment.substr(0, 2);
        }

        return integerFragment + decimalFragment;
    }
}