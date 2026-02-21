export function countWords(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
}

export function validateWordCount(text: string, min: number, max: number): string | null {
    const count = countWords(text);
    if (count < min) return `Must be at least ${min} words (currently ${count})`;
    if (count > max) return `Must be no more than ${max} words (currently ${count})`;
    return null;
}
