import { ClipboardEventHandler } from "react";

export type dataIdInputPropsType = Partial<
    React.InputHTMLAttributes<HTMLInputElement> & {
        "data-testid"?: string;
        defaultValue?: string | number | readonly string[] | undefined;
        onCopy?: ClipboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    }
>;