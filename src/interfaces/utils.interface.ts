import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export type StateSetter<T> = Dispatch<SetStateAction<T>>;

export type ElementProps<T = HTMLElement> = DetailedHTMLProps<HTMLAttributes<T>, T>;