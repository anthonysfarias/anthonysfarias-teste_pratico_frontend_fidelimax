interface Item {
    typeQuestion: number;
    answerValue?: number | string;
    mandatory: boolean;
    content: string;
    horizontal?: boolean;
    itens?: ItemOption[];
}

export interface ItemOption {
    value: number;
    description: string;
}

export interface Survey {
    itens: Item[];
    error: string;
    warning: string;
}