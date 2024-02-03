import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export function Button({children, ...props }: IButtonProps) {
    return (
        <button
            data-testid="button"
            {...props}
            style={{
                width: '100%',
                maxWidth: '280px',
                height: '38px',
                backgroundColor: '#CCCCCC',
                color: '#000000'
            }}
        >
            {children}
        </button>
    )
}