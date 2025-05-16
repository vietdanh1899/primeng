import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

let _id = 0;

let finalVariables = '';
let finalCss = '';

@Injectable({ providedIn: 'root' })
export class UseStyle {
    document: Document = inject(DOCUMENT);

    use(css, options: any = {}) {
        const { name, nonce, id, scoped } = options;
        if (name.includes('variables')) {
            finalVariables += `

/* ${name} */
`;
            finalVariables += css;
        } else {
            finalCss += `

/* ${name} */
`;
            finalCss += css;
        }
    }
}

export const getCSS = () => ({ finalCss, finalVariables });
