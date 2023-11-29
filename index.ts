export default function ClassList(...args: (string | null)[]): string {
    return args.filter(x => x && typeof x === 'string' && x !== '' && x !== ' ').join(' ');
}