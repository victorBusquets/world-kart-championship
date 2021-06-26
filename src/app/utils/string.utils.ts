export class StringUtils {
    static getHashMapKeyFormatted(key: string): string {
        const searchRegExp: RegExp = /\ /g;
        const replaceWith:  string = '-';
        
        return key?.toLowerCase()?.replace(searchRegExp, replaceWith);
    }
}