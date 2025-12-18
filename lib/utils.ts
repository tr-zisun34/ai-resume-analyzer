/**
 * Formats a file size in bytes to qa human-readable
 */
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";


export function formatSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";

    const units = ["Bytes", "KB", "MB", "GB", "TB"] as const;
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const value = bytes / Math.pow(1024, i);

    return `${value.toFixed(2)} ${units[i]}`;
}


export const generateUUID = () => crypto.randomUUID();

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}