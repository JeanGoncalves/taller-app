export class Enterprise {

    constructor (
        public id: number,
        public name: string,
        public cnpj: string,
        public request?: EnterpriseRequest[]
    ) {}
};

export class EnterpriseRequest {

    constructor (
        public id: number,
        public products?: EnterpriseProducts[]
    ) {}
};

export class EnterpriseProducts {

    constructor (
        public id: number,
        public name: string,
        public quantity: number
    ) {}
};